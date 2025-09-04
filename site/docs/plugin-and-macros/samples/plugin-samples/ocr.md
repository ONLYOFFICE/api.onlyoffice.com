# OCR

Connects the [TesseractJS-Core library](https://tesseract.projectnaptha.com/) for extracting text from an image (*.png* *.jpg*) and inserting it into the document. OCR supports more than 60 languages.

**Plugin type:** visual, non-system.

**Supported editors:** documents, spreadsheets, presentations.

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="SQE6HhgBylg"/>
```

## Installation

Available by default in the cloud, on-premises and desktop versions of ONLYOFFICE editors.

You can remove it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

The plugin guid: `{440EBF13-9B19-4BD8-8621-05200E58140B}`.

## Usage

1. Find the plugin on the **Plugins** tab.
2. Click the **Load File** button and select an image.
3. Choose the recognition language from the **Choose Language** pull-down menu.
4. Click the **Recognize** button. The text will appear to the right of the picture.
5. Click the **Insert text** button and the text will be inserted into the document at the text cursor position.

## Plugin structure

Repository on GitHub: [ocr](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ocr).

1. *config.json*, *index.html*, and *ocr.js*

2. Icons

3. The *translations* folder contains translations into Russian, German, Spanish, Czech, and French.

4. *index\_about.html* for the plugin **About** window

5. Third-party services:

   - [jQuery](https://jquery.com) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. License: [MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/jQuery.license).
   - [Select2](https://select2.org/) gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options. License: [MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/Select2.license).
   - [TesseractJS-Core](https://tesseract.projectnaptha.com/) is a pure Javascript port of the popularTesseract OCR engine. This library supportsmore than 100 languages, automatic textorientation and script detection, a simple interface for reading paragraph, word, and characterbounding boxes. License: [Apache License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/Tesseract.license), version 2.0.

## Config

``` json
{
  "name": "OCR",
  "nameLocale": {
    "fr": "Reconnaissance optique de caractères",
    "es": "Reconocimiento óptico de caracteres",
    "de": "OCR",
    "pt-BR": "OCR"
  },
  "guid": "asc.{440EBF13-9B19-4BD8-8621-05200E58140B}",
  "version": "2.0.0",

  "variations": [
    {
      "description": "Recognize text from pictures and screenshots and insert it into your documents.",
      "descriptionLocale": {
        "fr": "Reconnaissez le texte des images et des captures d'écran et insérez-le dans vos documents.",
        "es": "Reconozca el texto de imágenes y capturas de pantalla e insértelo en sus documentos.",
        "de": "Erkennen Sie Text auf Bildern und Screenshots und fügen Sie ihn in Ihre Dokumente ein.",
        "pt-BR": "Reconheça texto de imagens e capturas de tela e insira-o em seus documentos."
      },
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                    
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],

      "isViewer": false,
      "EditorsSupport": ["word"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",

      "buttons": [
        {
          "text": "Insert Text",
          "primary": true,
          "textLocale": {
            "fr": "Insérer le texte",
            "es": "Insertar texto",
            "de": "Text einfügen"
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

      "size": [592, 100],
      "store": {
        "background": {
          "light": "#444444",
          "dark": "#444444"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png",
          "resources/store/screenshots/screen_3.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "work"]
      }
    },
    {
      "description": "About",
      "descriptionLocale": {
        "fr": "À propos",
        "es": "Sobre programa",
        "de": "Über"
      },

      "url": "index_about.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        }
      ],

      "size": [392, 147]
    }
  ]
}
```

## Methods and events

- button
- init
- onTranslate
- [resizeWindow](/docs/plugin-and-macros/customization/windows-and-panels.md#interacting-with-a-window)
- [info.recalculate](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## Best practices

- Screenshots & scanned docs – quickly digitize content from images or scanned PDFs.
- Multilingual workflows – recognition supports 60+ languages, useful for international teams.
- Editing efficiency – insert OCR results directly into the document to avoid copy-paste from external tools.
- Debugging tip – if recognition fails, try resizing or enhancing image contrast before running OCR.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
