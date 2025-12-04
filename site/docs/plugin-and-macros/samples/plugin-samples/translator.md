# Translator

Connects the [Google Translate API](https://cloud.google.com/translate?hl=ru) for translating the selected text into other languages.

**Plugin type:** visual, non-system.

**Supported editors:** documents, spreadsheets, presentations.

**Analogues:** [Apertium](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/apertium), [DeepL](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/deepl).

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="jCciDL48KHE" />
```

## Installation

Available by default in the cloud, on-premises and desktop versions of ONLYOFFICE editors.

You can remove it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

The plugin guid: `{7327FC95-16DA-41D9-9AF2-0E7F449F6800}`.

## Usage

1. Select the text you want to translate.
2. Open the **Plugins** tab and press **Translator**.
3. Select the necessary language. The translation will be displayed in the plugin window immediately.

## Plugin structure

Repository on GitHub: [translator](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/translator).

1. *config.json*, *index.html*, and *translate.js*

2. Icons

3. The *translations* folder contains translations into Russian, German, Spanish, Czech, and French.

4. *index\_widget.html* specifies the translator widget

5. Third-party services:

   - [jQuery](https://jquery.com) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. License: [MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/translator/licenses/jQuery.license).
   - [Select2](https://select2.org/) gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options. License: [MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/translator/licenses/Select2.license).
   - [Google Translate API](https://cloud.google.com/translate?hl=ru) enables translation between languages. License: [MIT License](https://github.com/matheuss/google-translate-api/blob/master/LICENSE).

## Config

``` json
{
  "name": "Translator",
  "nameLocale": {
    "fr": "Traducteur",
    "es": "Traductor",
    "pt-BR": "Tradutor",
    "de": "Übersetzer"
  },
  "guid": "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
  "version": "1.0.6",

  "variations": [
    {
      "description": "Translate the selected text into other languages with Google Translate.",
      "descriptionLocale": {
        "fr": "Traduisez le texte sélectionné dans d'autres langues avec Google Translate.",
        "es": "Traduzca el texto seleccionado a otros idiomas con el Traductor de Google.",
        "pt-BR": "Traduza o texto selecionado para outros idiomas com o Google Translate.",
        "de": "Übersetzen Sie den ausgewählten Text in andere Sprachen mit Google Translate."
      },
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "icons2": [
        {
          "100%": {"normal": "resources/img/icon.png"},
          "125%": {"normal": "resources/img/icon@1.25x.png"},
          "150%": {"normal": "resources/img/icon@1.5x.png"},
          "175%": {"normal": "resources/img/icon@1.75x.png"},
          "200%": {"normal": "resources/img/icon@2x.png"}
        }
      ],
      "screens": ["resources/store/screen_1.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "text",
      "initOnSelectionChanged": true,
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities"]
      }
    }
  ]
}
```

## Methods and events

- [button](/site/docs/plugin-and-macros/customization/buttons.md)
- [init](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/overview/#how-it-works)
- onExternalMouseUp
- [onTranslate](/site/docs/plugin-and-macros/structure/localization.md#applying-translations-to-plugin)
- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [executeMethod ("GetVersion")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetVersion.md)
- [executeMethod ("GetSelectedText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectedText.md)
- [executeMethod ("GetSelectionType")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectionType.md)
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.editorType](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#editorType)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
