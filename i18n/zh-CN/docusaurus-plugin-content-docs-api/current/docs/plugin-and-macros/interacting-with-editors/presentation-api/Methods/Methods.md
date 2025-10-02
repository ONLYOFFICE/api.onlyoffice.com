# Api

表示 Api 类。


## 方法

| 方法名 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [添加批注](./AddComment.md) | 字符串 \| 空 | 向演示文稿添加一条批注。 |
| [添加 OLE 对象](./AddOleObject.md) | 无 | 在当前文档位置插入一个 OLE 对象。 |
| [修改批注](./ChangeComment.md) | 布尔值 | 修改指定的批注。 |
| [发送协作聊天消息](./CoAuthoringChatSendMessage.md) | 无 | 向协作编辑聊天窗口发送消息。 |
| [转换文档](./ConvertDocument.md) | 字符串 | 将文档转换为 Markdown 或 HTML 文本。 |
| [编辑 OLE 对象](./EditOleObject.md) | 无 | 编辑文档中的 OLE 对象。 |
| [结束操作](./EndAction.md) | 无 | 标记长时间操作的结束动作。 |
| [结束放映](./EndSlideShow.md) | 无 | 结束当前幻灯片放映。 |
| [获取所有批注](./GetAllComments.md) | [批注](../Enumeration/comment.md)[] | 返回文档中的所有批注。 |
| [获取文档语言](./GetDocumentLang.md) | 字符串 | 返回文档的语言设置。 |
| [获取待下载文件](./GetFileToDownload.md) | 字符串 | 以指定格式返回可下载的当前文件。 |
| [获取字体列表](./GetFontList.md) | [字体信息](../Enumeration/FontInfo.md)[] | 返回字体列表。 |
| [从选区获取图像数据](./GetImageDataFromSelection.md) | [图像数据](../Enumeration/ImageData.md) | 返回第一个选中图形的图像数据；若未选中图形，则返回白色矩形。 |
| [获取已安装插件](./GetInstalledPlugins.md) | [插件数据](../Enumeration/PluginData.md)[] | 返回所有已安装的插件。 |
| [获取宏](./GetMacros.md) | [宏](../Enumeration/Macros.md) | 返回文档中的宏信息。 |
| [获取选中内容](./GetSelectedContent.md) | 字符串 | 以指定格式返回当前选中的内容。 |
| [获取选中的 OLE 对象](./GetSelectedOleObjects.md) | [OLE 属性](../Enumeration/OLEProperties.md)[] | 返回当前选中的 OLE 对象数组。 |
| [获取选中文本](./GetSelectedText.md) | 字符串 | 返回文档中选中的文本。 |
| [获取选区类型](./GetSelectionType.md) | [选区类型](../Enumeration/SelectionType.md) | 返回当前选区的类型。 |
| [获取 VBA 宏](./GetVBAMacros.md) | 字符串 \| 空 | 返回文档中的所有 VBA 宏。 |
| [获取版本](./GetVersion.md) | 字符串 | 返回编辑器版本号。 |
| [显示下一张幻灯片](./GoToNextSlideInSlideShow.md) | 无 | 在幻灯片放映中切换到当前幻灯片的下一张。 |
| [显示上一张幻灯片](./GoToPreviousSlideInSlideShow.md) | 无 | 在幻灯片放映中切换到当前幻灯片的上一张。 |
| [跳转当前幻灯片](./GoToSlide.md) | 无 | 根据索引设置编辑器中的活动幻灯片。 |
| [幻灯片放映中跳转到指定幻灯片](./GoToSlideInSlideShow.md) | 无 | 在幻灯片放映中显示指定索引的幻灯片。 |
| [输入文本](./InputText.md) | 无 | 在文档中插入文本。 |
| [安装插件](./InstallPlugin.md) | 对象 | 使用指定配置安装插件。 |
| [鼠标移动事件](./MouseMoveWindow.md) | 无 | 当鼠标在插件 iframe 内移动时，向插件发送事件。 |
| [鼠标释放事件](./MouseUpWindow.md) | 无 | 当鼠标在插件 iframe 内释放按钮时，向插件发送事件。 |
| [拖拽事件](./OnDropEvent.md) | 无 | 实现外部拖拽模拟。 |
| [加密文档](./OnEncryption.md) | 无 | 对文档进行加密。 |
| [以 Html 格式粘贴](./PasteHtml.md) | 无 | 将 HTML 格式文本粘贴到文档中。 |
| [粘贴文本](./PasteText.md) | 无 | 将文本粘贴到文档中。 |
| [暂停放映](./PauseSlideShow.md) | 无 | 暂停当前幻灯片放映。 |
| [插入图像数据](./PutImageDataToSelection.md) | 无 | 用参数指定图像替换第一个选中的图形；若未选中图形，则在当前位置插入图像。 |
| [移除批注](./RemoveComments.md) | 无 | 移除指定的批注。 |
| [移除插件](./RemovePlugin.md) | 对象 | 根据指定 GUID 移除插件。 |
| [智能替换文本](./ReplaceTextSmart.md) | 布尔值 | 用字符串数组中的文本替换选区中的每一段或单元格文本。 |
| [恢复幻灯片放映](./ResumeSlideShow.md) | 无 | 继续当前暂停的幻灯片放映。 |
| [设置宏](./SetMacros.md) | 无 | 向文档设置宏。 |
| [设置插件选项](./SetPluginsOptions.md) | 无 | 从外部源配置插件。可为全部插件或指定插件设置。例如，可用于向插件传递授权令牌。此方法仅限连接器类使用。 |
| [设置属性](./SetProperties.md) | 无 | 设置文档属性。 |
| [按钮显示](./ShowButton.md) | 无 | 显示或隐藏标题栏中的按钮。 |
| [错误显示](./ShowError.md) | 无 | 显示错误或警告消息。 |
| [显示输入助手](./ShowInputHelper.md) | 无 | 显示输入助手。 |
| [开始操作](./StartAction.md) | 无 | 标记长时间操作的开始动作。 |
| [开始放映](./StartSlideShow.md) | 无 | 开始演示文稿放映。 |
| [隐藏输入助手](./UnShowInputHelper.md) | 无 | 隐藏输入助手。 |
| [更新插件](./UpdatePlugin.md) | 对象 | 使用指定配置更新插件。 |
