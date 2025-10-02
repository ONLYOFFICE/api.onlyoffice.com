# Api

表示 Api 类。


## 方法

| 方法名 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [添加批注](./AddComment.md) | 字符串 \| 空 | 向工作簿添加一条批注。 |
| [添加 OLE 对象](./AddOleObject.md) | 无 | 将 OLE 对象添加到文档当前位置。 |
| [修改批注](./ChangeComment.md) | 布尔值 | 修改指定的批注。 |
| [发送协作聊天消息](./CoAuthoringChatSendMessage.md) | 无 | 向协作编辑聊天发送消息。 |
| [转换文档](./ConvertDocument.md) | 字符串 | 将文档转换为 Markdown 或 HTML 文本。 |
| [编辑 OLE 对象](./EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [结束操作](./EndAction.md) | 无 | 指定长操作的结束动作。 |
| [获取所有批注](./GetAllComments.md) | [批注](../Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [获取自定义函数](./GetCustomFunctions.md) | 字符串 | 返回本地自定义函数库。 |
| [获取文档语言](./GetDocumentLang.md) | 字符串 | 返回文档的语言设置。 |
| [获取待下载文件](./GetFileToDownload.md) | 字符串 | 返回当前以指定格式导出的文件。 |
| [获取字体列表](./GetFontList.md) | [字体信息](../Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [从选区获取图像数据](./GetImageDataFromSelection.md) | [图像数据](../Enumeration/ImageData.md) | 返回选中图形中的第一个图像数据；若无图形选中，则返回一个白色矩形。 |
| [获取已安装插件](./GetInstalledPlugins.md) | [插件数据](../Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [获取宏](./GetMacros.md) | [宏](../Enumeration/Macros.md) | 返回文档中的宏信息。 |
| [获取选中内容](./GetSelectedContent.md) | 字符串 | 以指定格式返回所选内容。 |
| [获取选中 OLE 对象](./GetSelectedOleObjects.md) | [OLE 属性](../Enumeration/OLEProperties.md)[] | 返回选中的 OLE 对象数组。 |
| [获取选中文本](./GetSelectedText.md) | 字符串 | 返回文档中选中的文本。 |
| [获取选区类型](./GetSelectionType.md) | [选区类型](../Enumeration/SelectionType.md) | 返回当前选中的类型。 |
| [获取 VBA 宏](./GetVBAMacros.md) | 字符串 \| 空 | 返回文档中所有的 VBA 宏。 |
| [获取版本](./GetVersion.md) | 字符串 | 返回编辑器的版本信息。 |
| [输入文本](./InputText.md) | 无 | 在文档中插入文本。 |
| [安装插件](./InstallPlugin.md) | 对象 | 使用指定的插件配置安装插件。 |
| [鼠标移动事件](./MouseMoveWindow.md) | 无 | 当鼠标在插件 iframe 内移动时，向插件发送事件。 |
| [鼠标释放事件](./MouseUpWindow.md) | 无 | 当鼠标在插件 iframe 内释放时，向插件发送事件。 |
| [拖拽事件](./OnDropEvent.md) | 无 | 实现外部拖拽模拟功能。 |
| [加密文档](./OnEncryption.md) | 无 | 对文档进行加密。 |
| [以 Html 格式粘贴](./PasteHtml.md) | 无 | 将 HTML 格式的文本粘贴到文档中。 |
| [粘贴文本](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [插入图像数据](./PutImageDataToSelection.md) | 无 | 用参数中指定的图像替换第一个被选中的图形；若无图形被选中，则在当前位置插入图像。 |
| [移除批注](./RemoveComments.md) | 无 | 移除指定的批注。 |
| [移除插件](./RemovePlugin.md) | 对象 | 通过指定的 GUID 移除插件。 |
| [智能替换文本](./ReplaceTextSmart.md) | 布尔值 | 用字符串数组中的文本，分别替换选区中的每一段或单元格文本。 |
| [设置自定义函数](./SetCustomFunctions.md) | 无 | 更新本地自定义函数库。 |
| [设置宏](./SetMacros.md) | 无 | 向文档中添加宏。 |
| [设置插件选项](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可以为所有插件设置，或为特定插件设置。例如：可用于向插件传递授权令牌。仅可在连接器类中使用此方法。 |
| [设置属性](./SetProperties.md) | 无 | 设置文档属性。 |
| [按钮显示](./ShowButton.md) | 无 | 显示或隐藏标题栏中的按钮。 |
| [错误显示](./ShowError.md) | 无 | 显示错误或警告信息。 |
| [显示输入助手](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [开始动作](./StartAction.md) | 无 | 指定长操作的开始动作。 |
| [隐藏输入助手](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [更新插件](./UpdatePlugin.md) | 对象 | 使用指定的插件配置更新插件。 |
