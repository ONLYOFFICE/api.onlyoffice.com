---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/tools/docs/sections.mjs
---

# Type Aliases

Configuration, event, filter and data shapes exchanged with the embedded frame. Most integrations only need `TFrameConfig` and `TFrameEvents`; the remaining types describe what the instance methods accept and return.

## Overview

The following types are available:

| Type | Description |
| --- | --- |
| [`TAuthError`](TAuthError.md) | Payload of [TFrameEvents.onAuthError](TFrameEvents.md#onAuthError). |
| [`TAuthErrorCode`](TAuthErrorCode.md) | Failure categories reported through [TFrameEvents.onAuthError](TFrameEvents.md#onAuthError) in OAuth mode. |
| [`TBannerDisplaying`](TBannerDisplaying.md) | String literal union of all [HeaderBannerDisplaying](../enumerations/HeaderBannerDisplaying.md) values. |
| [`TCreatedBy`](TCreatedBy.md) | User reference in file/folder/room metadata. |
| [`TCreateRoomOptions`](TCreateRoomOptions.md) | Optional settings for [SDKInstance.createRoom](../classes/SDKInstance.md#createroom). |
| [`TCustomActionEvent`](TCustomActionEvent.md) | Payload of [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction). |
| [`TCustomActionsConfig`](TCustomActionsConfig.md) | Custom actions of a frame, set with [TFrameConfig.customActions](TFrameConfig.md#customActions) or [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions). |
| [`TCustomActionSection`](TCustomActionSection.md) | A section a custom action can be limited to: a [TManagerSection](TManagerSection.md), a [TPersonalSection](TPersonalSection.md) or a [TFormsSection](TFormsSection.md), matched against the mode the frame runs in. |
| [`TCustomContextMenuAction`](TCustomContextMenuAction.md) | A custom context menu item. |
| [`TCustomContextMenuActions`](TCustomContextMenuActions.md) | Custom context menu actions grouped by the entity type they apply to. |
| [`TCustomCreateAction`](TCustomCreateAction.md) | A custom item of the create ("+") menu. |
| [`TEditorAction`](TEditorAction.md) | Editor action the manager requests when it opens a file: `"view"` read-only, `"fill"` form filling, `"edit"` editing. |
| [`TEditorAnonymous`](TEditorAnonymous.md) | Anonymous user settings for the editor, passed via [TEditorCustomization.anonymous](TEditorCustomization.md#anonymous). |
| [`TEditorCustomization`](TEditorCustomization.md) | Editor customization options passed via [TFrameConfig.editorCustomization](TFrameConfig.md#editorCustomization). |
| [`TEditorOpenPayload`](TEditorOpenPayload.md) | Payload of [TFrameEvents.onEditorOpen](TFrameEvents.md#onEditorOpen): the file the manager is about to open plus the requested action. |
| [`TEditorType`](TEditorType.md) | String literal union of all [EditorType](../enumerations/EditorType.md) values. |
| [`TEntityBase`](TEntityBase.md) | Common fields shared by file, folder, and room metadata. |
| [`TFileInfo`](TFileInfo.md) | File information returned by SDK methods. |
| [`TFilesResponse`](TFilesResponse.md) | Response wrapper for file/folder listing methods. |
| [`TFilterSortBy`](TFilterSortBy.md) | String literal union of all [FilterSortBy](../enumerations/FilterSortBy.md) values. |
| [`TFilterSortOrder`](TFilterSortOrder.md) | String literal union of all [FilterSortOrder](../enumerations/FilterSortOrder.md) values. |
| [`TFolderInfo`](TFolderInfo.md) | Folder information returned by SDK methods. |
| [`TFormsSection`](TFormsSection.md) | Navigation sections available in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) mode. |
| [`TFrameConfig`](TFrameConfig.md) | The main configuration object for initializing an ONLYOFFICE Apps frame. |
| [`TFrameEvents`](TFrameEvents.md) | Event handler map for the ONLYOFFICE Apps iframe. |
| [`TFrameFilter`](TFrameFilter.md) | Filter and pagination parameters for the file list in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) mode. |
| [`TFrameMode`](TFrameMode.md) | String literal union of all [SDKMode](../enumerations/SDKMode.md) values. |
| [`TGetExternalDataRequest`](TGetExternalDataRequest.md) | Payload the ONLYOFFICE Apps iframe sends when it asks the host to read a value from external storage. |
| [`THashSettings`](THashSettings.md) | Password hash settings returned by [SDKInstance.getHashSettings](../classes/SDKInstance.md#gethashsettings). |
| [`TListResponse\<TFolder\>`](TListResponse.md) | Response wrapper for paginated listing methods. |
| [`TLoginResult`](TLoginResult.md) | Result of [SDKInstance.login](../classes/SDKInstance.md#login). |
| [`TLogo`](TLogo.md) | Room logo information. |
| [`TManagerSection`](TManagerSection.md) | Sections of [SDKMode.Manager](../enumerations/SDKMode.md#Manager) a custom action can be limited to, named after the root folder the user is in: `rooms`, `archive`, `my-documents`, `recent`, `favorites`, `shared` (shared with me) and `trash`. |
| [`TManagerViewMode`](TManagerViewMode.md) | String literal union of all [ManagerViewMode](../enumerations/ManagerViewMode.md) values. |
| [`TPathParts`](TPathParts.md) | Breadcrumb path segment in file/room listing responses. |
| [`TPersonalSection`](TPersonalSection.md) | Navigation sections available in [SDKMode.Personal](../enumerations/SDKMode.md#Personal) mode. |
| [`TRejectedFile`](TRejectedFile.md) | A file the [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) dialog refused before uploading. |
| [`TRequestTokenInfo`](TRequestTokenInfo.md) | One external link of a selected room or file, attached to selector payloads. |
| [`TRoomInfo`](TRoomInfo.md) | Room information returned by SDK methods. |
| [`TRoomsResponse`](TRoomsResponse.md) | Response wrapper for room listing methods. |
| [`TSDKErrorDetails`](TSDKErrorDetails.md) | Extra details attached to an [SDKError](../classes/SDKError.md). |
| [`TSelectedFile`](TSelectedFile.md) | The [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) payload of [TFrameEvents.onSelectCallback](TFrameEvents.md#onSelectCallback): a single object, not an array. |
| [`TSelectedRoom`](TSelectedRoom.md) | One selected room in the [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) payload. |
| [`TSelectorType`](TSelectorType.md) | String literal union of all [SelectorFilterType](../enumerations/SelectorFilterType.md) values. |
| [`TSetExternalDataPayload`](TSetExternalDataPayload.md) | Payload the ONLYOFFICE Apps iframe sends when it asks the host to persist a value in external storage. |
| [`TTheme`](TTheme.md) | String literal union of all [Theme](../enumerations/Theme.md) values. |
| [`TUploadedFile`](TUploadedFile.md) | A file stored by the [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) dialog: the upload session response of the portal. |
| [`TUploadError`](TUploadError.md) | Payload of [TFrameEvents.onUploadError](TFrameEvents.md#onUploadError) in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal): the file transferred with [SDKInstance.upload](../classes/SDKInstance.md#upload) that the frame could not store. |
| [`TUploaderUploadError`](TUploaderUploadError.md) | Payload of [TFrameEvents.onUploadError](TFrameEvents.md#onUploadError) in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): the batch failed or some files were refused. |
| [`TUploaderUploadResult`](TUploaderUploadResult.md) | One element of the [TFrameEvents.onUploadSuccess](TFrameEvents.md#onUploadSuccess) payload in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): the portal's API envelope around the stored file. |
| [`TUploadProgress`](TUploadProgress.md) | Payload of [TFrameEvents.onUploadProgress](TFrameEvents.md#onUploadProgress) in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader): one event per uploaded chunk of each file. |
| [`TUploadRejection`](TUploadRejection.md) | One reason a file was rejected by the [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) dialog. |
| [`TUploadResult`](TUploadResult.md) | Payload of [TFrameEvents.onUploadSuccess](TFrameEvents.md#onUploadSuccess) in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal): one object per file transferred with [SDKInstance.upload](../classes/SDKInstance.md#upload). |
| [`TUserInfo`](TUserInfo.md) | User information returned by [SDKInstance.getUserInfo](../classes/SDKInstance.md#getuserinfo). |
