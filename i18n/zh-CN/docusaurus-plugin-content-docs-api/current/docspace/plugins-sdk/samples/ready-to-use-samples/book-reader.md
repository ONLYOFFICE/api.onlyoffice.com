---
description: 在 DocSpace 专用阅读器中直接查看 EPUB、FB2 和 ZIP 文件。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Book reader

用于在 DocSpace 专用阅读查看器中查看 EPUB、FB2 和 ZIP 文件的工具。

![Book reader](/assets/images/docspace/book-reader.png#gh-light-mode-only)![Book reader](/assets/images/docspace/book-reader.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需查看插件元数据（例如作者、版本、状态、主页和描述），请前往 **设置 → 集成 → 插件**，然后点击 **Book reader** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。

## 使用

该插件支持以下文件格式：

- **.epub** - Electronic Publication（EPUB 2.0/3.0）
- **.fb2** - FictionBook 2.0
- **.zip** - 包含 EPUB 或 FB2 文件的压缩包

在阅读器中打开文件：

1. 打开某个可用房间。
2. 点击受支持的文件，或右键点击并从上下文菜单中选择 **Open in Reader**。
3. 文件会在模态窗口中打开。

![Book reader open file](/assets/images/docspace/book-reader-open-file.png#gh-light-mode-only)![Book reader open file](/assets/images/docspace/book-reader-open-file.dark.png#gh-dark-mode-only)

使用底部的 **‹** 和 **›** 按钮在页面之间导航。进度条和页码计数器会显示您当前在书中的位置。

### ZIP 文件

ZIP 文件无法通过单击打开 —— 因为 DocSpace 有专门的压缩包插件处理 `.zip` 文件类型，图书阅读器仅通过上下文菜单打开 ZIP 文件（**右键点击 → Open in Reader**）。

打开 ZIP 文件时，插件会检查其内容：

- **找到一个受支持的文件**（单个 `.epub`、`.fb2`，或带有 `META-INF/container.xml` 的原始 EPUB 结构）- 文件会被提取并自动在阅读器中打开。
- **找到多个受支持的文件** - 插件会打开找到的第一个文件。
- **未找到受支持的文件** - 显示错误通知，并且不会打开阅读器。

## 插件结构

GitHub 仓库：[reader](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/reader)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现上下文菜单操作。该插件会为受支持的文件（`.epub`、`.fb2`、`.zip`）添加 **Open in Reader** 项目。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md)。用于与指定的文件类型交互。支持直接从文件列表单击打开文件。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
