# Templates

Inserts document templates generated by the Document Builder script.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![Templates](/assets/images/plugins/gifs/templates.gif)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/templates) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Find the plugin on the **Plugins** tab.
2. Choose any document template you want to set and click it.

## Plugin structure

Repository on GitHub: [templates](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/templates).

1. *config.json*, *index.html*, and *templates.js*
2. Icons
3. The *templates* folder contains document templates.

## Config

``` json
{
  "name": "Document Templates",
  "guid": "asc.{94DF0B57-299D-4F68-AF6F-9A6BB53F3031}",

  "variations": [
    {
      "description": "templates",
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    }
  ]
}
```

## Methods and events

- button
- init
- onExternalMouseUp
- [info.recalculate](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
