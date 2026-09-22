# Changelog

The list of changes for the ONLYOFFICE DocSpace Embed SDK (`docspace-sdk-js`).

## Version 2.2.0

- Added [Uploader mode](../embedding-modes/uploader-mode.md)
- Added [Forms mode](../embedding-modes/forms-mode.md)
- Added [Chat mode](../embedding-modes/chat-mode.md)
- Added [Personal mode](../embedding-modes/personal-mode.md)
- Added the `stylesUrl` and `integrationUrl` [config fields](../usage-sdk/type-aliases/TFrameConfig.md) — see also [Theming](../customization/theming.md) for `stylesUrl`
- Added the `navigateSection()`, `setCustomActions()`, and `upload()` [instance methods](../usage-sdk/classes/SDKInstance.md) — see [Forms mode](../embedding-modes/forms-mode.md) and [Personal mode](../embedding-modes/personal-mode.md) for usage examples
- Added the `onNavigate`, `onUploadSuccess`, `onUploadError`, `onCustomAction`, `onContentReady`, `onNoAccess`, `onNotFound`, `onEditorOpen`, `onGetExternalData`, and `onSetExternalData` [events](../usage-sdk/type-aliases/TFrameEvents.md) — see also [Events and callbacks](../events-and-callbacks/events-and-callbacks.md#available-events)
- Added an optional `code` argument to [`login()`](../usage-sdk/classes/SDKInstance.md#login) for two-factor sign-in — see [Two-factor authentication](../samples/advanced-samples/two-factor-authentication.md)
- Added `SDKError` and `SDKErrorCode` for structured method-call errors, and the `methodTimeout` config field — see [Method-call errors](../events-and-callbacks/events-and-callbacks.md#method-call-errors)
- `onSelectCallback`, `onEditorOpen`, and `onFileManagerClick` are now typed with their real [payloads](../usage-sdk/type-aliases/TFrameEvents.md) instead of a bare `object`
- `login()` returns `Promise<TLoginResult>` instead of `Promise<object>`, and documents that the portal forwards only `email` and `passwordHash` and always requests a persistent session
- [`destroyFrame()`](../usage-sdk/classes/SDKInstance.md#destroyframe) documents that it's synchronous, rejects any pending method calls with `SDKErrorCode.Disconnected`, and leaves the frame ready for an immediate re-`init*` — see [Destroy frame](../samples/basic-samples/destroy-frame.md)
- [`setIsLoaded()`](../usage-sdk/classes/SDKInstance.md#setisloaded) is documented as a public method again: it reveals the frame and fires `onContentReady`, and can be called by the host to take over the loading hand-off — see [Mark iframe as loaded](../samples/basic-samples/mark-iframe-as-loaded.md)
- Fixed: `executeInEditor()`'s callback is called with three arguments — `(editor, asc, data)`, not `(editor, data)` — the previous type let `window.Asc` land in the `data` parameter
- Fixed: Personal mode now propagates `providerName`, `inviteKey`, `emplType`, and `uid` to the iframe URL, matching Forms and Chat
- Fixed: restored the missing `withReload` option for [`setConfig()`](../usage-sdk/classes/SDKInstance.md#setconfig)

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
