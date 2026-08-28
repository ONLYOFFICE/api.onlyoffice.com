---
description: 识别并将口语转换为文本。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Speech to text

一款语音识别软件，可将口语识别并转换为文本。

![Speech to text](/assets/images/docspace/speech-to-text.png#gh-light-mode-only)![Speech to text](/assets/images/docspace/speech-to-text.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件：

1. 使用 [AssemblyAI](https://www.assemblyai.com/) 生成 API 令牌。
2. 前往 **设置 → 集成 → 插件**。
3. 点击 **Speech to text** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。
4. 在相应字段中输入 API 令牌。

启用 API 令牌后，该插件将对当前 DocSpace 门户的所有用户可用。

默认情况下，插件初始化为 `PluginStatus.hide`，因此在配置 API 令牌之前，它对用户保持隐藏。

您还可以在此查看插件元数据，例如作者、版本、状态、主页和描述。

## 使用

要将音频或视频文件转换为文本：

1. 打开 **文档** 部分或某个可用房间。
2. 右键点击文件名以打开文件上下文菜单。
3. 点击 **Convert to text**。
4. 如果在音频/视频文件中检测到语音，将创建名为 *“Filename + text”* 的新文件。

## 插件结构

GitHub 仓库：[speech-to-text](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/speech-to-text)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md)。必需，因为我们实现了第三方服务（[AssemblyAI](https://www.assemblyai.com/)）。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/ISettingsPlugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)。用于实现上下文菜单操作。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
