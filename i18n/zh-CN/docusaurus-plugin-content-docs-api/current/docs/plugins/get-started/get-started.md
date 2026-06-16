---
sidebar_position: -1
---

# 插件入门

ONLYOFFICE 插件是使用 HTML、CSS 和 JavaScript 构建的交互式工具，可将原生体验的功能直接嵌入编辑器。安装一次，即可供所有用户使用。

如果您希望直接开始编写代码，请前往[快速入门指南](quick-start.md)，或在[交互式 Playground](playground.md) 中体验。

## 您可以构建什么

构建与 ONLYOFFICE 原生体验融为一体的复杂集成。

**适用场景：**

- 嵌入外部内容（[YouTube](../learning-resources/samples/youtube.md)、媒体库）
- 第三方集成（[Translator](../learning-resources/samples/translator.md)、[Zotero](../learning-resources/samples/zotero.md)、CRM 系统）
- 高级处理（[OCR](../learning-resources/samples/ocr.md)、图像处理、数据可视化）
- 自定义工作流（表单构建器、审批系统、模板）

**开发概况：**

- **时间：** 2-7 天 | **技能：** 中级 | **技术栈：** HTML/CSS/JavaScript
- **分发方式：** [ONLYOFFICE 应用市场](https://www.onlyoffice.com/app-directory/zh) 或私有部署

[在 ONLYOFFICE 应用市场浏览示例](https://www.onlyoffice.com/app-directory/zh)

## 插件的限制 {#what-plugins-cannot-do}

- 无法直接访问编辑器的内部 DOM 或 JavaScript 作用域
- 无法访问用户计算机上的文件系统
- 无法绕过 API 执行插件 SDK 未公开的操作

这种沙箱化设计是有意为之的——无论插件做什么，都能保持编辑器的稳定与安全。

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
| **开发时间**   | 2-7 天                          | 30 分钟 - 2 小时         | 3-10 天                  |
| **分发方式**   | 应用市场、GitHub、私有          | 复制粘贴、模板           | 应用市场、私有           |
| **最适合**     | 可复用工具、集成                | 个人自动化               | AI 驱动功能              |
| **框架支持**   | ✅ React、Vue、Angular          | ❌ 仅限原生 JS           | ✅ 任意框架              |

另请参阅：[宏](../../macros/get-started/get-started.md) | [自定义 AI 工具](../../ai/get-started/get-started.md)

## 故障排除

**插件不显示：**

- 检查 `config.json` 中是否有唯一的 GUID
- 确认文件路径正确
- 重启 ONLYOFFICE

**JavaScript 错误：**

- 打开浏览器开发者工具（F12）
- 在 Console 标签页中查看错误信息
- 确认 `plugin.js` 已加载

**API 方法调用失败：**

- 确认您的 ONLYOFFICE 版本支持该方法
- 在 [API 参考](../interacting-with-editors/overview/overview.md)中检查方法语法
- 确认编辑器类型兼容性

**需要更多帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) - 社区支持
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) - 报告问题
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) - 问答归档

## 资源

- **[交互式 Playground](playground.md)** - 无需安装即可测试代码
- **[UI 组件库](https://onlyoffice.github.io/storybook/static/)** - 预构建组件
- **[插件模板](https://github.com/ONLYOFFICE/sdkjs-plugins)** - 起始项目
- **[浏览器开发者工具](../development-workflow/debugging/for-web-editors.md)** - 调试指南
- **[插件示例](/samples/?doctype=docs&text=plugin)** - 可运行示例
- **[API 参考](../interacting-with-editors/overview/overview.md)** - 完整 API 文档
- **[插件结构](../configuration/configuration.md)** - 配置指南
- **[常见问题](../more-information/faq.md)** - 常见问题解答
- **[论坛](https://forum.onlyoffice.com/)** - 社区支持
- **[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)** - 源代码与贡献
- **[更新日志](../more-information/changelog.md)** - 最新 API 更新

## 下一步 {#next-steps}

- [插件快速入门](quick-start.md)
- [插件事件](../interacting-with-editors/overview/asc-plugin.md#events)
- [Web 编辑器开发](../development-workflow/developing/for-web-editors.md)
- [发布指南](../development-workflow/publishing/submit-to-marketplace.md)
