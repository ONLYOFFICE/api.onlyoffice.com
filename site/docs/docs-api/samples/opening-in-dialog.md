---
sidebar_position: 1
hide_table_of_contents: true
description: Open the editor in a dialog that the user moves and resizes by its frame and closes with the editor's own button.
tags: ["Docs", "Integration"]
---

import { DialogEditor } from '@site/src/components/BrowserWindow';

# Opening the editor in a dialog

Open the editor in a dialog over your page, so that the user can edit a file without leaving the current context. The user moves the dialog by the top edge of its frame, resizes it by the other edges and corners, and closes it with the cross button in the editor.

:::info
The editor runs in an iframe from Document Server, so pointer events over the editor never reach your page. The thin frame around the editor belongs to your page, which is why it can move and resize the dialog.
:::

<DialogEditor/>

## How it works

1. The dialog is a `<dialog>` element with a placeholder for the editor and a handle on each edge and corner of the frame. The top edge is a button, so the user can also reach it from the keyboard:

   ``` html
   <dialog id="editorDialog">
     <div id="editorContainer"></div>
     <button class="handle" data-edge="top" type="button" aria-label="Move or resize the dialog"></button>
     <div class="handle" data-edge="right"></div>
     <div class="handle" data-edge="bottom"></div>
     <div class="handle" data-edge="left"></div>
     <div class="handle" data-edge="top-left"></div>
     <div class="handle" data-edge="top-right"></div>
     <div class="handle" data-edge="bottom-left"></div>
     <div class="handle" data-edge="bottom-right"></div>
   </dialog>
   ```

2. When the user opens the dialog, the editor is created inside it:

   - The [close](../usage-api/config/editor/customization/customization-standard-branding.md#close) parameter and the [onRequestClose](../usage-api/config/events.md#onrequestclose) event show the cross button in the editor. The button is displayed only when both are set. If the file has unsaved changes, the editor warns the user before it calls `onRequestClose`.
   - The [compactHeader](../usage-api/config/editor/customization/customization-standard-branding.md#compactheader) parameter moves the header buttons, including the cross button, to the toolbar row, so the editor takes less space.
   - The `width` and `height` of `100%` make the editor follow the size of the dialog.
   - The dialog gets its size and position before it opens. The editor takes its height from the dialog, so the dialog cannot take its height from the editor.

   ``` ts
   const dialog = document.getElementById("editorDialog");
   let docEditor;
   let editorReady = false;

   function openEditor(config) {
     const placeholder = document.createElement("div");
     placeholder.id = "placeholder";
     document.getElementById("editorContainer").replaceChildren(placeholder);

     docEditor = new DocsAPI.DocEditor("placeholder", {
       ...config,
       editorConfig: {
         ...config.editorConfig,
         customization: {
           ...config.editorConfig?.customization,
           close: { visible: true, text: "Close" },
           compactHeader: true,
         },
       },
       events: {
         ...config.events,
         onAppReady: () => {
           editorReady = true;
         },
         onRequestClose: () => dialog.close(),
       },
       width: "100%",
       height: "100%",
     });

     const width = Math.min(1100, window.innerWidth - 32);
     const height = Math.min(720, window.innerHeight - 32);
     Object.assign(dialog.style, {
       left: `${(window.innerWidth - width) / 2}px`,
       top: `${(window.innerHeight - height) / 2}px`,
       width: `${width}px`,
       height: `${height}px`,
     });
     dialog.showModal();
   }
   ```

3. The user drags a handle. The pointer is captured on the handle. The top edge changes the position of the dialog, and the other handles change its size in their own direction:

   ``` ts
   const directions = {
     "right": { x: 1, y: 0 },
     "bottom": { x: 0, y: 1 },
     "left": { x: -1, y: 0 },
     "top-left": { x: -1, y: -1 },
     "top-right": { x: 1, y: -1 },
     "bottom-left": { x: -1, y: 1 },
     "bottom-right": { x: 1, y: 1 },
   };
   let start = null;

   for (const handle of dialog.querySelectorAll(".handle")) {
     handle.addEventListener("pointerdown", (e) => {
       if (e.button !== 0) return;
       handle.setPointerCapture(e.pointerId);
       const { left, top, width, height } = dialog.getBoundingClientRect();
       start = { x: e.clientX, y: e.clientY, left, top, width, height, direction: directions[handle.dataset.edge] };
       dialog.classList.add("dragging");
     });

     handle.addEventListener("pointermove", (e) => {
       if (!start) return;
       const dx = e.clientX - start.x;
       const dy = e.clientY - start.y;
       let { left, top, width, height, direction } = start;

       if (!direction) {
         left += dx;
         top += dy;
       } else {
         if (direction.x) width = Math.max(480, start.width + direction.x * dx);
         if (direction.x < 0) left = start.left + start.width - width;
         if (direction.y) height = Math.max(320, start.height + direction.y * dy);
         if (direction.y < 0) top = start.top + start.height - height;
       }

       Object.assign(dialog.style, {
         left: `${left}px`,
         top: `${top}px`,
         width: `${width}px`,
         height: `${height}px`,
       });
     });

     const stopDragging = () => {
       start = null;
       dialog.classList.remove("dragging");
     };
     handle.addEventListener("pointerup", stopDragging);
     handle.addEventListener("pointercancel", stopDragging);
   }
   ```

   Move and resize the dialog in place, not by moving it to another element. When an iframe is moved in the DOM, the browser reloads it, and the editor opens the file again. Resizing the iframe does not reload it.

4. The padding of the dialog is the frame. The handles are positioned over it and reach a few pixels outside it, so that they are easier to hit than the thin frame. While a handle is dragged, the iframe ignores the pointer. Otherwise the iframe takes the pointer events whenever the cursor gets ahead of the dialog, and the dialog stops following it:

   ``` css
   #editorDialog {
     display: none;
     flex-direction: column;
     inset: auto;
     max-width: none;
     max-height: none;
     margin: 0;
     padding: 6px;
     overflow: visible;
   }

   #editorDialog[open] {
     display: flex;
   }

   .handle {
     position: absolute;
     padding: 0;
     touch-action: none;
     user-select: none;
     border: none;
     background: transparent;
   }

   .handle[data-edge="top"] {
     top: -4px;
     left: 12px;
     right: 12px;
     height: 10px;
     cursor: move;
   }

   .handle[data-edge="bottom-right"] {
     right: -4px;
     bottom: -4px;
     width: 16px;
     height: 16px;
     cursor: nwse-resize;
   }

   .dragging iframe {
     pointer-events: none;
   }
   ```

   The other edges and corners are positioned in the same way, with `ns-resize`, `ew-resize`, `nesw-resize` and `nwse-resize` cursors.

   The `display` of the dialog is set only while it is open. A `display` set on a closed `<dialog>` overrides the browser's `display: none` and shows the dialog on the page. `max-width` and `max-height` remove the browser's limits on the size of a modal dialog, so the user can resize it to the full window.

5. The Esc key closes a modal dialog without asking the editor, so the editor cannot warn the user about unsaved changes. Cancel the `cancel` event and call the [requestClose](../usage-api/methods.md#requestclose) method instead. The editor warns the user if the file has unsaved changes and then calls `onRequestClose`. Until the editor is ready, Esc closes the dialog directly. Esc reaches the dialog only while the focus is on your page, for example, on the top edge, not inside the editor.

   When the dialog is closed, the [destroyEditor](../usage-api/methods.md#destroyeditor) method removes the editor:

   ``` ts
   dialog.addEventListener("cancel", (e) => {
     if (!editorReady) return;
     e.preventDefault();
     docEditor.requestClose();
   });

   dialog.addEventListener("close", () => {
     docEditor.destroyEditor();
     editorReady = false;
   });
   ```

   If the editor fails to load, it has no cross button. Show a close button of your own in this case, for example, from the [onError](../usage-api/config/events.md#onerror) event, as the sample above does.

:::tip
Dragging works only with a pointer. Let the user also move and resize the dialog from the keyboard — for example, with the arrow keys and Shift with the arrow keys while the top edge has focus — as the sample above does.
:::
