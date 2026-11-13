import React, { useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import { createJWT, loadDocsApi } from "../OnlyofficeEditor";
import styles from "./styles.module.css";

const SAMPLES_URL = "https://static.onlyoffice.com/assets/docs/samples/";
const PLACEHOLDER_ID = "dialog-placeholder";
const HINT_ID = "dialog-editor-hint";
const DEFAULT_WIDTH = 1100;
const DEFAULT_HEIGHT = 720;
const MIN_WIDTH = 480;
const MIN_HEIGHT = 320;
const VIEWPORT_MARGIN = 16;
const KEYBOARD_STEP = 20;
// How much of the dialog stays on screen, so it can always be dragged back.
const VISIBLE_EDGE = 80;

const editors = [
  { label: "Document", fileType: "docx", documentType: "word" },
  { label: "Spreadsheet", fileType: "xlsx", documentType: "cell" },
  { label: "Presentation", fileType: "pptx", documentType: "slide" },
  { label: "PDF", fileType: "pdf", documentType: "pdf" },
];

// The top edge moves the dialog; the other edges and the corners resize it in the given direction.
const handles: { name: string; direction: Direction | null }[] = [
  { name: "top", direction: null },
  { name: "right", direction: { x: 1, y: 0 } },
  { name: "bottom", direction: { x: 0, y: 1 } },
  { name: "left", direction: { x: -1, y: 0 } },
  { name: "topLeft", direction: { x: -1, y: -1 } },
  { name: "topRight", direction: { x: 1, y: -1 } },
  { name: "bottomLeft", direction: { x: -1, y: 1 } },
  { name: "bottomRight", direction: { x: 1, y: 1 } },
];

type Editor = (typeof editors)[number];
type Direction = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const clampPosition = (rect: Rect): Rect => ({
  ...rect,
  left: clamp(rect.left, VISIBLE_EDGE - rect.width, window.innerWidth - VISIBLE_EDGE),
  top: clamp(rect.top, 0, window.innerHeight - VISIBLE_EDGE),
});

const resize = (start: Rect, direction: Direction, dx: number, dy: number): Rect => {
  const minWidth = Math.min(MIN_WIDTH, window.innerWidth);
  const minHeight = Math.min(MIN_HEIGHT, window.innerHeight);
  const rect = { ...start };
  if (direction.x) {
    rect.width = Math.max(minWidth, start.width + direction.x * dx);
    if (direction.x < 0) rect.left = start.left + start.width - rect.width;
  }
  if (direction.y) {
    rect.height = Math.max(minHeight, start.height + direction.y * dy);
    if (direction.y < 0) rect.top = start.top + start.height - rect.height;
  }
  return rect;
};

const createConfig = (
  editor: Editor,
  theme: string,
  events: { onAppReady: () => void; onError: () => void; onRequestClose: () => void },
): Record<string, unknown> => ({
  document: {
    fileType: editor.fileType,
    key: `dialog-${editor.fileType}-${Date.now()}`,
    title: `Example ${editor.label}.${editor.fileType}`,
    url: `${SAMPLES_URL}demo.${editor.fileType}`,
  },
  documentType: editor.documentType,
  editorConfig: {
    callbackUrl: "",
    customization: {
      anonymous: { request: false },
      close: { visible: true, text: "Close" },
      compactHeader: true,
      features: { featuresTips: false },
      uiTheme: theme === "dark" ? "default-dark" : "default-light",
    },
  },
  // The cross button is shown only when onRequestClose is set.
  events,
  width: "100%",
  height: "100%",
});

const DialogEditor: React.FC = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const documentServer = customFields.documentServer as string;
  const documentServerSecret = customFields.documentServerSecret as string;

  const dialogRef = useRef<HTMLDialogElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rect = useRef<Rect>({ left: 0, top: 0, width: 0, height: 0 });
  const drag = useRef<{ startX: number; startY: number; origin: Rect; direction: Direction | null } | null>(null);
  const docEditor = useRef<any>(null);
  const ready = useRef(false);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState(false);

  // The dialog is moved and resized in place. Moving the iframe to another parent would reload the editor.
  const applyRect = (next: Rect) => {
    rect.current = next;
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.style.left = `${next.left}px`;
    dialog.style.top = `${next.top}px`;
    dialog.style.width = `${next.width}px`;
    dialog.style.height = `${next.height}px`;
  };

  const closeDialog = () => dialogRef.current?.close();

  useEffect(() => {
    if (!editor) return;

    const width = Math.min(DEFAULT_WIDTH, window.innerWidth - 2 * VIEWPORT_MARGIN);
    const height = Math.min(DEFAULT_HEIGHT, window.innerHeight - 2 * VIEWPORT_MARGIN);
    applyRect({ left: (window.innerWidth - width) / 2, top: (window.innerHeight - height) / 2, width, height });
    dialogRef.current?.showModal();

    const fitViewport = () => {
      const { width, height } = rect.current;
      applyRect(
        clampPosition({
          ...rect.current,
          width: Math.min(width, window.innerWidth),
          height: Math.min(height, window.innerHeight),
        }),
      );
    };
    window.addEventListener("resize", fitViewport);
    return () => window.removeEventListener("resize", fitViewport);
  }, [editor]);

  // Recreated when the site theme changes, so the editor follows it. The dialog keeps its place and size.
  useEffect(() => {
    if (!editor) return;
    let cancelled = false;
    ready.current = false;

    (async () => {
      try {
        await loadDocsApi(documentServer);
        if (cancelled || !containerRef.current) return;

        // DocsAPI replaces its placeholder with an iframe, so the placeholder is created outside React.
        const placeholder = document.createElement("div");
        placeholder.id = PLACEHOLDER_ID;
        containerRef.current.replaceChildren(placeholder);

        const config = createConfig(editor, colorMode, {
          onAppReady: () => (ready.current = true),
          onError: () => setError(true),
          onRequestClose: closeDialog,
        });
        const token = await createJWT(config, documentServerSecret);
        if (cancelled) return;
        if (token) config.token = token;

        docEditor.current = new window.DocsAPI.DocEditor(PLACEHOLDER_ID, config);
      } catch (e) {
        console.error(e);
        if (!cancelled) setError(true);
      }
    })();

    return () => {
      cancelled = true;
      docEditor.current?.destroyEditor();
      docEditor.current = null;
      containerRef.current?.replaceChildren();
    };
  }, [editor, colorMode]);

  // Esc goes through the editor, so it can warn about unsaved changes. Until the editor is ready, Esc closes the dialog.
  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    if (!docEditor.current || !ready.current) return;
    e.preventDefault();
    docEditor.current.requestClose();
  };

  const handleClose = () => {
    setEditor(null);
    setError(false);
    setDragging(false);
    drag.current = null;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>, direction: Direction | null) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, startY: e.clientY, origin: { ...rect.current }, direction };
    // The iframe would swallow pointer events whenever the cursor gets ahead of the dialog.
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!drag.current) return;
    const { startX, startY, origin, direction } = drag.current;
    // A captured pointer keeps reporting positions outside the window; the dialog stops at its edge.
    const dx = clamp(e.clientX, 0, window.innerWidth) - startX;
    const dy = clamp(e.clientY, 0, window.innerHeight) - startY;
    applyRect(
      direction
        ? resize(origin, direction, dx, dy)
        : clampPosition({ ...origin, left: origin.left + dx, top: origin.top + dy }),
    );
  };

  const handlePointerUp = () => {
    drag.current = null;
    setDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const steps: Record<string, Direction> = {
      ArrowLeft: { x: -KEYBOARD_STEP, y: 0 },
      ArrowRight: { x: KEYBOARD_STEP, y: 0 },
      ArrowUp: { x: 0, y: -KEYBOARD_STEP },
      ArrowDown: { x: 0, y: KEYBOARD_STEP },
    };
    const step = steps[e.key];
    if (!step) return;
    e.preventDefault();
    const current = rect.current;
    applyRect(
      e.shiftKey
        ? resize(current, { x: 1, y: 1 }, step.x, step.y)
        : clampPosition({ ...current, left: current.left + step.x, top: current.top + step.y }),
    );
  };

  const title = editor ? `Example ${editor.label}.${editor.fileType}` : "";

  return (
    <>
      <div className={styles.launcher}>
        <span className={styles.launcherLabel}>Open in a dialog</span>
        {editors.map((item) => (
          <button key={item.fileType} type="button" className={styles.btn} onClick={() => setEditor(item)}>
            {item.label}
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className={`${styles.dialog} ${dragging ? styles.dragging : ""}`}
        aria-label={title}
        onCancel={handleCancel}
        onClose={handleClose}
      >
        <div ref={containerRef} className={styles.editor} />
        {handles.map(({ name, direction }) => {
          const pointerProps = {
            className: `${styles.handle} ${styles[name]}`,
            onPointerDown: (e: React.PointerEvent<HTMLElement>) => handlePointerDown(e, direction),
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp,
          };
          return direction ? (
            <div key={name} aria-hidden="true" {...pointerProps} />
          ) : (
            <button
              key={name}
              type="button"
              aria-label="Move or resize the dialog"
              aria-describedby={HINT_ID}
              title="Drag to move"
              onKeyDown={handleKeyDown}
              {...pointerProps}
            />
          );
        })}
        <span id={HINT_ID} className={styles.visuallyHidden}>
          Use the arrow keys to move the dialog, and Shift with the arrow keys to resize it.
        </span>
        {error && (
          <div className={styles.error} role="status">
            The editor could not be loaded
            <button type="button" className={styles.iconBtn} aria-label="Close" title="Close" onClick={closeDialog}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            </button>
          </div>
        )}
      </dialog>
    </>
  );
};

export default DialogEditor;
