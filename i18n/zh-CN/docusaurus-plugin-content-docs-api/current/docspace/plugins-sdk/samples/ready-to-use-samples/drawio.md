---
description: 使用 Draw.io 插件创建图表和流程图。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Draw.io

用于创建图表、流程图、思维导图、业务布局、实体关系、程序块等的工具。

![Draw.io](/assets/images/docspace/drawio.png#gh-light-mode-only)![Draw.io](/assets/images/docspace/drawio.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需调整插件设置，请前往 **设置 → 集成 → 插件**，然后点击 **Draw.io** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。您可以更改以下插件参数：

- **Languages** - 从列表中选择所需语言。**Auto** 选项对应门户语言。
- **Offline mode** - 启用此设置后，出于安全原因，所有远程操作和功能都将被禁用。
- **Libraries** - 打开开关以加载自定义形状库（在 **Draw.io** 菜单中选择 **File → New Library / Open Library from**）。

您还可以在此查看插件元数据，例如作者、版本、状态、主页和描述。

## 使用

### 创建新图表

要创建新的 `.drawio` 图表：

1. 打开 **文档** 部分或某个可用房间。
2. 点击 **操作 → 更多**。
3. 从出现的菜单中选择 **Draw.io** 插件。
4. 在弹出窗口中更改文件名，然后点击 **Create**。新的 `.drawio` 文件会显示在文件列表中。

要打开已创建的图表，请点击文件名，或通过文件上下文菜单操作：**右键点击 → Edit diagram**。文件将在同一标签页中打开。要返回文件列表，请点击 **Save & Exit** 或 **Exit**。如果图表由具有查看权限的用户打开，则仅提供 **Exit** 按钮。该用户所做的任何更改都不会被保存。

### 编辑已导出的图表

`.drawio` 图表可以导出为图像。此类图像可以使用该插件重新打开并编辑。

## 插件结构

GitHub 仓库：[draw.io](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/draw.io)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。必需，因为我们实现了第三方服务（[Draw.io](https://www.drawio.com/)）。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现上下文菜单操作。
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) 和 [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md)。用于实现主按钮操作。在 **Draw.io** 插件中，我们使用 **文档** 部分或所选房间中的 **操作按钮 → 更多** 菜单元素来创建 `.drawio` 图表。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md)。用于与指定的文件类型交互。在本例中为 `.drawio` 文件。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
