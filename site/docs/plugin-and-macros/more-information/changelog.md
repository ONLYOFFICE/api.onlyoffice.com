---
sidebar_position: -1
---

# Changelog

The list of changes for ONLYOFFICE Plugins and Macros API.

## Version 9.0

- Added the ability to add custom [buttons to content controls](../customization/content-control-buttons.md) using a plugin.
- Added the [GetCurrentBookmark](../interacting-with-editors/text-document-api/Methods/GetCurrentBookmark.md) method to *window\.Asc.plugin.executeMethod* for Text document Api.
- Added the [GoToSlide](../interacting-with-editors/presentation-api/Methods/GoToSlide.md) method to *window\.Asc.plugin.executeMethod* for Presentation Api.
- Added the [ContentControlListElement](../interacting-with-editors/text-document-api/Enumeration/ContentControlListElement.md) enumeration.

## Version 8.3

- Added the [GetSelectedContent](../interacting-with-editors/text-document-api/Methods/GetSelectedContent.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ShowError](../interacting-with-editors/text-document-api/Methods/ShowError.md) method to *window\.Asc.plugin.executeMethod*.
- Added the *Shd* and *Border* properties to the [ContentControlProperties](../interacting-with-editors/text-document-api/Enumeration/ContentControlProperties.md) object.
- Added the *isActivated* parameter to the [panel settings](../customization/windows-and-panels.md#creating-a-window).

## Version 8.2

- Added the onSubmitForm event.
- Added the [CanRedo](../interacting-with-editors/methods/text-document-api/Api/Methods/CanRedo.md) method to *window\.Asc.plugin.executeMethod* for Text document Api.
- Added the [CanUndo](../interacting-with-editors/methods/text-document-api/Api/Methods/CanUndo.md) method to *window\.Asc.plugin.executeMethod* for Text document Api.
- Added the [Redo](../interacting-with-editors/methods/text-document-api/Api/Methods/Redo.md) method to *window\.Asc.plugin.executeMethod* for Text document Api.
- Added the [Undo](../interacting-with-editors/methods/text-document-api/Api/Methods/Undo.md) method to *window\.Asc.plugin.executeMethod* for Text document Api.

## Version 8.1

- Added the ability to [add custom functions](../macros/adding-custom-functions.md) to the spreadsheets using the **Macros** plugin.
- Added the ability to add the plugin [toolbar menu items](../customization/toolbar.md).
- Added the ability to create [multiple left panels](../structure/configuration/variations.md) for plugins.
- Added the information about the current position of the context menu plugin event.
- Added the onToolbarMenuClick event.
- Added the [ActivateWindow](../customization/windows-and-panels.md#activating-a-window) method to *window\.Asc.plugin.executeMethod*.
- Added the [AddToolbarMenuItem](../customization/toolbar.md#creating-a-toolbar-item) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetSelectedOleObjects](../interacting-with-editors/text-document-api/Methods/GetSelectedOleObjects.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [SetPluginsOptions](../interacting-with-editors/text-document-api/Methods/SetPluginsOptions.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetAllComments](../interacting-with-editors/methods/text-document-api/Api/Methods/GetAllComments.md) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
- Added the [GetCustomFunctions](../interacting-with-editors/methods/spreadsheet-api/Api/Methods/GetCustomFunctions.md) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
- Added the [SetCustomFunctions](../interacting-with-editors/methods/spreadsheet-api/Api/Methods/SetCustomFunctions.md) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
- Added the [GetAllComments](../interacting-with-editors/methods/text-document-api/Api/Methods/GetAllComments.md) method to *window\.Asc.plugin.executeMethod* for Presentation Api.
- Added the [OLEProperties](../interacting-with-editors/text-document-api/Enumeration/OLEProperties.md) type to the simple type definitions.
- Added the [PluginOptions](../interacting-with-editors/text-document-api/Enumeration/PluginOptions.md) type to the simple type definitions.
- Added the [ToolbarMenuItem](../customization/toolbar.md#toolbarmenuitem) type to the simple type definitions.
- Added the [ToolbarMenuMainItem](../customization/toolbar.md#toolbarmenumainitem) type to the simple type definitions.
- Added the [ToolbarMenuTab](../customization/toolbar.md#toolbarmenutab) type to the simple type definitions.
- Added the [ToolbarMenuItemType](../customization/toolbar.md#toolbarmenuitemtype) type to the simple type definitions.
- Added the *icons* and *data* parameters to the [ContextMenuItem](../customization/context-menu.md#contextmenuitem) object.
- Added the [menu](../structure/configuration/configuration.md#variationsmenu) config parameter.

## Version 8.0

- Added the [SearchNext](../interacting-with-editors/methods/text-document-api/Api/Methods/SearchNext.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [EndSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/EndSlideShow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GoToNextSlideInSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/GoToNextSlideInSlideShow.md) to *window\.Asc.plugin.executeMethod*.
- Added the [GoToPreviousSlideInSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/GoToPreviousSlideInSlideShow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GoToSlideInSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/GoToSlideInSlideShow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [PauseSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/PauseSlideShow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ResumeSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/ResumeSlideShow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [StartSlideShow](../interacting-with-editors/methods/presentation-api/Api/Methods/StartSlideShow.md) method to *window\.Asc.plugin.executeMethod*.

## Version 7.5

- Added the *align* parameter to the [ShowButton](../interacting-with-editors/text-document-api/Methods/ShowButton.md) method of *window\.Asc.plugin.executeMethod*.

## Version 7.4

- Added the ability to download ready-to-use plugins from [ONLYOFFICE Plugin Marketplace](../tutorials/installing/onlyoffice-desktop-editors.md#adding-plugins-through-the-plugin-manager) in ONLYOFFICE Desktop Editors.
- Added the [sendToPlugin](../customization/windows-and-panels.md#interacting-with-a-window) method to the *Plugin* object.
- Added the onContextMenuClick event.
- Added the onContextMenuShow event.
- Added the [AddContextMenuItem](../customization/context-menu.md#creating-a-context-menu-item) method to *window\.Asc.plugin.executeMethod*.
- Added the [CloseWindow](../customization/windows-and-panels.md#closing-a-window) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetCurrentSentence](../interacting-with-editors/methods/text-document-api/Api/Methods/GetCurrentSentence.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetCurrentWord](../interacting-with-editors/methods/text-document-api/Api/Methods/GetCurrentWord.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetDocumentLang](../interacting-with-editors/text-document-api/Methods/GetDocumentLang.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [MouseMoveWindow](../interacting-with-editors/text-document-api/Methods/MouseMoveWindow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [MouseUpWindow](../interacting-with-editors/text-document-api/Methods/MouseUpWindow.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ReplaceCurrentSentence](../interacting-with-editors/methods/text-document-api/Api/Methods/ReplaceCurrentSentence.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ReplaceCurrentWord](../interacting-with-editors/methods/text-document-api/Api/Methods/ReplaceCurrentWord.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ResizeWindow](../customization/windows-and-panels.md#interacting-with-a-window) method to *window\.Asc.plugin.executeMethod*.
- Added the [SendToWindow](../customization/windows-and-panels.md#interacting-with-a-window) method to *window\.Asc.plugin.executeMethod*.
- Added the [ShowWindow](../customization/windows-and-panels.md#showing-a-window) method to *window\.Asc.plugin.executeMethod*.
- Added the [UpdateContextMenuItem](../customization/context-menu.md#updating-a-context-menu-item) method to *window\.Asc.plugin.executeMethod*.
- Added the *backup* parameter to the [RemovePlugin](../interacting-with-editors/text-document-api/Methods/RemovePlugin.md) method of *window\.Asc.plugin.executeMethod*.
- Added the *NewLineSeparator* parameter to the [GetSelectedText](../interacting-with-editors/text-document-api/Methods/GetSelectedText.md) method of *window\.Asc.plugin.executeMethod*.
- Added the *replaceMode* parameter to the [ImageData](../interacting-with-editors/text-document-api/Enumeration/ImageData.md) object.

## Version 7.3

- Added the *sign* type to the [initDataType](../structure/configuration/configuration.md#variationsinitdatatype) config parameter.
- Added the [AddAddinField](../interacting-with-editors/methods/text-document-api/Api/Methods/AddAddinField.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetAllAddinFields](../interacting-with-editors/methods/text-document-api/Api/Methods/GetAllAddinFields.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetVBAMacros](../interacting-with-editors/text-document-api/Methods/GetVBAMacros.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [OnDropEvent](../interacting-with-editors/text-document-api/Methods/OnDropEvent.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [RemoveFieldWrapper](../interacting-with-editors/methods/text-document-api/Api/Methods/RemoveFieldWrapper.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [SetEditingRestrictions](../interacting-with-editors/methods/text-document-api/Api/Methods/SetEditingRestrictions.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [UpdateAddinFields](../interacting-with-editors/methods/text-document-api/Api/Methods/UpdateAddinFields.md) method to *window\.Asc.plugin.executeMethod*.
- Added the Spreadsheet Api methods to *window\.Asc.plugin.executeMethod*.
- Added the Presentation Api methods to *window\.Asc.plugin.executeMethod*.

## Version 7.2

- Added the onAddComment event.
- Added the onChangeCommentData event.
- Added the onRemoveComment event.
- Added the [AcceptReviewChanges](../interacting-with-editors/methods/text-document-api/Api/Methods/AcceptReviewChanges.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [MoveToNextReviewChange](../interacting-with-editors/methods/text-document-api/Api/Methods/MoveToNextReviewChange.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [RejectReviewChanges](../interacting-with-editors/methods/text-document-api/Api/Methods/RejectReviewChanges.md) method to *window\.Asc.plugin.executeMethod*.
- Changed the plugin [localization](../structure/localization.md) scheme.
- Added the [ONLYOFFICE Plugin Marketplace](../tutorials/installing/onlyoffice-docs-on-premises.md#adding-plugins-through-the-plugin-manager-for-a-single-user).
- Added the [ChangeOleObject](../interacting-with-editors/methods/text-document-api/Api/Methods/ChangeOleObject.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetAllForms](../interacting-with-editors/methods/text-document-api/Api/Methods/GetAllForms.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetFileToDownload](../interacting-with-editors/text-document-api/Methods/GetFileToDownload.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetFormsByTag](../interacting-with-editors/methods/text-document-api/Api/Methods/GetFormsByTag.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetFormValue](../interacting-with-editors/methods/form-api/Api/Methods/GetFormValue.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetImageDataFromSelection](../interacting-with-editors/text-document-api/Methods/GetImageDataFromSelection.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [GetInstalledPlugins](../interacting-with-editors/text-document-api/Methods/GetInstalledPlugins.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [InstallPlugin](../interacting-with-editors/text-document-api/Methods/InstallPlugin.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [PutImageDataToSelection](../interacting-with-editors/text-document-api/Methods/PutImageDataToSelection.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [RemovePlugin](../interacting-with-editors/text-document-api/Methods/RemovePlugin.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [SetFormValue](../interacting-with-editors/methods/form-api/Api/Methods/SetFormValue.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [ShowButton](../interacting-with-editors/text-document-api/Methods/ShowButton.md) method to *window\.Asc.plugin.executeMethod*.
- Added the [UpdatePlugin](../interacting-with-editors/text-document-api/Methods/UpdatePlugin.md) method to *window\.Asc.plugin.executeMethod*.
- Added the onBlurContentControl event.
- Added the onChangeContentControl event.
- Added the onFocusContentControl event.
