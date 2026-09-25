# Presentation API

Presentation API 包含 ONLYOFFICE 演示文稿编辑器中
可供插件使用的方法和事件。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | string \| null | 向演示文稿添加批注。 |
| [AddOleObject](./Methods/AddOleObject.md) | 无 | 在当前文档位置添加 OLE 对象。 |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | 通过索引或名称将主题应用于演示文稿。 |
| [ChangeComment](./Methods/ChangeComment.md) | boolean | 更改指定的批注。 |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [EditOleObject](./Methods/EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [EndAction](./Methods/EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [EndSlideShow](./Methods/EndSlideShow.md) | 无 | 结束当前幻灯片放映。 |
| [FocusEditor](./Methods/FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](./Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [GetDocumentLang](./Methods/GetDocumentLang.md) | string | 返回文档语言。 |
| [GetEditorThemes](./Methods/GetEditorThemes.md) | object[] | 返回可用编辑器主题的列表。 |
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
| [GoToNextSlideInSlideShow](./Methods/GoToNextSlideInSlideShow.md) | 无 | 在幻灯片放映中显示当前幻灯片之后的幻灯片。 |
| [GoToPreviousSlideInSlideShow](./Methods/GoToPreviousSlideInSlideShow.md) | 无 | 在幻灯片放映中显示当前幻灯片之后的幻灯片。 |
| [GoToSlide](./Methods/GoToSlide.md) | 无 | 通过索引在编辑器中设置活动幻灯片。 |
| [GoToSlideInSlideShow](./Methods/GoToSlideInSlideShow.md) | 无 | 显示具有特定索引的幻灯片。 |
| [InputText](./Methods/InputText.md) | 无 | 向文档中插入文本。 |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [OnDropEvent](./Methods/OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [OnEncryption](./Methods/OnEncryption.md) | 无 | 加密文档。 |
| [PasteHtml](./Methods/PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./Methods/PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [PauseSlideShow](./Methods/PauseSlideShow.md) | 无 | 暂停当前幻灯片放映。 |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个选定的图形。 |
| [RemoveComments](./Methods/RemoveComments.md) | 无 | 删除指定的批注。 |
| [RemoveOleObject](./Methods/RemoveOleObject.md) | 无 | 通过内部 ID 从演示文稿中删除 OLE 对象。 |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。 |
| [ResumeSlideShow](./Methods/ResumeSlideShow.md) | 无 | 恢复当前幻灯片放映。 |
| [SetMacros](./Methods/SetMacros.md) | 无 | 为文档设置宏。 |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。 |
| [SetProperties](./Methods/SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./Methods/ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./Methods/ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./Methods/StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [StartSlideShow](./Methods/StartSlideShow.md) | 无 | 开始演示文稿幻灯片放映。 |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |

## 事件

下表列出了可用的事件。

| 事件 | 描述 |
| ----- | ----------- |
| [onChangeCurrentSlide](./Events/onChangeCurrentSlide.md) | 当前幻灯片发生更改时调用的函数。 |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | 当编辑器中的限制更改时调用的函数。 |
| [onClick](./Events/onClick.md) | 用户点击元素时调用的函数。 |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | 当文档完全加载时调用的函数。 |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | 用于开启/关闭鼠标或触控板事件的函数。 |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | 当鼠标按钮在插件 iframe 外部释放时调用的函数。 |
| [onSlideShowBegin](./Events/onSlideShowBegin.md) | 幻灯片放映演示开始时调用的函数。 |
| [onSlideShowEnd](./Events/onSlideShowEnd.md) | 幻灯片放映演示结束时调用的函数。 |
| [onSlideShowNextSlide](./Events/onSlideShowNextSlide.md) | 在幻灯片放映演示中，当幻灯片更改并显示后调用的函数。在幻灯片内容实际显示之前触发。 |
| [onSlideShowSlideChanged](./Events/onSlideShowSlideChanged.md) | 幻灯片放映演示期间幻灯片更改时调用的函数。提供当前幻灯片和上一张幻灯片的信息。 |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | 当编辑器中的目标位置发生更改时调用的函数。 |
