Description

Protects a document using a watermark.

**Plugin type:** non-visual, system.

**Supported editors:** documents, spreadsheets, presentations.

![Settings](/content/img/plugins/gifs/settings.gif)

Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/settings) and install it following the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises), or [cloud](/plugin/installation/cloud) installation instructions.

Usage

1. After adding the plugin to the editor, just reopen the document. A watermark will be displayed.

Plugin structure

Repository on GitHub: <https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/settings>.

1. *config.json*, *index.html*, and *code.js*

Config

```
{
    "name"       : "settings",
    "guid"       : "asc.{CF3A000F-C6B4-451D-AC0B-F3DDAB1880D2}",
    "baseUrl"    : "",
    "variations" : [
        {
            "description"         : "settings",
            "url"                 : "index.html",

            "isViewer"            : true,
            "EditorsSupport"      : [ "word", "cell", "slide" ],

            "isSystem"            : true,
            "isVisual"            : false,

            "initDataType"        : "none",
            "initData"            : "",

            "buttons"             : []
        }
    ]
}
```

Methods and events

* [button](/plugin/events/button)
* [init](/plugin/events/init)
* [executeMethod ("SetProperties")](/plugin/executemethod/common/setproperties)

Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
