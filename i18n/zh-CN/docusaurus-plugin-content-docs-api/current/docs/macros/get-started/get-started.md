# 入门指南

ONLYOFFICE 支持三种扩展编辑器功能的方式：**插件**、**宏**和**自定义 AI 工具**。本页面帮助您选择合适的方案并快速上手。

如果您希望直接开始编写代码，请前往[快速入门指南](quick-start/hello-world-macro)，或在[交互式 Playground](playground.md) 中体验。

## 您可以构建什么 {#what-you-can-build}

### 插件 — 具有丰富界面的交互式工具

构建与 ONLYOFFICE 原生体验融为一体的复杂集成。

**适用场景：**

- 嵌入外部内容（[YouTube](/docs/plugins/samples/youtube)、媒体库）
- 第三方集成（[Translator](/docs/plugins/samples/translator)、[Zotero](/docs/plugins/samples/zotero)、CRM 系统）
- 高级处理（[OCR](/docs/plugins/samples/ocr)、图像处理、数据可视化）
- 自定义工作流（表单构建器、审批系统、模板）

**开发概况：**

- **时间：** 2-7 天 | **技能：** 中级 | **技术栈：** HTML/CSS/JavaScript
- **分发方式：** [ONLYOFFICE 应用市场](https://www.onlyoffice.com/app-directory/zh)或私有部署

[在 ONLYOFFICE 应用市场浏览示例](https://www.onlyoffice.com/app-directory/zh)

### 宏 — 即时自动化脚本

轻量级 JavaScript，直接在文档中运行，无需安装。

**适用场景：**

- 一键格式化（[重置文本属性](/docs/macros/samples/document-editor/reset-text-properties) — 快速将文本重置为默认格式）
- 批量操作（[删除空表格](/docs/macros/samples/document-editor/remove-empty-tables) — 删除整个文档中的所有空表格）
- 自定义计算（[加权平均值](/docs/macros/samples/spreadsheet-editor/weighted-average-function) — 计算所选范围的加权平均值）
- 文档清理（[删除空段落](/docs/macros/samples/presentation-editor/remove-empty-paragraphs) — 删除整个演示文稿中所有不必要的空段落）

**开发概况：**

- **时间：** 30 分钟 - 2 小时 | **技能：** 入门 | **技术栈：** JavaScript 基础
- **分发方式：** 复制粘贴代码或嵌入文档模板

[浏览所有宏示例](/samples/?doctype=docs&text=macros)

### 自定义 AI 工具 — 智能助手

结合 AI 能力的自定义工具，实现新一代文档工作流。

**适用场景：**

- 写作辅助（[检查拼写](/docs/ai/samples/document-editor/check-spelling) — AI 驱动的拼写检查）
- 智能样式（[更改文本样式](/docs/ai/samples/document-editor/change-text-style) — AI 驱动的文本样式调整）
- 自动生成形状（[添加形状](/docs/ai/samples/presentation-editor/add-shape-to-slide) — AI 驱动的演示文稿设计）
- 数据洞察（[解释公式](/docs/ai/samples/spreadsheet-editor/explain-formula) — AI 驱动的公式解释）

**开发概况：**

- **时间：** 3-10 天 | **技能：** 高级 | **技术栈：** 插件 API + AI 提供商集成
- **要求：** OpenAI、Claude 或自定义 AI 服务的 API 密钥

[浏览所有 AI 函数示例](/samples/?doctype=ai&text=ai+tools)

## 如何选择方案？ {#which-approach-would-you-choose}

回答以下问题，找到最适合您的方向：

![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme.svg#gh-light-mode-only)
![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme-dark.svg#gh-dark-mode-only)

## 详细对比 {#detailed-comparison}

| 功能           | **插件**                        | **宏**                   | **AI 插件**              |
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

## 故障排除 {#troubleshooting}

### 插件问题

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
- 在 [API 参考](/docs/plugins/interacting-with-editors/overview/)中检查方法语法
- 确认编辑器类型兼容性

### 宏问题

**宏无法运行：**

- 检查**工具 → 设置**中是否已启用宏
- 在宏编辑器中检查语法错误
- 确认 API 方法名称正确

**结果不符合预期：**

- 添加 `console.log()` 语句进行调试
- 逐步单独测试每个步骤
- 运行前检查文档状态

**需要更多帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) — 社区支持
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — 报告问题
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — 问答归档

## 资源 {#resources}

### 开发工具

- **[交互式 Playground](playground.md)** — 无需安装即可测试代码
- **[UI 组件库](https://onlyoffice.github.io/storybook/static/)** — 预构建组件
- **[插件模板](https://github.com/ONLYOFFICE/sdkjs-plugins)** — 起始项目
- **[浏览器开发者工具](/docs/plugins/development-workflow/debugging/browser-devtools-guide)** — 调试指南

### 示例代码

- **[插件示例](/samples/?doctype=docs&text=plugin)** — 可运行示例
- **[宏示例](/samples/?doctype=docs&text=macros)** — 常用自动化脚本
- **[AI 函数示例](/samples/?doctype=ai&text=ai+tools)** — AI 集成模式

### 文档

- **[API 参考](/docs/plugins/interacting-with-editors/overview/)** — 完整 API 文档
- **[插件结构](/docs/plugins/fundamentals/configuration/config-json)** — 配置指南
- **[宏指南](../macros/writing-macros.md)** — 宏开发
- **[AI 集成](/docs/ai/ai/ai-plugin)** — AI 插件配置
- **[常见问题](../more-information/faq.md)** — 常见问题解答

### 社区

- **[论坛](https://forum.onlyoffice.com/)** — 提问、分享项目
- **[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)** — 源代码、Issues、贡献
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice)** — 技术问答
- **[更新日志](../more-information/changelog.md)** — 最新 API 更新

## 下一步 {#next-steps}

**开始构建：**

- [快速入门指南](quick-start/hello-world-macro)
- [插件教程](/docs/plugins/fundamentals/getting-started/what-is-a-plugin)
- [宏教程](../macros/getting-started.md)
- [AI 集成](/docs/ai/ai/ai-plugin)

**实验探索：**

- [打开 Playground](playground.md)
- [浏览示例](https://github.com/ONLYOFFICE/sdkjs-plugins)

**深入学习：**

- [API 参考](/docs/plugins/interacting-with-editors/overview/)
- [最佳实践](/docs/plugins/development-workflow/developing/for-web-editors)
- [发布指南](/docs/plugins/development-workflow/publishing/marketplace-submission)
