# 变体

插件变体是指在原始插件内部创建的子插件，主要用于以下目的：

- 执行主插件的功能操作；
- 包含插件设置；
- 显示**关于**窗口等。

从版本 8.1 开始，插件可以创建多个插件面板。

以**语音转换**插件为例。该插件本身不需要可视窗口来将选中文本转换为语音，因为这可以仅通过按按钮来完成，但其设置（语音语言、语速和音调）以及**关于**窗口必须是可视的。因此，我们至少需要两个插件变体（文本转换本身和设置），如果还想添加一个包含插件信息、作者或制作软件信息的**关于**窗口，则需要三个变体。

![不可视插件](/assets/images/plugins/invisible-plugin.png#gh-light-mode-only)![不可视插件](/assets/images/plugins/invisible-plugin.dark.png#gh-dark-mode-only)
![语音转换设置](/assets/images/plugins/speech-settings.png#gh-light-mode-only)![语音转换设置](/assets/images/plugins/speech-settings.dark.png#gh-dark-mode-only)

要创建插件变体，需要在 [config.json](./configuration.md#variations) 文件中指定其参数，并为每个变体构建相应的 [index.html](../entry-point.md) 文件。

:::note
**所有**变体的 *.html* 文件必须与插件的 *config.json* 配置文件一起放置在插件根目录中，插件才能正确运行。
:::
