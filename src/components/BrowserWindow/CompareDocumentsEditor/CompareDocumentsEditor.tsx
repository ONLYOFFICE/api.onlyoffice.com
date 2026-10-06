import React, { useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import { createJWT } from "../OnlyofficeEditor";
import styles from "./styles.module.css";

const SAMPLES_URL = "https://static.onlyoffice.com/assets/docs/samples/";
const PLACEHOLDER_ID = "compare-placeholder";

interface CompareDocumentsEditorProps {
  originalUrl?: string;
  revisedUrl?: string;
  height?: string;
}

type CompareStatus = "loading" | "comparing" | "error";

const fileName = (url: string): string => decodeURIComponent(url.split("/").pop() || url);

// Shares the api.js script with OnlyofficeEditor through the data-script-api-state attribute.
const loadDocsApi = (documentServer: string): Promise<void> => {
  if (window.DocsAPI) return Promise.resolve();

  const apiUrl = new URL("/web-apps/apps/api/documents/api.js", documentServer).toString();

  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${apiUrl}"]`);
    if (!script) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = apiUrl;
      document.documentElement.setAttribute("data-script-api-state", "1");
      document.body.appendChild(script);
    }
    script.addEventListener("load", () => {
      document.documentElement.setAttribute("data-script-api-state", "2");
      resolve();
    });
    script.addEventListener("error", () => reject(new Error("Failed to load OnlyOffice API script.")));
  });
};

const createViewerConfig = (url: string, theme: string): Record<string, unknown> => ({
  document: {
    fileType: "docx",
    key: `compare-${fileName(url)}-${Date.now()}`,
    title: fileName(url),
    url,
  },
  documentType: "word",
  editorConfig: {
    mode: "view",
    callbackUrl: "",
    customization: {
      anonymous: { request: false },
      features: { featuresTips: false },
      uiTheme: theme === "dark" ? "default-dark" : "default-light",
    },
  },
  width: "100%",
  height: "100%",
});

const CompareDocumentsEditor: React.FC<CompareDocumentsEditorProps> = ({
  originalUrl = `${SAMPLES_URL}original.docx`,
  revisedUrl = `${SAMPLES_URL}revised.docx`,
  height = "700px",
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const documentServer = customFields.documentServer as string;
  const documentServerSecret = customFields.documentServerSecret as string;

  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<CompareStatus>("loading");

  useEffect(() => {
    let cancelled = false;
    let editor: any = null;

    (async () => {
      try {
        await loadDocsApi(documentServer);
        if (cancelled || !containerRef.current) return;

        // DocsAPI replaces its placeholder with an iframe, so the placeholder is created outside React.
        const placeholder = document.createElement("div");
        placeholder.id = PLACEHOLDER_ID;
        containerRef.current.replaceChildren(placeholder);

        const config = createViewerConfig(originalUrl, colorMode);
        const token = await createJWT(config, documentServerSecret);
        if (cancelled) return;
        if (token) config.token = token;
        config.events = {
          onDocumentReady: async () => {
            const requested: Record<string, unknown> = { c: "compare", fileType: "docx", url: revisedUrl };
            const requestedToken = await createJWT(requested, documentServerSecret);
            if (cancelled) return;
            if (requestedToken) requested.token = requestedToken;
            editor.setRequestedDocument(requested);
            setStatus("comparing");
          },
          onError: () => setStatus("error"),
        };

        editor = new window.DocsAPI.DocEditor(PLACEHOLDER_ID, config);
      } catch (error) {
        console.error(error);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      editor?.destroyEditor();
      containerRef.current?.replaceChildren();
    };
  }, []);

  const statusText: Record<CompareStatus, string> = {
    loading: "Loading…",
    comparing: "Differences shown as tracked changes",
    error: "The documents could not be compared",
  };

  return (
    <section className={styles.pane} aria-label="Document comparison">
      <header className={styles.header}>
        <span className={styles.file}>{fileName(originalUrl)}</span>
        <span className={styles.label} aria-label="compared with">
          vs
        </span>
        <span className={styles.file}>{fileName(revisedUrl)}</span>
        <span
          className={`${styles.status} ${status === "error" ? styles.statusError : ""}`}
          role="status"
          aria-live="polite"
        >
          {statusText[status]}
        </span>
      </header>
      <div ref={containerRef} className={styles.editor} style={{ height }} />
    </section>
  );
};

export default CompareDocumentsEditor;
