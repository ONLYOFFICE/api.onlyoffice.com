# 获取并粘贴 HTML

获取文档内容的 HTML 代码，对其进行修改后再粘贴回文档中。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、表格、演示文稿编辑器。

**类似插件：** [Doc2md](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/doc2md)。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="ZoY0CMfcPyk"/>
```

## 安装方式

ONLYOFFICE 企业版与社区版（文档 + 工作区）中默认提供该插件。

你也可以从 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/en/app-directory/html)下载该插件，并按照[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)的安装说明进行安装。

## 使用方法

1. 选择所需内容。
2. 打开**插件**选项卡并点击**获取并粘贴 HTML**。
3. 被选中内容的 *HTML* 代码将自动显示在插件窗口中。你可以修改这些代码，或直接输入自己的代码。
4. 若要将修改后的或自定义的 HTML 代码粘贴回文档，请点击**粘贴到文档**按钮。

## 插件结构

GitHub 仓库：[html](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/html)

1. *config.json*、*index.html* 和 *code.js*

2. 图标文件

3. *翻译* 文件夹，包含俄语、德语、西班牙语、捷克语和法语的翻译文件。

4. 第三方服务：

   - [CodeMirror](https://codemirror.net/) - 用 JavaScript 实现的强大网页文本编辑器。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/html/licenses/codemirror.license)。
   - [prettier.js](https://github.com/prettier/prettier) - 一个有主见的代码格式化工具。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/html/licenses/prettier.license)。

## 配置

``` json
{
  "name": "HTML",
  "nameLocale": {
    "fr": "HTML",
    "es": "HTML",
    "pt-BR": "HTML",
    "de": "HTML"
  },
  "guid": "asc.{E581C417-3C80-4BC2-B42D-502850FDC1E7}",
  "version": "1.0.3",

  "variations": [
    {
      "description": "Get your document content as HTML code, modify it, and paste back to the document.",
      "descriptionLocale": {
        "fr": "Obtenez le contenu de votre document sous forme de code HTML, modifiez-le et collez-le dans le document.",
        "es": "Obtenga el contenido de su documento como código HTML, modifíquelo y péguelo de nuevo en el documento.",
        "pt-BR": "Obtenha o conteúdo do seu documento como código HTML, modifique-o e cole-o novamente no documento.",
        "de": "Erhalten Sie den Inhalt Ihres Dokuments als HTML-Code, modifizieren und fügen Sie ihn wieder ins Dokument ein."
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
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "html",
      "initOnSelectionChanged": true,
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "work", "devTools"]
      }
    }
  ]
}
```

## 方法和事件

- button
- init
- onTranslate
- [executeMethod ("PasteHtml")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteHtml.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
