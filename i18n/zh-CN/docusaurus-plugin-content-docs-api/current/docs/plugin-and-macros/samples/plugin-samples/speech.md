# 语音朗读

将选中的文本转换为语音。该插件使用 [guessLanguage](https://richtr.github.io/guessLanguage.js/) 来识别语言，并通过 [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) 的 [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) 接口实现朗读。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="ZALRpPomZrA" />
```

## 安装方式

默认集成于 ONLYOFFICE 企业版与社区版（文档 + 工作区），以及 ONLYOFFICE 云端服务中。

你也可以从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/en/app-directory/speech)下载该插件。

## 使用方法

1. 选中需要朗读的文本。
2. 打开插件设置，选择朗读语言（默认启用自动识别模式）。
3. 打开**插件**选项卡并点击**语音朗读**。
4. 系统将朗读所选文本内容。

## 已知问题

1. 某些浏览器（例如 Mozilla、Opera）只能使用系统中预安装的语言生成语音。如需支持新语言，需先将其添加至操作系统。
2. 插件无法在 Safari 15.3（17612.4.9.1.8）上运行，该问题已在 Safari 15.4（17614.1.7.7）中修复。

## 插件结构

GitHub 仓库地址：[speech](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/speech)。

1. *config.json*、*index.html* 与 *speech.js*

2. 图标

3. 翻译文件夹，包含俄语、德语、西班牙语、捷克语、意大利语、日语、荷兰语、葡萄牙语、中文与法语版本的翻译内容

4. *settings.html*：插件设置窗口界面

5. 第三方服务：

   - [GuessLanguage](https://richtr.github.io/guessLanguage.js/)：基于三元组统计分析的自然语言识别库，使用 JavaScript 编写，可在浏览器或 Node.js 中运行。许可证：[GNU LGPL](https://www.gnu.org/licenses/lgpl-3.0.html)。
   - [jQuery](https://jquery.com)：简洁快速的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画与 Ajax 操作。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/speech/licenses/jQuery.license)。
   - [Select2](https://select2.org/)：可自定义的下拉选择框，支持搜索、标签、远程数据、无限滚动等功能。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/speech/licenses/Select2.license)。

## 配置

``` json
{
  "name": "Speech",
  "nameLocale": {
    "cs": "Řeč",
    "de": "Rede",
    "es": "Habla",
    "pt-BR": "Fala",
    "fr": "Parole",
    "it": "Discorso",
    "ja": "スピーチ",
    "nl": "Spraak",
    "pt": "Discurso",
    "zh": "讲话"
  },
  "guid": "asc.{D71C2EF0-F15B-47C7-80E9-86D671F9C595}",
  "version": "2.0.1",

  "variations": [
    {
      "description": "Convert the selected text into speech.",
      "descriptionLocale": {
        "fr": "Convertissez le texte sélectionné en parole.",
        "it": "Converti il testo selezionato in voce parlata.",
        "ja": "選択したテキストを音声に変換します。",
        "es": "Convierta el texto seleccionado en voz.",
        "pt-BR": "Converta o texto selecionado em fala.",
        "de": "Konvertieren Sie den ausgewählten Text in die Rede.",
        "zh": "朗读所选的文本。"
      },
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
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
          "style": "dark",
                    
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
      "isViewer": true,
      "EditorsSupport": ["word", "pdf"],
      "isVisual": false,
      "initDataType": "text",

      "buttons": [],
      "store": {
        "background": {
          "light": "#444444",
          "dark": "#444444"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png",
          "resources/store/screenshots/screen_3.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities"]
      }
    },
    {
      "description": "Settings",
      "descriptionLocale": {
        "cs": "Nastavení",
        "de": "Einstellungen",
        "es": "Configuración",
        "fr": "Paramètres",
        "it": "Impostazioni",
        "ja": "設定",
        "nl": "Instellingen",
        "pt": "Definições",
        "zh": "设置"
                
      },
      "url": "settings.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "pdf"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        }
      ],

      "size": [300, 150]
    }
  ]
}
```

## 方法和事件

- buttons
- init

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
