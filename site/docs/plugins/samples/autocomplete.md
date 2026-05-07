---
description: Provide input suggestions from a dictionary while typing.
tags: ["Docs", "Plugins", "Ready-to-use", "Documents", "Spreadsheets", "Presentations"]
---

# Autocomplete

Helps the user to input text quickly.

**Plugin type:** input helper, system.

**Supported editors:** documents, spreadsheets, presentations.

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="DhyqzMsyirM"/>
```

## Installation

Download this plugin from the [ONLYOFFICE App Directory](https://www.onlyoffice.com/app-directory/en/autocomplete) and install it following the [desktop](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation.md), [on-premises](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation.md), or [cloud](/docs/plugins/development-workflow/installing-and-testing/cloud-saas-installation.md) installation instructions.

## Usage

1. Start typing a word. If the plugin finds some words in the dictionary, an input helper window with the found words will appear.
2. Select the required option using the **Down/Up arrow** button and press the **Enter** button to complete the word.

## Plugin structure

Repository on GitHub: [autocomplete](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/autocomplete).

1. *config.json*, *index.html*, and *code.js*
2. Icons
3. The *translations* folder which contains translations into Russian, German, Spanish, Czech and French.
4. The *dictionary.js* file contains words for autocompletion.

## Config

``` json
{
  "name": "Autocomplete",
  "nameLocale": {
    "fr": "Autocomplete",
    "es": "Autocomplete",
    "pt-BR": "Preenchimento automático",
    "de": "Autocomplete"
  },
  "guid": "asc.{A103601F-FDA0-418A-BC37-A514031894C0}",
  "version": "1.0.0",

  "variations": [
    {
      "description": "Use an input assistant while typing in the editors.",
      "descriptionLocale": {
        "fr": "Utilisez un assistant de saisie pendant que vous tapez dans les éditeurs.",
        "es": "Utilice un asistente de entrada mientras escribe en los editores.",
        "pt-BR": "Use um assistente de entrada enquanto digita nos editores.",
        "de": "Verwenden Sie einen Assistenten bei der Eingabe in den Editoren."
      },
      "url": "index.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "screens": ["resources/store/screen_1.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "slide", "cell"],
      "isVisual": false,
      "isSystem": true,
      "initDataType": "none",
            
      "events": [
        "onInputHelperClear",
        "onInputHelperInput"
      ],
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "work", "recommended"]
      }
    }
  ]
}
```

## Methods and events

- [button](/docs/plugins/customization/custom-buttons.md)
- [init](/docs/plugins/interacting-with-editors/overview/#how-it-works)
- [inputHelper_onSelectItem](/docs/plugins/customization/input-helper.md)
- [onInputHelperClear](/docs/plugins/customization/input-helper.md)
- [onInputHelperInput](/docs/plugins/customization/input-helper.md)
- [createInputHelper](/docs/plugins/customization/input-helper.md#creating-an-input-helper)
- [executeMethod ("InputText")](/docs/plugins/interacting-with-editors/document-api/Methods/InputText.md)
- [getInputHelper](/docs/plugins/customization/input-helper.md#getting-an-input-helper)
- [InputHelper.createWindow](/docs/plugins/customization/input-helper.md#createwindow)
- [InputHelper.getItems](/docs/plugins/customization/input-helper.md#getitems)
- [InputHelper.getScrollSizes](/docs/plugins/customization/input-helper.md#getscrollsizes)
- [InputHelper.setItems](/docs/plugins/customization/input-helper.md#setitems)
- [InputHelper.show](/docs/plugins/customization/input-helper.md#show)
- [InputHelper.unShow](/docs/plugins/customization/input-helper.md#unshow)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
