# PDF API

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [EndAction](./Methods/EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./Methods/FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllComments](./Methods/GetAllComments.md) | comment[] | 返回文档中的所有批注。 |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | number | 返回当前页面索引。 |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | 以指定格式返回要下载的当前文件。 |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](./Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](./Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [GetMacros](./Methods/GetMacros.md) | [Macros](./Enumeration/Macros.md) | 返回文档宏。 |
| [GetPageImage](./Methods/GetPageImage.md) | canvas | 返回页面图像。 |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | 返回文档中的所选文本。 |
| [GetVersion](./Methods/GetVersion.md) | string | 返回编辑器版本。 |
| [GoToPage](./Methods/GoToPage.md) | boolean | 移动到指定页面。 |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [OnDropEvent](./Methods/OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [PasteHtml](./Methods/PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./Methods/PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [ReplacePageContent](./Methods/ReplacePageContent.md) | boolean | 使用指定的参数替换页面内容。 |
| [SetMacros](./Methods/SetMacros.md) | 无 | 为文档设置宏。 |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。 |
| [SetProperties](./Methods/SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./Methods/ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./Methods/ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./Methods/StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |

## 事件

The following table lists the available events.

| 事件 | 描述 |
| ----- | ----------- |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | 当编辑器中的限制更改时调用的函数。 |
| [onClick](./Events/onClick.md) | 用户点击元素时调用的函数。 |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | 当文档完全加载时调用的函数。 |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | 用于开启/关闭鼠标或触控板事件的函数。 |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | 当鼠标按钮在插件 iframe 外部释放时调用的函数。 |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | 当编辑器中的目标位置发生更改时调用的函数。 |
