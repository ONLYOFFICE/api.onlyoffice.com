# Document API

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AcceptReviewChanges](./Methods/AcceptReviewChanges.md) | 无 | 接受审阅修订。 |
| [AddAddinField](./Methods/AddAddinField.md) | [AddinFieldData](./Enumeration/AddinFieldData.md) | 使用请求中指定的数据创建新的加载项字段。 |
| [AddComment](./Methods/AddComment.md) | string \| null | 向文档添加批注。 |
| [AddContentControl](./Methods/AddContentControl.md) | [ContentControl](./Enumeration/ContentControl.md) | 向文档添加空内容控件。 |
| [AddContentControlCheckBox](./Methods/AddContentControlCheckBox.md) | 无 | 向文档添加空的内容控件复选框。 |
| [AddContentControlDatePicker](./Methods/AddContentControlDatePicker.md) | 无 | 向文档添加空的内容控件日期选择器。 |
| [AddContentControlList](./Methods/AddContentControlList.md) | 无 | 向文档添加空的内容控件列表。 |
| [AddContentControlPicture](./Methods/AddContentControlPicture.md) | 无 | 向文档添加空的内容控件图片。 |
| [AddOleObject](./Methods/AddOleObject.md) | 无 | 在当前文档位置添加 OLE 对象。 |
| [AnnotateParagraph](./Methods/AnnotateParagraph.md) | 无 | 向指定的段落添加注解。 |
| [CanRedo](./Methods/CanRedo.md) | boolean | 检查是否可以恢复用户上一次撤销的操作。 |
| [CanUndo](./Methods/CanUndo.md) | boolean | 检查是否可以撤销用户的上一次操作。 |
| [ChangeComment](./Methods/ChangeComment.md) | 无 | 更改指定的批注。 |
| [ChangeOleObject](./Methods/ChangeOleObject.md) | 无 | 更改 OLE 对象数据中指定 *InternalId* 的 OLE 对象。 |
| [ChangeOleObjects](./Methods/ChangeOleObjects.md) | 无 | 更改 OLE 对象数据中指定 *InternalIds* 的多个 OLE 对象。 |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | 无 | 向协作聊天发送消息。 |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | 将文档转换为 Markdown 或 HTML 文本。 |
| [EditOleObject](./Methods/EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [EndAction](./Methods/EndAction.md) | 无 | 指定长时间操作的结束操作。 |
| [FocusEditor](./Methods/FocusEditor.md) | 无 | 将焦点返回到编辑器。 |
| [GetAllAddinFields](./Methods/GetAllAddinFields.md) | [AddinFieldData](./Enumeration/AddinFieldData.md)[] | 返回当前文档中的所有加载项字段。 |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](./Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ContentControl](./Enumeration/ContentControl.md)[] | 返回已添加到页面的所有内容控件的信息。 |
| [GetAllForms](./Methods/GetAllForms.md) | [ContentControl](./Enumeration/ContentControl.md)[] | 返回已添加到文档的所有表单的信息。 |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [OLEObjectData](./Enumeration/OLEObjectData.md)[] | 返回可由指定插件打开的对象的所有 OLE 对象数据。 |
| [GetCurrentAddinField](./Methods/GetCurrentAddinField.md) | [AddinFieldData](./Enumeration/AddinFieldData.md) | 返回文档中的当前加载项字段。 |
| [GetCurrentBookmark](./Methods/GetCurrentBookmark.md) | string \| null | 返回当前书签。 |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | string | 返回所选内容控件的标识符（即鼠标光标当前所在的内容控件）。 |
| [GetCurrentContentControlPr](./Methods/GetCurrentContentControlPr.md) | [ContentControlProperties](./Enumeration/ContentControlProperties.md) | 返回当前内容控件的属性。 |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | 返回当前句子。 |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | 返回当前单词。 |
| [GetDocumentLang](./Methods/GetDocumentLang.md) | string | 返回文档语言。 |
| [GetFields](./Methods/GetFields.md) | string[] | 以文本形式返回所有字段。 |
| [GetFileHTML](./Methods/GetFileHTML.md) | string | 以 HTML 格式返回文件内容。 |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | 以指定格式返回要下载的当前文件。 |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](./Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [GetFormValue](./Methods/GetFormValue.md) | null \| string \| boolean | 返回指定表单的值。 |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ContentControl](./Enumeration/ContentControl.md)[] | 返回已添加到文档中具有指定标签的所有表单的信息。 |
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
| [InsertAndReplaceContentControls](./Methods/InsertAndReplaceContentControls.md) | [ContentControlProperties](./Enumeration/ContentControlProperties.md)[] | Inserts the content control containing data. The data is specified by the JS code for [Document](./../../../../docs/office-api/usage-api/document-api/document-api.md), or by a link to the shared document. |
| [InsertOleObject](./Methods/InsertOleObject.md) | 无 | 在当前文档位置插入 OLE 对象。 |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | 使用指定的插件配置安装插件。 |
| [IsEditingOFormMode](./Methods/IsEditingOFormMode.md) | boolean | 检查文档是否处于 OForm 编辑模式。 |
| [IsFillingFormMode](./Methods/IsFillingFormMode.md) | boolean | 检查文档是否处于表单填写模式。 |
| [IsFillingOFormMode](./Methods/IsFillingOFormMode.md) | boolean | 检查文档是否处于 OForm 填写模式。 |
| [IsFormSigned](./Methods/IsFormSigned.md) | boolean | 检查指定的表单是否已进行数字签名。 |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | 无 | 当鼠标按钮在插件 iframe 内移动时向插件发送事件。 |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | 无 | 当鼠标按钮在插件 iframe 内释放时向插件发送事件。 |
| [MoveCursorOutsideField](./Methods/MoveCursorOutsideField.md) | 无 | 将光标移动到字段外部，定位在字段之前或之后。 |
| [MoveCursorToContentControl](./Methods/MoveCursorToContentControl.md) | 无 | 将光标移动到指定的内容控件。 |
| [MoveCursorToEnd](./Methods/MoveCursorToEnd.md) | 无 | 将光标移动到当前编辑区域（文档正文、页眉/页脚、脚注或自选图形）的末尾。 |
| [MoveCursorToField](./Methods/MoveCursorToField.md) | 无 | 将光标移动到字段的开头或末尾。 |
| [MoveCursorToStart](./Methods/MoveCursorToStart.md) | 无 | 将光标移动到当前编辑区域（文档正文、页眉/页脚、脚注或自选图形）的开头。 |
| [MoveToComment](./Methods/MoveToComment.md) | 无 | 将光标移动到指定的批注。 |
| [MoveToNextReviewChange](./Methods/MoveToNextReviewChange.md) | 无 | 浏览审阅修订。 |
| [OnDropEvent](./Methods/OnDropEvent.md) | 无 | 实现外部拖放模拟。 |
| [OnEncryption](./Methods/OnEncryption.md) | 无 | 加密文档。 |
| [OpenFile](./Methods/OpenFile.md) | 无 | 打开包含字段的文件。 |
| [PasteHtml](./Methods/PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [PasteText](./Methods/PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个选定的图形。 |
| [Redo](./Methods/Redo.md) | 无 | 恢复用户上一次撤销的操作。 |
| [RejectReviewChanges](./Methods/RejectReviewChanges.md) | 无 | 拒绝审阅修订。 |
| [RemoveAddinField](./Methods/RemoveAddinField.md) | 无 | 删除指定的加载项字段。 |
| [RemoveAnnotationRange](./Methods/RemoveAnnotationRange.md) | 无 | 从文档中移除特定的注解范围。 |
| [RemoveComments](./Methods/RemoveComments.md) | 无 | 删除指定的批注。 |
| [RemoveContentControl](./Methods/RemoveContentControl.md) | [ContentControlParentPr](./Enumeration/ContentControlParentPr.md) | 删除当前选定的内容控件，同时保留其所有内容。将删除鼠标光标当前所在位置的内容控件。 |
| [RemoveContentControls](./Methods/RemoveContentControls.md) | 无 | 删除多个内容控件。 |
| [RemoveFieldWrapper](./Methods/RemoveFieldWrapper.md) | 无 | 删除字段包装器，仅保留字段内容。 |
| [RemoveOleObject](./Methods/RemoveOleObject.md) | 无 | 通过内部 ID 从文档中删除 OLE 对象。 |
| [RemoveOleObjects](./Methods/RemoveOleObjects.md) | 无 | 通过内部 ID 从文档中删除多个 OLE 对象。 |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | 删除具有指定 GUID 的插件。 |
| [RemoveSelectedContent](./Methods/RemoveSelectedContent.md) | 无 | 从文档中删除所选内容。 |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | 无 | 用指定的字符串替换当前句子。 |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | 无 | 用指定的字符串替换当前单词。 |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | 用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。 |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | 无 | 查找并替换文本。 |
| [SearchNext](./Methods/SearchNext.md) | boolean | 从当前位置开始查找并选择下一个匹配的文本。 |
| [SelectAddinField](./Methods/SelectAddinField.md) | 无 | 选择指定的加载项字段。 |
| [SelectAnnotationRange](./Methods/SelectAnnotationRange.md) | 无 | 使用给定的注解在文档中选择文本。 |
| [SelectContentControl](./Methods/SelectContentControl.md) | 无 | 选择指定的内容控件。 |
| [SelectOleObject](./Methods/SelectOleObject.md) | 无 | 选择指定的 OLE 对象。 |
| [SetDisplayModeInReview](./Methods/SetDisplayModeInReview.md) | 无 | 设置修订的显示模式。 |
| [SetEditingRestrictions](./Methods/SetEditingRestrictions.md) | 无 | 设置文档编辑限制。 |
| [SetFormValue](./Methods/SetFormValue.md) | 无 | 为指定的表单设置值。 |
| [SetMacros](./Methods/SetMacros.md) | 无 | 为文档设置宏。 |
| [SetParagraphHtml](./Methods/SetParagraphHtml.md) | 无 | 用从给定 HTML 字符串解析的内容替换指定段落的所有内容。 |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件或特定插件设置参数。 |
| [SetProperties](./Methods/SetProperties.md) | 无 | 为文档设置属性。 |
| [ShowButton](./Methods/ShowButton.md) | 无 | 显示或隐藏页眉中的按钮。 |
| [ShowError](./Methods/ShowError.md) | 无 | 显示错误/警告消息。 |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | 无 | 显示输入助手。 |
| [StartAction](./Methods/StartAction.md) | 无 | 指定长时间操作的开始操作。 |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [Undo](./Methods/Undo.md) | 无 | 撤销用户的上一次操作。 |
| [UpdateAddinFields](./Methods/UpdateAddinFields.md) | 无 | 使用指定的数据更新加载项字段。 |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | 使用指定的插件配置更新插件。 |

## 事件

The following table lists the available events.

| 事件 | 描述 |
| ----- | ----------- |
| [onAddComment](./Events/onAddComment.md) | The function called when a comment is added to the document with the [AddComment](./../../../../docs/plugins/interacting-with-editors/document-api/Methods/AddComment.md) method. |
| [onBlurAnnotation](./Events/onBlurAnnotation.md) | 当批注失去焦点时调用的函数。 |
| [onBlurContentControl](./Events/onBlurContentControl.md) | 用于显示哪个内容控件已失去焦点的函数。 |
| [onChangeCommentData](./Events/onChangeCommentData.md) | The function called when the specified comment is changed with the [ChangeComment](./../../../../docs/plugins/interacting-with-editors/document-api/Methods/ChangeComment.md) method. |
| [onChangeContentControl](./Events/onChangeContentControl.md) | 用于显示哪个内容控件已更改的函数。 |
| [onChangeCurrentPage](./Events/onChangeCurrentPage.md) | 当前页面发生更改时调用的函数。 |
| [onChangeRestrictions](./Events/onChangeRestrictions.md) | 当编辑器中的限制更改时调用的函数。 |
| [onClick](./Events/onClick.md) | 用户点击元素时调用的函数。 |
| [onClickAnnotation](./Events/onClickAnnotation.md) | 用户点击批注时调用的函数。 |
| [onDocumentContentReady](./Events/onDocumentContentReady.md) | 当文档完全加载时调用的函数。 |
| [onEnableMouseEvent](./Events/onEnableMouseEvent.md) | 用于开启/关闭鼠标或触控板事件的函数。 |
| [onExternalMouseUp](./Events/onExternalMouseUp.md) | 当鼠标按钮在插件 iframe 外部释放时调用的函数。 |
| [onFocusAnnotation](./Events/onFocusAnnotation.md) | 当批注获得焦点时调用的函数。 |
| [onFocusContentControl](./Events/onFocusContentControl.md) | 用于显示哪个内容控件已获得焦点的函数。 |
| [onHideContentControlTrack](./Events/onHideContentControlTrack.md) | 当内容控件在文档中失去焦点时调用的函数。 |
| [onInsertOleObjects](./Events/onInsertOleObjects.md) | 当一个或多个 OLE 对象插入文档时调用的函数。 |
| [onParagraphText](./Events/onParagraphText.md) | 当文档中的段落文本更新时调用的函数。 |
| [onRemoveComment](./Events/onRemoveComment.md) | The function called when the specified comment is removed with the [RemoveComments](./../../../../docs/plugins/interacting-with-editors/document-api/Methods/RemoveComments.md) method. |
| [onShowContentControlTrack](./Events/onShowContentControlTrack.md) | 当内容控件获得焦点并显示其轨道时调用的函数。 |
| [onSubmitForm](./Events/onSubmitForm.md) | 用户点击"完成并提交"按钮时调用的函数。 |
| [onTargetPositionChanged](./Events/onTargetPositionChanged.md) | 当编辑器中的目标位置发生更改时调用的函数。 |
