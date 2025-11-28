# 加载自定义字段（Load custom fields）

从文档中加载自定义字段。

> 这些字段需已通过[示例添加自定义字段](./add-custom-fields.md)插件添加至文档中。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

![LoadCustomFields](/assets/images/plugins/gifs/load-custom-fields.gif)

安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load) 下载该插件，并按照以下说明进行安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡，点击**示例加载自定义字段**。
2. 若遇到**简单问题**，请在**请在这里输入……** 输入框中填写你的答案。
3. 若遇到**带下拉选项的问题**，请选择一个选项。
4. 点击**下一步**按钮进入下一题，或点击**返回**按钮回到上一题。
5. 所有问题回答完毕后，插件会自动关闭，你的答案将出现在文档中。

## 插件结构

GitHub 仓库：[example_customfields_load](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_load)

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "Example loading custom fields",
  "guid": "asc.{E5A81B17-C871-4C4B-A90A-62D3A7EC0751}",

  "variations": [
    {
      "description": "Example loading custom fields",
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
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,

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
- onMethodReturn
- executeMethod ("GetAllContentControls")
- executeMethod ("InsertAndReplaceContentControls")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
