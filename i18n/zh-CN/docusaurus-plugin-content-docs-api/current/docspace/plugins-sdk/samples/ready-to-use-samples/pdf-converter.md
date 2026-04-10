---
description: 将文档、电子表格和演示文稿转换为 PDF。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# PDF 转换器

用于将文档、电子表格、演示文稿和表单转换为 PDF 的工具。

![PDF converter](/assets/images/docspace/pdf-converter.png)

## 安装

DocSpace SaaS 解决方案中默认提供。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件：

1. 使用 [ConvertAPI](https://convertapi.com) 生成 API 令牌。
2. 进入**开发者工具 -> 集成 -> 插件**。
3. 点击 **PDF 转换器**插件旁边的 ![Settings icon](/assets/images/docspace/settings-icon.png)。
4. 在相应字段中输入 API 令牌。

启用 API 令牌后，该插件将对当前 DocSpace 门户的所有用户可用。

您还可以在此处查看插件元数据，例如作者、版本、状态、主页和描述。

## 使用方法

:::warning
音频和视频文件无法转换为 PDF。
:::

要将文件转换为 PDF：

1. 打开**文档**部分或其中一个可用房间。
2. 右键单击文件名以打开文件上下文菜单。
3. 点击**转换为 PDF**。
4. 在弹出窗口中更改文件名，然后点击**转换文件**。转换后的文件将保存在与原始文件相同的文件夹中。

## 插件结构

GitHub 仓库：[pdf-converter](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter)。

所有必需文件说明见[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)。

### 接口

使用了以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件[状态](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。由于我们实现了第三方服务（[ConvertAPI](https://convertapi.com)），因此需要此接口。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置的设置块。用户可从**设置 -> 集成 -> 插件**访问此块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现上下文菜单操作。

## 支持

如果您想就此插件请求功能或报告错误，请在 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上使用 issues 部分。
