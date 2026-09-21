---
description: 使用 ZIP archives 插件打开和解压 ZIP 压缩包。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# ZIP archives

直接在 DocSpace 中打开和解压 ZIP 压缩包。

![ZIP archives](/assets/images/docspace/zip-archives.png#gh-light-mode-only)![ZIP archives](/assets/images/docspace/zip-archives.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改任何设置——ZIP archives 插件没有可配置参数。

如需查看插件信息，请前往 **设置 → 集成 → 插件**，然后点击 **ZIP archives** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。设置面板仅显示元数据，例如作者、版本、状态、主页和描述。

## 使用

### 处理压缩包文件

该插件使您可以直接在 DocSpace 中处理 ZIP 压缩包。首先，右键点击压缩包文件，然后打开**More options**下拉菜单：

- **打开压缩包**：在不解压的情况下查看压缩包内容。您还可以直接从预览窗口中解压特定文件。
- **解压**子菜单：
  - **选择位置**：选择特定文件夹或房间，将整个压缩包解压到该位置。
  - **在此处解压**：将压缩包直接解压到当前存储它的文件夹或房间中。

### 从文件夹创建压缩包

要将文件夹压缩为 ZIP 压缩包，请右键点击文件列表中的文件夹，打开 **More options → 压缩** 子菜单，然后选择一个选项：

![Archive folder](/assets/images/docspace/zip-archive-folder.png#gh-light-mode-only)![Archive folder](/assets/images/docspace/zip-archive-folder.dark.png#gh-dark-mode-only)

- **压缩到此处**：在文件夹的父目录中创建一个与文件夹同名的 `.zip` 文件。
- **选择位置**：在您选择的文件夹或房间中创建一个与文件夹同名的 `.zip` 文件。

### 从所选文件创建压缩包

您也可以直接压缩文件、图片或视频，而无需通过文件夹：

1. 要压缩单个项目，请右键点击该项目，然后从**More options**下拉菜单中选择**压缩所选项目**。
2. 要一次压缩多个项目，请使用复选框选中它们，然后从选择操作菜单中选择**压缩所选项目**。

    ![Archive selected files](/assets/images/docspace/create-archive-from-files.png#gh-light-mode-only)![Archive selected files](/assets/images/docspace/create-archive-from-files.dark.png#gh-dark-mode-only)
3. 插件会在同一文件夹中创建一个名为 `新压缩包.zip` 的文件。

## 插件结构

GitHub 仓库：[archives](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/archives)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IApiPlugin.md)。用于与 DocSpace 进行 API 交互。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IContextMenuPlugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IContextMenuItem.md)。用于实现上下文菜单操作：**打开压缩包**；针对压缩包文件的**解压**子菜单（**选择位置**、**在此处解压**）；针对文件夹的**压缩**子菜单（**压缩到此处**、**选择位置**）；以及针对文件、图片和视频的**压缩所选项目**。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IFilePlugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IFileItem.md)。用于注册 `.zip` 文件类型并处理压缩包操作。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
