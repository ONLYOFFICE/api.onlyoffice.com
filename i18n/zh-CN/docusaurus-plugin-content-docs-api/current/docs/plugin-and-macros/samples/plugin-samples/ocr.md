# OCR

连接 [TesseractJS-Core 库](https://tesseract.projectnaptha.com/)，用于从图像（*.png*、*.jpg*）中提取文本并将其插入文档。OCR 支持 60 多种语言。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、表格、演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="SQE6HhgBylg"/>
```

## 安装

在 ONLYOFFICE 编辑器的云端、本地部署和桌面版本中默认提供。

可根据以下说明将其移除：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)、[云端](../../tutorials/installing/onlyoffice-cloud.md)。

插件 GUID：`{440EBF13-9B19-4BD8-8621-05200E58140B}`

## 使用方法

1. 在**插件**选项卡中找到此插件。
2. 点击**加载文件**按钮并选择一张图像。
3. 从**选择语言**下拉菜单中选择识别语言。
4. 点击**识别**按钮，识别出的文本将显示在图片右侧。
5. 点击**插入文本**按钮，识别文本将插入到当前光标所在位置。

## 插件结构

GitHub 仓库：[ocr](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ocr)

1. *config.json*、*index.html* 和 *ocr.js*

2. 图标

3. 翻译文件夹包含俄语、德语、西班牙语、捷克语和法语的翻译。

4. 插件**关于**窗口使用 *index_about.html*

5. 第三方服务：

   - [jQuery](https://jquery.com)：快速简洁的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画和 Ajax 操作。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/jQuery.license)
   - [Select2](https://select2.org/)：提供可搜索、标签化、支持远程数据和无限滚动的可定制选择框。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/Select2.license)
   - [TesseractJS-Core](https://tesseract.projectnaptha.com/)：Tesseract OCR 引擎的纯 JavaScript 版本，支持 100 多种语言、自动文本方向和脚本检测，提供读取段落、单词和字符边框的简单接口。许可证：[Apache License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ocr/licenses/Tesseract.license)，版本 2.0

## 配置

``` json
{
  "name": "OCR",
  "nameLocale": {
    "fr": "Reconnaissance optique de caractères",
    "es": "Reconocimiento óptico de caracteres",
    "de": "OCR",
    "pt-BR": "OCR"
  },
  "guid": "asc.{440EBF13-9B19-4BD8-8621-05200E58140B}",
  "version": "2.0.0",

  "variations": [
    {
      "description": "Recognize text from pictures and screenshots and insert it into your documents.",
      "descriptionLocale": {
        "fr": "Reconnaissez le texte des images et des captures d'écran et insérez-le dans vos documents.",
        "es": "Reconozca el texto de imágenes y capturas de pantalla e insértelo en sus documentos.",
        "de": "Erkennen Sie Text auf Bildern und Screenshots und fügen Sie ihn in Ihre Dokumente ein.",
        "pt-BR": "Reconheça texto de imagens e capturas de tela e insira-o em seus documentos."
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

      "isViewer": false,
      "EditorsSupport": ["word"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",

      "buttons": [
        {
          "text": "Insert Text",
          "primary": true,
          "textLocale": {
            "fr": "Insérer le texte",
            "es": "Insertar texto",
            "de": "Text einfügen"
          }
        },
        {
          "text": "Cancel",
          "primary": false,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar",
            "de": "Abbrechen"
          }
        }
      ],

      "size": [592, 100],
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
        "categories": ["specAbilities", "work"]
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
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],
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

      "size": [392, 147]
    }
  ]
}
```

## 方法和事件

- button
- init
- onTranslate
- [resizeWindow](../../customization/windows-and-panels.md#interacting-with-a-window)
- [info.recalculate](../../interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
