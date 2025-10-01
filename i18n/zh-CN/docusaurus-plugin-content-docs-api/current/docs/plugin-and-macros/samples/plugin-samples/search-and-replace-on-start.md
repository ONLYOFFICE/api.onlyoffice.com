# 启动时搜索并替换

在重新打开文档时搜索并替换文本。

**插件类型：** 非可视，系统型。

**支持的编辑器：** 文本文档。

![SearchAndReplaceOnStart](/assets/images/plugins/gifs/search-and-replace-on-start.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/searchAndReplaceOnStart) 下载该插件，并按照[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)的安装指南进行安装。

## 使用方法

1. 在文档中输入任意文本（本示例中为 ONLYOFFICE）。
2. 在插件代码中，将 **replaceString** 参数设置为替换文本。
3. 重新打开文档。

## 插件结构

GitHub 仓库：[示例：查找替换](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/searchAndReplaceOnStart)。

1. *config.json*、*index.html* 和 *code.js*

## 配置

``` json
{
  "name": "searchAndReplaceOnStart",
  "guid": "asc.{C820F3CC-1248-4CA2-8D0F-D7EFD44DE09C}",
  "baseUrl": "",
  "variations": [
    {
      "description": "searchAndReplaceOnStart",
      "url": "index.html",

      "isViewer": true,
      "EditorsSupport": ["word"],

      "isSystem": true,
      "isVisual": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [],

      "events": ["onDocumentContentReady"]
    }
  ]
}
```

## 方法和事件

- button
- init
- onDocumentContentReady
- executeMethod ("SearchAndReplace")

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
