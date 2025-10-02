# Api

表示 Api 类。


## 方法

| 方法名 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [接受审阅修订](./AcceptReviewChanges.md) | 无 | 接受修订更改。 |
| [添加加载项字段](./AddAddinField.md) | 无 | 使用请求中指定的数据创建新的外接程序字段。 |
| [添加批注](./AddComment.md) | 字符串 \| 空 | 向文档添加一条批注。 |
| [添加内容控件](./AddContentControl.md) | [内容控件](../Enumeration/ContentControl.md) | 向文档添加一个空的内容控件。 |
| [添加内容控件复选框](./AddContentControlCheckBox.md) | 无 | 向文档添加一个空的内容控件复选框。 |
| [添加内容控件日期选择器](./AddContentControlDatePicker.md) | 无 | 向文档添加一个空的内容控件日期选择器。 |
| [添加内容控件列表](./AddContentControlList.md) | 无 | 向文档添加一个空的内容控件列表。 |
| [添加内容控件图片](./AddContentControlPicture.md) | 无 | 向文档添加一个空的内容控件图片。 |
| [添加 OLE 对象](./AddOleObject.md) | 无 | 将 OLE 对象添加到文档当前位置。 |
| [能否重做操作](./CanRedo.md) | 布尔值 | 检查是否可以重做用户最后一次撤销的操作。 |
| [能否撤销操作](./CanUndo.md) | 布尔值 | 检查是否可以撤销用户最后一次操作。 |
| [修改批注](./ChangeComment.md) | 无 | 修改指定的批注。 |
| [修改 OLE 对象](./ChangeOleObject.md) | 无 | 根据 OLE 对象数据中指定的 *InternalId* 更改 OLE 对象。 |
| [修改多个 OLE 对象](./ChangeOleObjects.md) | 无 | 根据 OLE 对象数据中指定的 *InternalIds* 更改多个 OLE 对象。 |
| [发送协作聊天消息](./CoAuthoringChatSendMessage.md) | 无 | 向协作编辑聊天发送消息。 |
| [转换文档](./ConvertDocument.md) | 字符串 | 将文档转换为 Markdown 或 HTML 文本。 |
| [编辑 OLE 对象](./EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [结束操作](./EndAction.md) | 无 | 指定长操作的结束动作。 |
| [获取所有加载项字段](./GetAllAddinFields.md) | [外接程序字段数据](../Enumeration/AddinFieldData.md)[] | 返回当前文档中的所有外接程序字段。 |
| [获取所有批注](./GetAllComments.md) | [批注](../Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [获取所有内容控件](./GetAllContentControls.md) | [内容控件](../Enumeration/ContentControl.md)[] | 返回页面上已添加的所有内容控件的信息。 |
| [获取所有表单](./GetAllForms.md) | [内容控件](../Enumeration/ContentControl.md)[] | 返回文档中所有已添加表单的信息。 |
| [获取所有 OLE 对象](./GetAllOleObjects.md) | [OLE 对象数据](../Enumeration/OLEObjectData.md)[] | 返回所有可由指定插件打开的 OLE 对象数据；若未指定 *sPluginId*，则返回当前文档中所有 OLE 对象。 |
| [获取当前书签](./GetCurrentBookmark.md) | 字符串 \| 空 | 返回当前书签。 |
| [获取当前内容控件](./GetCurrentContentControl.md) | 字符串 | 返回当前选中的内容控件的标识符（即鼠标光标当前所在的内容控件）。 |
| [获取当前内容控件属性](./GetCurrentContentControlPr.md) | [内容控件属性](../Enumeration/ContentControlProperties.md) | 返回当前内容控件的属性。 |
| [获取当前句子](./GetCurrentSentence.md) | 字符串 | 返回当前句子。 |
| [获取当前单词](./GetCurrentWord.md) | 字符串 | 返回当前单词。 |
| [获取文档语言](./GetDocumentLang.md) | 字符串 | 返回文档的语言设置。 |
| [获取字段](./GetFields.md) | 字符串[] | 以文本形式返回所有字段。 |
| [获取文件 HTML](./GetFileHTML.md) | 字符串 | 以 HTML 格式返回文件内容。 |
| [获取待下载文件](./GetFileToDownload.md) | 字符串 | 返回当前以指定格式导出的文件。 |
| [获取字体列表](./GetFontList.md) | [字体信息](../Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [获取表单值](./GetFormValue.md) | 空 \| 字符串 \| 布尔值 | 返回指定表单的值。 |
| [根据标签获取表单](./GetFormsByTag.md) | [内容控件](../Enumeration/ContentControl.md)[] | 返回具有指定标签的所有表单信息。 |
| [从选区获取图像数据](./GetImageDataFromSelection.md) | [图像数据](../Enumeration/ImageData.md) | 返回选中图形中的第一个图像数据；若无图形选中，则返回一个白色矩形。 |
| [获取已安装插件](./GetInstalledPlugins.md) | [插件数据](../Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [获取宏](./GetMacros.md) | [宏](../Enumeration/Macros.md) | 返回文档中的宏信息。 |
| [获取选中内容](./GetSelectedContent.md) | 字符串 | 以指定格式返回所选内容。 |
| [获取选中 OLE 对象](./GetSelectedOleObjects.md) | [OLE 属性](../Enumeration/OLEProperties.md)[] | 返回选中的 OLE 对象数组。 |
| [获取选中文本](./GetSelectedText.md) | 字符串 | 返回文档中选中的文本。 |
| [获取选区类型](./GetSelectionType.md) | [选区类型](../Enumeration/SelectionType.md) | 返回当前选中的类型。 |
| [获取 VBA 宏](./GetVBAMacros.md) | 字符串 \| 空 | 返回文档中所有的 VBA 宏。 |
| [获取版本](./GetVersion.md) | 字符串 | 返回编辑器版本号。 |
| [输入文本](./InputText.md) | 无 | 在文档中插入文本。 |
| [插入并替换内容控件](./InsertAndReplaceContentControls.md) | [内容控件属性](../Enumeration/ContentControlProperties.md)[] | 插入包含数据的内容控件。数据由 JS 代码或共享文档链接指定。 |
| [插入 OLE 对象](./InsertOleObject.md) | 无 | 在当前文档位置插入 OLE 对象。 |
| [安装插件](./InstallPlugin.md) | 对象 | 使用指定的插件配置安装插件。 |
| [鼠标移动事件](./MouseMoveWindow.md) | 无 | 当鼠标在插件 iframe 内移动时，向插件发送事件。 |
| [鼠标释放事件](./MouseUpWindow.md) | 无 | 当鼠标在插件 iframe 内释放时，向插件发送事件。 |
| [移动光标至内容控件](./MoveCursorToContentControl.md) | 无 | 将光标移动到指定的内容控件。 |
| [移动光标至末尾](./MoveCursorToEnd.md) | 无 | 将光标移动到当前编辑区域（正文、页眉/页脚、脚注或自选图形）的末尾，相当于按下 **Ctrl + End**。 |
| [移动光标至开头](./MoveCursorToStart.md) | 无 | 将光标移动到当前编辑区域（正文、页眉/页脚、脚注或自选图形）的开头，相当于按下 **Ctrl + Home**。 |
| [光标移动至批注](./MoveToComment.md) | 无 | 将光标移动到指定的批注。 |
| [移动至审阅修订](./MoveToNextReviewChange.md) | 无 | 浏览并定位到下一处修订更改。 |
| [拖拽事件](./OnDropEvent.md) | 无 | 实现外部拖拽模拟。 |
| [加密文档](./OnEncryption.md) | 无 | 对文档进行加密。 |
| [打开文件](./OpenFile.md) | 无 | 打开带有字段的文件。 |
| [以 Html 格式粘贴](./PasteHtml.md) | 无 | 将 HTML 格式文本粘贴到文档中。 |
| [粘贴文本](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [插入图像数据](./PutImageDataToSelection.md) | 无 | 用参数指定图像替换第一个选中的图形；若未选中图形，则在当前位置插入图像。 |
| [重做](./Redo.md) | 无 | 重做用户最后一次撤销的操作。 |
| [拒绝审阅修订](./RejectReviewChanges.md) | 无 | 拒绝修订更改。 |
| [移除批注](./RemoveComments.md) | 无 | 移除指定的批注。 |
| [移除内容控件](./RemoveContentControl.md) | [内容控件父属性](../Enumeration/ContentControlParentPr.md) | 移除当前选中的内容控件并保留其全部内容（光标所在位置的内容控件将被移除）。 |
| [移除多个内容控件](./RemoveContentControls.md) | 无 | 移除多个内容控件。 |
| [移除字段包装器](./RemoveFieldWrapper.md) | 无 | 移除字段包装器，仅保留字段内容。 |
| [移除 OLE 对象](./RemoveOleObject.md) | 无 | 根据内部 ID 从文档中移除 OLE 对象。 |
| [移除多个 OLE 对象](./RemoveOleObjects.md) | 无 | 根据内部 ID 从文档中移除多个 OLE 对象。 |
| [移除插件](./RemovePlugin.md) | 对象 | 通过指定的 GUID 移除插件。 |
| [移除选中内容](./RemoveSelectedContent.md) | 无 | 从文档中移除选中的内容。 |
| [替换当前句子](./ReplaceCurrentSentence.md) | 无 | 用指定字符串替换当前句子。 |
| [替换当前单词](./ReplaceCurrentWord.md) | 无 | 用指定字符串替换当前单词。 |
| [智能替换文本](./ReplaceTextSmart.md) | 布尔值 | 用字符串数组中的文本，分别替换选区中的每一段或单元格文本。 |
| [查找替换](./SearchAndReplace.md) | 无 | 查找并替换文本。 |
| [查找下一项](./SearchNext.md) | 布尔值 | 从当前位置开始查找并选择下一处匹配的文本。 |
| [选择内容控件](./SelectContentControl.md) | 无 | 选择指定的内容控件。 |
| [选择 OLE 对象](./SelectOleObject.md) | 无 | 选择指定的 OLE 对象。 |
| [设置审阅显示模式](./SetDisplayModeInReview.md) | 无 | 设置修订痕迹的显示模式。 |
| [设置文档编辑限制](./SetEditingRestrictions.md) | 无 | 设置文档编辑限制。 |
| [设置表单值](./SetFormValue.md) | 无 | 设置指定表单的值。 |
| [设置宏](./SetMacros.md) | 无 | 向文档中添加宏。 |
| [设置插件选项](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件设置，或为特定插件设置。例如：可用于向插件传递授权令牌。仅可在连接器类中使用此方法。 |
| [设置属性](./SetProperties.md) | 无 | 设置文档属性。 |
| [按钮显示](./ShowButton.md) | 无 | 显示或隐藏标题栏中的按钮。 |
| [错误显示](./ShowError.md) | 无 | 显示错误或警告信息。 |
| [显示输入助手](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [开始动作](./StartAction.md) | 无 | 指定长操作的开始动作。 |
| [隐藏输入助手](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [撤销](./Undo.md) | 无 | 撤销用户最后一次操作。 |
| [更新加载项字段](./UpdateAddinFields.md) | 无 | 使用指定数据更新外接程序字段。 |
| [更新插件](./UpdatePlugin.md) | 对象 | 使用指定的插件配置更新插件。 |
