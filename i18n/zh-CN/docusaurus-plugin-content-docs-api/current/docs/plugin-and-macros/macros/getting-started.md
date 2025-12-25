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

## How to start writing your macro

1. Open ONLYOFFICE Desktop Editors.
2. Navigate to the **View** tab on the top toolbar.
3. Click the **Macros** button to open the macro editor.

![Macro button](/assets/images/plugins/macro-button.png#gh-light-mode-only)![Macro button](/assets/images/plugins/macro-button.dark.png#gh-dark-mode-only)

4. Consult the [API documentation](../../office-api/get-started/overview.md) to write the script.
5. [Write](./writing-macros.md) code for your macro or copy an example macro code from the [macro samples](../samples/macro-samples/macro-samples.md) and paste it into the macro editor's workspace.
![Macros window](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Macros window](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)

7. To rename the macro, click ![Dots icon](/assets/images/plugins/dots.svg#gh-light-mode-only)![Dots icon](/assets/images/plugins/dots.dark.svg#gh-dark-mode-only) next to the macro name and select **Rename**. Enter a new name for the macro and click **Ok**.
8. When ready, click ![Play icon](/assets/images/plugins/play.svg) to run your code in the document.


![Run macro](/assets/images/plugins/run-macro.png#gh-light-mode-only)![Run macro](/assets/images/plugins/run-macro.dark.png#gh-dark-mode-only)

若要添加更多宏，请点击![Plus icon](/assets/images/plugins/plus.svg)。

如需删除不再需要的宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)并选择**删除**。.

如要复制宏，请点击宏名称旁边的![Dots icon](/assets/images/plugins/dots.svg)图标然后选择**复制**。
