---
sidebar_position: -2
---

# 类型

插件类型通过 *config.json* 文件中的 [type](./configuration.md#variationstype) 参数指定。可用值包括 **system**、**background**、**window**、**panel**、**panelRight** 和 **unvisible**。

## system

系统插件不会显示在编辑器界面中，它随服务器启动（或桌面编辑器启动）在后台运行，且不会干扰其他插件，使它们能同时工作。此类插件无需用户手动启动。与后台插件不同，系统插件无法被禁用。

**示例**: [Settings](../../samples/plugin-samples/settings.md)、[Search and replace on start](../../samples/plugin-samples/search-and-replace-on-start.md)

## background

启动此类插件后，它将在所有已打开的文档及之后打开的文档中持续运行，直到您将其禁用。插件的启用/禁用状态会在会话间保持。要访问后台插件，请点击顶部工具栏的**后台插件**按钮。

如果后台插件满足以下条件，则被视为**内置插件**：

- 它包含在产品分发包中（服务器/桌面版）。
- 它未被更新、移除或禁用。

![Background plugin](/assets/images/plugins/bundled-plugin.png#gh-light-mode-only)![Background plugin](/assets/images/plugins/bundled-plugin.dark.png#gh-dark-mode-only)

如果插件是**内置**且为**后台**类型，它会立即启动（从版本 9.0.4 开始）。

**示例**: [AI](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai)、[QR Code Generator](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/insertQR)

## window

该插件在启动后以独立窗口的形式运行。

![Plugin window](/assets/images/plugins/plugin-window.png#gh-light-mode-only)![Plugin window](/assets/images/plugins/plugin-window.dark.png#gh-dark-mode-only)

**示例**: [Highlight code](../../samples/plugin-samples/highlight-code.md)、[Photo editor](../../samples/plugin-samples/photo-editor.md)、[OCR](../../samples/plugin-samples/ocr.md)

## panel

该插件在左侧面板中打开。您可以同时运行多个面板插件，每个插件都会在左侧工具栏中显示为一个独立按钮。

![Plugin left panel](/assets/images/plugins/plugin-left-panel.png#gh-light-mode-only)![Plugin left panel](/assets/images/plugins/plugin-left-panel.dark.png#gh-dark-mode-only)

**示例**: [Translator](../../samples/plugin-samples/translator.md)、[Thesaurus](../../samples/plugin-samples/thesaurus.md)、[Zotero](../../samples/plugin-samples/zotero.md)

## panelRight

该插件在右侧面板中打开。您可以同时运行多个面板插件，每个插件都会在右侧工具栏中显示一个独立按钮。

![Plugin right panel](/assets/images/plugins/plugin-right-panel.png#gh-light-mode-only)![Plugin right panel](/assets/images/plugins/plugin-right-panel.dark.png#gh-dark-mode-only)

**示例**: [Translator](../../samples/plugin-samples/translator.md)、[Thesaurus](../../samples/plugin-samples/thesaurus.md)、[Zotero](../../samples/plugin-samples/zotero.md)

## unvisible

该插件在启动时不会显示任何窗口或面板，但在运行过程中可以创建它们。它通常提供一个（或多个）按钮，用于对文档进行某些转换或操作。例如，当插件需要根据文档内容展示不同窗口时，可以使用此类型。

![Invisible plugin](/assets/images/plugins/invisible-plugin.png#gh-light-mode-only)![Invisible plugin](/assets/images/plugins/invisible-plugin.dark.png#gh-dark-mode-only)

**示例**: [Hello world](../../samples/plugin-samples/hello-world.md)、[Speech](../../samples/plugin-samples/speech.md)

:::note
任何类型的插件在运行过程中都可以创建窗口和选项卡。
:::

## Example

``` json
{
  "variations": [
    {
      "type": "window"
    }
  ]
}
```
