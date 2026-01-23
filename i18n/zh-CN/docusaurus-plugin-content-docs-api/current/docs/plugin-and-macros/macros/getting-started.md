---
sidebar_position: -6
---

# 入门指南

宏是一种小型脚本，可帮助您在处理不同类型文档的日常工作中提高效率。ONLYOFFICE 宏使用 JavaScript 语法和 [Office JavaScript API](../../office-api/get-started/overview.md) 脚本规范。

ONLYOFFICE 选择 JavaScript 作为宏的脚本语言的原因有以下几点：

- 可跨平台；
- 易于使用；
- 更加安全——因为宏没有访问系统资源的权限。宏是仅可在编辑器窗口中运行的 JS 脚本。

> 请注意，从版本 7.1 开始，由于对宏脚本启用了**严格**模式，宏中对 **window** 和 **document** 对象，以及 **alert** 函数的访问将被限制。请确保在使用变量前进行声明以保证宏的正常运行。

您可以在[此处](../samples/macro-samples/macro-samples.md)找到可直接使用的宏示例，或编写自己的宏脚本。

## 如何开始编写宏

1. 打开 ONLYOFFICE 桌面编辑器。
2. 导航至顶部工具栏的**视图**标签页。
3. 点击**宏**按钮以打开宏编辑器。

![宏按钮](/assets/images/plugins/macro-button.png#gh-light-mode-only)![宏按钮](/assets/images/plugins/macro-button.dark.png#gh-dark-mode-only)

4. 查阅 [API 文档](../../office-api/get-started/overview.md)来编写脚本。
5. 为你的宏[编写](./writing-macros.md)代码，或者从[宏示例](../samples/macro-samples/macro-samples.md)中复制示例宏代码并粘贴到宏编辑器的工作区。
![宏窗口](/assets/images/plugins/macro-window.png#gh-light-mode-only)![宏窗口](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)

7. 若要重命名宏，请点击宏名称旁边的![三点图标](/assets/images/plugins/dots.svg#gh-light-mode-only)![三点图标](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only)，然后选择**重命名**。输入宏的新名称并点击**确定**。
8. 准备就绪后，点击![运行图标](/assets/images/plugins/play.svg)在文档中运行你的代码。


![运行宏](/assets/images/plugins/run-macro.png#gh-light-mode-only)![运行宏](/assets/images/plugins/run-macro.dark.png#gh-dark-mode-only)

若要添加更多宏，请点击![Plus icon](/assets/images/plugins/plus.svg)。

如需删除不再需要的宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)并选择**删除**。.

如要复制宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)图标然后选择**复制**。
