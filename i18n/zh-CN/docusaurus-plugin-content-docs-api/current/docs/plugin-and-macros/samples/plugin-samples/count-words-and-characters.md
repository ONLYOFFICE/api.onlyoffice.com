# 统计字词和字符数

统计文档选中部分的段落数、单词数以及带空格和不带空格的字符数。

> 以下内容不计入字词统计范围：
>
> - 脚注/尾注；
> - 编号列表中的数字；
> - 页码。

**插件类型：**可视化，非系统插件。

**支持的编辑器：**文档编辑器。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="b2vrRO6Us6g" />
```

## 安装方式

该插件在 ONLYOFFICE 企业版和社区版（文档或协作空间）中默认提供。

你也可以从 [ONLYOFFICE 插件目录](https://www.onlyoffice.com/app-directory/zh/wordscounter)下载此插件，并按照以下说明完成安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 选中要统计的文本。
2. 打开**插件**选项卡并点击**统计字词和字符数**。
3. 统计结果将自动显示在插件窗口中。

## 插件结构

GitHub 上的仓库：[字数统计](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/wordscounter)。

1. *config.json*、*index.html* 和 *code.js*
2. 图标
3. *翻译* 文件夹，包含俄语、德语、西班牙语、捷克语和法语的翻译内容。

## 配置

``` json
{
  "name": "Word counter",
  "nameLocale": {
    "fr": "Compteur de mots",
    "es": "Recuento de palabras",
    "pt-BR": "Word counter",
    "de": "Wortanzahl"
  },
  "guid": "asc.{584EEEE8-DBF5-45C3-A4CA-F52177C82754}",
  "version": "1.0.1",

  "variations": [
    {
      "description": "Count words, characters (with/without spaces), and paragraphs in the selected part of your document.",
      "descriptionLocale": {
        "fr": "Comptez les mots, les caractères (avec/sans espaces) et les paragraphes dans la partie sélectionnée de votre document.",
        "es": "Cuente las palabras, los caracteres (con/sin espacios) y los párrafos en la parte seleccionada de su documento.",
        "pt-BR": "Conte palavras, caracteres (com/sem espaços) e parágrafos na parte selecionada do seu documento.",
        "de": "Zählen Sie Wörter, Zeichen (mit/ohne Leerzeichen) und Absätze im ausgewählten Teil Ihres Dokuments."
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
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "text",
      "initOnSelectionChanged": true,
      "events": ["onTargetPositionChanged"],
      "store": {
        "background": {
          "light": "linear-gradient(180deg, #FF8E3D 0%, #FF6F3D 100%)",
          "dark": "linear-gradient(180deg, #FF8E3D 0%, #FF6F3D 100%)"
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
- onTargetPositionChanged
- onTranslate

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
