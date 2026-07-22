---
description: 使用 ZIP Archives 插件打开和解压 ZIP 压缩包。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# ZIP Archives

直接在 DocSpace 中打开和解压 ZIP 压缩包。

![ZIP Archives](/assets/images/docspace/zip-archives.png#gh-light-mode-only)![ZIP Archives](/assets/images/docspace/zip-archives.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改任何设置 —— ZIP Archives 插件没有可配置参数。

如需查看插件信息，请前往 **设置 → 集成 → 插件**，然后点击 **ZIP Archives** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。设置面板仅显示元数据，例如作者、版本、状态、主页和描述。

## 使用

### 处理压缩包文件

该插件使您可以直接在 DocSpace 中处理 ZIP 压缩包。首先，右键点击压缩包文件，然后打开 **More options** 下拉菜单并选择所需选项：

- **Open archive** - 在不解压的情况下查看压缩包内容。您还可以直接从预览窗口中解压特定文件。
- **Choose location to unzip** - 选择特定文件夹或房间以解压整个压缩包。
- **Unzip here** - 将压缩包直接解压到当前存储它的文件夹或房间中。

### 从文件夹创建压缩包

要将文件夹压缩为 ZIP 压缩包：

1. 右键点击文件列表中的文件夹。
2. 从上下文菜单中选择 **Zip folder**。
3. 插件会在父目录中创建一个与文件夹同名的 `.zip` 文件。

## 插件结构

GitHub 仓库：[archives](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/archives)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。用于与 DocSpace 进行 API 交互。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现上下文菜单操作：**Open archive**、**Choose location to unzip**、**Unzip here** 和 **Zip folder**。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md)。用于注册 `.zip` 文件类型并处理压缩包操作。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
