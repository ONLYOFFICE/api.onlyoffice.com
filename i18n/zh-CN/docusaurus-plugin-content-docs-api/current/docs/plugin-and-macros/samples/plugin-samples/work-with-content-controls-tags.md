# 内容控件标签操作

获取内容控件标签列表。

**插件类型：** 可视化，非系统插件。

**支持编辑器：** 文档。

![WorkWithContentControlsTags](/assets/images/plugins/gifs/work-with-content-controls-tags.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_tags) 下载此插件，并按照[桌面](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)的安装说明进行安装。

## 使用方法

1. 在文档中添加一些内容控件，并为它们设置标签。  
2. 打开**插件**选项卡，点击**内容控件标签操作示例**。  
3. 在插件窗口中可以看到所有内容控件的标签。点击**刷新列表**按钮以更新列表。  
4. 点击**文档测试粘贴**按钮，将文本粘贴到文档中光标所在位置。

## 插件结构

GitHub 仓库：[https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_tags](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_tags)。

1. *config.json*、*index.html* 和 *code.js*  

2. 图标  

3. 第三方服务：  

   - [jQuery](https://jquery.com) — 一款快速简洁的 JavaScript 库，简化了 HTML 文档遍历、事件处理、动画和 Ajax 交互，适合快速 Web 开发。许可证：[MIT 许可证](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/example_work_with_content_controls_tags/licenses/jQuery.license)。

## 配置

``` json
{
  "name": "Example work with content controls tags",
  "guid": "asc.{C36DDFB5-08F0-4A68-B829-5FB1F7D49331}",

  "variations": [
    {
      "description": "Example work with content controls tags",
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

      "buttons": [],

      "initOnSelectionChanged": false
    }
  ]
}
```

## 方法和事件

- button
- init
- onMethodReturn
- executeMethod ("GetAllContentControls")
- [executeMethod ("PasteText")](../../interacting-with-editors/methods/text-document-api/Api/Methods/PasteText.md)
- executeMethod ("SelectContentControl")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
