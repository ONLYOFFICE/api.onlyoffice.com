---
description: 在 DocSpace 中直接将 DOCX、TXT 和 HTML 文件转换为 Markdown 格式。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Convert to markdown

用于在 DocSpace 中直接将 DOCX、TXT 和 HTML 文件转换为 Markdown 格式的工具。

![Convert to markdown](/assets/images/docspace/convert-to-markdown.png#gh-light-mode-only)![Convert to markdown](/assets/images/docspace/convert-to-markdown.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需查看插件元数据（例如作者、版本、状态、主页和描述），请前往 **设置 → 集成 → 插件**，然后点击 **Convert to markdown** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。

## 使用

:::warning
启用了 **向文档添加水印** 房间设置的文件无法转换。请禁用该设置后重试。有关 VDR 的更多信息，请参阅[创建带水印的 VDR](/docspace/api-backend/samples/basic-samples/create-vdr.md)示例。
:::

要将文件转换为 Markdown：

1. 打开 **文档** 部分或某个可用房间。
2. 右键点击 `.docx`、`.txt` 或 `.html` 文件以打开上下文菜单。
3. 点击 **Convert to Markdown**。

![Convert File](/assets/images/docspace/convert-to-markdown-convert-file.png#gh-light-mode-only)![Convert File](/assets/images/docspace/convert-to-markdown-convert-file.dark.png#gh-dark-mode-only)

会在与原始文件相同的文件夹中创建新的 `.md` 文件。成功通知会确认转换已完成。

## 插件结构

GitHub 仓库：[convert-to-markdown](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/convert-to-markdown)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md)。用于访问 DocSpace API，以下载源文件并将转换后的 Markdown 文件上传到同一文件夹。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)。用于实现上下文菜单操作。该插件会为 `.docx`、`.txt` 和 `.html` 文件添加 **Convert to Markdown** 项目。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
