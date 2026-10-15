---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameConfig

The main configuration object for initializing an ONLYOFFICE Apps frame.
Passed to [SDKInstance.initFrame](../classes/SDKInstance.md#initframe) or any `SDK.init*` wrapper.

Only `frameId`, `mode`, and `src` are required — all other fields have defaults from [defaultConfig](../variables/defaultConfig.md).

```ts
type TFrameConfig = object;
```

## Example

```typescript
const config: TFrameConfig = {
  frameId: "ds-frame",
  src: "https://portal.example.com",
  mode: "manager",
  width: "100%",
  height: "700px",
  theme: "Dark",
};
sdk.initFrame(config);
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `acceptButtonLabel`? | `string` | Custom label for the selector "Accept" button. |
| `acceptExtensions`? | `string` | Accepted file extensions for [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) (e.g. `".pdf,.docx"`). |
| `accessToken`? | `string` | Static OAuth access token (convenience). The SDK wraps it as `getToken: () => accessToken`. The SDK cannot refresh it — prefer [TFrameConfig.getToken](#getToken) for anything longer than the token TTL. |
| `agentId`? | `string` \| `number` | AI agent room ID. Optional in [SDKMode.Chat](../enumerations/SDKMode.md#Chat): when set, the chat is bound to that agent; when omitted, the chat is bound to the current user. The chat renders its composer only for a signed-in user who is not a guest; otherwise the page shows a no-access state and fires [TFrameEvents.onNoAccess](TFrameEvents.md#onNoAccess). AI disabled on the portal also hides the composer, without the event. |
| ~~`buttonColor?`~~ | `string` | HEX color for the selector accept button. Default: `"#5299E0"`. **Deprecated** ONLYOFFICE Apps 4.0 does not read it; the selector uses the portal theme. |
| `cancelButtonLabel`? | `string` | Custom label for the selector "Cancel" button. |
| `checkCSP`? | `boolean` | Validate the host against the portal's CSP allowlist before loading the iframe (host name and port only). `false` skips the request to [CSPApiUrl](../variables/CSPApiUrl.md); the browser still enforces the portal's `frame-ancestors` header. Default: `true`. |
| `customActions`? | [`TCustomActionsConfig`](TCustomActionsConfig.md) | Custom items for the context menus and the create menu in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms), applied when the frame loads. Clicks fire [TFrameEvents.onCustomAction](TFrameEvents.md#onCustomAction). Replace them later with [SDKInstance.setCustomActions](../classes/SDKInstance.md#setcustomactions). Not available through the script-tag parameters. Default: `undefined`. |
| `destination`? | [`TFormsSection`](TFormsSection.md) | Initial section to display in [SDKMode.Forms](../enumerations/SDKMode.md#Forms). Determines which page loads when the frame is created, avoiding an extra [SDKInstance.navigateSection](../classes/SDKInstance.md#navigatesection) call. See [TFormsSection](TFormsSection.md). Default: `"my-forms"`. |
| `destroyText`? | `string` | Plain text shown in the placeholder `div` after [SDKInstance.destroyFrame](../classes/SDKInstance.md#destroyframe). Markup is not rendered. Default: `""`. |
| `disableActionButton`? | `boolean` | Hide the "Actions" button in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). Default: `false`. |
| `downloadToEvent`? | `boolean` | Redirect download links to [TFrameEvents.onDownload](TFrameEvents.md#onDownload) instead of downloading directly. Default: `false`. |
| `editorCustomization`? | [`TEditorCustomization`](TEditorCustomization.md) | Editor UI customization. See [TEditorCustomization](TEditorCustomization.md). Default: `{}`. |
| `editorGoBack`? | `boolean` \| `"event"` | The "Open file location" button of the editor. `true` = the button opens the file's folder; `"event"` = the button fires [TFrameEvents.onEditorCloseCallback](TFrameEvents.md#onEditorCloseCallback) instead (set automatically when the handler is registered); `false` = no button. Default: `true`. |
| `editorType`? | [`TEditorType`](TEditorType.md) | Editor UI layout sent to the backend. See [EditorType](../enumerations/EditorType.md). Default: `"desktop"`. |
| `emplType`? | `string` | Employee type for signup via OAuth in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Chat](../enumerations/SDKMode.md#Chat) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). |
| `entityId`? | `string` \| `number` | ID of the room or folder the chat is opened from — the user's current location. Optional in [SDKMode.Chat](../enumerations/SDKMode.md#Chat); `undefined` by default. The AI receives it as workspace context and by default scopes tool calls (searches, listings, folder contents) to this location. The current user must have access to the entity, otherwise chat requests are rejected. |
| `events`? | [`TFrameEvents`](TFrameEvents.md) | Event handlers. See [TFrameEvents](TFrameEvents.md). |
| `extensionsText`? | `string` | File extensions hint text in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `fileId`? | `string` \| `number` | File ID to attach to the chat composer on init. Optional in [SDKMode.Chat](../enumerations/SDKMode.md#Chat). |
| `filter`? | [`TFrameFilter`](TFrameFilter.md) | Filter/sort/pagination for the file list. See [TFrameFilter](TFrameFilter.md). |
| `filterParam`? | `string` | File type filter for [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector). `"ALL"` = no restriction. |
| `frameId` | `string` | **Required.** Unique frame identifier. Used as the DOM `id` and the postMessage routing key. Default: `"ds-frame"`. |
| `getToken`? | () => `string` \| `Promise`\<`string`\> | OAuth access-token provider. Setting it (or [TFrameConfig.accessToken](#accessToken)) switches the frame into **OAuth mode**: the frame authorizes API calls with `Authorization: Bearer <token>` instead of the session cookie, so no cookie is set and the portal session cannot outlive a sign-out in the host application. The host backend runs the authorization-code and refresh-token exchange and returns a fresh access token; `client_secret` and refresh tokens never reach the browser. The SDK calls it at start, after a `401` and, for a JWT or with [TFrameConfig.tokenExpiresAt](#tokenExpiresAt), one minute before expiry. [SDKInstance.login](../classes/SDKInstance.md#login) and [SDKInstance.logout](../classes/SDKInstance.md#logout) reject with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) in OAuth mode, and token failures surface through [TFrameEvents.onAuthError](TFrameEvents.md#onAuthError). Default: `undefined`. |
| `headerHeight`? | `number` | Height (in px) of the header component inside the iframe. When unset, ONLYOFFICE Apps uses its own built-in header height; supply this only to override it so the embedded UI matches the host application's chrome. Currently honored in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Chat](../enumerations/SDKMode.md#Chat). |
| `headerOffset`? | `number` | Inline-start padding (in px) added to header rows so host overlays on the left edge (e.g. Nextcloud floating menu) don't cover the burger / breadcrumbs / chat-header controls. The outer iframe container is not shifted — only the elements inside the header move to the right (or to the left in RTL). Currently honored in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Chat](../enumerations/SDKMode.md#Chat). Default: `0`. |
| `height`? | `string` | Iframe height. CSS value: `"100%"`, `"600px"`, etc. Default: `"100%"`. |
| `id`? | `string` \| `number` \| `null` | Entity ID: the file in [SDKMode.Editor](../enumerations/SDKMode.md#Editor) and [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer), the target folder in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader), the room in [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom), the folder to open in [SDKMode.Personal](../enumerations/SDKMode.md#Personal), the form filling room in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) (optional there: the room from the portal's Forms settings is used when unset). Default: `null`. |
| `infoPanelVisible`? | `boolean` | Show info panel toggle in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). Default: `true`. |
| `init`? | `boolean` \| `null` | Reserved. Controls whether the frame should auto-initialize. |
| `integrationUrl`? | `string` | URL of the integration page. Read from config to return the user back after navigating to external resources (e.g. billing). |
| `inviteKey`? | `string` | Invitation key for signup via OAuth in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Chat](../enumerations/SDKMode.md#Chat) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). |
| `isFolderUpload`? | `boolean` | Allow folder upload in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `isMultipleUpload`? | `boolean` | Allow multiple file upload in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `libraryId`? | `string` | Library ID for [SDKMode.Forms](../enumerations/SDKMode.md#Forms) to display only items from a forms library. |
| `linkMainText`? | `string` | Link main text in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `locale`? | `string` \| `null` | UI locale as a BCP 47 code (e.g. `"en-US"`). Applies to the frame only. `null` = the language configured on the portal or in the signed-in user's profile. |
| `maxPerUploadSize`? | `string` | Max single file/folder size in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `maxTotalUploadSize`? | `string` | Max total upload size in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `methodTimeout`? | `number` | Timeout in milliseconds for method calls to the iframe. If the iframe does not respond within this time, the call rejects with [SDKErrorCode.Timeout](../enumerations/SDKErrorCode.md#Timeout) and [TFrameEvents.onAppError](TFrameEvents.md#onAppError) fires. Does not apply to [SDKInstance.upload](../classes/SDKInstance.md#upload), which has its own 120-second transfer timeout. Default: `30000` (30 seconds). |
| `mode` | [`TFrameMode`](TFrameMode.md) | **Required.** SDK mode. Determines UI and available methods. See [SDKMode](../enumerations/SDKMode.md). |
| `name`? | `string` | Iframe `name` attribute prefix. Default: [FRAME\_NAME](../variables/FRAME_NAME.md). |
| `noLoader`? | `boolean` | Skip the loading spinner. `true` = iframe appears immediately. Forced per mode: [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.System](../enumerations/SDKMode.md#System) always show the spinner (`false`), [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal) never do (`true`). Default: `true`. |
| `personalDestination`? | [`TPersonalSection`](TPersonalSection.md) | Initial section to display in [SDKMode.Personal](../enumerations/SDKMode.md#Personal). Determines which page loads when the frame is created, avoiding an extra [SDKInstance.navigateSection](../classes/SDKInstance.md#navigatesection) call. See [TPersonalSection](TPersonalSection.md). Default: `"my-documents"`. |
| `providerName`? | `string` | OAuth provider name for automatic authentication in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Chat](../enumerations/SDKMode.md#Chat) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). E.g. `"nextcloud"`. |
| `requestToken`? | `string` \| `null` | Share key of an external link: the room link in [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) and [SDKMode.Manager](../enumerations/SDKMode.md#Manager), the file link in [SDKMode.Editor](../enumerations/SDKMode.md#Editor) and [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer). Ignored by other modes. Obtain it from [TRequestTokenInfo.requestToken](TRequestTokenInfo.md#requestToken). Default: `null`. |
| `roomType`? | `string` | Room type filter for [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector): a [RoomType](../enumerations/RoomType.md) API value as a string (`"5"` for custom rooms). |
| `rootPath`? | `string` | Base navigation path for [SDKMode.Manager](../enumerations/SDKMode.md#Manager). Default: `"/rooms/shared/"`. |
| `secondaryText`? | `string` | Secondary description text in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). |
| `selectorType`? | [`TSelectorType`](TSelectorType.md) | Content filter for selector modes. See [SelectorFilterType](../enumerations/SelectorFilterType.md). Default: `"all"`. |
| `showFilter`? | `boolean` | Show filter toolbar in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), with the create menu that holds [TCustomActionsConfig.createMenu](TCustomActionsConfig.md#createMenu) items. Default: `false`. |
| `showHeader`? | `boolean` | Show header bar in mobile manager view. Default: `false`. |
| `showHeaderBanner`? | [`TBannerDisplaying`](TBannerDisplaying.md) | Header banner visibility in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). See [HeaderBannerDisplaying](../enumerations/HeaderBannerDisplaying.md). Default: `"none"`. |
| `showMenu`? | `boolean` | Show left navigation menu in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms). Default: `false`. |
| `showSelectorCancel`? | `boolean` | Show "Cancel" button in selector modes. Default: `false`. |
| `showSelectorHeader`? | `boolean` | Show header bar in selector modes. Default: `false`. |
| `showSettings`? | `boolean` | Show "Manage displayed columns" button in table view. Default: `false`. |
| `showSignOut`? | `boolean` | Show "Sign out" button. Default: `true`. |
| `showTitle`? | `boolean` | Show current section/room/folder title in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). Default: `true`. |
| `src` | `string` | **Required.** ONLYOFFICE Apps portal URL. Used as the iframe `src` origin. |
| `stylesUrl`? | `string` | Absolute `http`/`https` URL of a stylesheet applied inside the frame, in every mode. A relative or non-HTTP URL is dropped silently. The portal loads it cross-origin, so the serving host must allow it with CORS. |
| `theme`? | [`TTheme`](TTheme.md) | Color theme. See [Theme](../enumerations/Theme.md). Default: `"System"`. |
| `threadId`? | `string` | Thread ID to resume. Optional in [SDKMode.Chat](../enumerations/SDKMode.md#Chat). |
| `tokenExpiresAt`? | `number` | Expiry of the first access token as epoch milliseconds, for the proactive refresh in OAuth mode. When omitted, the expiry is read from the token's JWT `exp` claim. Tokens obtained by a refresh always use their own `exp` claim; an opaque token without one is refreshed on demand only, after a `401`. |
| `type`? | [`TEditorType`](TEditorType.md) | Platform layout. Affects iframe CSS (e.g. `"mobile"` sets `position: fixed`). See [EditorType](../enumerations/EditorType.md). Default: `"desktop"`. |
| `uid`? | `string` | User identifier for [SDKMode.Forms](../enumerations/SDKMode.md#Forms), [SDKMode.Chat](../enumerations/SDKMode.md#Chat) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). |
| ~~`viewAs?`~~ | [`TManagerViewMode`](TManagerViewMode.md) | Item layout in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). See [ManagerViewMode](../enumerations/ManagerViewMode.md). Default: `"row"`. **Deprecated** ONLYOFFICE Apps 4.0 does not read it: the layout is the one the user last chose. Call [SDKInstance.setListView](../classes/SDKInstance.md#setlistview) after [TFrameEvents.onAppReady](TFrameEvents.md#onAppReady) instead. |
| `viewTableColumns`? | `string` | Visible table columns in [SDKMode.Manager](../enumerations/SDKMode.md#Manager). Comma-separated: `"Index,Name,Size,Type,Tags"`. Applies in the table layout only ([SDKInstance.setListView](../classes/SDKInstance.md#setlistview)); a column set the user saved in the browser takes precedence. |
| `waiting`? | `boolean` | Delay iframe append. When `true`, the iframe is not rendered until [SDKInstance.setConfig](../classes/SDKInstance.md#setconfig) is called with `reload = true` (without reload the call rejects with [SDKErrorCode.Disconnected](../enumerations/SDKErrorCode.md#Disconnected)). [SDKMode.System](../enumerations/SDKMode.md#System) ignores the flag. Default: `false`. |
| `width`? | `string` | Iframe width. CSS value: `"100%"`, `"800px"`, etc. Default: `"100%"`. |
| `withBreadCrumbs`? | `boolean` | Show breadcrumb navigation in selector modes. Default: `true`. |
| `withSearch`? | `boolean` | Show search bar in selector modes. Default: `true`. |
| `withSubtitle`? | `boolean` | Show the subtitle with the folder description in [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector). Not passed to [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector). Default: `true`. |

</APITable>
