Description

Loads custom fields from the document.

The fields should be already added to the document with the [Example add custom fields](/plugin/example/addcustomfields) plugin.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![LoadCustomFields](/content/img/plugins/gifs/load-custom-fields.gif)

Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load) and install it following the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises), or [cloud](/plugin/installation/cloud) installation instructions.

Usage

1. Open the **Plugins** tab and press **Example load custom fields**.
2. To answer a **simple question**, type your answer in the **type here...** field.
3. To answer a **question with drop down variants**, select one option.
4. Press the **Next** button to go to the next question or the **Back** button to go back to the previous one.
5. When all the questions are answered, the plugin will be automatically closed. Your answers will appear in the document.

Plugin structure

Repository on GitHub: <https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load>.

1. *config.json*, *index.html*, and *code.js*
2. Icons

Config

```
{
    "name" : "Example loading custom fields",
    "guid" : "asc.{E5A81B17-C871-4C4B-A90A-62D3A7EC0751}",

    "variations" : [
        {
            "description" : "Example loading custom fields",
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
            "isViewer"        : true,
            "EditorsSupport"  : ["word"],

            "isVisual"        : true,
            "isModal"         : true,
            "isInsideMode"    : false,

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
* [onMethodReturn](/plugin/events/onmethodreturn)
* [executeMethod ("GetAllContentControls")](/plugin/executemethod/text/getallcontentcontrols)
* [executeMethod ("InsertAndReplaceContentControls")](/plugin/executemethod/text/insertandreplacecontentcontrols)

Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
