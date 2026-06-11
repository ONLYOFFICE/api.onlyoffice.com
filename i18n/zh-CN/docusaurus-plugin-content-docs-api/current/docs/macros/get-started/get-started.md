---
sidebar_position: -1
---

# 宏入门

ONLYOFFICE 宏是直接在文档中使用 [Office JavaScript API](../../office-api/get-started/overview.md) 运行的轻量级 JavaScript 脚本。无需安装——编写代码，运行即可。

如果您希望直接开始编写代码，请前往[快速入门指南](quick-start/hello-world-macro.md)。

## 您可以构建什么

在不离开编辑器的情况下自动化重复性任务。

**适用场景：**

- 一键格式化（[重置文本属性](../samples/document-editor/reset-text-properties.md) — 快速将文本重置为默认格式）
- 批量操作（[删除空表格](../samples/document-editor/remove-empty-tables.md) — 删除整个文档中的所有空表格）
- 自定义计算（[加权平均值](../samples/spreadsheet-editor/weighted-average-function.md) — 计算所选范围的加权平均值）
- 文档清理（[删除空段落](../samples/presentation-editor/remove-empty-paragraphs.md) — 删除整个演示文稿中所有不必要的空段落）

**开发概况：**

- **时间：** 30 分钟 – 2 小时 | **技能：** 入门 | **技术栈：** JavaScript 基础
- **分发方式：** 复制粘贴代码或嵌入文档模板

[浏览所有宏示例](/samples/?doctype=docs&text=macros)

## 故障排除

**宏无法运行：**

- 检查**视图 → 宏**中是否已启用宏
- 在宏编辑器中检查语法错误
- 确认 API 方法名称正确

**结果不符合预期：**

- 添加 `console.log()` 语句进行调试
- 逐步单独测试每个步骤
- 运行前检查文档状态

**需要更多帮助？**

- [开发者论坛](https://forum.onlyoffice.com/) — 社区支持
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — 问答归档

## 资源

- **[宏示例](/samples/?doctype=docs&text=macros)** — 即用脚本
- **[Office API 参考](../../office-api/get-started/overview.md)** — 完整 API 文档
- **[编写宏](../guides/writing-macros.md)** — 宏开发指南
- **[常见问题](../more-information/faq.md)** — 常见问题解答

## 下一步

- [宏快速入门](quick-start/hello-world-macro.md)
- [编写宏](../guides/writing-macros.md)
- [调试](../guides/debugging.md)

另请参阅：[插件](../../plugins/get-started/get-started.md) | [自定义 AI 工具](../../ai/get-started/get-started.md)
