---
sidebar_position: 2
---

# Hiding and showing UI elements

Most embedding modes expose parameters to hide chrome you don't need — menus, headers, selector buttons — so the embedded frame blends into your application instead of looking like a separate product.

[TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md) and [TEditorCustomization](../usage-sdk/type-aliases/TEditorCustomization.md) list every field alphabetically. This page groups the ones relevant to hiding/showing chrome by embedding mode instead — "I'm embedding a Manager / a selector / an editor, what can I hide?" — with a runnable example for each, plus the handful of interactions and defaults that aren't obvious from a single field's own description (like which toggles only do something when another one is also set). For the exact type, default value, and every field this page doesn't cover, follow the reference links in each section.

## Manager mode

Most of these toggle independently, but two of them only take effect when the left menu itself is visible — see the note after the example.

- `showMenu` — left navigation menu
- `showHeader` — header bar in the mobile view
- `showTitle` — current section/room/folder title
- `showFilter` — filter controls
- `showSettings` — "Manage displayed columns" button in table view
- `showSignOut` — "Sign out" button
- `disableActionButton` — "Actions" button
- `infoPanelVisible` — info panel toggle button

Not exhaustive — see [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md) for every Manager-related field, including ones this page doesn't cover.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showMenu: false,
  showTitle: false,
  showSettings: false,
  infoPanelVisible: false,
});
```

:::note
`showSignOut` and `disableActionButton` control elements that live inside the left menu — they only have a visible effect when `showMenu` is `true`. With `showMenu: false`, the menu itself is gone, so there's nothing for these two parameters to show or hide.
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
    help: false,
  },
});
```

Also relevant to editor chrome: `editorGoBack` (`boolean` or the literal `"event"`) controls the "Open file location" button shown in the editor and viewer. `true` (default) shows the button and clicking it opens the file's portal folder; `"event"` hides the button entirely. See [Viewer mode](../embedding-modes/viewer-mode.md#embedding-a-document-preview-in-mobile-layout) for an example.

See also: [Customize editors](../samples/advanced-samples/customize-editors.md).

## Frame layout

A few parameters control the frame's own footprint rather than DocSpace's internal UI: `width`/`height` (pixels or percentages), and `destroyText` (text inserted into the frame's container when `destroyFrame()` is called — see [Destroy frame](../samples/basic-samples/destroy-frame.md)).

`noLoader` skips the loading spinner while the frame initializes — except in Manager and System modes, which always show it regardless of this setting.

`waiting: true` delays the frame entirely: the `<iframe>` isn't added to the page at all (only the loading spinner shows, no request is sent to the portal) until you release it. Useful when several frames share a page and one of them needs to finish authenticating before the rest load.

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
