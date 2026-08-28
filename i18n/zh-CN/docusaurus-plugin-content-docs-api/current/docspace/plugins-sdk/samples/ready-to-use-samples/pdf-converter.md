---
description: 将文档、电子表格和演示文稿转换为 PDF。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# PDF converter

用于将文档、电子表格、演示文稿和表单转换为 PDF 的工具。

![PDF converter](/assets/images/docspace/pdf-converter.png#gh-light-mode-only)![PDF converter](/assets/images/docspace/pdf-converter.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件：

1. 使用 [ConvertAPI](https://convertapi.com) 生成 API 令牌。
2. 前往 **设置 → 集成 → 插件**。
3. 点击 **PDF converter** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。
4. 在相应字段中输入 API 令牌。

启用 API 令牌后，该插件将对当前 DocSpace 门户的所有用户可用。

默认情况下，插件初始化为 `PluginStatus.hide`，因此在配置 API 令牌之前，它对用户保持隐藏。

您还可以在此查看插件元数据，例如作者、版本、状态、主页和描述。

## 使用

:::warning
音频和视频文件无法转换为 PDF。
:::

要将文件转换为 PDF：

1. 打开 **文档** 部分或某个可用房间。
2. 右键点击文件名以打开文件上下文菜单。
3. 点击 **Convert to PDF**。
4. 在弹出窗口中更改文件名，然后点击 **Convert file**。转换后的文件会保存在与原始文件相同的文件夹中。

## 插件结构

GitHub 仓库：[pdf-converter](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md)。必需，因为我们实现了第三方服务（[ConvertAPI](https://convertapi.com)）。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/ISettingsPlugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)。用于实现上下文菜单操作。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
