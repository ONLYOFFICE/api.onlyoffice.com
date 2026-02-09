# News

Find headlines across news sources and open articles in your browser.

**Plugin type:** visual, non-system.

**Supported editors:** documents

  ![News](/assets/images/plugins/news.png#gh-light-mode-only)![News](/assets/images/plugins/news.dark.png#gh-dark-mode-only)

## Installation


Available by default in the cloud, on-premises and desktop versions of ONLYOFFICE editors.

You can remove it following the desktop, on-premises, or cloud installation instructions.

The plugin guid: `{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}`.

## Usage

1. Choose Provider: Select your preferred news provider (GNews or TheNewsAPI).
2. Get API Key: Register at your chosen provider's website and get your free API key.
3. Find the plugin on the **Plugins** tab.
4. Enter your API key when prompted.
5. Search: Use the Search tab to find articles by keywords.
6. Headlines: Use the Top Headlines tab to browse news by category.
7. Open Articles: Click on any article to open it in your browser.


## Plugin structure

Repository on GitHub: [News](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/news).

1. *config.json*, *index.html*, and *scripts/code_new.js*

2. Icons and screenshots (*resources/store/icons*, *resources/store/screenshots*)

3. Scripts: *scripts/code_new.js*, *scripts/api.js*, *scripts/providers.js*, *scripts/storage.js*, *scripts/ui.js*, *scripts/translations.js*

4. The *translations* folder contains UI translations

5. *index_about.html* for the plugin **About** window

6. Third-party services:

    - [GNews API](https://gnews.io) - news search and headlines API
    - [TheNewsAPI](https://www.thenewsapi.com) - news search and headlines API
    - [WorldNewsAPI](https://worldnewsapi.com) - news search and headlines API

## Config

```json
{
  "name": "News",
  "guid": "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
  "version": "1.0.0",
  "baseUrl": "",
  "variations": [
    {
      "description": "Search through millions of articles from over 80,000 large and small news sources and blogs.",
      "descriptionLocale": {
        "ru": "Поиск среди миллионов статей из более чем 80 000 крупных и малых новостных источников и блогов.",
        "fr": "Recherchez parmi des millions d'articles",
        "es": "Busque entre millones de artículos de más de 80,000 fuentes de noticias y blogs grandes y pequeños.",
        "de": "Durchsuchen Sie Millionen von Artikeln aus über 80.000 großen und kleinen Nachrichtenquellen und Blogs.",
        "br": "Pesquise entre milhões de artigos de mais de 80.000 fontes de notícias e blogs grandes e pequenos.",
        "it": "Cerca tra milioni di articoli di oltre 80.000 fonti, tra notizie e blog grandi e piccoli.",
        "zh": "在来自8万多家新闻媒体和博客的数百万篇文章中快速搜索所需信息。",
        "ja": "80,000を超える大小のニュースソースとブログから数百万の記事を検索します。",
        "cs-CZ": "Prohledejte miliony článků z více než 80 000 velkých a malých zpravodajských zdrojů a blogů."
      },
      "url": "index.html",
      "icons": [
        "resources/store/icons/icon.png",
        "resources/store/icons/icon@2x.png"
      ],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "none",
      "initData": "",
      "isUpdateOleOnResize": true,
      "buttons": [],
      "size": [300, 0],
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "screenshots": [
          "resources/store/screenshots/screenshot1.png",
          "resources/store/screenshots/screenshot2.png",
          "resources/store/screenshots/screenshot3.png"
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
        "de": "Über",
        "es": "Acerca de",
        "fr": "À propos",
        "it": "Informazioni",
        "pt": "Sobre",
        "ru": "О программе",
        "ja": "について",
        "zh": "关于",
        "cs": "O aplikaci",
        "si": "O programu",
        "sq": "Rreth"
      },
      "url": "index_about.html",
      "icons": [
        "resources/store/icons/icon.png",
        "resources/store/icons/icon@2x.png"
      ],
      "isViewer": false,
      "EditorsSupport": ["word"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",
      "initData": "",
      "isUpdateOleOnResize": true,
      "buttons": [
        {
          "text": "Ok",
          "textLocale": {
            "de": "OK",
            "es": "Aceptar",
            "fr": "OK",
            "it": "OK",
            "pt": "OK",
            "ru": "OK",
            "ja": "OK",
            "zh": "确定",
            "cs": "OK",
            "si": "V redu",
            "sq": "OK"
          },
          "primary": true
        }
      ],
      "size": [392, 147]
    }
  ]
}
```

## Methods and events

- [button](/docs/plugin-and-macros/customization/buttons.md)
- [init](/docs/plugin-and-macros/interacting-with-editors/overview/#how-it-works)
- [onTranslate](/docs/plugin-and-macros/structure/localization.md#applying-translations-to-plugin)
- [onExternalMouseUp](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onExternalMouseUp)
- [onMethodReturn](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-methods.md)
- [executeCommand](/docs/document-builder/builder-framework/Python/CDocBuilder/ExecuteCommand)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md) object


## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).