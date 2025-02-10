## Description

Inserts template fields for invoice information.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![Invoices](/assets/images/plugins/gifs/invoices.gif)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/invoices) and install it following the [desktop](../installing/onlyoffice-desktop-editors.md), [on-premises](../installing/onlyoffice-docs-on-premises.md), or [cloud](../installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Open the **Plugins** tab and press **Invoices**.
2. Press the **+** or **Mark** buttons to add template fields into the document.

## Plugin structure

Repository on GitHub: [invoices](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/invoices).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

``` json
{
  "name": "Invoices",
  "guid": "asc.{6B6715E5-A558-4F70-8058-40704CD659CF}",

  "variations": [
    {
      "description": "invoices",
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
- info.recalculate

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
