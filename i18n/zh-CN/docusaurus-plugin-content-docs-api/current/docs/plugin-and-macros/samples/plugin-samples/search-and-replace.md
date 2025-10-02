# 查找并替换

查找目标文本并将其替换为其他内容。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

![SearchandReplace](/assets/images/plugins/gifs/search-and-replace.gif)

## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_replace) 下载该插件，并按照以下说明进行安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 将要查找的文本插入文档（这些文本保存在插件代码中的 *arrCodes* 数组里）。
2. 打开**插件**选项卡并点击**示例：查找并替换**。
3. 输入你希望用于替换的文本，并点击**确定**按钮。

## 插件结构

GitHub 仓库：[示例：查找并替换](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_search_replace)。

1. *config.json*、*index.html* 和 *code.js* 
2. 图标

## 配置

``` json
{
  "name": "Example of search and replace",
  "guid": "asc.{5FF5F75F-2977-4B98-8D36-7C406D610B90}",

  "variations": [
    {
      "description": "Example of search and replace",
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
- executeMethod ("SearchAndReplace")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
