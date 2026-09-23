---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEditorCustomization

Editor customization options passed via [TFrameConfig.editorCustomization](TFrameConfig.md#editorCustomization).
Controls the editor UI: toolbar, menus, macros, theme, and zoom.
Only applies to [SDKMode.Editor](../enumerations/SDKMode.md#Editor) and [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer) modes.

```ts
type TEditorCustomization = object;
```

## Example

```typescript
sdk.initFrame({
  mode: "editor",
  editorCustomization: {
    compactToolbar: true,
    hideRulers: true,
    uiTheme: "theme-dark",
  },
  ...
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `anonymous`? | [`TEditorAnonymous`](TEditorAnonymous.md) | Anonymous user settings. See [TEditorAnonymous](TEditorAnonymous.md). |
| `autosave`? | `boolean` | Enable "Autosave" menu option. When `false`, only "Strict" co-editing mode is available. Default: `true`. |
| `comments`? | `boolean` | Show "Comments" button. When `false`, comments are view-only. Default: `true`. |
| `compactHeader`? | `boolean` | Move action buttons from header to toolbar, making the header compact. Default: `false`. |
| `compactToolbar`? | `boolean` | Use compact toolbar layout. Default: `false` (edit mode), `true` (view mode since v8.3). |
| `compatibleFeatures`? | `boolean` | Restrict features to OOXML-compatible only (e.g. no whole-document comments). Default: `false`. |
| `forcesave`? | `boolean` | Enable force-save on manual "Save" click. Default: `false`. |
| `help`? | `boolean` | Show "Help" button. Default: `true`. |
| `hideRightMenu`? | `boolean` | Collapse the right panel on first load. Default: `true`. |
| `hideRulers`? | `boolean` | Hide rulers. Available for document and presentation editors. Default: `false` (documents), `true` (presentations). |
| `integrationMode`? | `"embed"` | Integration mode. Set to `"embed"` to prevent auto-scroll to the editor frame on load. |
| `macros`? | `boolean` | Enable macros auto-run. `false` disables macros entirely (since v9.0.3). Default: `true`. |
| `macrosMode`? | `"disable"` \| `"warn"` \| `"enable"` | Macros auto-run policy. Default: `"warn"`. |
| `mentionShare`? | `boolean` | Mention hint behavior. `true` = user gets notification + access; `false` = notification only. Default: `true`. |
| `mobileForceView`? | `boolean` | Open mobile editor in view/edit mode on launch. Default: `true`. |
| `plugins`? | `boolean` | Enable plugins. Default: `true`. |
| `toolbarHideFileName`? | `boolean` | Hide document title on the top toolbar. Default: `false`. |
| `toolbarNoTabs`? | `boolean` | Use flat (highlighted) toolbar tabs instead of distinct tabs. Default: `false`. |
| `uiTheme`? | \| `"theme-light"` \| `"theme-classic-light"` \| `"theme-dark"` \| `"theme-contrast-dark"` \| `"theme-white"` \| `"theme-night"` \| `"default-dark"` \| `"default-light"` | Editor theme ID or preset. Default: `"theme-classic-light"`. |
| `unit`? | `"cm"` \| `"pt"` \| `"inch"` | Ruler/dialog measurement units. Default: `"cm"`. |
| `zoom`? | `number` | Zoom percentage. `> 0` for explicit zoom, `-1` = fit to page, `-2` = fit to width. Default: `100`. |

</APITable>
