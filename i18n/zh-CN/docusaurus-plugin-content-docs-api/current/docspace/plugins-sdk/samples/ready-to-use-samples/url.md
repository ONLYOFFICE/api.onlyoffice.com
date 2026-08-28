---
description: 将外部 URL 保存到文件列表，并在新浏览器标签页中打开。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# URL

将外部 URL 保存到文件列表。打开已保存的链接时，相应资源会在新的浏览器标签页中启动。

![URL](/assets/images/docspace/url.png#gh-light-mode-only)![URL](/assets/images/docspace/url.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需查看插件元数据（例如作者、版本、状态、主页和描述），请前往 **设置 → 集成 → 插件**，然后点击 **URL** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。

## 使用

### 创建新 URL

要将链接添加到文件列表：

1. 打开 **文档** 部分或某个可用房间。
2. 点击 **操作 → 更多**。
3. 选择 **New URL**。
4. 在对话框中指定 URL 地址和链接显示名称，然后点击 **Create**。

![Create URL](/assets/images/docspace/url-create.png#gh-light-mode-only)![Create URL](/assets/images/docspace/url-create.dark.png#gh-dark-mode-only)

该链接会以 `.url` 文件的形式出现在文件列表中。点击该项目时，外部资源会在单独的浏览器标签页中打开。

### 编辑现有 URL

要更改已保存的链接：

1. 右键点击文件列表中的 `.url` 项目以打开上下文菜单。
2. 选择 **Edit URL**。
3. 在对话框中更新 URL 地址和/或链接显示名称，然后点击 **Save**。

![Edit URL](/assets/images/docspace/url-edit.png#gh-light-mode-only)![Edit URL](/assets/images/docspace/url-edit.dark.png#gh-dark-mode-only)

## 插件结构

GitHub 仓库：[url](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/url)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md)。用于与 DocSpace 进行 API 交互（创建、更新和读取 `.url` 文件）。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/ISettingsPlugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以查看插件元数据。
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IMainButtonPlugin.md) 和 [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IMainButtonItem.md)。用于在 **操作 → 更多** 菜单中添加 **New URL** 选项。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)。用于为 `.url` 文件实现 **Edit URL** 上下文菜单操作。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IFilePlugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IFileItem.md)。用于注册 `.url` 文件类型，并在选择文件时在新的浏览器标签页中打开存储的链接。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
