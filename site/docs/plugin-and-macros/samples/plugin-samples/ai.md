# AI

Connects an AI provider (e.g., OpenAI, DeepSeek) to ONLYOFFICE editors, enabling intelligent text generation, editing, summarization, and automatic macro creation.

**Plugin type:** background.  

**Supported editors:** documents, spreadsheets, presentations, PDF.

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="oQbH8JIe3eE"/>
```

## Installation

Available by default in ONLYOFFICE Enterprise Edition, Community Edition (Docs + Workspace), and ONLYOFFICE cloud.

You can also download this plugin from the [ONLYOFFICE App Directory](https://www.onlyoffice.com/app-directory/en/ai) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md) installation instructions.

Starting from version 9.0.4, the AI plugin was added to the server and desktop distributions built with ONLYOFFICE branding.

The plugin guid: `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`.

## Usage

1. Open the **Plugins** tab and click the **Plugin Manager** icon.
2. Click the **Background Plugins** button and activate the **AI** switch.
3. Find a new **AI** tab in the top toolbar of ONLYOFFICE editors.
4. Choose one of the buttons:
   - **Settings**: the configuration panel to select your AI provider, enter the API key, and select one of its models;
   - **Chatbot**: start a conversation with the AI to ask questions, rewrite text, brainstorm ideas, and more;
   - **Summarization**: automatically summarize the entered text and choose ways to insert the result;
   - **Translation**: translate selected text using the configured AI service.
5. You can use the plugin on selected text. To do this, select the text, right-click it, and in the AI menu choose one of the options: **Summarization**, **Text analysis**, **Translate**, **Image**, or **Chatbot**.
6. The plugin will respond based on the configured AI model.
7. Insert the response into the document or use it for your needs.

Example:  Select a paragraph → Right-click → AI → Summarization → Insert summary at cursor.

## Configuring

To start using the plugin, you need to set up an AI provider:

1. Go to the **AI** tab, click **Settings** to open the configuration window.
2. Select **Edit AI models** and click **Add**.
3. Choose an AI provider from the list or add new AI models by entering your API keys.
4. In the row of icons, select what the model is used for: *Text*, *Images*, *Embeddings*, *Audio Processing*, *Content Moderation*, *Realtime Tasks*, *Coding Help*, *Visual Analysis*.
5. Click **OK** to save your settings and complete the connection process.

For details on adding a custom provider, refer to this [blog post](https://www.onlyoffice.com/blog/2025/03/how-to-add-a-custom-provider-to-the-onlyoffice-ai-plugin).

## Plugin structure

Repository on GitHub: [ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai).

1. *config.json*, *index.html*, and *code.js*
2. Icons
3. The translations folder contains translations into several languages.
4. Third-party services:
   This plugin supports OpenAI, and custom AI providers. API key and model configuration are required. License and terms depend on the provider used.

## Config

``` json
{
    "name" : "AI",
    "nameLocale": {
        "fr": "AI",
        "es": "AI",
        "de": "AI",
        "cs": "AI",
        "zh": "AI",
        "pt-BR": "AI",
        "sr-Cyrl-RS": "AI",
        "sr-Latn-RS": "AI",
        "ja-JA": "AI",
        "sq-AL": "AI",
        "it": "IA",
        "ar-SA": "AI"
    },

    "guid" : "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
    "version": "2.4.2",
    "minVersion" : "8.2.0",

    "variations" : [
        {
            "description": "Use the AI chatbot to perform tasks which involve understanding or generating natural language or code.",
            "descriptionLocale": {
                "fr": "Utilisez le chatbot AI pour effectuer des tâches qui impliquent la compréhension ou la génération de langage naturel ou de code.",
                "es": "Utilice el chatbot AI para realizar tareas que impliquen la comprensión o generación de lenguaje natural o de código.",
                "pt-BR": "Use o chatbot AI para realizar tarefas que envolvam compreensão ou geração de linguagem ou código natural.",
                "de": "Verwenden Sie den AI-Chatbot, um Aufgaben auszuführen, die das Verstehen oder Generieren von natürlicher Sprache oder Code beinhalten.",
                "cs": "Použijte chatbota AI k provádění úkolů, který zahrnuje porozumění nebo generování přirozeného jazyka nebo kódu.",
                "zh": "使用 AI 聊天机器人完成有关理解、生成自然语言或代码的任务。",
                "sr-Cyrl-RS": "Користите AI чет робота за обављање задатака који укључују разумевање или генерисање природног језика или кода.",
                "sr-Latn-RS": "Koristite AI čet robota za obavljanje zadataka koji uključuju razumevanje ili generisanje prirodnog jezika ili koda.",
                "ja-JA": "自然言語やコードの理解または生成が必要なタスクを行うには、AIチャットボットを使用できます。",
                "sq-AL": "Shtoni dhe selektoni modele AI për detyra të ndryshme.",
                "it": "Utilizza il chatbot dell'IA per eseguire attività che implicano la comprensione o la generazione di codice o linguaggio naturale.",
                "ar-SA": "استخدموا روبوت المحادثة الذكي لتنفيذ المهام التي تتطلب فهمًا أو إنتاجًا للغة الطبيعية أو البرمجة."
            },

            "url"         : "index.html",

            "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)",

            "isViewer"            : false,
            "EditorsSupport"      : ["word", "cell", "slide", "pdf"],
            "type"                : "background",
            "initDataType"        : "none",
            "buttons"             : [],
            "events"              : ["onAIPluginSettings", "onContextMenuShow", "onContextMenuClick", "onToolbarMenuClick"],

            "store": {
                "background": {
                    "light" : "linear-gradient(90deg, #F9B6FF 0%, #E370EE 102.01%)",
                    "dark" : "linear-gradient(90deg, #F9B6FF 0%, #E370EE 102.01%)"
                },
                "screenshots" :
                [
                    "resources/store/screenshots/screen_1.png",
                    "resources/store/screenshots/screen_2.png",
                    "resources/store/screenshots/screen_3.png",
                    "resources/store/screenshots/screen_4.png",
                    "resources/store/screenshots/screen_5.png",
                    "resources/store/screenshots/screen_6.png"
                ],
                "icons" : {
                    "light" : "resources/store/icons",
                    "dark"  : "resources/store/icons"
                },
                "categories": ["specAbilities", "work", "recommended"]
            }
        }
    ],

    "onlyofficeScheme": true
}
```

## Initialization flow

Because this is a background plugin, initialization is slightly different from UI plugins.
```js
window.Asc.plugin.init = function() {
  console.log("AI plugin initialized");

  // Example: preload provider info
  window.Asc.plugin.executeMethod("GetPluginInfo", [], function(info) {
    console.log("Plugin Info:", info);
  });
};

window.Asc.plugin.onThemeChanged = function(theme) {
  document.body.style.background = theme.type === "dark" ? "#121212" : "#fff";
};
```

Best practices:
- Use Asc.plugin.init for loading provider settings and attaching events.
- Always check editor type (info.editorType) before executing text operations.
- Wrap async AI calls with error handling → providers often return 400/401 errors for misconfigured keys.

## Methods and events

- init
- [button](/docs/plugin-and-macros/customization/buttons.md)
- [onTranslate](/docs/plugin-and-macros/structure/localization.md#applying-translations-to-plugin)
- [attachEditorEvent](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-attach-events.md#option-1-using-the-attacheditorevent-method)
- onThemeChanged
- onThemeChangedBase
- [executeMethod ("CloseWindow")](/docs/plugin-and-macros/customization/windows-and-panels.md#closing-a-window)
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- info.aiPluginSettings
- [info.editorType](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#editorType)
- [info.data](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#data)
- [info.guid](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#guid)
- [info.width](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#width)

## Debugging

- Check provider connection: use browser dev tools (network tab) to see if requests reach the AI API.
- Desktop editors: run in developer mode with Asc.editor.installDeveloperPlugin.
- Log everything:
```js
console.log("Editor Type:", window.Asc.plugin.info.editorType);
console.log("AI Settings:", window.Asc.plugin.info.aiPluginSettings);
```

| Error            | Likely Cause                           | Fix                                      |
| ---------------- | -------------------------------------- | ---------------------------------------- |
| 401 Unauthorized | Wrong/missing API key                  | Re-enter provider credentials            |
| Empty response   | Wrong model type for task              | Ensure `Text` vs `Image` role is correct |
| Theme mismatch   | Styles not updated on `onThemeChanged` | Add handler for light/dark modes         |

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
