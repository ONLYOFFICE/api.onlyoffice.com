# 设置

使用水印保护文档。

**插件类型：** 非可视化，系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

![Settings](/assets/images/plugins/gifs/settings.gif)

## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/settings) 下载该插件，并按照以下说明进行安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md) 或 [云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 将插件添加到编辑器后，重新打开文档即可显示水印。

## 插件结构

GitHub 仓库：[设置](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/settings)。

1. *config.json*、*index.html* 和 *code.js*

## 配置

``` json
{
  "name": "settings",
  "guid": "asc.{CF3A000F-C6B4-451D-AC0B-F3DDAB1880D2}",
  "baseUrl": "",
  "variations": [
    {
      "description": "settings",
      "url": "index.html",

      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide"],

      "isSystem": true,
      "isVisual": false,

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
- [executeMethod ("SetProperties")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/SetProperties.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
