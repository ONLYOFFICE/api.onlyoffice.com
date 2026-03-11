# Api

表示 Api 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddOleObject](./AddOleObject.md) | 无 | 在当前文档位置添加 OLE 对象。 |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [ConvertDocument](./ConvertDocument.md) | string | 将文档转换为 Markdown 或 HTML 文本。 |
| [EditOleObject](./EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [EndAction](./EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllForms](./GetAllForms.md) | [ContentControl](../Enumeration/ContentControl.md)[] | 返回已添加到文档的所有表单的信息。 |
| [GetDocumentLang](./GetDocumentLang.md) | string | 返回文档语言。 |
| [GetFileToDownload](./GetFileToDownload.md) | string | 以指定格式返回要下载的当前文件。 |
| [GetFontList](./GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [GetFormValue](./GetFormValue.md) | null \| string \| boolean | 返回指定表单的值。 |
| [GetFormsByTag](./GetFormsByTag.md) | [ContentControl](../Enumeration/ContentControl.md)[] | 返回已添加到文档中具有指定标签的所有表单的信息。 |
| [GetImageDataFromSelection](./GetImageDataFromSelection.md) | [ImageData](../Enumeration/ImageData.md) | 返回所选图形中第一个图形的图像数据。如果没有选择图形，该方法将返回一个白色矩形。 |
| [GetInstalledPlugins](./GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [GetMacros](./GetMacros.md) | [Macros](../Enumeration/Macros.md) | 返回文档宏。 |
| [GetSelectedContent](./GetSelectedContent.md) | string | 以指定格式返回所选内容。 |
| [GetSelectedOleObjects](./GetSelectedOleObjects.md) | [OLEProperties](../Enumeration/OLEProperties.md)[] | 返回所选 OLE 对象的数组。 |
| [GetSelectedText](./GetSelectedText.md) | string | 返回文档中的所选文本。 |
| [GetSelectionType](./GetSelectionType.md) | [SelectionType](../Enumeration/SelectionType.md) | 返回当前选择的类型。 |
| [GetVBAMacros](./GetVBAMacros.md) | string \| null | 返回文档中的所有 VBA 宏。 |
| [GetVersion](./GetVersion.md) | string | 返回编辑器版本。 |
| [InputText](./InputText.md) | 无 | 向文档中插入文本。 |
| [InstallPlugin](./InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [IsFormSigned](./IsFormSigned.md) | boolean | 检查指定的表单是否已进行数字签名。 |
| [MouseMoveWindow](./MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [OnDropEvent](./OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [OnEncryption](./OnEncryption.md) | 无 | 加密文档。 |
| [PasteHtml](./PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [PutImageDataToSelection](./PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个选定的图形。如果没有选择图形，该方法将在当前位置插入图像。 |
| [RemovePlugin](./RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [ReplaceTextSmart](./ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。 |
| [SetFormValue](./SetFormValue.md) | 无 | 为指定的表单设置值。 |
| [SetMacros](./SetMacros.md) | 无 | 为文档设置宏。 |
| [SetPluginsOptions](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。例如，此方法可用于向插件传递授权令牌。此方法只能与连接器类一起使用。 |
| [SetProperties](./SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [UnShowInputHelper](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [UpdatePlugin](./UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |
