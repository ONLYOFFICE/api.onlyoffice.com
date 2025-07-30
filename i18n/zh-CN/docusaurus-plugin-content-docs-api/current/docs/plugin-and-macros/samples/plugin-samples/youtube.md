# YouTube

连接 [youtube iframe_api](https://developers.google.com/youtube/iframe_api_reference)，用于将 YouTube 视频作为 OLE 对象嵌入文档，并通过调整大小、旋转和改变位置来管理它们。

**插件类型：** 可视化，OLE 对象，非系统插件。

**支持编辑器：** 文档，电子表格，演示文稿。

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="jHuwwVliZ5Q" posterType="hqdefault" />
```

## 安装

在 ONLYOFFICE 云端、本地部署及桌面版本中默认可用。

您也可以按照 [桌面](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)的安装说明，将其移除。

插件 GUID：`{38E022EA-AD92-45FC-B22B-49DF39746DB4}`。

## 使用

1. 在**插件**选项卡找到该插件。  
2. 在表单中输入想要嵌入的 YouTube 视频网址，点击**确定**按钮。  
3. 视频的图片预览将出现在文档中，点击图片即可播放视频。

## 插件结构

GitHub 仓库：[youtube](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/youtube)。

1. *config.json*、*index.html* 和 *youtube.js*  

2. 图标  

3. *translations* 文件夹包含俄语、德语、西班牙语、捷克语和法语的翻译。  

4. 第三方服务：  
   
   - [Youtube iframe\_api](https://developers.google.com/youtube/iframe_api_reference) 允许用户在网站上嵌入 YouTube 视频播放器，并使用 JavaScript 控制播放器。许可证：[Apache 2.0 许可证](https://www.apache.org/licenses/LICENSE-2.0)。

## 配置

``` json
{
  "name": "YouTube",
  "nameLocale": {
    "fr": "YouTube",
    "es": "YouTube",
    "pt-BR": "YouTube",
    "de": "YouTube"
  },
  "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
  "version": "1.0.4",

  "variations": [
    {
      "description": "Easily embed YouTube videos into your documents.",
      "descriptionLocale": {
        "fr": "Insérez facilement des vidéos YouTube dans vos documents.",
        "es": "Inserte fácilmente vídeos de YouTube en sus documentos.",
        "pt-BR": "Incorpore facilmente vídeos do YouTube em seus documentos.",
        "de": "Betten Sie ganz einfach YouTube-Videos in Ihre Dokumente ein."
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
      "isViewer": true,
      "isDisplayedInViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "ole",
      "isUpdateOleOnResize": false,

      "buttons": [
        {
          "text": "Ok",
          "primary": true,
          "isViewer": false
        },
        {
          "text": "Cancel",
          "primary": false,
          "isViewer": true,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar",
            "de": "Abbrechen"
          }
        }
      ],

      "size": [350, 90],
      "store": {
        "background": {
          "light": "#ED3323",
          "dark": "#ED3323"
        },
        "screenshots": [
          "resources/store/screenshots/screen_1.png",
          "resources/store/screenshots/screen_2.png"
        ],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "entertainment", "recommended"]
      }
    }
  ]
}
```

## 方法和事件

- button
- init
- onTranslate
- [executeMethod ("AddOleObject")](../../interacting-with-editors/methods/text-document-api/Api/Methods/AddOleObject.md)
- [executeMethod ("EditOleObject")](../../interacting-with-editors/methods/text-document-api/Api/Methods/EditOleObject.md)
- [resizeWindow](../../customization/windows-and-panels.md#interacting-with-a-window)
- [info.data](../../interacting-with-editors/overview/how-to-call-commands.md#data)
- [info.guid](../../interacting-with-editors/overview/how-to-call-commands.md#guid)
- [info.height](../../interacting-with-editors/overview/how-to-call-commands.md#height)
- [info.imgSrc](../../interacting-with-editors/overview/how-to-call-commands.md#imgSrc)
- [info.mmToPx](../../interacting-with-editors/overview/how-to-call-commands.md#mmToPx)
- [info.objectId](../../interacting-with-editors/overview/how-to-call-commands.md#objectId)
- [info.resize](../../interacting-with-editors/overview/how-to-call-commands.md#resize)
- [info.width](../../interacting-with-editors/overview/how-to-call-commands.md#width)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
