---
description: 在 DocSpace 中查看、编辑和创建 Markdown 文件。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Markdown

用于查看、编辑和创建 `.md` 文件的工具。

![Markdown](/assets/images/docspace/markdown.png#gh-light-mode-only)![Markdown](/assets/images/docspace/markdown.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需查看插件元数据（例如作者、版本、状态、主页和描述），请前往 **设置 → 集成 → 插件**，然后点击 **Markdown** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。

## 使用

### 创建新的 .md 文件

要创建新的 `.md` 文件：

1. 打开 **文档** 部分或某个可用房间。
2. 点击 **操作 → 更多**。
3. 从出现的菜单中选择 **Markdown** 插件。
4. 在弹出窗口中更改文件名，然后点击 **Create**。新的 `.md` 文件会显示在文件列表中。

要打开已创建的 `.md` 文件，请点击文件名，或通过文件上下文菜单操作：**右键点击 → Edit markdown (Preview markdown)**。文件将在同一标签页中打开。要返回文件列表，请点击 **Save and close** 或 ![Cross](/assets/images/docspace/cross.png#gh-light-mode-only)![Cross](/assets/images/docspace/cross.dark.png#gh-dark-mode-only)。如果文件由具有查看权限的用户打开，则仅提供 ![Cross](/assets/images/docspace/cross.png#gh-light-mode-only)![Cross](/assets/images/docspace/cross.dark.png#gh-dark-mode-only)。该用户所做的任何更改都不会被保存。

### 编辑 .md 文件

要编辑 `.md` 文件，您需要在 **Markdown** 部分添加标记文本。输入的文本将显示在右侧的 **Preview** 部分。

要展开 **Markdown** / **Preview** 部分，请使用 **Resize** 按钮。

以查看模式打开文件时，无法展开 **Preview** 部分，因为它会立即以展开形式打开。

## 插件结构

GitHub 仓库：[markdown](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/markdown)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。用于向 DocSpace 门户 API 发送请求（例如创建和保存文件）。该插件还使用 [markdown-it](https://markdown-it.github.io/markdown-it/) 作为客户端 Markdown 渲染库。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现上下文菜单操作。
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) 和 [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md)。用于实现主按钮操作。在 **Markdown** 插件中，我们使用 **文档** 部分或所选房间中的 **操作按钮 → 更多** 菜单元素来创建 `.md` 文件。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md)。用于与指定的文件类型交互。在本例中为 `.md` 文件。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
