Description

Helps the user to input text quickly.

**Plugin type:** input helper, system.

**Supported editors:** documents, spreadsheets, presentations.

![Autocomplete](/content/img/plugins/gifs/autocomplete.gif)

Installation

Download this plugin from the [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory/autocomplete) and install it following the [desktop](/plugin/installation/desktop), [on-premises](/plugin/installation/onpremises), or [cloud](/plugin/installation/cloud) installation instructions.

Usage

1. Start typing a word. If the plugin finds some words in the dictionary, an input helper window with the found words will appear.
2. Select the required option using the **Down/Up arrow** button and press the **Enter** button to complete the word.

Plugin structure

Repository on GitHub: <https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/autocomplete>.

1. *config.json*, *index.html*, and *code.js*
2. Icons
3. The *translations* folder which contains translations into Russian, German, Spanish, Czech and French.
4. The *dictionary.js* file contains words for autocompletion.

Config

```
{
    "name": "Autocomplete",
    "nameLocale": {
        "fr": "Autocomplete",
        "es": "Autocomplete",
        "pt-BR": "Preenchimento automático",
        "de": "Autocomplete"
    },
    "guid" : "asc.{A103601F-FDA0-418A-BC37-A514031894C0}",
    "version" : "1.0.0",

    "variations" : [
        {
            "description": "Use an input assistant while typing in the editors.",
            "descriptionLocale": {
                "fr": "Utilisez un assistant de saisie pendant que vous tapez dans les éditeurs.",
                "es": "Utilice un asistente de entrada mientras escribe en los editores.",
                "pt-BR": "Use um assistente de entrada enquanto digita nos editores.",
                "de": "Verwenden Sie einen Assistenten bei der Eingabe in den Editoren."
            },
            "url"                 : "index.html",
            "icons"               : ["resources/img/icon.png", "resources/img/icon@2x.png"],
            "screens"             : ["resources/store/screen_1.png"],
            "isViewer"            : false,
            "EditorsSupport"      : ["word", "slide", "cell"],
            "isVisual"            : false,
            "isSystem"            : true,
            "initDataType"        : "none",
            
            "events" : [
                "onInputHelperClear",
                "onInputHelperInput"
            ],
            "store": {
                "background": {
                    "light" : "#F5F5F5",
                    "dark" : "#444444"
                },
                "screenshots" : ["resources/store/screenshots/screen_1.png"],
                "icons"       : {
                    "light" : "resources/store/icons",
                    "dark"  : "resources/store/icons"
                },
                "categories": ["specAbilities", "work", "recommended"]
            }
        }
    ]
}
```

Methods and events

* [button](/plugin/events/button)
* [init](/plugin/events/init)
* [inputHelper\_onSelectItem](/plugin/events/inputhelper_onselectitem)
* [onInputHelperClear](/plugin/events/oninputhelperclear)
* [onInputHelperInput](/plugin/events/oninputhelperinput)
* [createInputHelper](/plugin/createinputhelper)
* [executeMethod ("InputText")](/plugin/executemethod/common/inputtext)
* [getInputHelper](/plugin/getinputhelper)
* [InputHelper.createWindow](/plugin/inputhelper/createwindow)
* [InputHelper.getItems](/plugin/inputhelper/getitems)
* [InputHelper.getScrollSizes](/plugin/inputhelper/getscrollsizes)
* [InputHelper.setItems](/plugin/inputhelper/setitems)
* [InputHelper.show](/plugin/inputhelper/show)
* [InputHelper.unShow](/plugin/inputhelper/unshow)

Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
