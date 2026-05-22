# Api

表示 Api 类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [EndAction](./EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllComments](./GetAllComments.md) | comment[] | 返回文档中的所有批注。 |
| [GetCurrentPage](./GetCurrentPage.md) | number | 返回当前页面索引。 |
| [GetFileToDownload](./GetFileToDownload.md) | string | 以指定格式返回要下载的当前文件。 |
| [GetFontList](./GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [GetInstalledPlugins](./GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [GetMacros](./GetMacros.md) | [Macros](../Enumeration/Macros.md) | 返回文档宏。 |
| [GetPageImage](./GetPageImage.md) | canvas | 返回页面图像。 |
| [GetSelectedText](./GetSelectedText.md) | string | 返回文档中的所选文本。 |
| [GetVersion](./GetVersion.md) | string | 返回编辑器版本。 |
| [GoToPage](./GoToPage.md) | boolean | 移动到指定页面。 |
| [InstallPlugin](./InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [MouseMoveWindow](./MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [OnDropEvent](./OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [PasteHtml](./PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [RemovePlugin](./RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [ReplacePageContent](./ReplacePageContent.md) | boolean | 使用指定的参数替换页面内容。 |
| [SetMacros](./SetMacros.md) | 无 | 为文档设置宏。 |
| [SetPluginsOptions](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。 |
| [SetProperties](./SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [UnShowInputHelper](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [UpdatePlugin](./UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |
