---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEditorCustomization

The editor customization configuration.

```ts
type TEditorCustomization = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `anonymous`? | `object` | The anonymous access configuration. |
| `anonymous.label`? | `string` | A postfix added to the anonymous user name. The default value is "Guest". |
| `anonymous.request`? | `boolean` | Specifies whether to request for the anonymous name. The default value is `true`. |
| `autosave`? | `boolean` | Specifies whether to enable or disable the "Autosave" menu option. If set to `false`, only "Strict" co-editing mode can be selected, as "Fast" does not work without autosave. The default value is `true`. |
| `comments`? | `boolean` | Specifies whether to enable or disable the "Comments" menu button. Please note that in case you hide the "Comments" button, the corresponding commenting functionality will be available for viewing only, adding and editing comments will be unavailable. The default value is `true`. |
| `compactHeader`? | `boolean` | Specifies whether to display or hide the additional action buttons in the upper part of the editor window header next to the logo (`false`) or in the toolbar (`true`), making the header more compact. The default value is `false`. |
| `compactToolbar`? | `boolean` | Specifies whether the top toolbar type displayed is full (`false`) or compact (`true`). The default value is `false`. Starting from version 8.3, this setting is also available for the viewer. The default value for the view mode is `true`. |
| `compatibleFeatures`? | `boolean` | Specifies whether to use functionality only compatible with the OOXML format. For example, do not use comments on the entire document. The default value is `false`. |
| `forcesave`? | `boolean` | Specifies whether to add the request for the file force saving to the callback handler when saving the document within the document editing service (e.g. clicking the "Save" button, etc.). The default value is `false`. |
| `help`? | `boolean` | Specifies whether to display or hide the "Help" menu button. The default value is `true`. |
| `hideRightMenu`? | `boolean` | Specifies whether to display or hide the right menu on first loading. The default value is `true`. |
| `hideRulers`? | `boolean` | Specifies whether to display or hide the editor rulers. This parameter is available for the document and presentation editors. The default value is `false` for the document editor and `true` for presentations. |
| `integrationMode`? | `string` | The mode of embedding editors into the web page. The "embed" value disables scrolling to the editor frame when it is loaded as the focus is not captured. |
| `macros`? | `boolean` | Specifies whether to automatically run macros when the editor opens. The default value is `true`. Starting version 9.0.3, the `false` value completely disables macros — they cannot be run, added, or edited. The "Macros" button is also hidden from the "View" tab. |
| `macrosMode`? | `string` | The macros run mode when autostart is enabled. Can take the following values: "disable" - don't run macros at all, "warn" - warn about macros and ask permission to run them, "enable" - run all macros automatically. The default value is "warn". |
| `mentionShare`? | `boolean` | The hint that describes the event after mentions in a comment. If `true`, a hint indicates that the user will receive a notification and access to the document. If `false`, a hint indicates that the user will receive only a notification of the mention. The default value is `true`. |
| `mobileForceView`? | `boolean` | Specifies whether to open the mobile document editor in the view/edit mode on launch. The default value is `true`. |
| `plugins`? | `boolean` | Specifies whether the plugins will be launched and available. The default value is `true`. |
| `toolbarHideFileName`? | `boolean` | Specifies whether to display (`false`) or hide (`true`) the document title on the top toolbar. The default value is `false`. |
| `toolbarNoTabs`? | `boolean` | Specifies whether to distinctly display (`false`) or only highlight (`true`) the top toolbar tabs in toolbar. The default value is `false`. |
| `uiTheme`? | `string` | The editor theme settings. It can be set in two ways: "theme id" - the user sets the theme parameter by its id ("theme-light", "theme-classic-light", "theme-dark", "theme-contrast-dark", "theme-white", "theme-night"), "default theme" - the default dark or light theme value will be set ("default-dark", "default-light"). The default light theme is "theme-classic-light". |
| `unit`? | `string` | The measurement units used on the ruler and in dialog boxes. Can take the following values: "cm" - centimeters, "pt" - points, "inch" - inches. The default value is centimeters ("cm"). |
| `zoom`? | `number` | The document display zoom value measured in percent. Can take values larger than "0". For text documents and presentations it is possible to set this parameter to "-1" (fitting the document to page option) or to "-2" (fitting the document page width to the editor page). The default value is "100". |

</APITable>
