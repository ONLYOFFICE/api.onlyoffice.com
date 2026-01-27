---
sidebar_position: -4
---

# 入口文件

每个插件都在其自己的 iframe 中运行。编辑器会连接在插件配置文件 [config.json](./configuration/configuration.md) 中指定的 index.html 文件。index.html 文件是插件的入口文件，它会连接 [plugin.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js) 文件。 这是在编辑器中使用插件所需的基础文件。

## 示例

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Plugin name</title>
        <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
        <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
        <link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
        <script type="text/javascript" src="plugin.js"></script>
    </head>
    <body style="width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;">
        <div id="plugin name" style="margin: 0; padding: 0;"></div>
    </body>
</html>
```

 \<head>...\</head> 部分包含了插件正常工作所需的所有脚本和样式表的链接（包括本地和远程的，具体取决于插件是否使用它们）。其中也包括指向 plugins.js 基础文件的链接，该文件用于实现与编辑器交互的基础插件方法。
 
如果插件是可视化插件，并且您希望其按钮和界面元素与编辑器中一致，则可以连接 [plugins-ui.js](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js) 和 [plugins.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) 文件。关于 ONLYOFFICE 样式和元素的更多信息可参见[此处](../customization/styles.md)。

页面主体中可以包含 \<div>...\</div> 标签，作为插件组件插入的占位符。这些插件组件的行为定义在[插件代码文件](../interacting-with-editors/overview/overview.md)中可以查看。
