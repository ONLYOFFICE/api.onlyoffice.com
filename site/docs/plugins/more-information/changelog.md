---
sidebar_position: -1
---

# Changelog

The list of changes for ONLYOFFICE Plugins and Macros API.

## Version 9.4

- Added the [MoveCursorToField](../interacting-with-editors/document-api/Methods/MoveCursorToField.md) method for Document API.
- Added the [MoveCursorOutsideField](../interacting-with-editors/document-api/Methods/MoveCursorOutsideField.md) method for Document API.
- Added the `lockScroll` and `keepSelection` parameters to the [StartAction](../interacting-with-editors/document-api/Methods/StartAction.md) method.
- Added the `scrollToTarget` and `cancel` parameters to the [EndAction](../interacting-with-editors/document-api/Methods/EndAction.md) method.

## Version 9.3

- Added the [SelectAddinField](../interacting-with-editors/document-api/Methods/SelectAddinField.md) method for Document API.
- Added the [RemoveAddinField](../interacting-with-editors/document-api/Methods/RemoveAddinField.md) method for Document API.
- Added the [GetCurrentAddinField](../interacting-with-editors/document-api/Methods/GetCurrentAddinField.md) method for Document API.
- Added the [IsFormSigned](../interacting-with-editors/document-api/Methods/IsFormSigned.md) method for Document API.
- Added the [CoAuthoringChatSendMessage](../interacting-with-editors/pdf-api/Methods/CoAuthoringChatSendMessage.md) method for PDF API.
- Added the [EndAction](../interacting-with-editors/pdf-api/Methods/EndAction.md) method for PDF API.
- Added the [FocusEditor](../interacting-with-editors/pdf-api/Methods/FocusEditor.md) method for PDF API.
- Added the [GetAllComments](../interacting-with-editors/pdf-api/Methods/GetAllComments.md) method for PDF API.
- Added the [GetCurrentPage](../interacting-with-editors/pdf-api/Methods/GetCurrentPage.md) method for PDF API.
- Added the [GetFileToDownload](../interacting-with-editors/pdf-api/Methods/GetFileToDownload.md) method for PDF API.
- Added the [GetFontList](../interacting-with-editors/pdf-api/Methods/GetFontList.md) method for PDF API.
- Added the [GetInstalledPlugins](../interacting-with-editors/pdf-api/Methods/GetInstalledPlugins.md) method for PDF API.
- Added the [GetMacros](../interacting-with-editors/pdf-api/Methods/GetMacros.md) method for PDF API.
- Added the [GetPageImage](../interacting-with-editors/pdf-api/Methods/GetPageImage.md) method for PDF API.
- Added the [GetSelectedText](../interacting-with-editors/pdf-api/Methods/GetSelectedText.md) method for PDF API.
- Added the [GetVersion](../interacting-with-editors/pdf-api/Methods/GetVersion.md) method for PDF API.
- Added the [InstallPlugin](../interacting-with-editors/pdf-api/Methods/InstallPlugin.md) method for PDF API.
- Added the [MouseMoveWindow](../interacting-with-editors/pdf-api/Methods/MouseMoveWindow.md) method for PDF API.
- Added the [MouseUpWindow](../interacting-with-editors/pdf-api/Methods/MouseUpWindow.md) method for PDF API.
- Added the [OnDropEvent](../interacting-with-editors/pdf-api/Methods/OnDropEvent.md) method for PDF API.
- Added the [PasteHtml](../interacting-with-editors/pdf-api/Methods/PasteHtml.md) method for PDF API.
- Added the [PasteText](../interacting-with-editors/pdf-api/Methods/PasteText.md) method for PDF API.
- Added the [RemovePlugin](../interacting-with-editors/pdf-api/Methods/RemovePlugin.md) method for PDF API.
- Added the [ReplacePageContent](../interacting-with-editors/pdf-api/Methods/ReplacePageContent.md) method for PDF API.
- Added the [SetMacros](../interacting-with-editors/pdf-api/Methods/SetMacros.md) method for PDF API.
- Added the [SetPluginsOptions](../interacting-with-editors/pdf-api/Methods/SetPluginsOptions.md) method for PDF API.
- Added the [SetProperties](../interacting-with-editors/pdf-api/Methods/SetProperties.md) method for PDF API.
- Added the [ShowButton](../interacting-with-editors/pdf-api/Methods/ShowButton.md) method for PDF API.
- Added the [ShowError](../interacting-with-editors/pdf-api/Methods/ShowError.md) method for PDF API.
- Added the [ShowInputHelper](../interacting-with-editors/pdf-api/Methods/ShowInputHelper.md) method for PDF API.
- Added the [StartAction](../interacting-with-editors/pdf-api/Methods/StartAction.md) method for PDF API.
- Added the [UnShowInputHelper](../interacting-with-editors/pdf-api/Methods/UnShowInputHelper.md) method for PDF API.
- Added the [UpdatePlugin](../interacting-with-editors/pdf-api/Methods/UpdatePlugin.md) method for PDF API.

## Version 9.2

- Added the [AnnotateParagraph](../interacting-with-editors/document-api/Methods/AnnotateParagraph.md) method for Document API.
- Added the [RemoveAnnotationRange](../interacting-with-editors/document-api/Methods/RemoveAnnotationRange.md) method for Document API.
- Added the [SelectAnnotationRange](../interacting-with-editors/document-api/Methods/SelectAnnotationRange.md) method for Document API.
- Added the [onBlurAnnotation](../interacting-with-editors/document-api/Events/onBlurAnnotation.md) event for Document API.
- Added the [onClickAnnotation](../interacting-with-editors/document-api/Events/onClickAnnotation.md) event for Document API.
- Added the [onFocusAnnotation](../interacting-with-editors/document-api/Events/onFocusAnnotation.md) event for Document API.
- Added the [onParagraphText](../interacting-with-editors/document-api/Events/onParagraphText.md) event for Document API.
- Updated [Adding plugins through the plugin manager for all users](../development-workflow/installing-and-testing/docs-on-premises-installation.md) instruction according Help center info.

## Version 9.1

- Added the [RemoveOleObject](../interacting-with-editors/spreadsheet-api/Methods/RemoveOleObject.md) method for Spreadsheet API.
- Added the [RemoveOleObject](../interacting-with-editors/presentation-api/Methods/RemoveOleObject.md) method for Presentation API.

## Version 9.0

- Added the ability to access [cell address information](../../macros/guides/adding-custom-functions.md#accessing-cell-addresses) inside custom functions.
- Added the ability to add [asynchronous custom functions](../../macros/guides/adding-custom-functions.md#asynchronous-functions) to the spreadsheets using the **Macros** plugin.
- Added the ability to [automatically convert](../../macros/guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin) VBA code into ONLYOFFICE macros using AI plugin.
- Added the ability to [automatically generate](../../macros/guides/writing-macros.md#generating-macros-using-ai-plugin) ONLYOFFICE macros using AI plugin.
- Added the ability to add custom [buttons to content controls](../customization/content-control-buttons.md) using a plugin.
- Added the [GetCurrentBookmark](../interacting-with-editors/document-api/Methods/GetCurrentBookmark.md) method for Document API.
- Added the [GoToSlide](../interacting-with-editors/presentation-api/Methods/GoToSlide.md) method for Presentation API.
- Added the [ContentControlListElement](../interacting-with-editors/document-api/Enumeration/ContentControlListElement.md) enumeration.

## Version 8.3

- Added the [GetSelectedContent](../interacting-with-editors/document-api/Methods/GetSelectedContent.md) method.
- Added the [ShowError](../interacting-with-editors/document-api/Methods/ShowError.md) method.
- Added the `Shd` and `Border` properties to the [ContentControlProperties](../interacting-with-editors/document-api/Enumeration/ContentControlProperties.md) object.
- Added the `isActivated` parameter to the [panel settings](../customization/windows-and-panels.md#creating-a-window).

## Version 8.2

- Added the [onSubmitForm](../interacting-with-editors/form-api/Events/onSubmitForm.md) event.
- Added the [CanRedo](../interacting-with-editors/document-api/Methods/CanRedo.md) method for Document API.
- Added the [CanUndo](../interacting-with-editors/document-api/Methods/CanUndo.md) method for Document API.
- Added the [Redo](../interacting-with-editors/document-api/Methods/Redo.md) method for Document API.
- Added the [Undo](../interacting-with-editors/document-api/Methods/Undo.md) method for Document API.

## Version 8.1

- Added the ability to [add custom functions](../../macros/guides/adding-custom-functions.md) to the spreadsheets using the **Macros** plugin.
- Added the ability to add the plugin [toolbar menu items](../customization/toolbar.md).
- Added the ability to create [multiple left panels](../configuration/variations.md) for plugins.
- Added the information about the current position of the context menu plugin event.
- Added the onToolbarMenuClick event.
- Added the [ActivateWindow](../customization/windows-and-panels.md#activating-a-window) method.
- Added the [AddToolbarMenuItem](../customization/toolbar.md#addtoolbarmenuitem) method.
- Added the [GetSelectedOleObjects](../interacting-with-editors/document-api/Methods/GetSelectedOleObjects.md) method.
- Added the [SetPluginsOptions](../interacting-with-editors/document-api/Methods/SetPluginsOptions.md) method.
- Added the [GetAllComments](../interacting-with-editors/spreadsheet-api/Methods/GetAllComments.md) method for Spreadsheet API.
- Added the [GetCustomFunctions](../interacting-with-editors/spreadsheet-api/Methods/GetCustomFunctions.md) method for Spreadsheet API.
- Added the [SetCustomFunctions](../interacting-with-editors/spreadsheet-api/Methods/SetCustomFunctions.md) method for Spreadsheet API.
- Added the [GetAllComments](../interacting-with-editors/presentation-api/Methods/GetAllComments.md) method for Presentation API.
- Added the [OLEProperties](../interacting-with-editors/document-api/Enumeration/OLEProperties.md) type to the simple type definitions.
- Added the [PluginOptions](../interacting-with-editors/document-api/Enumeration/PluginOptions.md) type to the simple type definitions.
- Added the [ToolbarMenuItem](../customization/toolbar.md#toolbarmenuitem) type to the simple type definitions.
- Added the [ToolbarMenuMainItem](../customization/toolbar.md#toolbarmenumainitem) type to the simple type definitions.
- Added the [ToolbarMenuTab](../customization/toolbar.md#toolbarmenutab) type to the simple type definitions.
- Added the [ToolbarMenuItemType](../customization/toolbar.md#toolbarmenuitemtype) type to the simple type definitions.
- Added the `icons` and `data` parameters to the [ContextMenuItem](../interacting-with-editors/overview/asc-plugin.md#contextmenuitem) object.
- Added the [menu](../configuration/configuration.md#variationsmenu) config parameter.

## Version 8.0

- Added the [SearchNext](../interacting-with-editors/document-api/Methods/SearchNext.md) method.
- Added the [EndSlideShow](../interacting-with-editors/presentation-api/Methods/EndSlideShow.md) method.
- Added the [GoToNextSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToNextSlideInSlideShow.md) method.
- Added the [GoToPreviousSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToPreviousSlideInSlideShow.md) method.
- Added the [GoToSlideInSlideShow](../interacting-with-editors/presentation-api/Methods/GoToSlideInSlideShow.md) method.
- Added the [PauseSlideShow](../interacting-with-editors/presentation-api/Methods/PauseSlideShow.md) method.
- Added the [ResumeSlideShow](../interacting-with-editors/presentation-api/Methods/ResumeSlideShow.md) method.
- Added the [StartSlideShow](../interacting-with-editors/presentation-api/Methods/StartSlideShow.md) method.

## Version 7.5

- Added the `align` parameter to the [ShowButton](../interacting-with-editors/document-api/Methods/ShowButton.md) method.

## Version 7.4

- Added the ability to download ready-to-use plugins from [ONLYOFFICE Plugin Marketplace](../development-workflow/installing-and-testing/desktop-editors-installation.md#adding-plugins-through-the-plugin-manager) in ONLYOFFICE Desktop Editors.
- Added the [sendToPlugin](../customization/windows-and-panels.md#interacting-with-a-window) method to the `Plugin` object.
- Added the [onContextMenuClick](../customization/context-menu.md#clicking-a-context-menu-item) event.
- Added the [onContextMenuShow](../customization/context-menu.md#creating-a-context-menu-item) event.
- Added the [AddContextMenuItem](../customization/context-menu.md#creating-a-context-menu-item) method.
- Added the [CloseWindow](../customization/windows-and-panels.md#closing-a-window) method.
- Added the [GetCurrentSentence](../interacting-with-editors/document-api/Methods/GetCurrentSentence.md) method.
- Added the [GetCurrentWord](../interacting-with-editors/document-api/Methods/GetCurrentWord.md) method.
- Added the [GetDocumentLang](../interacting-with-editors/document-api/Methods/GetDocumentLang.md) method.
- Added the [MouseMoveWindow](../interacting-with-editors/document-api/Methods/MouseMoveWindow.md) method.
- Added the [MouseUpWindow](../interacting-with-editors/document-api/Methods/MouseUpWindow.md) method.
- Added the [ReplaceCurrentSentence](../interacting-with-editors/document-api/Methods/ReplaceCurrentSentence.md) method.
- Added the [ReplaceCurrentWord](../interacting-with-editors/document-api/Methods/ReplaceCurrentWord.md) method.
- Added the [ResizeWindow](../customization/windows-and-panels.md#interacting-with-a-window) method.
- Added the [SendToWindow](../customization/windows-and-panels.md#interacting-with-a-window) method.
- Added the [ShowWindow](../customization/windows-and-panels.md#showing-a-window) method.
- Added the [UpdateContextMenuItem](../customization/context-menu.md#updating-a-context-menu-item) method.
- Added the `backup` parameter to the [RemovePlugin](../interacting-with-editors/document-api/Methods/RemovePlugin.md) method.
- Added the `NewLineSeparator` parameter to the [GetSelectedText](../interacting-with-editors/document-api/Methods/GetSelectedText.md) method.
- Added the `replaceMode` parameter to the [ImageData](../interacting-with-editors/document-api/Enumeration/ImageData.md) object.

## Version 7.3

- Added the `sign` type to the [initDataType](../configuration/configuration.md#variationsinitdatatype) config parameter.
- Added the [AddAddinField](../interacting-with-editors/document-api/Methods/AddAddinField.md) method.
- Added the [GetAllAddinFields](../interacting-with-editors/document-api/Methods/GetAllAddinFields.md) method.
- Added the [GetVBAMacros](../interacting-with-editors/document-api/Methods/GetVBAMacros.md) method.
- Added the [OnDropEvent](../interacting-with-editors/document-api/Methods/OnDropEvent.md) method.
- Added the [RemoveFieldWrapper](../interacting-with-editors/document-api/Methods/RemoveFieldWrapper.md) method.
- Added the [SetEditingRestrictions](../interacting-with-editors/document-api/Methods/SetEditingRestrictions.md) method.
- Added the [UpdateAddinFields](../interacting-with-editors/document-api/Methods/UpdateAddinFields.md) method.
- Added the editor methods for Spreadsheet API.
- Added the editor methods for Presentation API.

## Version 7.2

- Added the [onAddComment](../interacting-with-editors/document-api/Events/onAddComment.md) event.
- Added the [onChangeCommentData](../interacting-with-editors/document-api/Events/onChangeCommentData.md) event.
- Added the [onRemoveComment](../interacting-with-editors/document-api/Events/onRemoveComment.md) event.
- Added the [AcceptReviewChanges](../interacting-with-editors/document-api/Methods/AcceptReviewChanges.md) method.
- Added the [MoveToNextReviewChange](../interacting-with-editors/document-api/Methods/MoveToNextReviewChange.md) method.
- Added the [RejectReviewChanges](../interacting-with-editors/document-api/Methods/RejectReviewChanges.md) method.
- Changed the plugin [localization](../configuration/localization.md) scheme.
- Added the [ONLYOFFICE Plugin Marketplace](../development-workflow/installing-and-testing/docs-on-premises-installation.md#adding-plugins-through-the-plugin-manager-for-a-single-user).
- Added the [ChangeOleObject](../interacting-with-editors/document-api/Methods/ChangeOleObject.md) method.
- Added the [GetAllForms](../interacting-with-editors/document-api/Methods/GetAllForms.md) method.
- Added the [GetFileToDownload](../interacting-with-editors/document-api/Methods/GetFileToDownload.md) method.
- Added the [GetFormsByTag](../interacting-with-editors/document-api/Methods/GetFormsByTag.md) method.
- Added the [GetFormValue](../interacting-with-editors/form-api/Methods/GetFormValue.md) method.
- Added the [GetImageDataFromSelection](../interacting-with-editors/document-api/Methods/GetImageDataFromSelection.md) method.
- Added the [GetInstalledPlugins](../interacting-with-editors/document-api/Methods/GetInstalledPlugins.md) method.
- Added the [InstallPlugin](../interacting-with-editors/document-api/Methods/InstallPlugin.md) method.
- Added the [PutImageDataToSelection](../interacting-with-editors/document-api/Methods/PutImageDataToSelection.md) method.
- Added the [RemovePlugin](../interacting-with-editors/document-api/Methods/RemovePlugin.md) method.
- Added the [SetFormValue](../interacting-with-editors/form-api/Methods/SetFormValue.md) method.
- Added the [ShowButton](../interacting-with-editors/document-api/Methods/ShowButton.md) method.
- Added the [UpdatePlugin](../interacting-with-editors/document-api/Methods/UpdatePlugin.md) method.
- Added the [onBlurContentControl](../interacting-with-editors/document-api/Events/onBlurContentControl.md) event.
- Added the [onChangeContentControl](../interacting-with-editors/document-api/Events/onChangeContentControl.md) event.
- Added the [onFocusContentControl](../interacting-with-editors/document-api/Events/onFocusContentControl.md) event.
