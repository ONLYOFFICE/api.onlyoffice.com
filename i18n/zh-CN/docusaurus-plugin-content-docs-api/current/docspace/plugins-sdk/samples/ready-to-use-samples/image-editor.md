---
description: 使用 Image Editor 插件查看和编辑图像。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# Image Editor

直接在 DocSpace 中查看和编辑图像。

![Image Editor](/assets/images/docspace/image-editor.png#gh-light-mode-only)![Image Editor](/assets/images/docspace/image-editor.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改任何设置 —— Image Editor 插件没有可配置参数。

如需查看插件信息，请前往 **设置 → 集成 → 插件**，然后点击 **Image Editor** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。设置面板仅显示元数据，例如作者、版本、状态、主页和描述。

## 使用

要编辑图像：

1. 右键点击文件列表中的图像文件。
2. 从上下文菜单中选择 **Edit image**。
3. 将打开图像编辑器弹出窗口，右侧工具栏包含各种工具：
   - **Resize** - 更改图像尺寸
   - **Crop** - 将图像裁剪到特定区域
   - **Flip** - 水平或垂直翻转图像
   - **Rotate** - 旋转图像
   - **Draw** - 在图像上自由绘制
   - **Shape** - 向图像添加形状
   - **Icon** - 向图像添加图标
   - **Text** - 向图像添加文本
   - **Mask** - 向图像应用蒙版
4. 完成编辑后，点击 **Save and Exit** 以应用更改。

保存后，通知会确认更新成功，并且文件版本会相应更新。

### 支持的格式

`.jpg`、`.jpeg`、`.png`、`.gif`、`.webp`、`.svg`、`.bmp`、`.tiff`、`.ico`

## 插件结构

GitHub 仓库：[image-editor](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/image-editor)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。用于与 DocSpace 进行 API 交互。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于为受支持的图像格式实现 **Edit image** 上下文菜单操作。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
