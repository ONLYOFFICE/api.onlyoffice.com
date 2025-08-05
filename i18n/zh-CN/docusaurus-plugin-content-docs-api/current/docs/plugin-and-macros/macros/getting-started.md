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

如何编写您自己的宏：

1. 打开**视图**选项卡并点击**宏**。
2. 参考 [API 文档](../../office-api/get-started/overview.md)编写脚本。
3. [编写](./writing-macros.md)宏代码。
4. 若要重命名宏，点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)图标并选择**重命名**。输入新名称后点击**确定**。
5. 准备就绪后，点击![Play icon](/assets/images/plugins/play.svg)图标在文档中运行代码。

![Macros window](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Macros window](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)

若要添加更多宏，请点击![Plus icon](/assets/images/plugins/plus.svg)。

如需删除不再需要的宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)并选择**删除**。.

如要复制宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)图标然后选择**复制**。
