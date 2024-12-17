/* eslint @stylistic/max-len: ["error", {code: 140}] */

import {
  DocumentEditor,
} from "./element.ts"
import {
  DocumentEditorAppReadyEvent,
  DocumentEditorCollaborativeChangesEvent,
  DocumentEditorDocumentReadyEvent,
  DocumentEditorDocumentStateChangeEvent,
  DocumentEditorDownloadAsEvent,
  DocumentEditorErrorEvent,
  DocumentEditorInfoEvent,
  DocumentEditorMakeActionLinkEvent,
  DocumentEditorMetaChangeEvent,
  DocumentEditorOutdatedVersionEvent,
  DocumentEditorPluginsReadyEvent,
  DocumentEditorReadyEvent,
  DocumentEditorRequestCloseEvent,
  DocumentEditorRequestCompareFileEvent,
  DocumentEditorRequestCreateNewEvent,
  DocumentEditorRequestEditRightsEvent,
  DocumentEditorRequestHistoryCloseEvent,
  DocumentEditorRequestHistoryDataEvent,
  DocumentEditorRequestHistoryEvent,
  DocumentEditorRequestInsertImageEvent,
  DocumentEditorRequestMailMergeRecipientsEvent,
  DocumentEditorRequestOpenEvent,
  DocumentEditorRequestReferenceDataEvent,
  DocumentEditorRequestReferenceSourceEvent,
  DocumentEditorRequestRenameEvent,
  DocumentEditorRequestRestoreEvent,
  DocumentEditorRequestSaveAsEvent,
  DocumentEditorRequestSelectDocumentEvent,
  DocumentEditorRequestSelectSpreadsheetEvent,
  DocumentEditorRequestSendNotifyEvent,
  DocumentEditorRequestSharingSettingsEvent,
  DocumentEditorRequestUsersEvent,
  DocumentEditorWarningEvent,
  type GlobalDocumentEditorAppReadyEventHandler,
  type GlobalDocumentEditorCollaborativeChangesEventHandler,
  type GlobalDocumentEditorDocumentReadyEventHandler,
  type GlobalDocumentEditorDocumentStateChangeEventHandler,
  type GlobalDocumentEditorDownloadAsEventHandler,
  type GlobalDocumentEditorErrorEventHandler,
  type GlobalDocumentEditorInfoEventHandler,
  type GlobalDocumentEditorMakeActionLinkEventHandler,
  type GlobalDocumentEditorMetaChangeEventHandler,
  type GlobalDocumentEditorOutdatedVersionEventHandler,
  type GlobalDocumentEditorPluginsReadyEventHandler,
  type GlobalDocumentEditorReadyEventHandler,
  type GlobalDocumentEditorRequestCloseEventHandler,
  type GlobalDocumentEditorRequestCompareFileEventHandler,
  type GlobalDocumentEditorRequestCreateNewEventHandler,
  type GlobalDocumentEditorRequestEditRightsEventHandler,
  type GlobalDocumentEditorRequestHistoryCloseEventHandler,
  type GlobalDocumentEditorRequestHistoryDataEventHandler,
  type GlobalDocumentEditorRequestHistoryEventHandler,
  type GlobalDocumentEditorRequestInsertImageEventHandler,
  type GlobalDocumentEditorRequestMailMergeRecipientsEventHandler,
  type GlobalDocumentEditorRequestOpenEventHandler,
  type GlobalDocumentEditorRequestReferenceDataEventHandler,
  type GlobalDocumentEditorRequestReferenceSourceEventHandler,
  type GlobalDocumentEditorRequestRenameEventHandler,
  type GlobalDocumentEditorRequestRestoreEventHandler,
  type GlobalDocumentEditorRequestSaveAsEventHandler,
  type GlobalDocumentEditorRequestSelectDocumentEventHandler,
  type GlobalDocumentEditorRequestSelectSpreadsheetEventHandler,
  type GlobalDocumentEditorRequestSendNotifyEventHandler,
  type GlobalDocumentEditorRequestSharingSettingsEventHandler,
  type GlobalDocumentEditorRequestUsersEventHandler,
  type GlobalDocumentEditorWarningEventHandler,
} from "./events.ts"
import {
  type DocumentEditorAttributeMap,
} from "./types.ts"

declare global {
  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        [DocumentEditor.tagName]: HTMLAttributes<DocumentEditor> & Partial<DocumentEditorAttributeMap>
      }
    }
  }

  interface Window {
    DocumentEditor: typeof DocumentEditor
    DocumentEditorAppReadyEvent: typeof DocumentEditorAppReadyEvent
    DocumentEditorCollaborativeChangesEvent: typeof DocumentEditorCollaborativeChangesEvent
    DocumentEditorDocumentReadyEvent: typeof DocumentEditorDocumentReadyEvent
    DocumentEditorDocumentStateChangeEvent: typeof DocumentEditorDocumentStateChangeEvent
    DocumentEditorDownloadAsEvent: typeof DocumentEditorDownloadAsEvent
    DocumentEditorErrorEvent: typeof DocumentEditorErrorEvent
    DocumentEditorInfoEvent: typeof DocumentEditorInfoEvent
    DocumentEditorMakeActionLinkEvent: typeof DocumentEditorMakeActionLinkEvent
    DocumentEditorMetaChangeEvent: typeof DocumentEditorMetaChangeEvent
    DocumentEditorOutdatedVersionEvent: typeof DocumentEditorOutdatedVersionEvent
    DocumentEditorPluginsReadyEvent: typeof DocumentEditorPluginsReadyEvent
    DocumentEditorReadyEvent: typeof DocumentEditorReadyEvent
    DocumentEditorRequestCloseEvent: typeof DocumentEditorRequestCloseEvent
    DocumentEditorRequestCompareFileEvent: typeof DocumentEditorRequestCompareFileEvent
    DocumentEditorRequestCreateNewEvent: typeof DocumentEditorRequestCreateNewEvent
    DocumentEditorRequestEditRightsEvent: typeof DocumentEditorRequestEditRightsEvent
    DocumentEditorRequestHistoryCloseEvent: typeof DocumentEditorRequestHistoryCloseEvent
    DocumentEditorRequestHistoryDataEvent: typeof DocumentEditorRequestHistoryDataEvent
    DocumentEditorRequestHistoryEvent: typeof DocumentEditorRequestHistoryEvent
    DocumentEditorRequestInsertImageEvent: typeof DocumentEditorRequestInsertImageEvent
    DocumentEditorRequestMailMergeRecipientsEvent: typeof DocumentEditorRequestMailMergeRecipientsEvent
    DocumentEditorRequestOpenEvent: typeof DocumentEditorRequestOpenEvent
    DocumentEditorRequestReferenceDataEvent: typeof DocumentEditorRequestReferenceDataEvent
    DocumentEditorRequestReferenceSourceEvent: typeof DocumentEditorRequestReferenceSourceEvent
    DocumentEditorRequestRenameEvent: typeof DocumentEditorRequestRenameEvent
    DocumentEditorRequestRestoreEvent: typeof DocumentEditorRequestRestoreEvent
    DocumentEditorRequestSaveAsEvent: typeof DocumentEditorRequestSaveAsEvent
    DocumentEditorRequestSelectDocumentEvent: typeof DocumentEditorRequestSelectDocumentEvent
    DocumentEditorRequestSelectSpreadsheetEvent: typeof DocumentEditorRequestSelectSpreadsheetEvent
    DocumentEditorRequestSendNotifyEvent: typeof DocumentEditorRequestSendNotifyEvent
    DocumentEditorRequestSharingSettingsEvent: typeof DocumentEditorRequestSharingSettingsEvent
    DocumentEditorRequestUsersEvent: typeof DocumentEditorRequestUsersEvent
    DocumentEditorWarningEvent: typeof DocumentEditorWarningEvent
  }

  interface HTMLElementTagNameMap {
    [DocumentEditor.tagName]: DocumentEditor
  }

  interface GlobalEventHandlersEventMap {
    [DocumentEditorAppReadyEvent.type]: DocumentEditorAppReadyEvent
    [DocumentEditorCollaborativeChangesEvent.type]: DocumentEditorCollaborativeChangesEvent
    [DocumentEditorDocumentReadyEvent.type]: DocumentEditorDocumentReadyEvent
    [DocumentEditorDocumentStateChangeEvent.type]: DocumentEditorDocumentStateChangeEvent
    [DocumentEditorDownloadAsEvent.type]: DocumentEditorDownloadAsEvent
    [DocumentEditorErrorEvent.type]: DocumentEditorErrorEvent
    [DocumentEditorInfoEvent.type]: DocumentEditorInfoEvent
    [DocumentEditorMakeActionLinkEvent.type]: DocumentEditorMakeActionLinkEvent
    [DocumentEditorMetaChangeEvent.type]: DocumentEditorMetaChangeEvent
    [DocumentEditorOutdatedVersionEvent.type]: DocumentEditorOutdatedVersionEvent
    [DocumentEditorPluginsReadyEvent.type]: DocumentEditorPluginsReadyEvent
    [DocumentEditorReadyEvent.type]: DocumentEditorReadyEvent
    [DocumentEditorRequestCloseEvent.type]: DocumentEditorRequestCloseEvent
    [DocumentEditorRequestCompareFileEvent.type]: DocumentEditorRequestCompareFileEvent
    [DocumentEditorRequestCreateNewEvent.type]: DocumentEditorRequestCreateNewEvent
    [DocumentEditorRequestEditRightsEvent.type]: DocumentEditorRequestEditRightsEvent
    [DocumentEditorRequestHistoryCloseEvent.type]: DocumentEditorRequestHistoryCloseEvent
    [DocumentEditorRequestHistoryDataEvent.type]: DocumentEditorRequestHistoryDataEvent
    [DocumentEditorRequestHistoryEvent.type]: DocumentEditorRequestHistoryEvent
    [DocumentEditorRequestInsertImageEvent.type]: DocumentEditorRequestInsertImageEvent
    [DocumentEditorRequestMailMergeRecipientsEvent.type]: DocumentEditorRequestMailMergeRecipientsEvent
    [DocumentEditorRequestOpenEvent.type]: DocumentEditorRequestOpenEvent
    [DocumentEditorRequestReferenceDataEvent.type]: DocumentEditorRequestReferenceDataEvent
    [DocumentEditorRequestReferenceSourceEvent.type]: DocumentEditorRequestReferenceSourceEvent
    [DocumentEditorRequestRenameEvent.type]: DocumentEditorRequestRenameEvent
    [DocumentEditorRequestRestoreEvent.type]: DocumentEditorRequestRestoreEvent
    [DocumentEditorRequestSaveAsEvent.type]: DocumentEditorRequestSaveAsEvent
    [DocumentEditorRequestSelectDocumentEvent.type]: DocumentEditorRequestSelectDocumentEvent
    [DocumentEditorRequestSelectSpreadsheetEvent.type]: DocumentEditorRequestSelectSpreadsheetEvent
    [DocumentEditorRequestSendNotifyEvent.type]: DocumentEditorRequestSendNotifyEvent
    [DocumentEditorRequestSharingSettingsEvent.type]: DocumentEditorRequestSharingSettingsEvent
    [DocumentEditorRequestUsersEvent.type]: DocumentEditorRequestUsersEvent
    [DocumentEditorWarningEvent.type]: DocumentEditorWarningEvent
  }

  interface GlobalEventHandlers {
    [DocumentEditorAppReadyEvent.handlerName]: GlobalDocumentEditorAppReadyEventHandler | null
    [DocumentEditorCollaborativeChangesEvent.handlerName]: GlobalDocumentEditorCollaborativeChangesEventHandler | null
    [DocumentEditorDocumentReadyEvent.handlerName]: GlobalDocumentEditorDocumentReadyEventHandler | null
    [DocumentEditorDocumentStateChangeEvent.handlerName]: GlobalDocumentEditorDocumentStateChangeEventHandler | null
    [DocumentEditorDownloadAsEvent.handlerName]: GlobalDocumentEditorDownloadAsEventHandler | null
    [DocumentEditorErrorEvent.handlerName]: GlobalDocumentEditorErrorEventHandler | null
    [DocumentEditorInfoEvent.handlerName]: GlobalDocumentEditorInfoEventHandler | null
    [DocumentEditorMakeActionLinkEvent.handlerName]: GlobalDocumentEditorMakeActionLinkEventHandler | null
    [DocumentEditorMetaChangeEvent.handlerName]: GlobalDocumentEditorMetaChangeEventHandler | null
    [DocumentEditorOutdatedVersionEvent.handlerName]: GlobalDocumentEditorOutdatedVersionEventHandler | null
    [DocumentEditorPluginsReadyEvent.handlerName]: GlobalDocumentEditorPluginsReadyEventHandler | null
    [DocumentEditorReadyEvent.handlerName]: GlobalDocumentEditorReadyEventHandler | null
    [DocumentEditorRequestCloseEvent.handlerName]: GlobalDocumentEditorRequestCloseEventHandler | null
    [DocumentEditorRequestCompareFileEvent.handlerName]: GlobalDocumentEditorRequestCompareFileEventHandler | null
    [DocumentEditorRequestCreateNewEvent.handlerName]: GlobalDocumentEditorRequestCreateNewEventHandler | null
    [DocumentEditorRequestEditRightsEvent.handlerName]: GlobalDocumentEditorRequestEditRightsEventHandler | null
    [DocumentEditorRequestHistoryCloseEvent.handlerName]: GlobalDocumentEditorRequestHistoryCloseEventHandler | null
    [DocumentEditorRequestHistoryDataEvent.handlerName]: GlobalDocumentEditorRequestHistoryDataEventHandler | null
    [DocumentEditorRequestHistoryEvent.handlerName]: GlobalDocumentEditorRequestHistoryEventHandler | null
    [DocumentEditorRequestInsertImageEvent.handlerName]: GlobalDocumentEditorRequestInsertImageEventHandler | null
    [DocumentEditorRequestMailMergeRecipientsEvent.handlerName]: GlobalDocumentEditorRequestMailMergeRecipientsEventHandler | null
    [DocumentEditorRequestOpenEvent.handlerName]: GlobalDocumentEditorRequestOpenEventHandler | null
    [DocumentEditorRequestReferenceDataEvent.handlerName]: GlobalDocumentEditorRequestReferenceDataEventHandler | null
    [DocumentEditorRequestReferenceSourceEvent.handlerName]: GlobalDocumentEditorRequestReferenceSourceEventHandler | null
    [DocumentEditorRequestRenameEvent.handlerName]: GlobalDocumentEditorRequestRenameEventHandler | null
    [DocumentEditorRequestRestoreEvent.handlerName]: GlobalDocumentEditorRequestRestoreEventHandler | null
    [DocumentEditorRequestSaveAsEvent.handlerName]: GlobalDocumentEditorRequestSaveAsEventHandler | null
    [DocumentEditorRequestSelectDocumentEvent.handlerName]: GlobalDocumentEditorRequestSelectDocumentEventHandler | null
    [DocumentEditorRequestSelectSpreadsheetEvent.handlerName]: GlobalDocumentEditorRequestSelectSpreadsheetEventHandler | null
    [DocumentEditorRequestSendNotifyEvent.handlerName]: GlobalDocumentEditorRequestSendNotifyEventHandler | null
    [DocumentEditorRequestSharingSettingsEvent.handlerName]: GlobalDocumentEditorRequestSharingSettingsEventHandler | null
    [DocumentEditorRequestUsersEvent.handlerName]: GlobalDocumentEditorRequestUsersEventHandler | null
    [DocumentEditorWarningEvent.handlerName]: GlobalDocumentEditorWarningEventHandler | null
  }
}

export function define(): void {
  if (window.customElements.get(DocumentEditor.tagName)) {
    return
  }

  window.DocumentEditor = DocumentEditor
  window.customElements.define(DocumentEditor.tagName, DocumentEditor)

  window.DocumentEditorAppReadyEvent = DocumentEditorAppReadyEvent
  window.DocumentEditorCollaborativeChangesEvent = DocumentEditorCollaborativeChangesEvent
  window.DocumentEditorDocumentReadyEvent = DocumentEditorDocumentReadyEvent
  window.DocumentEditorDocumentStateChangeEvent = DocumentEditorDocumentStateChangeEvent
  window.DocumentEditorDownloadAsEvent = DocumentEditorDownloadAsEvent
  window.DocumentEditorErrorEvent = DocumentEditorErrorEvent
  window.DocumentEditorInfoEvent = DocumentEditorInfoEvent
  window.DocumentEditorMakeActionLinkEvent = DocumentEditorMakeActionLinkEvent
  window.DocumentEditorMetaChangeEvent = DocumentEditorMetaChangeEvent
  window.DocumentEditorOutdatedVersionEvent = DocumentEditorOutdatedVersionEvent
  window.DocumentEditorPluginsReadyEvent = DocumentEditorPluginsReadyEvent
  window.DocumentEditorReadyEvent = DocumentEditorReadyEvent
  window.DocumentEditorRequestCloseEvent = DocumentEditorRequestCloseEvent
  window.DocumentEditorRequestCompareFileEvent = DocumentEditorRequestCompareFileEvent
  window.DocumentEditorRequestCreateNewEvent = DocumentEditorRequestCreateNewEvent
  window.DocumentEditorRequestEditRightsEvent = DocumentEditorRequestEditRightsEvent
  window.DocumentEditorRequestHistoryCloseEvent = DocumentEditorRequestHistoryCloseEvent
  window.DocumentEditorRequestHistoryDataEvent = DocumentEditorRequestHistoryDataEvent
  window.DocumentEditorRequestHistoryEvent = DocumentEditorRequestHistoryEvent
  window.DocumentEditorRequestInsertImageEvent = DocumentEditorRequestInsertImageEvent
  window.DocumentEditorRequestMailMergeRecipientsEvent = DocumentEditorRequestMailMergeRecipientsEvent
  window.DocumentEditorRequestOpenEvent = DocumentEditorRequestOpenEvent
  window.DocumentEditorRequestReferenceDataEvent = DocumentEditorRequestReferenceDataEvent
  window.DocumentEditorRequestReferenceSourceEvent = DocumentEditorRequestReferenceSourceEvent
  window.DocumentEditorRequestRenameEvent = DocumentEditorRequestRenameEvent
  window.DocumentEditorRequestRestoreEvent = DocumentEditorRequestRestoreEvent
  window.DocumentEditorRequestSaveAsEvent = DocumentEditorRequestSaveAsEvent
  window.DocumentEditorRequestSelectDocumentEvent = DocumentEditorRequestSelectDocumentEvent
  window.DocumentEditorRequestSelectSpreadsheetEvent = DocumentEditorRequestSelectSpreadsheetEvent
  window.DocumentEditorRequestSendNotifyEvent = DocumentEditorRequestSendNotifyEvent
  window.DocumentEditorRequestSharingSettingsEvent = DocumentEditorRequestSharingSettingsEvent
  window.DocumentEditorRequestUsersEvent = DocumentEditorRequestUsersEvent
  window.DocumentEditorWarningEvent = DocumentEditorWarningEvent
}
