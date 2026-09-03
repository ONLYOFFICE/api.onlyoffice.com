---
sidebar_position: 2
---

# Hiding and showing UI elements

Most embedding modes expose parameters to hide chrome you don't need — menus, headers, selector buttons — so the embedded frame blends into your application instead of looking like a separate product.

## Manager mode

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `showMenu` | boolean | Show or hide the left navigation menu. |
| `showHeader` | boolean | Show or hide the interface header in the mobile view. |
| `showTitle` | boolean | Show or hide the title of the current section/room/folder. |
| `withSubtitle` | boolean | Show or hide a subtitle with additional comments for the current directory. |
| `showFilter` | boolean | Show or hide the filter controls. |
| `showSettings` | boolean | Show or hide the "Manage displayed columns" button in the table view. |
| `showSignOut` | boolean | Show or hide the "Sign out" button. |
| `disableActionButton` | boolean | Disable the "Actions" button. |
| `infoPanelVisible` | boolean | Show or hide the info panel toggle button. |
| `viewAs` | `"row"` \| `"table"` \| `"tile"` | The default item layout. |
| `viewTableColumns` | string | Comma-separated list of column names shown in table view. |

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

Full parameter list: [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md).

## Room and file selector modes

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `showSelectorHeader` | boolean | Show or hide the header inside the selector dialog. |
| `showSelectorCancel` | boolean | Show or hide the "Cancel" button. |
| `withBreadCrumbs` | boolean | Show or hide breadcrumb navigation. |
| `withSearch` | boolean | Show or hide the search field. |
| `acceptButtonLabel` | string | Custom label for the accept button. |
| `cancelButtonLabel` | string | Custom label for the cancel button. |
| `buttonColor` | string | HEX color for the accept button. |

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

Full parameter list: [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md).

## Editor mode

These live under `editorCustomization`, not at the top level of the config.

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `compactHeader` | boolean | Move header action buttons into the toolbar for a more compact header. |
| `compactToolbar` | boolean | Use the compact toolbar layout instead of the full one. |
| `toolbarNoTabs` | boolean | Highlight toolbar tabs instead of displaying them distinctly. |
| `toolbarHideFileName` | boolean | Hide the document title on the toolbar. |
| `hideRightMenu` | boolean | Hide the right panel on first load. |
| `hideRulers` | boolean | Hide the document/presentation rulers. |
| `help` | boolean | Show or hide the "Help" button. |
| `comments` | boolean | Enable or disable the "Comments" button (viewing still works when disabled). |

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

Also relevant to editor chrome: `editorGoBack` (boolean or a URL string) controls the "Open file location" button shown in the editor and viewer. See [Viewer mode](../embedding-modes/viewer-mode.md#embedding-a-document-preview-in-mobile-layout) for an example.

See also: [Customize editors](../samples/advanced-samples/customize-editors.md).

Full parameter list: [TEditorCustomization](../usage-sdk/type-aliases/TEditorCustomization.md).

## Frame layout

A few parameters control the frame's own footprint rather than DocSpace's internal UI:

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `width` / `height` | string | Frame dimensions, in pixels or percentages. |
| `noLoader` | boolean | Skip the loading spinner while the frame initializes. |
| `destroyText` | string | Text inserted into the frame's container when `destroyFrame()` is called. |

See also: [Destroy frame](../samples/basic-samples/destroy-frame.md).

Full parameter list: [TFrameConfig](../usage-sdk/type-aliases/TFrameConfig.md).
