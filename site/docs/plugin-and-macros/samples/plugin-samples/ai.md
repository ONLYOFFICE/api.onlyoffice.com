# AI

Connects an AI provider (e.g., OpenAI, Azure OpenAI) to ONLYOFFICE editors, enabling intelligent text generation, editing, summarization, and automatic macro creation.

**Plugin type:** window, panel.  

**Supported editors:** documents, spreadsheets, presentations.

![AI](/assets/images/plugins/gifs/ai.gif)

## Installation

Available by default in ONLYOFFICE Enterprise Edition, Community Edition (Docs + Workspace), and ONLYOFFICE cloud.

You can also download this plugin from the [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory/ai) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md) installation instruction.

The plugin guid: `{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`.

## First-time setup

To start using the plugin, you need to set up an AI provider:

- Open the plugin from the Plugins tab.
- If prompted, enter your API key (for OpenAI, MistralAI, or other).
- You can also pre-configure it in the plugin’s `config.json` and `preinstall-example.json`:

    ``` json
    {
        "openai"
    }
    {
        "capabilities": 1,
        "provider": "Together AI",
        "name": "Together AI [deepseek-ai/DeepSeek-V3]",
        "id": "deepseek-ai/DeepSeek-V3"
    }
    ```
For details on adding a custom provider, refer to this [blog post](https://www.onlyoffice.com/blog/2025/03/how-to-add-a-custom-provider-to-the-onlyoffice-ai-plugin).

## Usage

1. Find a new AI tab in the top toolbar of ONLYOFFICE editors.
2. Choose one of the buttons:
   - **Settings** (the configuration panel to select your AI provider, enter the API key, and adjust the request parameters)
   - **Chatbot** (start a conversation with the AI to ask questions, rewrite text, brainstorm ideas, and more)
   - **Summarization** (automatically summarize the selected text or the entire document)
   - **Translation** (translate selected text using the configured AI service. Use the dropdown to pick a language)
3. You can select or enter text and choose an action: generate image, text analysis, summarization, translate, or chat.
4. The plugin will respond based on the configured AI model.
5. Insert the response into the document or use it for your needs.
   
## Plugin structure

Repository on GitHub: [ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai).

1. *config.json*, *index.html*, and *code.js*
2. Icons
3. The translations folder contains translations into several languages.
4. Third-party services:
   This plugin supports OpenAI, Azure OpenAI, and custom AI providers. API key and model configuration are required. License and terms depend on the provider used.

## Config

``` json
{
"name" : "AI",
"nameLocale": {
    "ru": "ИИ",
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
"version": "2.3.2",
"minVersion" : "8.2.0",

"variations" : [
    {
        "description": "Use the AI chatbot to perform tasks which involve understanding or generating natural language or code.",
        "descriptionLocale": {
            "ru": "Используйте чат-бот AI для выполнения задач, связанных с пониманием или генерацией естественного языка или кода.",
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
        "events"			  : ["onAIPluginSettings", "onContextMenuShow", "onContextMenuClick", "onToolbarMenuClick"],

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
]
}
```

## Methods and events

- init
- button
- onTranslate
- attachEditorEvent
- onThemeChanged
- onThemeChangedBase
- executeMethod ("CloseWindow")
- [executeMethod ("PasteText")](/site/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- info.aiPluginSettings
- info.editorType
- [info.data](/site/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#parameters)
- [info.guid](/site/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#parameters)
- [info.width](/site/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#parameters)

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).