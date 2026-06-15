---
sidebar_position: -2
---

# 概述

插件和宏可以通过 [Asc.plugin](asc-plugin.md) 对象与编辑器进行交互——其[事件](asc-plugin.md#events)、方法和命令。在此您将了解如何使用它们。

- [Asc.plugin](asc-plugin.md) — 主插件对象：属性、方法和事件
- [如何绑定事件](how-to-attach-events.md) — 监听编辑器事件
- [如何调用方法](how-to-call-methods.md)
- [如何调用命令](how-to-call-commands.md)

插件的主代码放在一个 .js 文件中，该文件描述了插件应执行的内容以及如何执行。此文件与 [config.json](../../fundamentals/configuration/config-json.md) 和 [index.html](../../fundamentals/configuration/entry-point.md) 文件一起放置于插件根目录中。

## 工作原理 {#how-it-works}

任何插件都包含 [Asc.plugin](asc-plugin.md) 对象，该对象提供与 ONLYOFFICE 文档、电子表格、演示文稿和 PDF 编辑器交互的方法和事件。

:::note
请注意，从 7.1 版本开始，由于插件脚本启用了"使用严格模式"，因此在插件命令代码中访问窗口和文件对象以及使用警告函数将受到限制。请务必在使用变量前先声明，以确保插件正常运行。
:::

为了使插件正常运行，开发者必须为 `Asc.plugin` 对象指定两个必要事件：[init](asc-plugin.md#init) 和 [button](asc-plugin.md#button)。之后：

- [callCommand](how-to-call-commands.md#callcommand) 用于在一次调用中执行多个 [Office JavaScript API](../../../office-api/get-started/overview.md) 命令。
- [executeMethod](how-to-call-methods.md#executemethod) 用于运行单个编辑器方法（如 `AddComment`、`GetSelectedText`）。

如果插件涉及 OLE 对象的操作，使用 [callCommand](how-to-call-commands.md#callcommand) 进行处理。

有关最简工作示例，请参阅 [Asc.plugin](asc-plugin.md#minimal-example) 页面；有关完整操作指南，请参阅[入门指南](../../fundamentals/getting-started/what-is-a-plugin.md)。更多开源插件示例可在[此处](/samples/?doctype=docs&text=plugin)查看。
