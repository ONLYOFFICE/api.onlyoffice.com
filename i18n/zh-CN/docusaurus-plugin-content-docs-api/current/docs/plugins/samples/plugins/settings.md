# 设置

使用水印保护文档。

**插件类型：** 非可视化，系统插件。

**支持的编辑器：** 文档、电子表格、演示文稿。

<video autoPlay loop muted playsInline>
  <source src="/assets/images/plugins/webm/settings.webm" type="video/webm" />
</video>

## 安装方式

从 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/settings) 下载该插件，并按照以下说明进行安装：[桌面端](/docs/plugins/development-workflow/installing-and-testing/desktop-editors-installation)、[本地部署](/docs/plugins/development-workflow/installing-and-testing/docs-on-premises-installation) 或 [云端](/docs/plugins/development-workflow/installing-and-testing/cloud-saas-installation)。

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

- [button](/docs/plugins/customization/custom-buttons.md)
- [init](/docs/plugins/interacting-with-editors/overview/#how-it-works)
- [executeMethod ("SetProperties")](/docs/plugins/interacting-with-editors/document-api/Methods/SetProperties.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
