# 发票

向文档中插入发票信息的模板字段。

**插件类型：** 可视化，非系统插件。  

**支持的编辑器：** 文本文档。

![Invoices](/assets/images/plugins/gifs/invoices.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/invoices) 下载此插件，并根据以下说明进行安装：[桌面端安装教程](../../tutorials/installing/onlyoffice-desktop-editors.md), [本地部署安装教程](../../tutorials/installing/onlyoffice-docs-on-premises.md), [云端安装教程](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡，点击**发票**。
2. 点击 **+** 或**标记**按钮，在文档中添加模板字段。

## 插件结构

GitHub 仓库地址：[invoices](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/invoices)

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "Invoices",
  "guid": "asc.{6B6715E5-A558-4F70-8058-40704CD659CF}",

  "variations": [
    {
      "description": "invoices",
      "url": "index.html",

      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
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
- [info.recalculate](../../interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
