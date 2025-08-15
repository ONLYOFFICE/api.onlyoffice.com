---
hide_table_of_contents: true
---

# Playground

Playground 是一个互动平台，用户无需注册或安装任何软件，就可以在平台上探索和测试 ONLYOFFICE 文档 API 的功能。它为用户提供多种 API 功能，让用户能够顺畅体验不同种类的文档。

### 功能特点

- **脚本测试**：使用提供的 ONLYOFFICE API（[Office JavaScript API](../../office-api/get-started/overview.md)、[自动 API](../../docs-api/usage-api/automation-api.md) 或 [API 插件](../../plugin-and-macros/get-started/get-started.md)编写和运行 JavaScript 代码。
- **实时预览**：在嵌入式文档编辑器中即时查看脚本运行结果。
- **多平台支持**：支持桌面、移动端或嵌入式平台。
- **自定义设置**：可切换主题和界面语言，使用方便。

```mdx-code-block
import {PlaygroundCardsRow} from '@site/src/components/Playground';

<PlaygroundCardsRow searchParams={[{testType: "plugin"}]}/>
```
