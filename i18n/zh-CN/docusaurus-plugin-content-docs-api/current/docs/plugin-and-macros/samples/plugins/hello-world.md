# Hello world

当用户按下按钮时，插入 *Hello world!* 这句话。

**插件类型：** 非可视化，非系统插件。

**支持的编辑器：** 文档。

<video autoPlay loop muted playsInline>
  <source src="/assets/images/plugins/webm/hello-world.webm" type="video/webm" />
</video>

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld) 下载此插件，并按照 [桌面](../../plugins/development-workflow/installing-and-testing/desktop-editors-installation.md)、[本地部署](../../plugins/development-workflow/installing-and-testing/docs-on-premises-installation.md) 或[云端](../../plugins/development-workflow/installing-and-testing/cloud-saas-installation.md)的安装说明进行安装。

## 使用

1. 在**插件**选项卡中找到该插件。
2. 点击 **hello world** 按钮。

## 插件结构

GitHub 仓库：[helloworld](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld)。

1. *config.json*、*index.html* 和 *helloworld.js*
2. 图标
3. 用于插件**关于**窗口的 *index_about.html*

## 配置

``` json
{
  "name": "hello world",
  "guid": "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
  "baseUrl": "",
  "variations": [
    {
      "description": "hello world",
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": false,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    },
    {
      "description": "About",
      "url": "index_about.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word"],

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

      "size": [392, 147]
    }
  ]
}
```

## 方法和事件

- [button](/docs/plugin-and-macros/plugins/customization/custom-buttons.md)
- [init](/docs/plugin-and-macros/plugins/interacting-with-editors/overview/#how-it-works)
- [callCommand](/docs/plugin-and-macros/plugins/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](/docs/plugin-and-macros/plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object
- [info.recalculate](/docs/plugin-and-macros/plugins/interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
