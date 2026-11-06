---
sidebar_position: -1
---

# 更新日志

ONLYOFFICE 插件与宏 API 的变更列表。

## 版本 10.0 {#version-100}

- 为插件 API 添加了全局 [Editor](../interacting-with-editors/overview/how-to-call-methods.md#editor-object) 对象。现在可以像调用普通函数一样调用编辑器方法，并返回 Promise，例如 `await Editor.GetSelectedText()`，无需再通过 `window.Asc.plugin.executeMethod` 调用。仍支持将回调函数作为最后一个参数传入。
- 添加了 [Editor.RunMacro](../interacting-with-editors/overview/how-to-call-commands.md#editorrunmacro) 方法，该方法使用编辑器 API 运行函数，向其传递参数，并以 Promise 的形式返回结果。
- 将 [Document API](../interacting-with-editors/document-api/Methods/IsFillingForm.md) 和 [Form API](../interacting-with-editors/form-api/Methods/IsFillingForm.md) 的 `IsFillingFormMode` 方法重命名为 `IsFillingForm`。旧名称仍然可用。
- 将 [Document API](../interacting-with-editors/document-api/Methods/IsFillingPdfForm.md) 和 [Form API](../interacting-with-editors/form-api/Methods/IsFillingPdfForm.md) 的 `IsFillingOFormMode` 方法重命名为 `IsFillingPdfForm`。旧名称仍然可用。
- 将 [Document API](../interacting-with-editors/document-api/Methods/IsEditingPdfForm.md) 和 [Form API](../interacting-with-editors/form-api/Methods/IsEditingPdfForm.md) 的 `IsEditingOFormMode` 方法重命名为 `IsEditingPdfForm`。旧名称仍然可用。
- 为 [Document API](../interacting-with-editors/document-api/Methods/GetRestrictions.md)、[Form API](../interacting-with-editors/form-api/Methods/GetRestrictions.md)、[Spreadsheet API](../interacting-with-editors/spreadsheet-api/Methods/GetRestrictions.md)、[Presentation API](../interacting-with-editors/presentation-api/Methods/GetRestrictions.md)、[PDF API](../interacting-with-editors/pdf-api/Methods/GetRestrictions.md) 添加了 `GetRestrictions` 方法。
- 为 [Document API](../interacting-with-editors/document-api/Methods/SetButtonDisabled.md)、[Spreadsheet API](../interacting-with-editors/spreadsheet-api/Methods/SetButtonDisabled.md)、[Presentation API](../interacting-with-editors/presentation-api/Methods/SetButtonDisabled.md) 添加了 `SetButtonDisabled` 方法。
- 为 [Document API](../interacting-with-editors/document-api/Methods/GetOFormRole.md)、[Form API](../interacting-with-editors/form-api/Methods/GetOFormRole.md) 添加了 `GetOFormRole` 方法。
- 为 Document API 添加了 [MoveCursorToAnnotationRange](../interacting-with-editors/document-api/Methods/MoveCursorToAnnotationRange.md) 方法。
- 为 Document API 添加了 [SetRangeHtml](../interacting-with-editors/document-api/Methods/SetRangeHtml.md) 方法。
- 为 Presentation API 添加了 [InsertPresentationFromUrl](../interacting-with-editors/presentation-api/Methods/InsertPresentationFromUrl.md) 方法。
- 为 Presentation API 添加了 [SetParagraphHtml](../interacting-with-editors/presentation-api/Methods/SetParagraphHtml.md) 方法。
- 为 Presentation API 添加了 [SetParagraphRangeHtml](../interacting-with-editors/presentation-api/Methods/SetParagraphRangeHtml.md) 方法。
- 为 Presentation API 添加了 [AnnotateParagraph](../interacting-with-editors/presentation-api/Methods/AnnotateParagraph.md) 方法。
- 为 Presentation API 添加了 [SelectAnnotationRange](../interacting-with-editors/presentation-api/Methods/SelectAnnotationRange.md) 方法。
- 为 Presentation API 添加了 [RemoveAnnotationRange](../interacting-with-editors/presentation-api/Methods/RemoveAnnotationRange.md) 方法。
- 为 [Document API](../interacting-with-editors/document-api/Events/onFloatActionButtonClick.md)、[Form API](../interacting-with-editors/form-api/Events/onFloatActionButtonClick.md)、[Spreadsheet API](../interacting-with-editors/spreadsheet-api/Events/onFloatActionButtonClick.md)、[Presentation API](../interacting-with-editors/presentation-api/Events/onFloatActionButtonClick.md)、[PDF API](../interacting-with-editors/pdf-api/Events/onFloatActionButtonClick.md) 添加了 `onFloatActionButtonClick` 事件。
- 为 PDF API 添加了 [onSelectionEnd](../interacting-with-editors/pdf-api/Events/onSelectionEnd.md) 事件。
- 为 PDF API 添加了 [onSelectionCancel](../interacting-with-editors/pdf-api/Events/onSelectionCancel.md) 事件。
- 在 [Document API](../interacting-with-editors/document-api/Enumeration/EditorRestrictions.md)、[Form API](../interacting-with-editors/form-api/Enumeration/EditorRestrictions.md)、[Spreadsheet API](../interacting-with-editors/spreadsheet-api/Enumeration/EditorRestrictions.md)、[Presentation API](../interacting-with-editors/presentation-api/Enumeration/EditorRestrictions.md)、[PDF API](../interacting-with-editors/pdf-api/Enumeration/EditorRestrictions.md) 的简单类型定义中添加了 `EditorRestrictions` 类型。
- 在 PDF API 的简单类型定义中添加了 [CommentData](../interacting-with-editors/pdf-api/Enumeration/CommentData.md) 类型。
- 在 PDF API 的简单类型定义中添加了 [comment](../interacting-with-editors/pdf-api/Enumeration/comment.md) 类型。
- 在 PDF API 的简单类型定义中添加了 [Event_pt](../interacting-with-editors/pdf-api/Enumeration/Event_pt.md) 类型。

## 版本 9.4 {#version-94}

- 为 Document API 添加了 [MoveCursorToField](../interacting-with-editors/document-api/Methods/MoveCursorToField.md) 方法。
- 为 Document API 添加了 [MoveCursorOutsideField](../interacting-with-editors/document-api/Methods/MoveCursorOutsideField.md) 方法。
- 为 [StartAction](../interacting-with-editors/document-api/Methods/StartAction.md) 方法添加了 `lockScroll` 和 `keepSelection` 参数。
- 为 [EndAction](../interacting-with-editors/document-api/Methods/EndAction.md) 方法添加了 `scrollToTarget` 和 `cancel` 参数。

## 版本 9.3 {#version-93}

- 为 Document API 添加了 [SelectAddinField](../interacting-with-editors/document-api/Methods/SelectAddinField.md) 方法。
- 为 Document API 添加了 [RemoveAddinField](../interacting-with-editors/document-api/Methods/RemoveAddinField.md) 方法。
- 为 Document API 添加了 [GetCurrentAddinField](../interacting-with-editors/document-api/Methods/GetCurrentAddinField.md) 方法。
- 为 Document API 添加了 [IsFormSigned](../interacting-with-editors/document-api/Methods/IsFormSigned.md) 方法。
- 为 PDF API 添加了 [CoAuthoringChatSendMessage](../interacting-with-editors/pdf-api/Methods/CoAuthoringChatSendMessage.md) 方法。
- 为 PDF API 添加了 [EndAction](../interacting-with-editors/pdf-api/Methods/EndAction.md) 方法。
- 为 PDF API 添加了 [FocusEditor](../interacting-with-editors/pdf-api/Methods/FocusEditor.md) 方法。
- 为 PDF API 添加了 [GetAllComments](../interacting-with-editors/pdf-api/Methods/GetAllComments.md) 方法。
- 为 PDF API 添加了 [GetCurrentPage](../interacting-with-editors/pdf-api/Methods/GetCurrentPage.md) 方法。
- 为 PDF API 添加了 [GetFileToDownload](../interacting-with-editors/pdf-api/Methods/GetFileToDownload.md) 方法。
- 为 PDF API 添加了 [GetFontList](../interacting-with-editors/pdf-api/Methods/GetFontList.md) 方法。
- 为 PDF API 添加了 [GetInstalledPlugins](../interacting-with-editors/pdf-api/Methods/GetInstalledPlugins.md) 方法。
- 为 PDF API 添加了 [GetMacros](../interacting-with-editors/pdf-api/Methods/GetMacros.md) 方法。
- 为 PDF API 添加了 [GetPageImage](../interacting-with-editors/pdf-api/Methods/GetPageImage.md) 方法。
- 为 PDF API 添加了 [GetSelectedText](../interacting-with-editors/pdf-api/Methods/GetSelectedText.md) 方法。
- 为 PDF API 添加了 [GetVersion](../interacting-with-editors/pdf-api/Methods/GetVersion.md) 方法。
- 为 PDF API 添加了 [InstallPlugin](../interacting-with-editors/pdf-api/Methods/InstallPlugin.md) 方法。
- 为 PDF API 添加了 [MouseMoveWindow](../interacting-with-editors/pdf-api/Methods/MouseMoveWindow.md) 方法。
- 为 PDF API 添加了 [MouseUpWindow](../interacting-with-editors/pdf-api/Methods/MouseUpWindow.md) 方法。
- 为 PDF API 添加了 [OnDropEvent](../interacting-with-editors/pdf-api/Methods/OnDropEvent.md) 方法。
- 为 PDF API 添加了 [PasteHtml](../interacting-with-editors/pdf-api/Methods/PasteHtml.md) 方法。
- 为 PDF API 添加了 [PasteText](../interacting-with-editors/pdf-api/Methods/PasteText.md) 方法。
- 为 PDF API 添加了 [RemovePlugin](../interacting-with-editors/pdf-api/Methods/RemovePlugin.md) 方法。
- 为 PDF API 添加了 [ReplacePageContent](../interacting-with-editors/pdf-api/Methods/ReplacePageContent.md) 方法。
- 为 PDF API 添加了 [SetMacros](../interacting-with-editors/pdf-api/Methods/SetMacros.md) 方法。
- 为 PDF API 添加了 [SetPluginsOptions](../interacting-with-editors/pdf-api/Methods/SetPluginsOptions.md) 方法。
- 为 PDF API 添加了 [SetProperties](../interacting-with-editors/pdf-api/Methods/SetProperties.md) 方法。
- 为 PDF API 添加了 [ShowButton](../interacting-with-editors/pdf-api/Methods/ShowButton.md) 方法。
- 为 PDF API 添加了 [ShowError](../interacting-with-editors/pdf-api/Methods/ShowError.md) 方法。
- 为 PDF API 添加了 [ShowInputHelper](../interacting-with-editors/pdf-api/Methods/ShowInputHelper.md) 方法。
- 为 PDF API 添加了 [StartAction](../interacting-with-editors/pdf-api/Methods/StartAction.md) 方法。
- 为 PDF API 添加了 [UnShowInputHelper](../interacting-with-editors/pdf-api/Methods/UnShowInputHelper.md) 方法。
- 为 PDF API 添加了 [UpdatePlugin](../interacting-with-editors/pdf-api/Methods/UpdatePlugin.md) 方法。

## 版本 9.2 {#version-92}

- 为 Document API 添加了 [AnnotateParagraph](../interacting-with-editors/document-api/Methods/AnnotateParagraph.md) 方法。
- 为 Document API 添加了 [RemoveAnnotationRange](../interacting-with-editors/document-api/Methods/RemoveAnnotationRange.md) 方法。
- 为 Document API 添加了 [SelectAnnotationRange](../interacting-with-editors/document-api/Methods/SelectAnnotationRange.md) 方法。
- 为 Document API 添加了 [onBlurAnnotation](../interacting-with-editors/document-api/Events/onBlurAnnotation.md) 事件。
- 为 Document API 添加了 [onClickAnnotation](../interacting-with-editors/document-api/Events/onClickAnnotation.md) 事件。
- 为 Document API 添加了 [onFocusAnnotation](../interacting-with-editors/document-api/Events/onFocusAnnotation.md) 事件。
- 为 Document API 添加了 [onParagraphText](../interacting-with-editors/document-api/Events/onParagraphText.md) 事件。
- 根据帮助中心信息更新了[为所有用户通过插件管理器添加插件](../development-workflow/installing-and-testing/docs-on-premises-installation.md)的说明。

## 版本 9.1 {#version-91}

- 为 Spreadsheet API 添加了 [RemoveOleObject](../interacting-with-editors/spreadsheet-api/Methods/RemoveOleObject.md) 方法。
- 为 Presentation API 添加了 [RemoveOleObject](../interacting-with-editors/presentation-api/Methods/RemoveOleObject.md) 方法。

## 版本 9.0 {#version-90}

- 添加了在自定义函数中访问[单元格地址信息](../../macros/guides/adding-custom-functions.md#accessing-cell-addresses)的功能。
- 添加了使用**宏**插件为电子表格添加[异步自定义函数](../../macros/guides/adding-custom-functions.md#asynchronous-functions)的功能。
- 添加了使用 AI 插件将 VBA 代码[自动转换](../../macros/guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin)为 ONLYOFFICE 宏的功能。
- 添加了使用 AI 插件[自动生成](../../macros/guides/writing-macros.md#generating-macros-using-ai-plugin) ONLYOFFICE 宏的功能。
- 添加了使用插件为内容控件添加自定义[按钮](../customization/content-control-buttons.md)的功能。
- 为 Document API 添加了 [GetCurrentBookmark](../interacting-with-editors/document-api/Methods/GetCurrentBookmark.md) 方法。
- 为 Presentation API 添加了 [GoToSlide](../interacting-with-editors/presentation-api/Methods/GoToSlide.md) 方法。
- 添加了 [ContentControlListElement](../interacting-with-editors/document-api/Enumeration/ContentControlListElement.md) 枚举。

## 版本 8.3 {#version-83}

- 添加了 [GetSelectedContent](../interacting-with-editors/document-api/Methods/GetSelectedContent.md) 方法。
- 添加了 [ShowError](../interacting-with-editors/document-api/Methods/ShowError.md) 方法。
- 向 [ContentControlProperties](../interacting-with-editors/document-api/Enumeration/ContentControlProperties.md) 对象添加了 `Shd` 和 `Border` 属性。
- 向[面板设置](../customization/windows-and-panels.md#creating-a-window)添加了 `isActivated` 参数。

## 版本 8.2

- 添加了 [onSubmitForm](../interacting-with-editors/form-api/Events/onSubmitForm.md) 事件。
- 为 Document API 添加了 [CanRedo](../interacting-with-editors/document-api/Methods/CanRedo.md) 方法。
- 为 Document API 添加了 [CanUndo](../interacting-with-editors/document-api/Methods/CanUndo.md) 方法。
- 为 Document API 添加了 [Redo](../interacting-with-editors/document-api/Methods/Redo.md) 方法。
- 为 Document API 添加了 [Undo](../interacting-with-editors/document-api/Methods/Undo.md) 方法。

## 版本 8.1

- 添加了通过**宏插件**向电子表格中[添加自定义函数](../../macros/guides/adding-custom-functions.md)的功能。
- 添加了为插件[添加工具栏菜单项](../customization/toolbar.md)的功能。
- 添加了创建[多个左侧面板](../configuration/variations.md)的功能。
- 添加了关于插件触发上下文菜单事件时的位置的信息。
- 添加了 `onToolbarMenuClick` 事件。
- 添加了[激活窗口](../customization/windows-and-panels.md#activating-a-window)方法。
- 添加了[添加工具栏菜单项](../customization/toolbar.md#addtoolbarmenuitem)方法。
- 添加了 [GetSelectedOleObjects](../interacting-with-editors/document-api/Methods/GetSelectedOleObjects.md) 方法。
- 添加了 [SetPluginsOptions](../interacting-with-editors/document-api/Methods/SetPluginsOptions.md) 方法。
- 为 Spreadsheet API 添加了 [GetAllComments](../interacting-with-editors/spreadsheet-api/Methods/GetAllComments.md) 方法。
- 为 Spreadsheet API 添加了 [GetCustomFunctions](../interacting-with-editors/spreadsheet-api/Methods/GetCustomFunctions.md) 方法。
- 为 Spreadsheet API 添加了 [SetCustomFunctions](../interacting-with-editors/spreadsheet-api/Methods/SetCustomFunctions.md) 方法。
- 为 Presentation API 添加了 [GetAllComments](../interacting-with-editors/presentation-api/Methods/GetAllComments.md) 方法。
- 在简单类型定义中添加了 [OLEProperties](../interacting-with-editors/document-api/Enumeration/OLEProperties.md) 类型。
- 在简单类型定义中添加了 [PluginOptions](../interacting-with-editors/document-api/Enumeration/PluginOptions.md) 类型。
- 在简单类型定义中添加了[工具栏菜单项](../customization/toolbar.md#toolbarmenuitem)类型。
- 在简单类型定义中添加了[工具栏菜单主项](../customization/toolbar.md#toolbarmenumainitem)类型。
- 在简单类型定义中添加了[工具栏菜单选项卡](../customization/toolbar.md#toolbarmenutab)类型。
- 在简单类型定义中添加了[工具栏菜单项类型](../customization/toolbar.md#toolbarmenuitemtype)类型。
- 向 [ContextMenuItem](../interacting-with-editors/overview/asc-plugin.md#contextmenuitem) 对象中添加了 `icons` 和 `data` 参数。
- 添加了[菜单](../configuration/configuration.md#variationsmenu)配置参数。

## 版本 8.0

- 添加了 [SearchNext](../interacting-with-editors/document-api/Methods/SearchNext.md) 方法。
- 添加了 [EndSlideShow](../interacting-with-editors/presentation-api/Methods/EndSlideShow.md) 方法。
- 添加了 [GoToNextSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToNextSlideInSlideShow.md) 方法。
- 添加了 [GoToPreviousSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToPreviousSlideInSlideShow.md) 方法。
- 添加了 [GoToSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToSlideInSlideShow.md) 方法。
- 添加了 [PauseSlideShow](../interacting-with-editors/presentation-api/Methods/PauseSlideShow.md) 方法。
- 添加了 [ResumeSlideShow](../interacting-with-editors/presentation-api/Methods/ResumeSlideShow.md) 方法。
- 添加了 [StartSlideShow](../interacting-with-editors/presentation-api/Methods/StartSlideShow.md) 方法。

## 版本 7.5

- 为 [ShowButton](../interacting-with-editors/document-api/Methods/ShowButton.md) 方法添加了 `align` 参数。

## 版本 7.4

- 在 ONLYOFFICE 桌面编辑器中添加了从 [ONLYOFFICE 插件市场](../development-workflow/installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager)下载现成插件的功能。
- 向 `Plugin` 对象添加了 [sendToPlugin](../customization/windows-and-panels.md#interacting-with-a-window) 方法。
- 添加了 [onContextMenuClick](../customization/context-menu.md#clicking-a-context-menu-item) 事件。
- 添加了 [onContextMenuShow](../customization/context-menu.md#creating-a-context-menu-item) 事件。
- 添加了[添加右键菜单项](../customization/context-menu.md#creating-a-context-menu-item)方法。
- 添加了[关闭窗口](../customization/windows-and-panels.md#closing-a-window)方法。
- 添加了 [GetCurrentSentence](../interacting-with-editors/document-api/Methods/GetCurrentSentence.md) 方法。
- 添加了 [GetCurrentWord](../interacting-with-editors/document-api/Methods/GetCurrentWord.md) 方法。
- 添加了 [GetDocumentLang](../interacting-with-editors/document-api/Methods/GetDocumentLang.md) 方法。
- 添加了 [MouseMoveWindow](../interacting-with-editors/document-api/Methods/MouseMoveWindow.md) 方法。
- 添加了 [MouseUpWindow](../interacting-with-editors/document-api/Methods/MouseUpWindow.md) 方法。
- 添加了 [ReplaceCurrentSentence](../interacting-with-editors/document-api/Methods/ReplaceCurrentSentence.md) 方法。
- 添加了 [ReplaceCurrentWord](../interacting-with-editors/document-api/Methods/ReplaceCurrentWord.md) 方法。
- 添加了[调整窗口大小](../customization/windows-and-panels.md#interacting-with-a-window)方法。
- 添加了[发送到窗口](../customization/windows-and-panels.md#interacting-with-a-window)方法。
- 添加了[显示窗口](../customization/windows-and-panels.md#showing-a-window)方法。
- 添加了[更新右键菜单项](../customization/context-menu.md#updating-a-context-menu-item)方法。
- 为 [RemovePlugin](../interacting-with-editors/document-api/Methods/RemovePlugin.md) 方法添加了 `backup` 参数。
- 为 [GetSelectedText](../interacting-with-editors/document-api/Methods/GetSelectedText.md) 方法添加了 `NewLineSeparator` 参数。
- 向 [ImageData](../interacting-with-editors/document-api/Enumeration/ImageData.md) 对象添加了 `replaceMode` 参数。

## 版本 7.3

- 向 [initDataType](../configuration/configuration.md#variationsinitdatatype) 配置参数添加了 `sign` 类型。
- 添加了 [AddAddinField](../interacting-with-editors/document-api/Methods/AddAddinField.md) 方法。
- 添加了 [GetAllAddinFields](../interacting-with-editors/document-api/Methods/GetAllAddinFields.md) 方法。
- 添加了 [GetVBAMacros](../interacting-with-editors/document-api/Methods/GetVBAMacros.md) 方法。
- 添加了 [OnDropEvent](../interacting-with-editors/document-api/Methods/OnDropEvent.md) 方法。
- 添加了 [RemoveFieldWrapper](../interacting-with-editors/document-api/Methods/RemoveFieldWrapper.md) 方法。
- 添加了 [SetEditingRestrictions](../interacting-with-editors/document-api/Methods/SetEditingRestrictions.md) 方法。
- 添加了 [UpdateAddinFields](../interacting-with-editors/document-api/Methods/UpdateAddinFields.md) 方法。
- 添加了 Spreadsheet API 的编辑器方法。
- 添加了 Presentation API 的编辑器方法。

## 版本 7.2

- 添加了 [onAddComment](../interacting-with-editors/document-api/Events/onAddComment.md) 事件。
- 添加了 [onChangeCommentData](../interacting-with-editors/document-api/Events/onChangeCommentData.md) 事件。
- 添加了 [onRemoveComment](../interacting-with-editors/document-api/Events/onRemoveComment.md) 事件。
- 添加了 [AcceptReviewChanges](../interacting-with-editors/document-api/Methods/AcceptReviewChanges.md) 方法。
- 添加了 [MoveToNextReviewChange](../interacting-with-editors/document-api/Methods/MoveToNextReviewChange.md) 方法。
- 添加了 [RejectReviewChanges](../interacting-with-editors/document-api/Methods/RejectReviewChanges.md) 方法。
- 更改了插件的[本地化](../configuration/localization.md)方案。
- 添加了 [ONLYOFFICE 插件市场](../development-workflow/installing-and-testing/docs-on-premises-installation.md#adding-plugins-through-the-plugin-manager-for-a-single-user)。
- 添加了 [ChangeOleObject](../interacting-with-editors/document-api/Methods/ChangeOleObject.md) 方法。
- 添加了 [GetAllForms](../interacting-with-editors/document-api/Methods/GetAllForms.md) 方法。
- 添加了 [GetFileToDownload](../interacting-with-editors/document-api/Methods/GetFileToDownload.md) 方法。
- 添加了 [GetFormsByTag](../interacting-with-editors/document-api/Methods/GetFormsByTag.md) 方法。
- 添加了 [GetFormValue](../interacting-with-editors/form-api/Methods/GetFormValue.md) 方法。
- 添加了 [GetImageDataFromSelection](../interacting-with-editors/document-api/Methods/GetImageDataFromSelection.md) 方法。
- 添加了 [GetInstalledPlugins](../interacting-with-editors/document-api/Methods/GetInstalledPlugins.md) 方法。
- 添加了 [InstallPlugin](../interacting-with-editors/document-api/Methods/InstallPlugin.md) 方法。
- 添加了 [PutImageDataToSelection](../interacting-with-editors/document-api/Methods/PutImageDataToSelection.md) 方法。
- 添加了 [RemovePlugin](../interacting-with-editors/document-api/Methods/RemovePlugin.md) 方法。
- 添加了 [SetFormValue](../interacting-with-editors/form-api/Methods/SetFormValue.md) 方法。
- 添加了 [ShowButton](../interacting-with-editors/document-api/Methods/ShowButton.md) 方法。
- 添加了 [UpdatePlugin](../interacting-with-editors/document-api/Methods/UpdatePlugin.md) 方法。
- 添加了 [onBlurContentControl](../interacting-with-editors/document-api/Events/onBlurContentControl.md) 事件。
- 添加了 [onChangeContentControl](../interacting-with-editors/document-api/Events/onChangeContentControl.md) 事件。
- 添加了 [onFocusContentControl](../interacting-with-editors/document-api/Events/onFocusContentControl.md) 事件。
