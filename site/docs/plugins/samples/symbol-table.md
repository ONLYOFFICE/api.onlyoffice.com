---
description: Insert special symbols from a character table.
tags: ["Docs", "Plugins", "Ready-to-use", "Documents", "Spreadsheets", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# Symbol table

Inserts special symbols into the document.

**Plugin type:** visual, non-system.

**Supported editors:** documents, spreadsheets, presentations.

<Video src="/assets/images/plugins/webm/symbol-table" />

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/symboltable) and install it following the [desktop](../development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](../development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](../development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Find the plugin on the **Plugins** tab.
2. Choose any character you want to paste (you can enter its unicode Hex value by yourself). You can choose the characters range to quickly navigate through them.
3. Choose the characters font.
4. Press the **Insert** button.

## Plugin structure

Repository on GitHub: [symboltable](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/symboltable).

1. *config.json*, *index.html*, and *symboltable.js*

2. Icons

3. The *translations* folder contains translations into Russian, German, Spanish, Czech, and French.

4. *character.js* contains all the characters that the plugin supports.

5. Third-party services:

   - [jQuery](https://jquery.com) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. License: [MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/symboltable/licenses/jQuery.license).
   - [Select2](https://select2.org/) gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options. License: [MIT](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/symboltable/licenses/Select2.license).

## Config

```json
{
  "name": "Symbol Table",
  "nameLocale": {
    "fr": "Table des symboles",
    "es": "Tabla de símbolos",
    "de": "Symboltabelle"
  },
  "guid": "asc.{03C18A8D-8E01-444A-86EB-EDDFA7773157}",
  "baseUrl": "",

  "variations": [
    {
      "description": "Symbol Table",
      "descriptionLocale": {
        "fr": "Table des symboles",
        "es": "Tabla de símbolos",
        "de": "Symboltabelle"
      },
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "html",
      "initData": "",

      "buttons": [
        {
          "text": "Insert",
          "primary": true,
          "textLocale": {
            "fr": "Insérer",
            "es": "Insertar",
            "de": "Einfügen"
          }
        },
        {
          "text": "Cancel",
          "primary": false,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar",
            "de": "Abbrechen"
          }
        }
      ],

      "size": [600, 700]
    }
  ]
}
```

## Methods and events

- [button](../customization/custom-buttons.md)
- [init](../../interacting-with-editors/overview/#how-it-works)
- [onExternalMouseUp](../interacting-with-editors/form-api/Events/onExternalMouseUp.md)
- [onMethodReturn](../interacting-with-editors/overview/asc-plugin.md#onmethodreturn)
- [onTranslate](../configuration/localization.md#applying-translations-to-plugin)
- [executeMethod ("GetFontList")](../interacting-with-editors/document-api/Methods/GetFontList.md)
- [executeMethod ("PasteHtml")](../interacting-with-editors/document-api/Methods/PasteHtml.md)
- [info.editorType](../interacting-with-editors/overview/asc-plugin.md#info-object)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
