---
sidebar_position: -2
---

# 常见问题

## 如何为 ONLYOFFICE 编辑器安装插件？

部分插件默认已安装。切换到**插件**选项卡即可查看可用插件。如需安装其他插件，请参阅以下安装说明：[桌面版](../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端版](../tutorials/installing/onlyoffice-cloud.md)。

## 如何将插件调整为 ONLYOFFICE 样式？

ONLYOFFICE 提供了专用样式表 [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css)，已连接到 *index.html* 文件。关于将 ONLYOFFICE 样式接入编辑器的详细说明，请参照[此页面](../structure/styles.md)。

## 如何本地化插件？

要本地化插件，您需要完成以下操作：

- 翻译 *config.json* 中的各部分；
- 本地化 *index.html* 和插件代码文件；
- 将翻译应用到插件中。

关于本地化的更多信息，请参阅[此页面](../structure/localization.md)。

## 如何为插件创建“关于”窗口？

你可以使用[插件变体](../structure/manifest/variations.md)或**子插件**来创建插件的**关于**窗口或添加额外的插件设置。如要查看包含两个变体的插件示例，请点击[此处](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/helloworld)。除了在配置中设置两个变体，还需要额外创建一个 *index_about.html* 文件。

## 在哪里可以找到可供集成的现有插件？

所有可用的现成插件都可以在 [ONLYOFFICE 应用目录](https://www.onlyoffice.com/app-directory/zh)中找到。

更多插件示例列在 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)，你可以自由地复制，并将它们作为创建自定义插件的参考。

## 我将插件文件夹打包为压缩文件，更改后缀为 *.plugin* 并添加到编辑器中，但插件无法运行。该怎么办？

请确保你的插件压缩包**不是**如下图所示：

![插件压缩包](/assets/images/plugins/plugin_archive.png)

所有插件文件和子文件夹必须位于压缩包的根目录。为此，请先解压插件文件夹，然后将其内部的文件和子文件夹存档。

## 可以在 ONLYOFFICE 编辑器中使用 Microsoft Office 宏吗？

Microsoft Office 宏使用的是 VBA 脚本语言，而 ONLYOFFICE 编辑器使用 JavaScript。但将宏转换为新格式并不困难。你可以在[此处](../macros/converting-vba-macros.md)查看 MS VBA 宏的转换示例。

## 在哪里可以找到编写宏的方法？

宏使用 JavaScript 语言语法和 [Office JavaScript API](../../office-api/get-started/overview.md) 脚本格式，因此 JavaScript 中可用的方法以及 **Office API** 所支持的方法也可用于宏。

## 我可以将宏设为全局宏吗？

宏是绑定到特定文档的，不能设置为全局宏。但你可以编写一个可以被所有用户加载的[插件](../structure/configuration/configuration.md)。
