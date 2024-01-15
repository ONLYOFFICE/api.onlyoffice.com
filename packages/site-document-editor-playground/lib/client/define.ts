import {DocumentEditorPlayground} from "./element.ts"
import {
  type GlobalDocumentEditorPlaygroundErrorHandler,
  DocumentEditorPlaygroundErrorEvent,
  type DocumentEditorPlaygroundErrorListener
} from "./events.ts"

declare global {
  interface Window {
    DocumentEditorPlayground: typeof DocumentEditorPlayground
    DocumentEditorPlaygroundErrorEvent: typeof DocumentEditorPlaygroundErrorEvent
  }

  interface HTMLElementTagNameMap {
    "document-editor-playground": DocumentEditorPlayground
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "document-editor-playground": HTMLAttributes<DocumentEditorPlayground>
      }
    }
  }

  interface GlobalEventHandlersEventMap {
    documenteditorplaygrounderror: DocumentEditorPlaygroundErrorListener
  }

  interface GlobalEventHandlers {
    ondocumenteditorplaygrounderror: GlobalDocumentEditorPlaygroundErrorHandler | null
  }
}

export function define(): void {
  if (window.customElements.get(DocumentEditorPlayground.tagName)) {
    return
  }
  window.DocumentEditorPlayground = DocumentEditorPlayground
  window.customElements.define(DocumentEditorPlayground.tagName, DocumentEditorPlayground)
  window.DocumentEditorPlaygroundErrorEvent = DocumentEditorPlaygroundErrorEvent
}
