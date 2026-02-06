# Text Highlighter

Search for text and apply highlighting, color, and formatting styles in the document. This plugin allows you to find specific words or phrases and customize their appearance with various colors, text formatting options, and highlighting effects.

**Plugin type:** visual, panel, non-system.

**Supported editors:** documents, PDF.

## Result

![TextHighlighter](/assets/images/plugins/text-highlighter-image.png#gh-light-mode-only)
![TextHighlighter](/assets/images/plugins/text-highlighter-image-dark-mode.png#gh-dark-mode-only)

## Installation

Download this plugin from [GitHub](https://github.com/raza2004/onlyoffice.github.io/tree/master/sdkjs-plugins/content/texthighlighter) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

The plugin guid: `{07FD8DFA-DFE0-4089-AL24-0730933CC804}`.

## Usage

1. Find the plugin in the **Plugins** tab.
2. The plugin opens as a side panel.
3. Enter text to search or select text directly in the document (the selection will automatically populate the search field).
4. Configure your highlighting preferences:
   - **Ignore case**: Check this option to make the search case-insensitive.
   - **Highlight color**: Choose from Yellow, Green, Blue, Red, or No Fill.
   - **Text color**: Click the dropdown to open a color picker and select a custom text color.
   - **Text formatting**: Expand this section to apply Bold, Italic, Underline, or Strikethrough formatting.
5. Click the **Apply** button to highlight all matching text in the document.
6. After applying:
   - The plugin shows the number of matches found.
   - Click **Revert** to undo the highlighting.
   - Click **Highlight more** to search for a different term.

## Plugin Structure

Repository on GitHub: [texthighlighter](https://github.com/raza2004/onlyoffice.github.io/tree/master/sdkjs-plugins/content/texthighlighter).

1. **config.json**, **index.html**, and **code.js** - Core plugin files

2. **Icons** - Light and dark theme icons at multiple resolutions (SVG format):
   - Standard: 100%, 125%, 150%, 175%, 200%
   - Supports both flat and flatDark themes

3. **The translations folder** contains translations into Russian, German, Spanish, Czech, and French.

4. **styles.css** - Custom styling for the plugin interface including:
   - Responsive layout
   - Dark mode support
   

5. **Third-party libraries**:
   - [Pickr](https://simonwep.github.io/pickr/) - A modern, lightweight color picker library. License: [MIT License](https://github.com/Simonwep/pickr/blob/master/LICENSE).
   - [OnlyOffice Plugin SDK](https://github.com/ONLYOFFICE/sdkjs-plugins) - Official OnlyOffice plugin API. License: [AGPL-3.0](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/LICENSE).

## Config

```json
{
  "name": "Text Highlighter",
  "nameLocale": {
    "en-US": "Text Highlighter",
    "ru": "Выделение текста",
    "de": "Texthervorhebung",
    "fr": "Surligneur de texte",
  },
  "version": "1.0.0",
  "baseUrl": "https://raza2004.github.io/onlyoffice.github.io/sdkjs-plugins/content/texthighlighter/",
  "guid": "asc.{07FD8DFA-DFE0-4089-AL24-0730933CC804}",
  "manifestVersion": "7.3.0",
  "variations": [
    {
      "description": "This plugin allows you to search for text and apply highlighting, color, and formatting styles in the document.",
      "descriptionLocale": {
        "en": "This plugin allows you to search for text and apply highlighting, color, and formatting styles in the document.",
        "ru": "Этот плагин позволяет вам искать текст и применять выделение, цвет и стили форматирования в документе.",
        "de": "Dieses Plugin ermöglicht das Suchen von Text und das Anwenden von Hervorhebungen, Farben und Formatierungen im Dokument.",
        "fr": "Ce plugin vous permet de rechercher du texte et d'appliquer des styles de surlignage, de couleur et de formatage dans le document.",
       
      },
      "url": "index.html",
      "type": "panel",
      "size": [300, 600],
      "isViewer": true,
      "EditorsSupport": ["word", "pdf"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "text",
      "isUpdateOleOnResize": true,
      "initOnSelectionChanged": true,
      "events": [
        "onSelectionChanged",
        "onClick",
        "onApply",
        "onGetSelectedText"
      ],
      "methods": ["ApplyHighlight", "GetSelectedText"],
      "buttons": [],
      "icons": ["resources/light/icon.svg", "resources/light/icon@2x.svg"],
      "icons2": [
        {
          "theme": "flat",
          "style": "light",
          "100%": { "normal": "resources/light/icon.svg" },
          "200%": { "normal": "resources/light/icon@2x.svg" },
          "default": { "normal": "resources/light/icon.svg" }
        },
        {
          "theme": "flatDark",
          "style": "dark",
          "100%": { "normal": "resources/dark/icon.svg" },
          "200%": { "normal": "resources/dark/icon@2x.svg" }
        }
      ],
      "store": {
        "background": {
          "light": "#107cbc",
          "dark": "#5f55af"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png",
        ],
        "categories": ["work", "specAbilities"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        }
      }
    }
  ]
}
```

## Methods and Events

### Methods

- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/#callcommand) - Execute document operations
- [executeMethod ("Search")](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Search) - Search for text in the document
- [executeMethod ("GetRangeBySelect")](/docs/plugin-and-macros/interacting-with-editors/common-api/Methods/GetRangeBySelect) - Get the selected range
- [executeMethod ("Undo")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/Undo/) - Undo the last operation

### Events

- [init](/docs/plugin-and-macros/interacting-with-editors/overview/#how-it-works) - Initialize the plugin
- [onThemeChanged](/docs/plugin-and-macros/interacting-with-editors/overview/) - Handle theme changes (dark/light mode)
- [onTranslate](/docs/plugin-and-macros/structure/localization.md#applying-translations-to-plugin) - Apply translations
- [onSelectionChanged](/docs/plugin-and-macros/interacting-with-editors/overview/) - Respond to text selection changes
- [onCommandCallback](/docs/plugin-and-macros/interacting-with-editors/overview/#oncommandcallback) - Handle results from callCommand

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
