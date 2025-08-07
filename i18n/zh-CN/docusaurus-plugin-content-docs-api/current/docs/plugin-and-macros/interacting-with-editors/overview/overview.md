---
sidebar_position: -2
---

# 概述

插件和宏可以通过多种事件、方法和命令与编辑器进行交互。在此您将了解如何使用它们。

- [如何绑定事件](how-to-attach-events.md)
- [如何调用方法](how-to-call-methods.md)
- [如何调用命令](how-to-call-commands.md)

插件的主代码放在一个 .js 文件中，该文件描述了插件应执行的内容以及如何执行。此文件与 [config.json](../../structure/configuration/configuration.md) 和 [index.html](../../structure/entry-point.md) 文件一起放置于插件根目录中。

## 工作原理

任何插件都包含 window.Asc.plugin 对象，该对象拥有多个方法，用于与 ONLYOFFICE 的文档、电子表格和演示编辑器进行交互。

> 请注意，从 7.1 版本开始，由于插件脚本启用了“使用严格模式”，因此在插件命令代码中访问窗口和文件对象以及使用警告函数将受到限制。请务必在使用变量前先声明，以确保插件正常运行。

为了使插件正常运行，开发者必须为 window.Asc.plugin 对象指定两个必要事件：window.Asc.plugin.init 和 window.Asc.plugin.button。之后，通过 [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) 方法，借助内置的 **ONLYOFFICE 文档建构器** [API](../../../document-builder/builder-framework/C++/CDocBuilder/ExecuteCommand.md) 功能将数据发送给编辑器。

如果插件涉及 OLE 对象的操作，也需要使用 [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) 方法进行处理。

以 helloworld.js 插件为例：

``` ts
window.Asc.plugin.init = function init() {
  this.callCommand(() => {
    const oDocument = Api.GetDocument()
    const oParagraph = Api.CreateParagraph()
    oParagraph.AddText("Hello world!")
    oDocument.InsertContent([oParagraph])
  }, true)
}
window.Asc.plugin.button = function button(id) {}
```

当插件对象初始化时（window.Asc.plugin.init = function () \{...\}），编辑器会创建一个包含 Hello World 文字的段落，并使用 [Office JavaScript API](../../../office-api/get-started/overview.md) 创建包含该文本的文档（通过 window.Asc.plugin.callCommand 方法，即 this.callCommand(function() {...}) 实现）。

> 请注意，所有 [Office JavaScript API](../../../office-api/get-started/overview.md) 功能都已包含在所有版本的 ONLYOFFICE 文档编辑器中（包括开源版），插件正是通过这些功能与编辑器交互的。如果您希望在没有文档编辑器的情况下创建文档，可安装独立的 **ONLYOFFICE 文档建构器**版本。

唯一的确定按钮（window.Asc.plugin.button = function (id) \{...\}）用于创建文本并结束插件操作。

更多现有的开源插件示例可在[此处](../../samples/plugin-samples/plugin-samples.md)查看。
