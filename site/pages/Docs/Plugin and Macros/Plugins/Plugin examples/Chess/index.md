Description

Inserts a Chess Board object into the document editor. The object makes it possible to edit and save the chess position in the *FEN* format.

**Plugin type:** visual, OLE object, non-system.

**Supported editors:** documents, spreadsheets, presentations.

![Chess](/content/img/plugins/gifs/chess.gif)

Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/chess) and install it following the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises), or [cloud](/plugin/installation/cloud) installation instructions.

Usage

1. Open the **Plugins** tab and press **Chess**.
2. A chessboard window will appear on the screen and you can play chess.
3. To interrupt the game, press the **Ok** button. The game preview in form of an image will appear in your document with all the changes saved. Click it to continue the game.

Plugin structure

Repository on GitHub: <https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/chess>.

1. *config.json*, *index.html*, and *chess.js*
2. Icons
3. *index\_about.html* for the plugin **About** window

Config

```
{
    "name": "Chess",
    "nameLocale": {
        "fr": "Échecs",
        "es": "Ajedrez",
        "pt-BR": "Xadrez",
        "de": "Schach"
    },
    "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
    "version": "1.0.1",

    "variations": [
        {
            "description": "Play chess with other collaborators right in the editors. ",
            "descriptionLocale": {
                "fr": "Jouez aux échecs avec vos collaborateurs directement dans les éditeurs.",
                "es": "Juegue al ajedrez con otros colaboradores directamente en los editores.",
                "pt-BR": "Jogue xadrez com outros colaboradores diretamente nos editores.",
                "de": "Spielen Sie Schach mit anderen Mitautoren direkt in den Editoren."
            },
            "url" : "index.html",

            "icons" : ["resources/light/icon.png", "resources/light/icon@2x.png"],
            "icons2": [
                {
                    "style" : "light",
                    
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
                    "style" : "dark",
                    
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
            "isViewer"            : true,
            "isDisplayedInViewer" : false,
            "EditorsSupport"      : ["word", "cell", "slide"],

            "isVisual"     : true,
            "isModal"      : true,
            "isInsideMode" : false,

            "initDataType" : "ole",
            "initData"     : "",

            "isUpdateOleOnResize" : true,

            "buttons" : [
                { "text": "Ok", "primary": true, "isViewer": false },
                { "text": "Cancel", "primary": false } 
            ],

            "store": {
                "background": {
                    "light" : "#444444",
                    "dark" : "#444444;"
                },
                "screenshots" : [
                    "resources/store/screenshots/screen_1.png",
                    "resources/store/screenshots/screen_2.png"
                ],
                "icons"       : {
                    "light" : "resources/store/icons",
                    "dark"  : "resources/store/icons"
                },
                "categories": ["entertainment", "specAbilities"]
            }
        },
        {
            "description" : "About",
            "url"         : "index_about.html",

            "icons"               : ["resources/light/icon.png", "resources/light/icon@2x.png"],
            "isViewer"            : true,
            "isDisplayedInViewer" : false,
            "EditorsSupport"      : ["word", "cell", "slide"],

            "isVisual"     : true,
            "isModal"      : true,
            "isInsideMode" : false,

            "initDataType" : "none",
            "initData"     : "",

            "buttons" : [ { "text": "Ok", "primary": true } ],

            "size" : [392, 147]
        }
    ]
}
```

Methods and events

* [button](/plugin/events/button)
* [init](/plugin/events/init)
* [onExternalMouseUp](/plugin/events/onexternalmouseup)
* [executeMethod ("AddOleObject")](/plugin/executemethod/common/addoleobject)
* [executeMethod ("EditOleObject")](/plugin/executemethod/common/editoleobject)
* [info.data](/plugin/info#data)
* [info.guid](/plugin/info#guid)
* [info.height](/plugin/info#height)
* [info.imgSrc](/plugin/info#imgSrc)
* [info.mmToPx](/plugin/info#mmToPx)
* [info.objectId](/plugin/info#objectId)
* [info.resize](/plugin/info#resize)
* [info.width](/plugin/info#width)

Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
