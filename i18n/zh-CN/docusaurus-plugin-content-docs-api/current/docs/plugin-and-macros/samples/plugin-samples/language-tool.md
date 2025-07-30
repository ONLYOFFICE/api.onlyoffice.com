# 语言工具

连接 [LanguageTool（语言工具）](https://languagetool.org/) 助手，这是一个多语言语法与风格检查器，可用于检测文本中的语法、风格和拼写错误。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

**类似插件：** [Glavred](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/glavred)、[Grammalecte](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/grammalecte)。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="5HaV18VwOgg" />
```

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/languagetool) 下载该插件，并按照以下说明进行安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡，点击**语言工具**。
2. 选择需要检查的文本，或直接在插件窗口中输入。
3. 插件会自动检测语言，也可以手动切换语言。
4. 点击**检查**按钮。
5. 插件会显示语法与风格错误，并提供修改建议。
6. 如需将文档中的原始文本替换为修正后的文本，点击**替换**按钮。
  
## 插件结构

GitHub 仓库：[language tool](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/languagetool)

1. *config.json*、*index.html* 和 *langTool.js*

2. 图标

3. 插件“关于”窗口的 *index_about.html*

4. 翻译文件夹，包含俄语、德语、西班牙语、捷克语、意大利语、日语、荷兰语、葡萄牙语、中文和法语的翻译文件

5. *plugin_style.css*：用于插件样式调整

6. 第三方服务：

   - [jQuery](https://jquery.com)：一个快速简洁的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/languagetool/licenses/jQuery.license)
   - [Select2](https://select2.org/)：提供可搜索、可标记、支持远程数据和无限滚动的可自定义选择框。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/languagetool/licenses/Select2.license)
   - [LanguageTool](https://languagetool.org/)：一款多语言语法与风格检查器。许可证：[GNU 较宽通用公共许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/languagetool/licenses/Languagetool's.license)

## 配置

``` json
{
  "name": "LanguageTool",
  "nameLocale": {
    "fr": "LanguageTool",
    "es": "LanguageTool",
    "pt-BR": "LanguageTool",
    "de": "LanguageTool"
  },
  "guid": "asc.{7CDB02C9-A0BF-4B56-9A1A-71C860B8498F}",
  "version": "1.0.3",

  "variations": [
    {
      "description": "Improve spelling, grammar, and style in your texts.",
      "descriptionLocale": {
        "fr": "Améliorez l'orthographe, la grammaire et le style de vos textes.",
        "es": "Mejore la ortografía, la gramática y el estilo de sus textos.",
        "pt-BR": "Melhore a ortografia, a gramática e o estilo dos seus textos.",
        "de": "Verbessern Sie Rechtschreibung, Grammatik und Stil in Ihren Texten."
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
      "EditorsSupport": ["word", "cell", "slide", "pdf"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": true,

      "initDataType": "text",
      "initData": "",

      "buttons": [],

      "initOnSelectionChanged": true,

      "store": {
        "background": {
          "light": "#357EE5",
          "dark": "#357EE5"
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
        "categories": ["specAbilities", "work", "recommended"]
      }
    },
    {
      "description": "About",
      "descriptionLocale": {
        "fr": "À propos",
        "es": "Sobre programa",
        "de": "Über"
      },
      "url": "index_about.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [
        {
          "text": "Ok",
          "primary": true
        }
      ],

      "size": [400, 50]
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp
- onTranslate
- [callCommand](../../interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [executeMethod ("GetSelectedText")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetSelectedText.md)
- [executeMethod ("GetSelectionType")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetSelectionType.md)
- [executeMethod ("GetVersion")](../../interacting-with-editors/methods/text-document-api/Api/Methods/GetVersion.md)
- [executeMethod ("PasteText")](../../interacting-with-editors/methods/text-document-api/Api/Methods/PasteText.md)
- [Asc.scope](../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.editorType](../../interacting-with-editors/overview/how-to-call-commands.md#editorType)
- [info.recalculate](../../interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
