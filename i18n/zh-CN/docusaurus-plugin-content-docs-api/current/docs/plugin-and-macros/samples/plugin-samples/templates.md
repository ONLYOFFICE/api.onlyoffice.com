# 模板

插入由 Document Builder 脚本生成的文档模板。

**插件类型：** 可视化，非系统插件。

**支持的编辑器：** 文档。

![Templates](/assets/images/plugins/gifs/templates.gif)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/templates) 下载该插件，并根据以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡。
2. 选择一个需要插入的文档模板并点击它。

## 插件结构

GitHub 仓库：[templates](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/templates)。

1. *config.json*、*index.html* 和 *templates.js*
2. 图标
3. *templates* 文件夹包含文档模板。

## 配置

``` json
{
  "name": "Document Templates",
  "guid": "asc.{94DF0B57-299D-4F68-AF6F-9A6BB53F3031}",

  "variations": [
    {
      "description": "templates",
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
- onExternalMouseUp
- [info.recalculate](../../interacting-with-editors/overview/how-to-call-commands.md#recalculate)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
