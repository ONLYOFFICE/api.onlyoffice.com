---
sidebar_position: -1
---

# 更新日志

ONLYOFFICE 插件与宏 API 的变更列表。

## 版本 10.0 {#version-100}

- 为插件 API 添加了全局 [Editor](../interacting-with-editors/overview/how-to-call-methods.md#editor-object) 对象。现在可以像调用普通函数一样调用编辑器方法，并返回 Promise，例如 `await Editor.GetSelectedText()`，无需再通过 `window.Asc.plugin.executeMethod` 调用。仍支持将回调函数作为最后一个参数传入。
- 添加了 [Editor.RunMacro](../interacting-with-editors/overview/how-to-call-commands.md#editorrunmacro) 方法，该方法使用编辑器 API 运行函数，向其传递参数，并以 Promise 的形式返回结果。
- 将[文本文档 API](../interacting-with-editors/document-api/Methods/IsFillingForm.md)和[表单 API](../interacting-with-editors/form-api/Methods/IsFillingForm.md)的 `IsFillingFormMode` 方法重命名为 `IsFillingForm`。旧名称仍然可用。
- 将[文本文档 API](../interacting-with-editors/document-api/Methods/IsFillingPdfForm.md)和[表单 API](../interacting-with-editors/form-api/Methods/IsFillingPdfForm.md)的 `IsFillingOFormMode` 方法重命名为 `IsFillingPdfForm`。旧名称仍然可用。
- 将[文本文档 API](../interacting-with-editors/document-api/Methods/IsEditingPdfForm.md)和[表单 API](../interacting-with-editors/form-api/Methods/IsEditingPdfForm.md)的 `IsEditingOFormMode` 方法重命名为 `IsEditingPdfForm`。旧名称仍然可用。
- 为[文本文档 API](../interacting-with-editors/document-api/Methods/GetRestrictions.md)、[表单 API](../interacting-with-editors/form-api/Methods/GetRestrictions.md)、[电子表格 API](../interacting-with-editors/spreadsheet-api/Methods/GetRestrictions.md)、[演示文稿 API](../interacting-with-editors/presentation-api/Methods/GetRestrictions.md)、[PDF API](../interacting-with-editors/pdf-api/Methods/GetRestrictions.md) 添加了 `GetRestrictions` 方法。
- 为[文本文档 API](../interacting-with-editors/document-api/Methods/SetButtonDisabled.md)、[电子表格 API](../interacting-with-editors/spreadsheet-api/Methods/SetButtonDisabled.md)、[演示文稿 API](../interacting-with-editors/presentation-api/Methods/SetButtonDisabled.md) 添加了 `SetButtonDisabled` 方法。
- 为[文本文档 API](../interacting-with-editors/document-api/Methods/GetOFormRole.md)、[表单 API](../interacting-with-editors/form-api/Methods/GetOFormRole.md) 添加了 `GetOFormRole` 方法。
- 为文本文档 API 添加了 [MoveCursorToAnnotationRange](../interacting-with-editors/document-api/Methods/MoveCursorToAnnotationRange.md) 方法。
- 为文本文档 API 添加了 [SetRangeHtml](../interacting-with-editors/document-api/Methods/SetRangeHtml.md) 方法。
- 为演示文稿 API 添加了 [InsertPresentationFromUrl](../interacting-with-editors/presentation-api/Methods/InsertPresentationFromUrl.md) 方法。
- 为演示文稿 API 添加了 [SetParagraphHtml](../interacting-with-editors/presentation-api/Methods/SetParagraphHtml.md) 方法。
- 为演示文稿 API 添加了 [SetParagraphRangeHtml](../interacting-with-editors/presentation-api/Methods/SetParagraphRangeHtml.md) 方法。
- 为演示文稿 API 添加了 [AnnotateParagraph](../interacting-with-editors/presentation-api/Methods/AnnotateParagraph.md) 方法。
- 为演示文稿 API 添加了 [SelectAnnotationRange](../interacting-with-editors/presentation-api/Methods/SelectAnnotationRange.md) 方法。
- 为演示文稿 API 添加了 [RemoveAnnotationRange](../interacting-with-editors/presentation-api/Methods/RemoveAnnotationRange.md) 方法。
- 为[文本文档 API](../interacting-with-editors/document-api/Events/onFloatActionButtonClick.md)、[表单 API](../interacting-with-editors/form-api/Events/onFloatActionButtonClick.md)、[电子表格 API](../interacting-with-editors/spreadsheet-api/Events/onFloatActionButtonClick.md)、[演示文稿 API](../interacting-with-editors/presentation-api/Events/onFloatActionButtonClick.md)、[PDF API](../interacting-with-editors/pdf-api/Events/onFloatActionButtonClick.md) 添加了 `onFloatActionButtonClick` 事件。
- 为PDF API 添加了 [onSelectionEnd](../interacting-with-editors/pdf-api/Events/onSelectionEnd.md) 事件。
- 为PDF API 添加了 [onSelectionCancel](../interacting-with-editors/pdf-api/Events/onSelectionCancel.md) 事件。
- 在[文本文档 API](../interacting-with-editors/document-api/Enumeration/EditorRestrictions.md)、[表单 API](../interacting-with-editors/form-api/Enumeration/EditorRestrictions.md)、[电子表格 API](../interacting-with-editors/spreadsheet-api/Enumeration/EditorRestrictions.md)、[演示文稿 API](../interacting-with-editors/presentation-api/Enumeration/EditorRestrictions.md)、[PDF API](../interacting-with-editors/pdf-api/Enumeration/EditorRestrictions.md) 的简单类型定义中添加了 `EditorRestrictions` 类型。
- 在PDF API 的简单类型定义中添加了 [CommentData](../interacting-with-editors/pdf-api/Enumeration/CommentData.md) 类型。
- 在PDF API 的简单类型定义中添加了 [comment](../interacting-with-editors/pdf-api/Enumeration/comment.md) 类型。
- 在PDF API 的简单类型定义中添加了 [Event_pt](../interacting-with-editors/pdf-api/Enumeration/Event_pt.md) 类型。

## 版本 9.4 {#version-94}

- 为文本文档 API 添加了 [MoveCursorToField](../interacting-with-editors/document-api/Methods/MoveCursorToField.md) 方法。
- 为文本文档 API 添加了 [MoveCursorOutsideField](../interacting-with-editors/document-api/Methods/MoveCursorOutsideField.md) 方法。
- 为 [StartAction](../interacting-with-editors/document-api/Methods/StartAction.md) 方法添加了 `lockScroll` 和 `keepSelection` 参数。
- 为 [EndAction](../interacting-with-editors/document-api/Methods/EndAction.md) 方法添加了 `scrollToTarget` 和 `cancel` 参数。

## 版本 9.2 {#version-92}

- 为文本文档 API 添加了 [AnnotateParagraph](../interacting-with-editors/document-api/Methods/AnnotateParagraph.md) 方法。
- 为文本文档 API 添加了 [RemoveAnnotationRange](../interacting-with-editors/document-api/Methods/RemoveAnnotationRange.md) 方法。
- 为文本文档 API 添加了 [SelectAnnotationRange](../interacting-with-editors/document-api/Methods/SelectAnnotationRange.md) 方法。
- 为文本文档 API 添加了 [onBlurAnnotation](../interacting-with-editors/document-api/Events/onBlurAnnotation.md) 事件。
- 为文本文档 API 添加了 [onClickAnnotation](../interacting-with-editors/document-api/Events/onClickAnnotation.md) 事件。
- 为文本文档 API 添加了 [onFocusAnnotation](../interacting-with-editors/document-api/Events/onFocusAnnotation.md) 事件。
- 为文本文档 API 添加了 [onParagraphText](../interacting-with-editors/document-api/Events/onParagraphText.md) 事件。
- 根据帮助中心信息更新了[为所有用户通过插件管理器添加插件](../development-workflow/installing-and-testing/docs-on-premises-installation.md)的说明。

## 版本 9.1 {#version-91}

- 为电子表格 API 添加了 [RemoveOleObject](../interacting-with-editors/spreadsheet-api/Methods/RemoveOleObject.md) 方法。
- 为演示文稿 API 添加了 [RemoveOleObject](../interacting-with-editors/presentation-api/Methods/RemoveOleObject.md) 方法。

## 版本 9.0 {#version-90}

- 添加了使用**宏**插件为电子表格添加[异步自定义函数](../../macros/guides/adding-custom-functions.md#asynchronous-functions)的功能。
- 添加了使用 AI 插件将 VBA 代码[自动转换](../../macros/guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin)为 ONLYOFFICE 宏的功能。
- 添加了使用 AI 插件[自动生成](../../macros/guides/writing-macros.md#generating-macros-using-ai-plugin) ONLYOFFICE 宏的功能。
- 添加了使用插件为内容控件添加自定义[按钮](../customization/content-control-buttons.md)的功能。
- 为文本文档 API 添加了[获取当前书签](../interacting-with-editors/document-api/Methods/GetCurrentBookmark.md)方法。
- 为演示文稿 API 添加了[前往幻灯片页面](../interacting-with-editors/presentation-api/Methods/GoToSlide.md)方法。
- 添加了[内容控件列表元素](../interacting-with-editors/document-api/Enumeration/ContentControlListElement.md)枚举。

## 版本 8.3 {#version-83}

- 添加了[获取选中内容](../interacting-with-editors/document-api/Methods/GetSelectedContent.md)方法。
- 添加了[显示错误](../interacting-with-editors/document-api/Methods/ShowError.md)方法。
- 向[内容控件属性](../interacting-with-editors/document-api/Enumeration/ContentControlProperties.md)对象添加了 `Shd` 和 `Border` 属性。
- 向[面板设置](../customization/windows-and-panels.md#creating-a-window)添加了 `isActivated` 参数。

## 版本 8.2

- 添加了表单提事件。
- 为文本文档 API 添加了判断是否可以重做方法。
- 为文本文档 API 添加了判断是否可以撤销方法。
- 为文本文档 API 添加了执行重做操作方法。
- 为文本文档 API 添加了执行撤销操作方法。

## 版本 8.1

- 添加了通过**宏插件**向电子表格中[添加自定义函数](../../macros/guides/adding-custom-functions.md)的功能。
- 添加了为插件[添加工具栏菜单项](../customization/toolbar.md)的功能。
- 添加了创建[多个左侧面板](../configuration/variations.md)的功能。
- 添加了关于插件触发上下文菜单事件时的位置的信息。
- 添加了**工具栏菜单点击**事件。
- 添加了[激活窗口](../customization/windows-and-panels.md#activating-a-window)方法。
- 添加了[添加工具栏菜单项](../customization/toolbar.md#addtoolbarmenuitem)方法。
- 添加了[获取选中的 OLE 对象](../interacting-with-editors/document-api/Methods/GetSelectedOleObjects.md)方法。
- 添加了[设置插件选项](../interacting-with-editors/document-api/Methods/SetPluginsOptions.md)方法。
- 为电子表格 API 添加了**获取所有评论**方法。
- 为电子表格 API 添加了**获取自定义函数**方法。
- 为电子表格 API 添加了**设置自定义函数**方法。
- 为演示文稿 API 添加了**获取所有评论**方法。
- 在简单类型定义中添加了 [OLE 属性](../interacting-with-editors/document-api/Enumeration/OLEProperties.md)类型。
- 在简单类型定义中添加了[插件选项](../interacting-with-editors/document-api/Enumeration/PluginOptions.md)类型。
- 在简单类型定义中添加了[工具栏菜单项](../customization/toolbar.md#toolbarmenuitem) 类型。
- 在简单类型定义中添加了[工具栏菜单主项](../customization/toolbar.md#toolbarmenumainitem)类型。
- 在简单类型定义中添加了[工具栏菜单选项卡](../customization/toolbar.md#toolbarmenutab)类型。
- 在简单类型定义中添加了[工具栏菜单项类型](../customization/toolbar.md#toolbarmenuitemtype)类型。
- 向[上下文菜单项](../interacting-with-editors/overview/asc-plugin.md#contextmenuitem)对象中添加了**图标**和**数据**参数。
- 添加了[菜单](../configuration/configuration.md#variationsmenu)配置参数。

## 版本 8.0

- 添加了搜索下一个方法。
- 添加了结束幻灯片放映方法。
- 添加了幻灯片放映中跳转到下一张幻灯片方法。
- 添加了幻灯片放映中跳转到上一张幻灯片方法。
- 添加了幻灯片放映中跳转到指定幻灯片方法。
- 添加了暂停幻灯片放映方法。
- 添加了恢复幻灯片放映方法。
- 添加了开始幻灯片放映方法。

## 版本 7.5

- 为[显示按钮](../interacting-with-editors/document-api/Methods/ShowButton.md)方法添加了**对齐**参数。

## 版本 7.4

- 在 ONLYOFFICE 桌面编辑器中添加了从 [ONLYOFFICE 插件市场](../development-workflow/installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager)下载现成插件的功能。
- 向**插件**对象添加了[发送到插件](../customization/windows-and-panels.md#interacting-with-a-window)方法。
- 添加了右键菜单点击事件。
- 添加了右键菜单显示事件。
- 添加了[添加右键菜单项](../customization/context-menu.md#creating-a-context-menu-item)方法。
- 添加了[关闭窗口](../customization/windows-and-panels.md#closing-a-window)方法。
- 添加了获取当前句子方法。
- 添加了获取当前单词方法。
- 添加了[获取文档语言](../interacting-with-editors/document-api/Methods/GetDocumentLang.md)方法。
- 添加了[鼠标移动窗口](../interacting-with-editors/document-api/Methods/MouseMoveWindow.md)方法。
- 添加了[鼠标释放窗口](../interacting-with-editors/document-api/Methods/MouseUpWindow.md)方法。
- 添加了替换当前句子方法。
- 添加了替换当前单词方法。
- 添加了[调整窗口大小](../customization/windows-and-panels.md#interacting-with-a-window)方法。
- 添加了[发送到窗口](../customization/windows-and-panels.md#interacting-with-a-window)方法。
- 添加了[显示窗口](../customization/windows-and-panels.md#showing-a-window)方法。
- 添加了[更新右键菜单项](../customization/context-menu.md#updating-a-context-menu-item)方法。
- 为[移除插件](../interacting-with-editors/document-api/Methods/RemovePlugin.md)方法添加了备份参数。
- 为[获取选中文本](../interacting-with-editors/document-api/Methods/GetSelectedText.md)方法添加了换行符分隔参数。
- 向[图像数据](../interacting-with-editors/document-api/Enumeration/ImageData.md)对象添加了替换模式参数。

## 版本 7.3

- 向[初始化数据类型](../configuration/configuration.md#variationsinitdatatype)配置参数添加了签名类型。
- 添加了添加加载项字段方法。
- 添加了获取所有加载项字段方法。
- 添加了[获取 VBA 宏](../interacting-with-editors/document-api/Methods/GetVBAMacros.md)方法。
- 添加了[拖放事件](../interacting-with-editors/document-api/Methods/OnDropEvent.md)方法。
- 添加了移除字段包装器方法。
- 添加了设置编辑限制方法。
- 添加了更新加载项字段方法。
- 添加了电子表格 API 的编辑器方法。
- 添加了演示文稿 API 的编辑器方法。

## 版本 7.2

- 添加了**添加评论事件**。
- 添加了**更改评论数据事件**。
- 添加了**移除评论事件**。
- 添加了接受修订更改方法。
- 添加了跳转到下一个修订更改方法。
- 添加了拒绝修订更改方法。
- 更改了插件的[本地化](../configuration/localization.md)方案。
- 添加了 [ONLYOFFICE 插件市场](../development-workflow/installing-and-testing/docs-on-premises-installation.md#adding-plugins-through-the-plugin-manager-for-a-single-user)。
- 添加了更改 OLE 对象方法。
- 添加了获取所有表单方法。
- 添加了[获取下载文件](../interacting-with-editors/document-api/Methods/GetFileToDownload.md)方法。
- 添加了通过标签获取表单方法。
- 添加了获取表单值方法。
- 添加了[从选区获取图像数据](../interacting-with-editors/document-api/Methods/GetImageDataFromSelection.md)方法。
- 添加了[获取已安装插件](../interacting-with-editors/document-api/Methods/GetInstalledPlugins.md)方法。
- 添加了[安装插件](../interacting-with-editors/document-api/Methods/InstallPlugin.md)方法。
- 添加了[将图像数据插入选区](../interacting-with-editors/document-api/Methods/PutImageDataToSelection.md)方法。
- 添加了[移除插件](../interacting-with-editors/document-api/Methods/RemovePlugin.md)方法。
- 添加了设置表单值方法。
- 添加了[显示按钮](../interacting-with-editors/document-api/Methods/ShowButton.md)方法。
- 添加了[更新插件](../interacting-with-editors/document-api/Methods/UpdatePlugin.md)方法。
- 添加了**失去焦点事件**。
- 添加了**内容控件变更事件**。
- 添加了**获得焦点事件**。
