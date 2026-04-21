# 国际象棋

在文档编辑器中插入一个国际象棋棋盘对象。该对象支持以 *FEN* 格式编辑和保存棋局。

**插件类型：**可视化、OLE 对象、非系统插件。  

**支持的编辑器：**文档、表格、演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="PV5TSRvKKU0" />
```

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/chess) 下载此插件，并根据以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)、或 [云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插入**选项卡并点击**象棋**。
2. 屏幕上将出现一个棋盘窗口，您可以开始下棋。
3. 若要中止游戏，请点击**确定**按钮。文档中将插入一个游戏预览图像，保存所有变动。点击该图像可继续游戏。

## 插件结构

GitHub 仓库：[象棋](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/chess)。

1. *config.json*、*index.html* 和 *chess.js*  
2. 图标 
3. 插件**关于**窗口所用的 *index_about.html*

## 配置

``` json
{
  "name": "Chess",
  "nameLocale": {
    "fr": "Échecs",
    "es": "Ajedrez",
    "pt-BR": "Xadrez",
    "de": "Schach"
  },
  "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
  "version": "1.0.1",

  "variations": [
    {
      "description": "Play chess with other collaborators right in the editors. ",
      "descriptionLocale": {
        "fr": "Jouez aux échecs avec vos collaborateurs directement dans les éditeurs.",
        "es": "Juegue al ajedrez con otros colaboradores directamente en los editores.",
        "pt-BR": "Jogue xadrez com outros colaboradores diretamente nos editores.",
        "de": "Spielen Sie Schach mit anderen Mitautoren direkt in den Editoren."
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
      "isDisplayedInViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "ole",
      "initData": "",

      "isUpdateOleOnResize": true,

      "buttons": [
        {"text": "Ok",
          "primary": true,
          "isViewer": false},
        {"text": "Cancel",
          "primary": false} 
      ],

      "store": {
        "background": {
          "light": "#444444",
          "dark": "#444444;"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["entertainment", "specAbilities"]
      }
    },
    {
      "description": "About",
      "url": "index_about.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "isViewer": true,
      "isDisplayedInViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [
        {"text": "Ok",
          "primary": true}
      ],

      "size": [392, 147]
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp
- [executeMethod ("AddOleObject")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddOleObject.md)
- [executeMethod ("EditOleObject")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EditOleObject.md)
- [info.data](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#data)
- [info.guid](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#guid)
- [info.height](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#height)
- [info.imgSrc](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#imgSrc)
- [info.mmToPx](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#mmToPx)
- [info.objectId](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#objectId)
- [info.resize](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#resize)
- [info.width](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#width)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
