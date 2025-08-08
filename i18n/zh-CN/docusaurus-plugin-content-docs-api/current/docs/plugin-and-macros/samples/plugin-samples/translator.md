# 翻译器

连接 [Google Translate API](https://cloud.google.com/translate?hl=ru)，用于将选中的文本翻译成其他语言。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文本文档、电子表格、演示文稿。

**同类插件：** [Apertium](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/apertium)、[DeepL](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/deepl)

!```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="jCciDL48KHE" />
```

## 安装

该插件在 ONLYOFFICE 编辑器的云端、本地部署和桌面版本中默认提供。

如需移除该插件，请参阅以下指南：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

插件 GUID：`{7327FC95-16DA-41D9-9AF2-0E7F449F6800}`

## 使用方法

1. 选中你想翻译的文本。
2. 打开**插件**选项卡并点击**翻译器**。
3. 选择目标语言，翻译结果将立即显示在插件窗口中。

## 插件结构

GitHub 仓库：[translator](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/translator)

1. *config.json*、*index.html* 和 *translate.js*

2. 图标

3. *translations* 文件夹包含俄语、德语、西班牙语、捷克语和法语的翻译内容。

4. *index_widget.html* 用于定义翻译器小部件

5. 第三方服务：

   - [jQuery](https://jquery.com) - 快速简洁的 JavaScript 库，可简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/translator/licenses/jQuery.license)
   - [Select2](https://select2.org/) - 提供可搜索、支持远程数据集、无限滚动等功能的可自定义选择框。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/translator/licenses/Select2.license)
   - [Google Translate API](https://cloud.google.com/translate?hl=ru) - 支持多语言互译的 Google 翻译 API。许可证：[MIT License](https://github.com/matheuss/google-translate-api/blob/master/LICENSE)

## 配置

``` json
{
  "name": "Translator",
  "nameLocale": {
    "fr": "Traducteur",
    "es": "Traductor",
    "pt-BR": "Tradutor",
    "de": "Übersetzer"
  },
  "guid": "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
  "version": "1.0.6",

  "variations": [
    {
      "description": "Translate the selected text into other languages with Google Translate.",
      "descriptionLocale": {
        "fr": "Traduisez le texte sélectionné dans d'autres langues avec Google Translate.",
        "es": "Traduzca el texto seleccionado a otros idiomas con el Traductor de Google.",
        "pt-BR": "Traduza o texto selecionado para outros idiomas com o Google Translate.",
        "de": "Übersetzen Sie den ausgewählten Text in andere Sprachen mit Google Translate."
      },
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "icons2": [
        {
          "100%": {"normal": "resources/img/icon.png"},
          "125%": {"normal": "resources/img/icon@1.25x.png"},
          "150%": {"normal": "resources/img/icon@1.5x.png"},
          "175%": {"normal": "resources/img/icon@1.75x.png"},
          "200%": {"normal": "resources/img/icon@2x.png"}
        }
      ],
      "screens": ["resources/store/screen_1.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "text",
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
        "categories": ["specAbilities"]
      }
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp
- onTranslate
- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [executeMethod ("GetVersion")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetVersion.md)
- [executeMethod ("GetSelectedText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectedText.md)
- [executeMethod ("GetSelectionType")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectionType.md)
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.editorType](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#editorType)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
