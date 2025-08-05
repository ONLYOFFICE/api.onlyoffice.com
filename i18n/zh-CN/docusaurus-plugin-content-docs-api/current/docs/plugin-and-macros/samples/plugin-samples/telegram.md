# Telegram

将 Telegram 即时通讯应用集成到 ONLYOFFICE 编辑器中。

> 插件无法访问摄像头和麦克风，因此无法录制语音和视频消息。同时，该插件在无痕模式下无法使用。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

**类似插件：** [Rainbow](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/rainbow)、[Jitsi](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/jitsi)

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="8nj6smmCLis" />
```

## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/onlyoffice-telegram) 下载该插件，并根据以下指南完成安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## ## 使用方法

1. 在**插件**选项卡中找到该插件。
2. 登录你的 Telegram 账号。

该插件默认使用 *https\://evgeny-nadymov.github.io/telegram-react/*。如果你需要更改该地址，请打开 *index.html* 文件，并在 **iframe src** 字段中插入新的 URL。

## ## 插件结构

GitHub 仓库地址：[telegram](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/telegram)

1. *config.json*、*index.html* 与 *code.js*

2. 图标

3. 第三方服务：

   - [Telegram-react 应用](https://github.com/evgeny-nadymov/telegram-react)：该应用基于 ReactJS JavaScript 框架构建，使用了编译为 WebAssembly 的 TDLib（Telegram 数据库库）。许可证：[GNU 通用公共许可证](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/telegram/licenses/telegram-react.license)

## 配置

``` json
{
  "name": "Telegram",
  "nameLocale": {
    "fr": "Telegram",
    "es": "Telegram",
    "pt-BR": "Telegram",
    "de": "Telegram"
  },
  "guid": "asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}",
  "version": "1.0.2",

  "variations": [
    {
      "description": "Chat with co-authors in real time using integrated Telegram client.",
      "descriptionLocale": {
        "fr": "Chattez avec vos co-auteurs en temps réel grâce au client Telegram intégré.",
        "es": "Chatee con los coautores en tiempo real utilizando el cliente integrado de Telegram.",
        "pt-BR": "Converse com coautores em tempo real usando o cliente Telegram integrado.",
        "de": "Unterhalten Sie sich mit Mitautoren in Echtzeit über den integrierten Telegram-Client."
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
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "none",
      "store": {
        "background": {
          "light": "#26A8DE",
          "dark": "#26A8DE"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "categories": ["specAbilities", "communication", "entertainment"]
      }
    }
  ]
}
```

## 方法和事件

- button
- init
- onExternalMouseUp

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
