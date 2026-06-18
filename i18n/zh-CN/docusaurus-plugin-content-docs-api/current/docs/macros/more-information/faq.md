---
sidebar_position: -1
---

# 常见问题

## 宏使用哪种脚本语言？

ONLYOFFICE 宏使用 JavaScript 语法和 [Office JavaScript API](../../office-api/get-started/overview.md) 脚本规范。JavaScript 中所有可用的方法以及 Office API 支持的所有方法均可在宏中使用。

## 如何运行宏？

1. 打开 ONLYOFFICE 桌面编辑器或 ONLYOFFICE Docs。
2. 导航至顶部工具栏的**视图**标签页。
3. 点击**宏**按钮以打开宏编辑器。
4. 编写或粘贴宏代码，然后点击 ![Play icon](/assets/images/plugins/play.svg) 运行。

详细的操作步骤请参阅[入门指南](../guides/getting-started.md)。

## 宏可以访问文件系统或发起网络请求吗？

不可以。宏作为 JavaScript 代码在编辑器窗口内运行，无法访问系统资源，不能读写文件、发起网络请求或直接与操作系统交互。

## 如何调试宏？

在脚本中使用 **debugger** 关键字设置断点，然后按 **F12** 键打开浏览器开发者控制台。对于 ONLYOFFICE 桌面编辑器，请参阅[特定平台的调试说明](../../desktop-editors/usage-api/debugging.md)。完整的调试指南请参见[调试](../guides/debugging.md)页面。

## 我可以在 ONLYOFFICE 中使用 Microsoft Office（VBA）宏吗？

不能直接使用，因为 ONLYOFFICE 宏使用 JavaScript，而 Microsoft Office 宏使用 Visual Basic for Applications（VBA）脚本语言。您可以通过以下两种方式进行转换：

- **自动转换** - 使用内置 AI 插件转换器（推荐，速度更快）。详见[转换 VBA 宏](../guides/converting-vba-macros.md)。
- **手动转换** - 使用 Office JavaScript API，以 JavaScript 重写宏逻辑。

## 能否让宏在所有文档中都可用？

宏与特定文档绑定，无法设为全局可用。如果需要为所有用户提供跨文档可用的功能，请编写[插件](../../plugins/get-started/get-started.md)来实现。

## 在哪里可以找到现成的宏示例？

可在[示例页面](/samples/?doctype=docs&text=macros)中找到可直接使用的宏示例。
