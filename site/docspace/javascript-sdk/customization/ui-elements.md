---
sidebar_position: 2
---

# Hiding UI elements and frame layout

Most embedding modes expose parameters to hide chrome you don't need — menus, headers, selector buttons — so the embedded frame blends into your application instead of looking like a separate product.

[TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md) and [TEditorCustomization](../usage-sdk/type-aliases/TEditorCustomization.md) list every field alphabetically. This page groups the ones relevant to hiding/showing chrome by embedding mode instead — "I'm embedding a Manager / a selector / an editor, what can I hide?" — with a runnable example for each, plus the handful of interactions and defaults that aren't obvious from a single field's own description (like which toggles only do something when another one is also set). For the exact type, default value, and every field this page doesn't cover, follow the reference links in each section.

## Manager mode

Most of these toggle independently, but two of them only take effect when the left menu itself is visible, and not all of them default to visible in the first place — see the note after the example before assuming a plain `initManager()` call shows everything.

- `showMenu` — left navigation menu
- `showHeader` — header bar in the mobile view
- `showTitle` — current section/room/folder title
- `showFilter` — filter controls, including the create ("+") menu for [custom actions](../embedding-modes/manager-mode.md#adding-custom-actions)
- `showSettings` — "Manage displayed columns" button in table view
- `showSignOut` — "Sign out" button
- `disableActionButton` — "Actions" button
- `infoPanelVisible` — info panel toggle button
- `viewTableColumns` — which columns are shown in table view (see note below)

Not exhaustive — see [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md) for every Manager-related field, including ones this page doesn't cover.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showMenu: true,
  showFilter: true,
  showTitle: false,
  infoPanelVisible: false,
});
```

:::note
Despite the framing of this list as "what you can hide," not everything on it defaults to visible — confirmed against `docspace-sdk-js`'s own `defaultConfig` (the type reference doesn't state defaults at all). **Off by default:** `showMenu`, `showHeader`, `showFilter`, `showSettings`. **On by default:** `showTitle`, `showSignOut`, `infoPanelVisible`, and the Actions button itself (`disableActionButton` defaults to `false`, i.e. not disabled). A plain `initManager()` call with no other config therefore shows no left menu at all — and since `showSignOut` and `disableActionButton` control elements that live *inside* that menu, both stay invisible along with it until you pass `showMenu: true` explicitly.
:::

:::note
`viewTableColumns` only has an effect once the list is already in table view — switch to it with [`setListView("table")`](../samples/basic-samples/set-list-view.md) (the `viewAs` config field does not switch the view itself, despite being documented in `TFrameConfig`). The column names are also mode-specific: a room list accepts `Type`, `Tags`, `Owner`, `Last activity`, `Storage` (`Name` always shows); a file list accepts a different set (e.g. `Size`, `Modified Date`, `Author`) — passing a column name that doesn't exist for the current list has no effect.
:::

See also: [Set list view](../samples/basic-samples/set-list-view.md).

## Room and file selector modes

Room selector and File selector are both compact picker dialogs and share the same chrome-related parameters.

- `showSelectorHeader` — header inside the selector dialog
- `showSelectorCancel` — "Cancel" button
- `withBreadCrumbs` — breadcrumb navigation
- `withSearch` — search field
- `acceptButtonLabel` — custom label for the accept button
- `cancelButtonLabel` — custom label for the cancel button

Not exhaustive — see [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md) for the rest of the selector-related fields.

```javascript
const selector = DocSpace.SDK.initFileSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  showSelectorHeader: false,
  withSearch: true,
  acceptButtonLabel: "Attach",
  withBreadCrumbs: true,
});
```

See also: [Room selector mode](../embedding-modes/room-selector-mode.md), [File selector mode](../embedding-modes/file-selector-mode.md).

## Editor mode

These live under `editorCustomization`, not at the top level of the config — they only apply while a document is being edited or viewed:

- `compactHeader` — move header action buttons into the toolbar for a more compact header
- `compactToolbar` — compact toolbar layout instead of the full one
- `toolbarNoTabs` — highlight toolbar tabs instead of displaying them distinctly
- `toolbarHideFileName` — hide the document title on the toolbar (only has an effect when `compactHeader` is also `true`)
- `hideRightMenu` — collapse the right-side panel (comments, chat, navigation, and similar tools) on first load
- `hideRulers` — hide the document/presentation rulers
- `help` — "Help" button
- `comments` — "Comments" button (viewing still works when disabled)

Not exhaustive — see [TEditorCustomization](../usage-sdk/type-aliases/TEditorCustomization.md) for the rest (`autosave`, `forcesave`, `zoom`, and more).

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  editorCustomization: {
    compactHeader: true,
    compactToolbar: true,
    toolbarHideFileName: true,
    help: false,
  },
});
```

If a visitor manually collapses or expands the right panel using the editor's own toggle, that choice is saved to the browser's local storage and overrides `hideRightMenu` on every later load for that visitor — so passing `hideRightMenu` only controls the very first impression for a new visitor, not a setting you can keep forcing afterward.

Also relevant to editor chrome: `editorGoBack` (`boolean` or the literal `"event"`) controls the "Open file location" button shown in the editor and viewer, with three distinct behaviors — `"event"` does **not** hide the button, despite the name suggesting otherwise:

- `false` — hides the button entirely.
- `true` (default) — shows the button; clicking it navigates to the file's portal folder.
- `"event"` — shows the button too, but clicking it fires [`onEditorCloseCallback`](../events-and-callbacks/events-and-callbacks.md) instead of navigating anywhere. The SDK sets this automatically whenever you supply an `onEditorCloseCallback` handler, overriding whatever you passed for `editorGoBack` yourself — so if you want the click to call your handler, attaching the handler is enough on its own.

See [Viewer mode](../embedding-modes/viewer-mode.md#embedding-a-document-preview-in-mobile-layout) for an example.

See also: [Customize editors](../samples/advanced-samples/customize-editors.md).

## Frame layout

A few parameters control the frame's own footprint rather than DocSpace's internal UI: `width`/`height` (pixels or percentages), and `destroyText` (text inserted into the frame's container when `destroyFrame()` is called — see [Destroy frame](../samples/basic-samples/destroy-frame.md)).

`noLoader` skips the loading spinner while the frame initializes, but two mode pairs ignore whatever you set it to: Manager and System mode always show the spinner regardless of this setting, while Forms and Personal mode always skip it — the spinner never shows in either, even with `noLoader: false`.

`waiting: true` delays the frame entirely: the `<iframe>` isn't added to the page at all (only the loading spinner shows, no request is sent to the portal) until you release it. Useful when several frames share a page and one of them needs to finish authenticating before the rest load. System mode is the one exception — it ignores `waiting` and renders immediately regardless of the setting.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  waiting: true,
});

// ...run authentication in a separate frame (see Authorization) or otherwise decide it's safe to proceed...

docSpace.setConfig({ waiting: false }, true);
```

:::note
Releasing the frame takes **both** `waiting: false` in the config **and** the second argument `true` (reload). `setConfig({ waiting: false })` alone rejects with "Message bus is not connected with frame" — there's no iframe yet to message. `setConfig({}, true)` (reload without explicitly clearing `waiting`) reinitializes but leaves the frame waiting forever, since the merged config still has `waiting: true`.
:::
