# Spreadsheet API

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | string \| null | 向工作簿添加批注。 |
| [AddOleObject](./Methods/AddOleObject.md) | 无 | 在当前文档位置添加 OLE 对象。 |
| [ChangeComment](./Methods/ChangeComment.md) | boolean | 更改指定的批注。 |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [EditOleObject](./Methods/EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [EndAction](./Methods/EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./Methods/FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](./Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [GetCustomFunctions](./Methods/GetCustomFunctions.md) | string | 返回本地自定义函数库。 |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | 以指定格式返回要下载的当前文件。 |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](./Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [GetImageDataFromSelection](./Methods/GetImageDataFromSelection.md) | [ImageData](./Enumeration/ImageData.md) | 返回所选图形中第一个图形的图像数据。如果没有选择图形，该方法将返回一个白色矩形。 |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](./Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [GetMacros](./Methods/GetMacros.md) | [Macros](./Enumeration/Macros.md) | 返回文档宏。 |
| [GetSelectedContent](./Methods/GetSelectedContent.md) | string | 以指定格式返回所选内容。 |
| [GetSelectedOleObjects](./Methods/GetSelectedOleObjects.md) | [OLEProperties](./Enumeration/OLEProperties.md)[] | 返回所选 OLE 对象的数组。 |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | 返回文档中的所选文本。 |
| [GetSelectionType](./Methods/GetSelectionType.md) | [SelectionType](./Enumeration/SelectionType.md) | 返回当前选择的类型。 |
| [GetVBAMacros](./Methods/GetVBAMacros.md) | string \| null | 返回文档中的所有 VBA 宏。 |
| [GetVersion](./Methods/GetVersion.md) | string | 返回编辑器版本。 |
| [InputText](./Methods/InputText.md) | 无 | 向文档中插入文本。 |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [OnDropEvent](./Methods/OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [OnEncryption](./Methods/OnEncryption.md) | 无 | 加密文档。 |
| [PasteHtml](./Methods/PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./Methods/PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个选定的图形。 |
| [RemoveComments](./Methods/RemoveComments.md) | 无 | 删除指定的批注。 |
| [RemoveOleObject](./Methods/RemoveOleObject.md) | 无 | 通过内部 ID 从工作簿中删除 OLE 对象。 |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。 |
| [SetCustomFunctions](./Methods/SetCustomFunctions.md) | 无 | 更新本地自定义函数库。 |
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
| [onChangeCurrentSheet](./Events/onChangeCurrentSheet.md) | 当前工作表发生更改时调用的函数。 |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | 当编辑器中的限制更改时调用的函数。 |
| [onClick](./Events/onClick.md) | 用户点击元素时调用的函数。 |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | 当文档完全加载时调用的函数。 |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | 用于开启/关闭鼠标或触控板事件的函数。 |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | 当鼠标按钮在插件 iframe 外部释放时调用的函数。 |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | 当编辑器中的目标位置发生更改时调用的函数。 |
