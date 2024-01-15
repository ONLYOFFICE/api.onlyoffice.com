import {type DocumentEditorPlayground} from "./element.ts"

export class DocumentEditorPlaygroundErrorEvent extends ErrorEvent {
  static get type(): string {
    return "documenteditorplaygrounderror"
  }

  constructor(eventInitDict?: ErrorEventInit) {
    super(DocumentEditorPlaygroundErrorEvent.type, eventInitDict)
  }
}

export interface DocumentEditorPlaygroundErrorListener extends EventListener {
  (this: DocumentEditorPlayground, event: DocumentEditorPlaygroundErrorEvent): void
}

export interface GlobalDocumentEditorPlaygroundErrorHandler {
  (this: GlobalEventHandlers, ev: DocumentEditorPlaygroundErrorEvent): void
}
