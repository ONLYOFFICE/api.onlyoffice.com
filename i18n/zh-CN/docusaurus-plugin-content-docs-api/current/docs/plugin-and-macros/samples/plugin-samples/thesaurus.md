# 同义词典

连接 [Big Huge Thesaurus](https://words.bighugelabs.com/)，用于查找单词的同义词和反义词。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文本文档、电子表格、演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="3r0CCY5HNbQ"/>
```

## 安装

该插件在 ONLYOFFICE 编辑器的云端、本地部署和桌面版本中默认提供。

如需移除插件，请参阅以下指南：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

插件 GUID：`{BE5CBF95-C0AD-4842-B157-AC40FEDD9840}`

## 使用方法

1. 打开**插件**选项卡并点击**同义词典**。
2. 选择所需的单词，插件窗口会自动显示其同义词和反义词列表。
3. 选择合适的同义词或反义词并点击它。
4. 所选词语将替换文中的原词。

## 插件结构

GitHub 仓库：[thesaurus](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/thesaurus)

1. *config.json*、*index.html* 和 *synonim.js*

2. 图标

3. *translations* 文件夹包含俄语、德语、西班牙语、捷克语和法语的翻译内容。

4. *plugin style.css* 用于为插件设定专用样式。

5. 第三方服务：

   - [jQuery](https://jquery.com) - 一款快速简洁的 JavaScript 库，可简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/thesaurus/licenses/jQuery.license)。
   - [Big Huge Thesaurus](https://words.bighugelabs.com/) - 为应用和网站提供同义词和反义词的开发者友好型 API。许可证：[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)。

## 配置

``` json
{
  "name": "Thesaurus",
  "nameLocale": {
    "fr": "Thésaurus",
    "es": "Tesauro",
    "pt-BR": "Thesaurus",
    "de": "Thesaurus"
  },
  "guid": "asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9840}",
  "version": "1.0.2",

  "variations": [
    {
      "description": "Search for synonyms and antonyms of a word and replace it with the selected one.",
      "descriptionLocale": {
        "fr": "Recherchez les synonymes et les antonymes d'un mot et remplacez-le par le mot sélectionné.",
        "es": "Busque sinónimos y antónimos de una palabra y sustitúyala por la seleccionada.",
        "pt-BR": "Pesquise sinônimos e antônimos de uma palavra e substitua pela selecionada.",
        "de": "Finden Sie Synonyme und Antonyme eines Wortes und ersetzen Sie es durch die ausgewählte Variante."
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
      "initDataType": "text",
      "initOnSelectionChanged": true,
      "store": {
        "background": {
          "light": "#F44725",
          "dark": "#F44725"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"],
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
- [executeMethod ("GetSelectedText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetSelectedText.md)
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
