---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameConfig

The frame configuration.

```ts
type TFrameConfig = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `acceptButtonLabel`? | `string` | The label for the selector accept button. |
| `buttonColor`? | `string` | The HEX code to customize the selector button color. |
| `cancelButtonLabel`? | `string` | The label for the selector cancel button. |
| `checkCSP`? | `boolean` | Specifies whether to check for the presence of CSP headers before initialization. |
| `destroyText`? | `string` | The text to display when destroying the frame. It will be inserted into the `div` tag when the "destroyFrame" method is called. |
| `disableActionButton`? | `boolean` | Specifies whether to disable the "Actions" button in the manager interface. |
| `downloadToEvent`? | `boolean` | Specifies whether to handle download links using the `onDownload` event instead of downloading directly. |
| `editorCustomization`? | [`TEditorCustomization`](TEditorCustomization.md) \| `object` | The parameters to customize editors. |
| `editorGoBack`? | `boolean` \| `string` | Specifies whether the "Open file location" button is displayed in the editor. |
| `editorType`? | [`TEditorType`](TEditorType.md) | The editor mode display type. |
| `events`? | [`TFrameEvents`](TFrameEvents.md) | The callback functions for SDK events. |
| `filter`? | [`TFrameFilter`](TFrameFilter.md) | The filter parameters that facilitate searching files and folders in the DocSpace manager. |
| `filterParam`? | `string` | The filter parameters that facilitate searching files in the selector mode. |
| `frameId` | `string` | The unique frame identifier used to refer to the SDK instance. |
| `height`? | `string` | The iframe height measured in percentages or pixels. |
| `id`? | `string` \| `number` \| `null` | The unique instance identifier used in the SDK initialization modes. |
| `infoPanelVisible`? | `boolean` | Specifies whether to display a button to show the info panel in the DocSpace manager. |
| `init`? | `boolean` \| `null` | Specifies whether to initialize the frame. |
| `locale`? | `string` \| `null` | The language of the DocSpace user interface specified with the four letter language code. |
| `mode` | [`TFrameMode`](TFrameMode.md) \| `string` | The SDK initialization mode. |
| `name`? | `string` | The iframe name used for messaging at the SDK level. |
| `noLoader`? | `boolean` | Specifies whether to initialize the frame without showing a loading spinner. |
| `requestToken`? | `string` \| `null` | The authorization token for API requests. Used to open public rooms and files in public rooms. |
| `roomType`? | `string` | The selector room type. |
| `rootPath`? | `string` | The base path used for DocSpace navigation. By default, opens a list of rooms. |
| `selectorType`? | [`TSelectorType`](TSelectorType.md) | The filter type used in the selector views. |
| `showFilter`? | `boolean` | Specifies whether the filter options are displayed in the DocSpace manager. |
| `showHeader`? | `boolean` | Specifies whether the interface header is displayed in the mobile view manager. |
| `showHeaderBanner`? | [`TBannerDisplaying`](TBannerDisplaying.md) | The display settings of the header banner. |
| `showMenu`? | `boolean` | Specifies whether the left menu is displayed in the DocSpace manager. |
| `showSelectorCancel`? | `boolean` | Specifies whether the "Cancel" button is displayed in the selector mode. |
| `showSelectorHeader`? | `boolean` | Specifies whether the interface header is displayed in the selector mode. |
| `showSettings`? | `boolean` | Specifies whether to display the "Manage displayed columns" button for configuring the table columns in the list view. |
| `showSignOut`? | `boolean` | Specifies whether the "Sign out" button is displayed. |
| `showTitle`? | `boolean` | Specifies whether the title of the current section/room/folder is displayed in the DocSpace manager. |
| `src` | `string` | The source URL to the iframe used to generate links. |
| `theme`? | [`TTheme`](TTheme.md) \| `string` | The UI theme settings. |
| `type`? | [`TEditorType`](TEditorType.md) | The platform type used by the browser and affects the parameters of the inserted object. |
| `viewAs`? | [`TManagerViewMode`](TManagerViewMode.md) | The default view mode - the way items are arranged in the DocSpace manager. |
| `viewTableColumns`? | `string` | The comma-separated string of table column names that are displayed in the table view mode. |
| `waiting`? | `boolean` | Specifies whether the frame is in the loading state. |
| `width`? | `string` | The iframe width measured in percentages or pixels. |
| `withBreadCrumbs`? | `boolean` | Specifies whether to show breadcrumb navigation in the selector mode. |
| `withSearch`? | `boolean` | Specifies whether to display "Search" in the selector mode. |
| `withSubtitle`? | `boolean` | Specifies whether to display a subtitle with additional comments or descriptions for the current directory. |

</APITable>
