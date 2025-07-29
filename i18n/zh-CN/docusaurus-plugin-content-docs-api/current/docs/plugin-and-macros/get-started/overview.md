---
sidebar_position: -2
---

# 概览

ONLYOFFICE 的[文档](https://www.onlyoffice.com/zh/office-suite.aspx)和[桌面编辑器](https://www.onlyoffice.com/zh/desktop.aspx)支持插件功能，允许开发者为编辑器添加与 OOXML 格式无直接关联的特定功能。

插件是嵌入编辑器中的 HTML 页面，通过 API 与编辑器交互。

本手册将介绍以下内容：

- 如何[构建](../structure/manifest/manifest.md)，[本地化](../structure/localization.md)，运行，[测试](../tutorials/developing/for-web-editors.md)和[发布](../tutorials/publishing.md)插件
- 如何自定义插件: 创建[右键菜单项](../customization/context-menu.md)，[工具栏按钮](../customization/toolbar.md)，[窗口与面板](../customization/windows-and-panels.md)，[输入助手](../customization/input-helper.md)，处理[按钮](../customization/buttons.md)
- 如何[编写](../macros/writing-macros.md)，[调试](../macros/debugging.md)和运行宏，添加自定义函数，或者[转换](../macros/converting-vba-macros.md) VBA 宏以在 ONLYOFFICE 中使用
- 如何[与编辑器交互](../interacting-with-editors/overview/overview.md)，使用 ONLYOFFICE 的[方法](../interacting-with-editors/overview/how-to-call-methods.md)和[事件](../interacting-with-editors/overview/how-to-attach-events.md)
- 哪里可以找到指南以及[插件](../samples/plugin-samples/plugin-samples.md)/[宏](../samples/macro-samples/macro-samples.md)代码案例以进行入门学习

## 插件可以做什么

以下是使用 ONLYOFFICE 插件可以实现的一些功能的案例：

- 连接第三方服务，例如 <!-- [Telegram](../samples/plugin-samples/telegram.md)， -->[YouTube](../samples/plugin-samples/youtube.md)，[Thesaurus](../samples/plugin-samples/thesaurus.md)，[Translator](../samples/plugin-samples/translator.md)，[Zotero](../samples/plugin-samples/zotero.md)，[OCR](../samples/plugin-samples/ocr.md) 等；
- 在 UI 中添加自定义组件和控件， 例如 **Trackchanges**， **Trackchanges\_off**；
- 增强现有用户体验和编辑器功能: [自动完成](../samples/plugin-samples/autocomplete.md)，[查找与替换](../samples/plugin-samples/search-and-replace.md)，[移动光标](../samples/plugin-samples/move-cursor.md)，[扩展评论](../samples/plugin-samples/extended-comments.md)；
- 使用 [Macros](../macros/getting-started.md) 实现文档任务自动化。

代码示例可见于 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)。

如需查找可直接使用的插件，请访问 [ONLYOFFICE 应用市场](https://www.onlyoffice.com/app-directory/zh)。

如需快速安装和更新插件，可使用 [ONLYOFFICE 插件市场](../tutorials/installing/onlyoffice-docs-on-premises.md#adding-plugins-through-the-plugin-manager-for-a-single-user)。

## 如何创建插件

要创建您自己的插件，需要进行以下几个步骤：

1. 学习[入门指南](./getting-started.md)中的插件开发基础概念，编写定义插件外观和行为的代码。
2. 插件开发完成后，对其进行全面[测试](../tutorials/developing/for-web-editors.md)，确保插件的外观和功能符合预期。尽量预判可能出现的问题并提出相应解决方案。
3. 完成后，你可以自行使用该插件或通过向[插件市场](https://github.com/ONLYOFFICE/onlyoffice.github.io)提交拉取请求将插件[发布](../tutorials/publishing.md)。 
