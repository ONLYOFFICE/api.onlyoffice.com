---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/tools/docs/sections.mjs
---

# Type Aliases

Configuration, event, filter and data shapes exchanged with the embedded frame. Most integrations only need `TFrameConfig` and `TFrameEvents`; the remaining types describe what the instance methods accept and return.

## Overview

The following types are available:

| Type | Description |
| --- | --- |
| [`TBannerDisplaying`](TBannerDisplaying.md) | String literal union of all [HeaderBannerDisplaying](../enumerations/HeaderBannerDisplaying.md) values. |
| [`TCreatedBy`](TCreatedBy.md) | User reference in file/folder/room metadata. |
| [`TCreateRoomOptions`](TCreateRoomOptions.md) | Optional settings for [SDKInstance.createRoom](../classes/SDKInstance.md#createroom). |
| [`TCustomActionsConfig`](TCustomActionsConfig.md) | Configuration for custom context menu actions, passed to [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions). |
| [`TCustomContextMenuAction`](TCustomContextMenuAction.md) | A custom context menu action registered via [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions). |
| [`TCustomContextMenuActions`](TCustomContextMenuActions.md) | Custom context menu actions grouped by the entity type they apply to. |
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
| [`TManagerViewMode`](TManagerViewMode.md) | String literal union of all [ManagerViewMode](../enumerations/ManagerViewMode.md) values. |
| [`TPathParts`](TPathParts.md) | Breadcrumb path segment in file/room listing responses. |
| [`TPersonalSection`](TPersonalSection.md) | Navigation sections available in [SDKMode.Personal](../enumerations/SDKMode.md#Personal) mode. |
| [`TRequestTokenInfo`](TRequestTokenInfo.md) | One external link of a selected room or file, attached to selector payloads. |
| [`TRoomInfo`](TRoomInfo.md) | Room information returned by SDK methods. |
| [`TRoomsResponse`](TRoomsResponse.md) | Response wrapper for room listing methods. |
| [`TSelectedFile`](TSelectedFile.md) | The [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) payload of [TFrameEvents.onSelectCallback](TFrameEvents.md#onSelectCallback): a single object, not an array. |
| [`TSelectedRoom`](TSelectedRoom.md) | One selected room in the [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) payload. |
| [`TSelectorType`](TSelectorType.md) | String literal union of all [SelectorFilterType](../enumerations/SelectorFilterType.md) values. |
| [`TSetExternalDataPayload`](TSetExternalDataPayload.md) | Payload the ONLYOFFICE Apps iframe sends when it asks the host to persist a value in external storage. |
| [`TTheme`](TTheme.md) | String literal union of all [Theme](../enumerations/Theme.md) values. |
| [`TUserInfo`](TUserInfo.md) | User information returned by [SDKInstance.getUserInfo](../classes/SDKInstance.md#getuserinfo). |
