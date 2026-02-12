# 内容控件导航操作

插入内容控件（自动或手动）、导航并选择内容控件，同时支持向内容控件粘贴文本。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

![WorkWithContentControlsNavigation](/assets/images/plugins/gifs/work-with-content-controls-navigation.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_navigation) 下载此插件，并按照[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)的安装说明进行安装。

## 使用方法

1. 在文档中添加一些内容控件。  
2. 打开**插件**选项卡，点击**内容控件导航示例**。  
3. 第一个字段显示所有内容控件及其 ID（自动更新）。  
4. 点击列表中的某项可跳转到对应的内容控件。  
5. 点击**文档测试粘贴**按钮，可将文本粘贴到文档中光标所在位置。  
6. 第二个字段显示当前选中的内容。  
7. 点击第三个字段的**获取所有内容控件**按钮，查看所有内容控件及其 ID。  
8. 要选择内容控件中的文本，先选中内容控件后点击**选择当前内容控件**按钮。  

## 插件结构

GitHub 仓库：[example_work_with_content_controls_navigation](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_navigation)。

1. *config.json*、*index.html* 和 *code.js*  

2. 图标文件  

3. 第三方服务：

   - [jQuery](https://jquery.com) - 一款简洁快速的 JavaScript 库，用于简化 HTML 文档遍历、事件处理、动画及 Ajax 交互。许可证：[MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/example_work_with_content_controls_navigation/licenses/jQuery.license)。

## 配置

``` json
{
  "name": "Example work with content controls navigation",
  "guid": "asc.{C36DDFB5-08F0-4A68-B829-5FB1F7D49728}",

  "variations": [
    {
      "description": "Example work with content controls navigation",
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

      "initDataType": "text",
      "initData": "",

      "buttons": [],

      "initOnSelectionChanged": true,

      "events": ["onTargetPositionChanged"]
    }
  ]
}
```

## 方法和事件

- button
- init
- onMethodReturn
- onTargetPositionChanged
- executeMethod ("GetAllContentControls")
- executeMethod ("GetCurrentContentControl")
- executeMethod ("MoveCursorToContentControl")
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- executeMethod ("SelectContentControl")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
