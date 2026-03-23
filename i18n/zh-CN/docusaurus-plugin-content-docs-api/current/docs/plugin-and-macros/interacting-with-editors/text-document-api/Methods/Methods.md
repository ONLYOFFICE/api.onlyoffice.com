# Api

表示 Api 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AcceptReviewChanges](./AcceptReviewChanges.md) | 无 | 接受审阅修订。 |
| [AddAddinField](./AddAddinField.md) | 无 | 使用请求中指定的数据创建新的加载项字段。 |
| [AddComment](./AddComment.md) | string \| null | 向文档添加批注。 |
| [AddContentControl](./AddContentControl.md) | [ContentControl](../Enumeration/ContentControl.md) | 向文档添加空内容控件。 |
| [AddContentControlCheckBox](./AddContentControlCheckBox.md) | 无 | 向文档添加空的内容控件复选框。 |
| [AddContentControlDatePicker](./AddContentControlDatePicker.md) | 无 | 向文档添加空的内容控件日期选择器。 |
| [AddContentControlList](./AddContentControlList.md) | 无 | 向文档添加空的内容控件列表。 |
| [AddContentControlPicture](./AddContentControlPicture.md) | 无 | 向文档添加空的内容控件图片。 |
| [AddOleObject](./AddOleObject.md) | 无 | 在当前文档位置添加 OLE 对象。 |
| [AnnotateParagraph](./AnnotateParagraph.md) | 无 | 向指定段落添加批注。 |
| [CanRedo](./CanRedo.md) | boolean | 检查是否可以恢复用户上一次撤销的操作。 |
| [CanUndo](./CanUndo.md) | boolean | 检查是否可以撤销用户的上一次操作。 |
| [ChangeComment](./ChangeComment.md) | 无 | 更改指定的批注。 |
| [ChangeOleObject](./ChangeOleObject.md) | 无 | 更改 OLE 对象数据中指定 *InternalId* 的 OLE 对象。 |
| [ChangeOleObjects](./ChangeOleObjects.md) | 无 | 更改 OLE 对象数据中指定 *InternalIds* 的多个 OLE 对象。 |
| [CoAuthoringChatSendMessage](./CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [ConvertDocument](./ConvertDocument.md) | string | 将文档转换为 Markdown 或 HTML 文本。 |
| [EditOleObject](./EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [EndAction](./EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllAddinFields](./GetAllAddinFields.md) | [AddinFieldData](../Enumeration/AddinFieldData.md)[] | 返回当前文档中的所有加载项字段。 |
| [GetAllComments](./GetAllComments.md) | [comment](../Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [GetAllContentControls](./GetAllContentControls.md) | [ContentControl](../Enumeration/ContentControl.md)[] | 返回已添加到页面的所有内容控件的信息。 |
| [GetAllForms](./GetAllForms.md) | [ContentControl](../Enumeration/ContentControl.md)[] | 返回已添加到文档的所有表单的信息。 |
| [GetAllOleObjects](./GetAllOleObjects.md) | [OLEObjectData](../Enumeration/OLEObjectData.md)[] | 返回可由指定插件打开的对象的所有 OLE 对象数据。如果未定义 *sPluginId*，此方法将返回当前文档中包含的所有 OLE 对象。 |
| [GetCurrentAddinField](./GetCurrentAddinField.md) | [AddinFieldData](../Enumeration/AddinFieldData.md) | 返回文档中的当前加载项字段。 |
| [GetCurrentBookmark](./GetCurrentBookmark.md) | string \| null | 返回当前书签。 |
| [GetCurrentContentControl](./GetCurrentContentControl.md) | string | 返回所选内容控件的标识符（即鼠标光标当前所在的内容控件）。 |
| [GetCurrentContentControlPr](./GetCurrentContentControlPr.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | 返回当前内容控件的属性。 |
| [GetCurrentSentence](./GetCurrentSentence.md) | string | 返回当前句子。 |
| [GetCurrentWord](./GetCurrentWord.md) | string | 返回当前单词。 |
| [GetDocumentLang](./GetDocumentLang.md) | string | 返回文档语言。 |
| [GetFields](./GetFields.md) | string[] | 以文本形式返回所有字段。 |
| [GetFileHTML](./GetFileHTML.md) | string | 以 HTML 格式返回文件内容。 |
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
| [InsertAndReplaceContentControls](./InsertAndReplaceContentControls.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md)[] | 插入包含数据的内容控件。数据由 [Document](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/) 的 JS 代码指定，或通过共享文档的链接指定。 |
| [InsertOleObject](./InsertOleObject.md) | 无 | 在当前文档位置插入 OLE 对象。 |
| [InstallPlugin](./InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [IsEditingOFormMode](./IsEditingOFormMode.md) | boolean | 检查文档是否处于 OForm 编辑模式。 |
| [IsFillingFormMode](./IsFillingFormMode.md) | boolean | 检查文档是否处于表单填写模式。 |
| [IsFillingOFormMode](./IsFillingOFormMode.md) | boolean | 检查文档是否处于 OForm 填写模式。 |
| [IsFormSigned](./IsFormSigned.md) | boolean | 检查指定的表单是否已进行数字签名。 |
| [MouseMoveWindow](./MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [MoveCursorToContentControl](./MoveCursorToContentControl.md) | 无 | 将光标移动到指定的内容控件。 |
| [MoveCursorToEnd](./MoveCursorToEnd.md) | 无 | 将光标移动到当前编辑区域（文档正文、页眉/页脚、脚注或自选图形）的末尾。此方法类似于按 **Ctrl + End** 键盘快捷键。 |
| [MoveCursorToStart](./MoveCursorToStart.md) | 无 | 将光标移动到当前编辑区域（文档正文、页眉/页脚、脚注或自选图形）的开头。此方法类似于按 **Ctrl + Home** 键盘快捷键。 |
| [MoveToComment](./MoveToComment.md) | 无 | 将光标移动到指定的批注。 |
| [MoveToNextReviewChange](./MoveToNextReviewChange.md) | 无 | 浏览审阅修订。 |
| [OnDropEvent](./OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [OnEncryption](./OnEncryption.md) | 无 | 加密文档。 |
| [OpenFile](./OpenFile.md) | 无 | 打开包含字段的文件。 |
| [PasteHtml](./PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [PutImageDataToSelection](./PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个选定的图形。如果没有选择图形，该方法将在当前位置插入图像。 |
| [Redo](./Redo.md) | 无 | 恢复用户上一次撤销的操作。 |
| [RejectReviewChanges](./RejectReviewChanges.md) | 无 | 拒绝审阅修订。 |
| [RemoveAddinField](./RemoveAddinField.md) | 无 | 删除指定的加载项字段。 |
| [RemoveAnnotationRange](./RemoveAnnotationRange.md) | 无 | 从文档中删除特定的批注范围。 |
| [RemoveComments](./RemoveComments.md) | 无 | 删除指定的批注。 |
| [RemoveContentControl](./RemoveContentControl.md) | [ContentControlParentPr](../Enumeration/ContentControlParentPr.md) | 删除当前选定的内容控件，同时保留其所有内容。将删除鼠标光标当前所在位置的内容控件。 |
| [RemoveContentControls](./RemoveContentControls.md) | 无 | 删除多个内容控件。 |
| [RemoveFieldWrapper](./RemoveFieldWrapper.md) | 无 | 删除字段包装器，仅保留字段内容。 |
| [RemoveOleObject](./RemoveOleObject.md) | 无 | 通过内部 ID 从文档中删除 OLE 对象。 |
| [RemoveOleObjects](./RemoveOleObjects.md) | 无 | 通过内部 ID 从文档中删除多个 OLE 对象。 |
| [RemovePlugin](./RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [RemoveSelectedContent](./RemoveSelectedContent.md) | 无 | 从文档中删除所选内容。 |
| [ReplaceCurrentSentence](./ReplaceCurrentSentence.md) | 无 | 用指定的字符串替换当前句子。 |
| [ReplaceCurrentWord](./ReplaceCurrentWord.md) | 无 | 用指定的字符串替换当前单词。 |
| [ReplaceTextSmart](./ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。 |
| [SearchAndReplace](./SearchAndReplace.md) | 无 | 查找并替换文本。 |
| [SearchNext](./SearchNext.md) | boolean | 从当前位置开始查找并选择下一个匹配的文本。 |
| [SelectAddinField](./SelectAddinField.md) | 无 | 选择指定的加载项字段。 |
| [SelectAnnotationRange](./SelectAnnotationRange.md) | 无 | 使用给定的批注选择文档中的文本。 |
| [SelectContentControl](./SelectContentControl.md) | 无 | 选择指定的内容控件。 |
| [SelectOleObject](./SelectOleObject.md) | 无 | 选择指定的 OLE 对象。 |
| [SetDisplayModeInReview](./SetDisplayModeInReview.md) | 无 | 设置修订的显示模式。 |
| [SetEditingRestrictions](./SetEditingRestrictions.md) | 无 | 设置文档编辑限制。 |
| [SetFormValue](./SetFormValue.md) | 无 | 为指定的表单设置值。 |
| [SetMacros](./SetMacros.md) | 无 | 为文档设置宏。 |
| [SetPluginsOptions](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。例如，此方法可用于向插件传递授权令牌。此方法只能与连接器类一起使用。 |
| [SetProperties](./SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [UnShowInputHelper](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [Undo](./Undo.md) | 无 | 撤销用户的上一次操作。 |
| [UpdateAddinFields](./UpdateAddinFields.md) | 无 | 使用指定的数据更新加载项字段。 |
| [UpdatePlugin](./UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |
