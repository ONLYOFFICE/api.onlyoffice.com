---
description: 使用 CodeMirror 插件查看和编辑代码文件。
tags: ["DocSpace", "Plugins", "Ready-to-use"]
---

# CodeMirror

用于查看和编辑多种编程代码格式文件的工具。

![CodeMirror](/assets/images/docspace/codemirror.png#gh-light-mode-only)![CodeMirror](/assets/images/docspace/codemirror.dark.png#gh-dark-mode-only)

## 安装

默认在 DocSpace SaaS 解决方案中可用。

您可以按照[此处](/docspace/plugins-sdk/usage-sdk/adding-plugin.md#enabling-system-plugins)的说明启用它。

## 配置

要开始使用该插件，您无需更改默认设置。

如需调整插件设置，请前往 **设置 → 集成 → 插件**，然后点击 **CodeMirror** 插件旁的 ![Settings icon](/assets/images/docspace/settings-icon.png#gh-light-mode-only)![Settings icon](/assets/images/docspace/settings-icon.dark.png#gh-dark-mode-only)。您可以更改以下插件参数：

- **Highlight whitespace** - 启用或禁用代码编辑器中的空格高亮显示。
- **Highlight trailing whitespace** - 启用或禁用行尾空白字符的高亮显示。
- **Auto close tags** - 启用后，在 HTML 类文件中输入 `>` 或 `/` 时会自动插入闭合标签。

您还可以在此查看插件元数据，例如作者、版本、状态、主页和描述。

## 使用

### 创建新文件

要创建新的代码文件：

1. 打开 **文档** 部分或某个可用房间。
2. 点击 **操作 → 更多**。

    ![CreateFile](/assets/images/docspace/codemirror-create-file.png#gh-light-mode-only)![CreateFile](/assets/images/docspace/codemirror-create-file.dark.png#gh-dark-mode-only)
3. 在出现的菜单中选择 **Text file** 选项。
4. 在弹出窗口中输入带有相应扩展名的文件名（例如 `style.css`、`script.js`、`app.py`），然后点击 **Create**。
5. CodeMirror 代码编辑器会在新的弹出窗口中打开，您可以在其中编辑文件内容。

    ![Editor](/assets/images/docspace/codemirror-editor.png#gh-light-mode-only)![Editor](/assets/images/docspace/codemirror-editor.dark.png#gh-dark-mode-only)
6. 点击 **Save** 保存更改。要关闭编辑器，请点击弹出窗口右上角的 **X** 图标。

新创建的文件将显示在文件列表中。

### 编辑文件

您可以使用 CodeMirror 插件打开之前创建或下载的文件：

- 点击带有 CodeMirror 图标的文件名，或
- 右键打开上下文菜单，然后选择 **Edit file with Codemirror**。

### 键盘快捷键

在桌面设备上，编辑器包含一个键盘快捷键侧边面板。点击编辑器区域右上角的 Shortcuts 插件图标（带感叹号的圆圈）即可打开或关闭该面板。面板会列出适用于您操作系统（Windows 或 macOS）的可用快捷键。移动设备上不提供此面板。

![Shortcuts](/assets/images/docspace/codemirror-keyboard-shortcuts.png#gh-light-mode-only)![Shortcuts](/assets/images/docspace/codemirror-keyboard-shortcuts.dark.png#gh-dark-mode-only)

### 支持的语言

该插件支持以下语言和文件格式的语法高亮：

| Language | File extensions |
|----------|-----------------|
| C/C++ | `.cpp`, `.cc`, `.h`, `.hpp` |
| CSS | `.css` |
| Go | `.go` |
| HTML | `.html`, `.htm` |
| Java | `.java`, `.class` |
| JavaScript/TypeScript | `.js`, `.jsx`, `.ts`, `.tsx` |
| JSON | `.json` |
| Liquid | `.liquid` |
| PHP | `.php` |
| Python | `.py` |
| Rust | `.rs` |
| SCSS/Sass | `.sass`, `.scss` |
| SQL | `.sql`, `.mysql`, `.pgsql`, `.postgresql`, `.sqlite`, `.db`, `.mssql`, `.cql`, `.plsql`, `.mariadb` |
| WAST | `.wast`, `.wat` |
| YAML | `.yaml`, `.yml` |

## 插件结构

GitHub 仓库：[codemirror](https://github.com/ONLYOFFICE/docspace-plugins/tree/master/codemirror)。

所有必需文件在[此处](/docspace/plugins-sdk/usage-sdk/plugin-structure.md)说明。

### 接口

使用以下插件接口：

- [IPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md)。每个插件都需要。它包含插件 [status](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/plugin.md#status)（PluginStatus）变量，用于将插件嵌入 DocSpace。
- [IApiPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/apiplugin.md)。必需，因为我们实现了代码编辑器服务（[CodeMirror](https://codemirror.net/)）。
- [ISettingsPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md) 和 [ISettings](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/settings/ISettings.ts)。用于添加插件配置设置块。用户可以从 **设置 → 集成 → 插件** 访问该块以调整插件参数。
- [IContextMenuPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/contextmenuplugin.md) 和 [IContextMenuItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/contextmenuitem.md)。用于实现 **Edit file with Codemirror** 上下文菜单操作。
- [IMainButtonPlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/mainbuttonplugin.md) 和 [IMainButtonItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/mainbuttonitem.md)。用于在 **+** → **更多** 菜单中添加 **Text file** 选项以创建新的代码文件。
- [IFilePlugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/fileplugin.md) 和 [IFileItem](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-items/fileitem.md)。用于注册支持的文件类型并在 CodeMirror 编辑器中打开它们。

## 支持

如需请求功能或报告与此插件相关的错误，请使用 [GitHub](https://github.com/ONLYOFFICE/docspace-plugins/issues) 上的 issues 部分。
