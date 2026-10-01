---
sidebar_position: -1
description: 使用 HTML、CSS 和 JavaScript 构建 ONLYOFFICE 插件，为文档、电子表格、演示文稿和 PDF 编辑器添加面板、工具栏按钮和第三方集成。
---

# 概述

ONLYOFFICE 插件是使用 HTML、CSS 和 JavaScript 构建的 Web 应用，运行在文档、电子表格、演示文稿和 PDF 编辑器中。插件可以打开面板或窗口、添加工具栏按钮和上下文菜单项，也可以在后台运行，并通过插件 API 读取和修改文档。插件可在 ONLYOFFICE 文档、ONLYOFFICE 协作空间和 ONLYOFFICE 桌面编辑器中使用。

如果您希望直接开始编写代码，请前往[快速入门指南](quick-start.md)，或在[交互式 Playground](playground.md) 中体验。

## 您可以构建什么

构建与 ONLYOFFICE 原生体验融为一体的复杂集成。

**适用场景**：

- 嵌入外部内容（[YouTube](../samples/youtube.md)、媒体库）
- 第三方集成（[Translator](../samples/translator.md)、[Zotero](../samples/zotero.md)、CRM 系统）
- 高级处理（[OCR](../samples/ocr.md)、图像处理、数据可视化）
- 自定义工作流（表单构建器、审批系统、模板）

**开发概况**：

- **技能**：中级 | **技术栈**：HTML/CSS/JavaScript
- **分发方式**：编辑器内置的 ONLYOFFICE 插件市场（[如何提交](../development-workflow/publishing/submit-to-marketplace.md)），或[私有部署](../development-workflow/publishing/private-distribution.md)

## 插件的限制 {#what-plugins-cannot-do}

- 无法直接访问编辑器的内部 DOM 或 JavaScript 作用域
- 无法访问用户计算机上的文件系统
- 无法绕过 API 执行插件 SDK 未公开的操作

这种沙箱化设计是有意为之的——无论插件做什么，都能保持编辑器的稳定与安全。

![插件架构](/assets/images/plugins/plugin-architecture-detailed.svg#gh-light-mode-only)![插件架构](/assets/images/plugins/plugin-architecture-detailed-dark.svg#gh-dark-mode-only)

## 方案对比 {#comparing-approaches}

不确定哪种方案适合您的使用场景？了解插件与宏及自定义 AI 工具的对比。

![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme.svg#gh-light-mode-only)
![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme-dark.svg#gh-dark-mode-only)

| 功能           | **插件**                        | **宏**                   | **AI 工具**              |
| -------------- | ------------------------------- | ------------------------ | ------------------------ |
| **是什么？**   | 嵌入编辑器的 HTML/CSS/JS 应用  | 文档中的 JavaScript 代码 | 插件 + AI 提供商集成     |
| **安装**       | 需要（应用市场或手动）          | 无需（嵌入文档）         | 需要（与插件相同）       |
| **用户界面**   | ✅ 完整自定义 UI                | ❌ 无 UI                 | ✅ 完整自定义 UI         |
| **外部 API**   | ✅ 支持（REST、GraphQL 等）     | ❌ 不支持                | ✅ 支持（需要 AI 服务）  |
| **离线使用**   | ⚠️ 取决于功能                  | ✅ 完全离线              | ❌ 需要网络              |
| **技能要求**   | 中级                            | 入门                     | 高级                     |
| **分发方式**   | 应用市场、GitHub、私有          | 复制粘贴、模板           | 应用市场、私有           |
| **最适合**     | 可复用工具、集成                | 个人自动化               | AI 驱动功能              |
| **框架支持**   | ✅ 任意（React、Vue、Angular 或纯 HTML）  | ❌ 仅限原生 JavaScript   | ✅ 任意（与插件相同）         |

另请参阅：[宏](../../macros/get-started/overview.md) | [自定义 AI 工具](../../ai/get-started/overview.md)

## 故障排除

如果插件不显示、窗口空白或 API 调用失败，请参阅[常见错误及解决方案](../development-workflow/common-errors-solutions.md)了解症状和解决方法，并参阅[调试插件](../development-workflow/debugging-plugins.md)了解如何在开发者工具中检查正在运行的插件。

仍未解决？请在 [ONLYOFFICE 论坛](https://forum.onlyoffice.com/)或 [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) 上提问，或在 [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins/issues) 中报告问题。

## 资源

- **[API 参考](../interacting-with-editors/overview/overview.md)** - 插件方法、事件以及 `window.Asc.plugin` 对象
- **[插件配置](../configuration/configuration.md)** - 所有 `config.json` 参数
- **[交互式 Playground](playground.md)** - 无需安装即可运行插件代码
- **[插件示例](/samples/?doctype=docs&text=plugin)** - 可供参考的可运行插件
- **[UI 组件库](https://onlyoffice.github.io/storybook/static/)** - 与编辑器风格一致的控件
- **[官方插件源代码](https://github.com/ONLYOFFICE/sdkjs-plugins)** - 由 ONLYOFFICE 维护的完整插件
- **[常见问题](../more-information/faq.md)** - 常见问题解答
- **[更新日志](../more-information/changelog.md)** - 各方法和事件的引入版本

## 下一步 {#next-steps}

- [插件快速入门](quick-start.md)
- [插件事件](../interacting-with-editors/overview/asc-plugin.md#events)
- [开发插件](../development-workflow/developing-plugins.md)
- [发布指南](../development-workflow/publishing/submit-to-marketplace.md)
