Description

Moves the text cursor to the document start/end.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![MoveCursor](/content/img/plugins/gifs/move-cursor.gif)

Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_move_cursor) and install it following the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises), or [cloud](/plugin/installation/cloud) installation instructions.

Usage

1. Open the **Plugins** tab and press **Example move cursor**.
2. Press the **Start** button to move the text cursor to the document beginning.
3. Press the **End** button to move the text cursor to the document end.

Plugin structure

Repository on GitHub: <https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_move_cursor>.

1. *config.json*, *index.html*, and *code.js*
2. Icons

Config

```
{
    "name" : "Example move cursor",
    "guid" : "asc.{EF5735E0-69A7-4D4A-9ABE-F58FD70F488D}",

    "variations" : [
        {
            "description" : "Example move cursor",
            "url"         : "index.html",

            "icons": [ "resources/light/icon.png", "resources/light/icon@2x.png" ],
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
            "isViewer"        : false,
            "EditorsSupport"  : ["word"],

            "isVisual"        : true,
            "isModal"         : false,
            "isInsideMode"    : true,

            "initDataType"    : "none",
            "initData"        : "",

            "buttons"         : []

        }
    ]
}
```

Methods and events

* [button](/plugin/events/button)
* [init](/plugin/events/init)
* [executeMethod ("MoveCursorToStart")](/plugin/executemethod/text/movecursortostart)
* [executeMethod ("MoveCursorToEnd")](/plugin/executemethod/text/movecursortoend)

Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
