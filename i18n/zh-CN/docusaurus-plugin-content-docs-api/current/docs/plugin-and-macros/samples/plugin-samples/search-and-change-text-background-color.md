# 搜索并更改文本背景颜色

搜索目标文本并更改其背景颜色。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文本文档。

![SearchAndChangeTextBackgroundColor](/assets/images/plugins/gifs/search-and-change-background-text.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_and_change_text_background_color) 下载此插件，并按照以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md) 或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡并点击**示例：搜索并更改背景文本颜色**。
2. 在输入框中输入需要查找的文本。
3. 在颜色块中选择所需颜色。
4. 点击**更改颜色**按钮更改选中文本的背景颜色。
5. 点击**更改全部颜色**按钮更改所有匹配文本的背景颜色。
6. 点击**重置**按钮重置选中文本的背景颜色。

## 插件结构

GitHub 仓库：[example_search_and_change_text_background_color](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_and_change_text_background_color)。

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "Example search and change background text",
  "guid": "asc.{EF5735E0-69A7-4D4A-9ABE-F58FD70F488J}",

  "variations": [
    {
      "description": "Example search and change background text",
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

- button
- init
- [callCommand](../../interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
