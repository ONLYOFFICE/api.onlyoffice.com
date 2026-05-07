# 移动光标

将文本光标移动到文档的开头或结尾。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

<video autoPlay loop muted playsInline>
  <source src="/assets/images/plugins/webm/move-cursor.webm" type="video/webm" />
</video>

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_move_cursor) 下载该插件，并按照以下说明进行安装：[桌面端](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation)、[本地部署](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation)或[云端](/docs/plugins/development-workflow/installing-and-testing/cloud-saas-installation)。

## 使用方法

1. 打开**插件**选项卡，点击**示例移动光标**。
2. 点击**开始**按钮，将文本光标移动到文档开头。
3. 点击**结束**按钮，将文本光标移动到文档结尾。

## 插件结构

GitHub 仓库：[示例：移动光标](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_move_cursor)

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "Example move cursor",
  "guid": "asc.{EF5735E0-69A7-4D4A-9ABE-F58FD70F488D}",

  "variations": [
    {
      "description": "Example move cursor",
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
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": []

    }
  ]
}
```

## 方法和事件

- [button](/docs/plugins/customization/custom-buttons.md)
- [init](/docs/plugins/interacting-with-editors/overview/#how-it-works)
- executeMethod ("[MoveCursorToStart](/docs/plugins/interacting-with-editors/document-api/Methods/MoveCursorToStart.md)")
- executeMethod ("[MoveCursorToEnd](/docs/plugins/interacting-with-editors/document-api/Methods/MoveCursorToEnd.md)")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
