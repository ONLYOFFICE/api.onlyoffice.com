---
sidebar_position: -2
---

# 类型

插件类型通过 config.json 文件中的 [类型](./manifest.md#variationstype) 参数指定。可区分为以下几种插件类型。

## 系统插件

系统插件不会显示在编辑器界面中，它随服务器启动（或桌面编辑器启动）在后台运行，且不会干扰其他插件，使它们能同时工作。此类插件无需用户手动启动。与后台插件不同，系统插件无法被禁用。系统插件示例：[设置](../../samples/plugin-samples/settings.md), [启动时搜索和替换](../../samples/plugin-samples/search-and-replace-on-start.md).

## 后台

启动此类插件后，它将在所有已打开的文档及之后打开的文档中持续运行，直到您将其禁用。后台插件示例：AI(https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai)、二维码生成器(https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/insertQR)。插件的启用/禁用状态会在会话间保持。要访问后台插件，请点击顶部工具栏的**后台插件**按钮。

<img alt="Background plugins" src="/assets/images/plugins/background-plugins.png#gh-light-mode-only" width="416px" /><img alt="Background plugins" src="/assets/images/plugins/background-plugins.dark.png#gh-dark-mode-only" width="416px" />

## 窗口

该插件在启动后以独立窗口的形式运行，例如[代码高亮](../../samples/plugin-samples/highlight-code.md)、[图片编辑器](../../samples/plugin-samples/photo-editor.md)、[OCR](../../samples/plugin-samples/ocr.md)。

![插件窗口](/assets/images/plugins/plugin-window.png#gh-light-mode-only)![插件窗口](/assets/images/plugins/plugin-window.dark.png#gh-dark-mode-only)

## 左侧面板

该插件在左侧面板中打开，例如[翻译器](../../samples/plugin-samples/translator.md)、[同义词词典](../../samples/plugin-samples/thesaurus.md)、[Zotero](../../samples/plugin-samples/zotero.md)。您可以同时运行多个面板插件，每个插件都会在左侧工具栏中显示为一个**独立按钮**。

<img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.png#gh-light-mode-only" width="300px" /><img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.dark.png#gh-dark-mode-only" width="300px" />

## 右侧面板

该插件在右侧面板中打开，例如[翻译器](../../samples/plugin-samples/translator.md)、[同义词词典](../../samples/plugin-samples/thesaurus.md)、[Zotero](../../samples/plugin-samples/zotero.md)。你可以同时运行多个面板插件，每个插件都会在右侧工具栏中显示一个**独立按钮**。

![插件右侧面板](/assets/images/plugins/plugin-right-panel.png#gh-light-mode-only)![插件右侧面板](/assets/images/plugins/plugin-right-panel.dark.png#gh-dark-mode-only)

## 不可视插件

该插件在启动时不会显示任何窗口或面板，但在运行过程中可以创建它们。它通常提供一个（或多个）按钮，用于对文档进行某些转换或操作，例如[Hello world](../../samples/plugin-samples/hello-world.md)、[语音转换](../../samples/plugin-samples/speech.md)。例如，当插件需要根据文档内容展示不同窗口时，可以使用此类型。

![不可视插件](/assets/images/plugins/invisible-plugin.png#gh-light-mode-only)![不可视插件](/assets/images/plugins/invisible-plugin.dark.png#gh-dark-mode-only)

> 请注意，任何类型的插件在运行过程中都可以创建窗口和选项卡。
