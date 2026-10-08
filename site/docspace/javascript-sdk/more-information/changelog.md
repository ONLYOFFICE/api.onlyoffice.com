# Changelog

The list of changes for the ONLYOFFICE DocSpace Embed SDK (`docspace-sdk-js`).

## Version 2.2.0

### Upgrading from 2.1.0

- Most method calls now reject instead of resolving when the portal reports a failure (`SDKErrorCode.ApiError`) — only [`login()`/`createRoom()`](../events-and-callbacks/events-and-callbacks.md#method-call-errors) keep resolving a (now sanitized) `{ status, message }`. Code that checked `result.status`/`result.error` on other methods needs to move to `.catch()`.
- The SDK only accepts frame messages from the exact origin of `src` — a `src` that redirects to a different origin or scheme on load leaves the frame silently stuck, with no error of its own. See [Quickstart](../get-started/quickstart.md).
- Stricter TypeScript types: `mode` is a `TFrameMode` (not any string), `editorCustomization.uiTheme` is a `Theme`, and `executeInEditor()`'s callback is `(editor, asc, data?)`. JavaScript callers are unaffected.
- [`createRoom()`](../embedding-modes/manager-mode.md#creating-a-room-programmatically) takes its settings as a `TCreateRoomOptions` object; the positional arguments from 2.1 (`quota`, `tags`, …) still work but are deprecated.
- `package.json` declares an `exports` map — only the package's documented entry points and `./dist/*` stay importable; other deep imports (e.g. `@onlyoffice/docspace-sdk-js/dist/api.js`) are no longer resolvable. `engines.node` is `>=18`.

### Added

- Added [Uploader mode](../embedding-modes/uploader-mode.md)
- Added [Forms mode](../embedding-modes/forms-mode.md)
- Added [Chat mode](../embedding-modes/chat-mode.md)
- Added [Personal mode](../embedding-modes/personal-mode.md)
- Added [OAuth authentication](../get-started/authentication-security.md#oauth-authentication): `getToken`/`accessToken`/`tokenExpiresAt`, proactive token refresh, the `onAuthError` event (four error codes), and `login()`/`logout()` rejecting with `SDKErrorCode.ModeMismatch` in OAuth mode
- Added the OAuth bootstrap fields `providerName`, `inviteKey`, `emplType`, and `uid` for automatic sign-in/sign-up in Forms, Chat, and Personal mode
- Added [custom actions](../embedding-modes/manager-mode.md#adding-custom-actions) in Manager, Personal, and Forms mode — context menu items for files, folders, and rooms, plus create-menu items, set via `customActions` or `setCustomActions()`
- Added `onGetExternalData`/`onSetExternalData`: the frame asks the host for integrator-defined data and pushes it back
- Added the `stylesUrl` [config field](../usage-sdk/type-aliases/TFrameConfig.md#stylesurl) — see also [Appearance and language](../customization/appearance-and-language.md)
- Added `headerOffset`/`headerHeight` (header layout overrides in Forms, Chat, and Personal mode) and `openEditorInSameTab` (where a file opens from the list in Forms and Personal mode when `onEditorOpen` isn't set)
- Added `filter.groupId` for [pinning the room list to one room group](../embedding-modes/manager-mode.md#filtering-sorting-and-pinning-the-room-list) in Manager mode
- Added the `onFilterSearch` [event](../events-and-callbacks/events-and-callbacks.md#available-events) (Personal and Public room mode)
- Added `RoomType` — the room types accepted by [`createRoom()`](../embedding-modes/manager-mode.md#creating-a-room-programmatically) — and `RoomType.Private`, the end-to-end-encrypted type returned by `getRooms()`/`onSelectCallback` but not accepted by `createRoom()`
- Added `createRoom()`'s `options` argument (`TCreateRoomOptions`: storage quota, tags, accent color, cover image, VDR indexing and download restrictions)
- Added `SDKError` and `SDKErrorCode` for structured method-call errors, and the `methodTimeout` config field — see [Method-call errors](../events-and-callbacks/events-and-callbacks.md#method-call-errors)
- Added the `navigateSection()`, `setCustomActions()`, and `upload()` [instance methods](../usage-sdk/classes/SDKInstance.md) — see [Forms mode](../embedding-modes/forms-mode.md) and [Personal mode](../embedding-modes/personal-mode.md) for usage examples
- Added the `onNavigate`, `onUploadSuccess`, `onUploadError`, `onCustomAction`, `onContentReady`, `onNoAccess`, `onNotFound`, `onEditorOpen`, `onGetExternalData`, and `onSetExternalData` [events](../usage-sdk/type-aliases/TFrameEvents.md) — see also [Events and callbacks](../events-and-callbacks/events-and-callbacks.md#available-events)
- Added an optional `code` argument to [`login()`](../usage-sdk/classes/SDKInstance.md#login) for two-factor sign-in — see [Two-factor authentication](../samples/advanced-samples/two-factor-authentication.md)
- `upload()` now sends an `uploadId` with every file and matches it to `onUploadSuccess`/`onUploadError` by that id, so two files with the same name no longer resolve each other's promise
- Added named exports of the whole public API from the package root (`SDK`, `SDKInstance`, `SDKError`, `SDKErrorCode`, every enum, and every `T*` type) — previously only `SDK` was available, as the default export
- Added `TInitConfig`, the parameter type of the `init*()` wrappers — a `TFrameConfig` without the `mode` field each wrapper already sets, for strict TypeScript callers

### Changed

- Mode-guarded methods (`navigateSection()`, `setCustomActions()`, `upload()`, and any method the current mode has no handler for) reject with `SDKErrorCode.ModeMismatch` instead of throwing synchronously or resolving with a plain string
- `setConfig()` now takes a `Partial<TFrameConfig>` and merges it into the stored config — a call without every field no longer resets the rest to their defaults
- Personal mode: the frame URL no longer carries `showMenu`, `infoPanelVisible`, or `downloadToEvent` (the frame doesn't read them there); `initPersonal()` no longer forces `showMenu`/`infoPanelVisible` to `true`. Personal mode has no navigation menu — switch sections with `navigateSection()` only
- `getRooms()` sends `search` and `count` under the names the portal's rooms filter actually reads
- `editorCustomization.uiTheme` takes a `Theme` value (`"Base"`, `"Dark"`, `"System"`)
- `createFile()`, `createFolder()`, `addTagsToRoom()`, and `removeTagsFromRoom()` accept numeric IDs, the type the data methods return
- `onSelectCallback`, `onEditorOpen`, and `onFileManagerClick` are now typed with their real [payloads](../usage-sdk/type-aliases/TFrameEvents.md) instead of a bare `object`
- `login()` returns `Promise<TLoginResult>` instead of `Promise<object>`, and documents that the portal forwards only `email` and `passwordHash` and always requests a persistent session
- [`destroyFrame()`](../usage-sdk/classes/SDKInstance.md#destroyframe) documents that it's synchronous, rejects any pending method calls with `SDKErrorCode.Disconnected`, and leaves the frame ready for an immediate re-`init*` — see [Destroy frame](../samples/basic-samples/destroy-frame.md)
- [`setIsLoaded()`](../usage-sdk/classes/SDKInstance.md#setisloaded) is documented as a public method again: it reveals the frame and fires `onContentReady`, and can be called by the host to take over the loading hand-off — see [Mark iframe as loaded](../samples/basic-samples/mark-iframe-as-loaded.md)

### Deprecated

- `buttonColor` and `viewAs` — ONLYOFFICE Apps 4.0 does not read them. Call `setListView()` after `onAppReady` to change the layout instead
- `integrationUrl` — ONLYOFFICE Apps 4.0 does not read it

### Fixed

- Error replies from portals that don't flag failures as such are sanitized (`config`/`request`/`stack` stripped) before the promise resolves — a failed `login()` no longer exposes the password hash to the host page
- `executeInEditor()`'s callback is called with three arguments — `(editor, asc, data)`, not `(editor, data)` — the previous type let `window.Asc` land in the `data` parameter
- Personal mode now propagates `providerName`, `inviteKey`, `emplType`, and `uid` to the iframe URL, matching Forms and Chat
- Restored the missing `withReload` option for [`setConfig()`](../usage-sdk/classes/SDKInstance.md#setconfig)
- A `getToken` that rejects is answered to the frame with an empty token reply, so the frame fails fast instead of waiting out its own timeout
- `dist/api.js` no longer throws at load when `document.currentScript` is `null` (a module script, or `api.js` bundled into another file)
- A trailing slash in `src` no longer produces a doubled slash in the iframe URL or the CSP request
- Messages from another window at the portal's origin (a popup, a second frame) are ignored — only the instance's own iframe drives it
- A method called while the iframe is missing rejects with `SDKErrorCode.Disconnected` instead of hanging

## Version 2.1.0

- Added the `onFileManagerClick` [event](../usage-sdk/type-aliases/TFrameEvents.md#onfilemanagerclick)
- Fixed: restored the default `showHeader` value in the config

## Version 2.0.0

- Added [Public room mode](../embedding-modes/public-room-mode.md)
- Added the `noLoader` [config field](../usage-sdk/type-aliases/TFrameConfig.md#noloader) — see also [Hiding and showing UI elements](../customization/ui-elements.md#frame-layout)
- Added an Index column to the `viewTableColumns` parameter of the default config
- Added the `onEditorOpen` [event](../usage-sdk/type-aliases/TFrameEvents.md#oneditoropen)
- Added the [`executeInEditor()`](../usage-sdk/classes/SDKInstance.md#executeineditor) instance method
- Added server-side rendering (SSR) support

## Version 1.1.0

- First release
