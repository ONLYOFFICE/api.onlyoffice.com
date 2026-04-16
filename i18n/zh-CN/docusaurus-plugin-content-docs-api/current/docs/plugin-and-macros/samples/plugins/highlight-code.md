# 代码高亮

连接 [highlight.js 库](https://highlightjs.org/)实现代码语法高亮，支持必要的语言、样式和背景颜色。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、表格、演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="almj8Lphrmc" />
```

## 安装

此插件默认内置于 ONLYOFFICE 云端、私有部署和桌面版编辑器中。

你也可以按照以下安装说明移除它：[桌面版安装教程](../../tutorials/installing/onlyoffice-desktop-editors.md), [私有部署安装教程](../../tutorials/installing/onlyoffice-docs-on-premises.md), [云端安装教程](../../tutorials/installing/onlyoffice-cloud.md)。

插件指南： `{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}`。

## 使用方法

1. 在**插件**选项卡中找到该插件。
2. 将代码粘贴到插件窗口。
3. 语言会自动检测，但你可以手动更改。你还可以自定义代码的显示样式、制表符和背景颜色。
4. 点击**确定**按钮，将代码粘贴到文档中。

## 已知问题

- **支持的语言**：Apache、Access Log、Bash、Shell、MATLAB、Erlang、JavaScript、Ruby、Prolog、Swift、SQL、Java、HTTP、Fortran、Perl、XML、C++、JSON、C#、NGINX、BASIC、Markdown、CSS、Python、Objective-C、PHP、Delphi、Go、Kotlin、Rust、Shell、TypeScript。
- **支持的样式**：Googlecode、GitHub、GitHub Gist、Android Studio、Visual Studio、Visual Studio 2015、Idea、Qtcreator Dark、Qtcreator Light、XCode、Fortran、Foundation、XML 1、XML 2。

## 插件结构

GitHub 仓库地址：[highlightcode](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/highlightcode)。

1. *config.json*，*index.html*，和 *code.js*

2. 图标

3. *translations* 文件夹，包含俄语、德语、西班牙语、捷克语和法语翻译。

4. *plugin_style.css* 和 *scrollable_div.js* 用于调整插件样式。

5. 第三方服务：

   - [Highlight.js 库](https://highlightjs.org/) - 用 JavaScript 编写的语法高亮库。许可证：[BSD 3-Clause](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/Highlight.license)。
   - [Spectrum.js](http://bgrins.github.io/spectrum/) - 基于 jQuery 的颜色选择器插件。许可证：[MIT 许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/spectrum.license)。
   - [jQuery](https://jquery.com) - 快速且简洁的 JavaScript 库，简化 HTML 文档遍历、事件处理、动画和 Ajax 交互。许可证：[MIT 许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/jQuery.license)。
   - [Select2](https://select2.org/) - 支持搜索、标签、远程数据集、无限滚动等功能的可定制选择框。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/Select2.license)。
   - [js-beautify.js](https://github.com/beautify-web/js-beautify) - 代码格式化库（支持 CSS、HTML、JavaScript）。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/js-beautify.license)。
   - [prettier.js](https://github.com/prettier/prettier) - 有意见的代码格式化工具。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/prettier.license)。
   - [prettier-plugin-php.js](https://github.com/prettier/plugin-php) - 为 Prettier 增加 PHP 语言支持的插件。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/prettier%40plugin-php.license)。
   - [xml-formatter.js](https://github.com/chrisbottin/xml-formatter) - 将 XML 转换为易读格式（格式化输出），同时尊重 *xml:space* 属性。许可证：[MIT](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/highlightcode/licenses/xml-formatter.license)。

## 配置

``` json
{
  "guid": "asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}",
  "name": "Highlight code",
  "nameLocale": {
    "de": "Code hervorheben",
    "es": "Resaltar el código",
    "pt-BR": "Highlight code",
    "fr": "Code en surbrillance"
  },
  "version": "1.0.2",
  "variations": [
    {
      "EditorsSupport": [
        "word",
        "cell",
        "slide"
      ],
      "buttons": [
        {
          "primary": true,
          "text": "Ok"
        },
        {
          "primary": false,
          "text": "Cancel",
          "textLocale": {
            "de": "Abbrechen",
            "es": "Cancelar",
            "fr": "Annuler"
          }
        }
      ],
      "description": "Highlight syntax of the code selecting the necessary language, style, and background color.",
      "descriptionLocale": {
        "de": "Heben Sie die Codesyntax hervor, indem Sie die gewünschte Sprache, den Stil und die Hintergrundfarbe auswählen.",
        "es": "Resalte la sintaxis del código seleccionando el idioma, el estilo y el color de fondo necesarios.",
        "pt-BR": "Destaque a sintaxe do código selecionando o idioma, estilo e cor de fundo necessários.",
        "fr": "Mettez en évidence la syntaxe du code en sélectionnant la langue, le style et la couleur de l'arrière-plan."
      },
      "icons": [
        "resources/light/icon.png",
        "resources/light/icon@2x.png"
      ],
      "icons2": [
        {
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
          },
          "style": "light"
        },
        {
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
          },
          "style": "dark"
        }
      ],
      "initData": "",
      "initDataType": "html",
      "initOnSelectionChanged": true,
      "isInsideMode": false,
      "isModal": true,
      "isViewer": false,
      "isVisual": true,
      "url": "index.html",
      "store": {
        "background": {
          "light": "#282C33",
          "dark": "#282C33"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png",
          "resources/store/screenshots/screen_3.png",
          "resources/store/screenshots/screen_4.png"
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

## Methods and events
  方法和事件
- button
- init
- onExternalMouseUp
- onTranslate
- [executeMethod ("PasteHtml")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteHtml.md)
- [resizeWindow](/docs/plugin-and-macros/customization/windows-and-panels.md#interacting-with-a-window)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
