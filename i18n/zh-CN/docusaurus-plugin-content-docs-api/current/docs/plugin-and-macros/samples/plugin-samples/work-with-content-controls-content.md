# 内容控件内容操作

将一个内容控件中的内容插入到另一个内容控件中。

**插件类型：** 非视觉类，非系统插件。

**支持的编辑器：** 文档。

![WorkWithContentControlsContent](/assets/images/plugins/gifs/work-with-content-controls-content.gif)

## ## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_content) 下载此插件，并按照[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)的安装说明进行安装。

## 使用

1. 在文档中添加两个内容控件，其中一个内容控件的标签为11，另一个为14（插件代码中使用这两个标签作为示例，你可以根据需要更改）。
2. 打开**插件**选项卡，点击 **Example work with content controls content**。
3. 标签为11的内容控件中的内容将被插入到标签为14的内容控件中。

## 插件结构

GitHub 仓库：[example_work_with_content_controls_content](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_content)。

1. *config.json*、*index.html* 和 *code.js*  
2. 图标

## 配置

``` json
{
  "name": "Example work with content controls content",
  "guid": "asc.{C9945AC2-8275-4F9B-92E4-CA1104D7305B}",

  "variations": [
    {
      "description": "Example work with content controls content",
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

      "isVisual": false,

      "initDataType": "text",
      "initData": "",

      "buttons": [],

      "initOnSelectionChanged": true
    }
  ]
}
```

## 方法和事件

- button
- init
- executeMethod ("GetAllContentControls")
- [executeMethod ("PasteText")](../../interacting-with-editors/methods/text-document-api/Api/Methods/PasteText.md)
- executeMethod ("SelectContentControl")
- [Asc.scope](../../interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
