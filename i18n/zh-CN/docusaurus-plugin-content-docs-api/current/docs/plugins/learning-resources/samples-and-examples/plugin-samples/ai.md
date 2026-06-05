# AI

将 AI 提供商（如 OpenAI、DeepSeek）接入 ONLYOFFICE 编辑器，实现智能文本生成、编辑、摘要提取及宏自动创建功能。

**插件类型：** 后台插件。

**支持的编辑器：** 文档、电子表格、演示文稿、PDF。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="oQbH8JIe3eE"/>
```

## 安装

在 ONLYOFFICE 企业版、社区版（文档 + 工作区）及 ONLYOFFICE 云端中默认提供。

您也可以从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/zh/ai)下载该插件，并按照[桌面版](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation.md)安装说明进行安装。

从 9.0.4 版本开始，AI 插件已加入具有 ONLYOFFICE 品牌标识的服务器版和桌面版发行包。

插件 GUID：`{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}`。

## 使用方法

1. 打开**插件**选项卡，点击**插件管理器**图标。
2. 点击**后台插件**按钮，启用 **AI** 开关。
3. 在 ONLYOFFICE 编辑器顶部工具栏中找到新增的 **AI** 选项卡。
4. 选择以下功能之一：
   - **设置**：配置面板，用于选择 AI 提供商、输入 API 密钥及选择模型；
   - **聊天机器人**：与 AI 开始对话，提问、改写文本、集思广益等；
   - **摘要**：自动汇总输入的文本，并选择插入方式；
   - **翻译**：使用已配置的 AI 服务翻译选中的文本。
5. 您可以对选定的文本使用该插件。选中文本后右键点击，在 AI 菜单中选择以下选项之一：**摘要**、**文本分析**、**翻译**、**图片**或**聊天机器人**。
6. 插件将根据已配置的 AI 模型生成响应。
7. 将响应插入文档或根据需要使用。

## 配置 {#configuring}

要开始使用该插件，您需要设置 AI 提供商：

1. 打开 **AI** 选项卡，点击**设置**以打开配置窗口。
2. 选择**编辑 AI 模型**并点击**添加**。
3. 从列表中选择 AI 提供商，或通过输入 API 密钥添加新的 AI 模型。
4. 在图标行中，选择该模型的用途：*文本*、*图片*、*嵌入*、*音频处理*、*内容审核*、*实时任务*、*代码辅助*、*视觉分析*。
5. 点击**确定**保存设置并完成连接。

有关如何添加自定义提供商的详细信息，请参阅此[博客文章](https://www.onlyoffice.com/blog/zh-hans/2025/03/how-to-add-a-custom-provider-to-the-onlyoffice-ai-plugin)。

## 插件结构

GitHub 仓库：[ai](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai)。

1. *config.json*、*index.html* 和 *code.js*
2. 图标
3. 翻译文件夹，包含多种语言的翻译文件。
4. 第三方服务：
   该插件支持 OpenAI 及自定义 AI 提供商，需配置 API 密钥和模型。许可证和条款取决于所使用的提供商。

## 配置文件

```json
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

## 方法和事件

- init
- [button](/docs/plugins/customization/custom-buttons.md)
- [onTranslate](/docs/plugins/fundamentals/configuration/localization.md#applying-translations-to-plugin)
- [attachEditorEvent](/docs/plugins/interacting-with-editors/overview/how-to-attach-events.md#option-1-using-the-attacheditorevent-method)
- onThemeChanged
- onThemeChangedBase
- [executeMethod ("CloseWindow")](/docs/plugins/customization/windows-and-panels.md#closing-a-window)
- [executeMethod ("PasteText")](/docs/plugins/interacting-with-editors/document-api/Methods/PasteText.md)
- info.aiPluginSettings
- [info.editorType](/docs/plugins/interacting-with-editors/overview/how-to-call-commands.md#editorType)
- [info.data](/docs/plugins/interacting-with-editors/overview/how-to-call-commands.md#data)
- [info.guid](/docs/plugins/interacting-with-editors/overview/how-to-call-commands.md#guid)
- [info.width](/docs/plugins/interacting-with-editors/overview/how-to-call-commands.md#width)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
