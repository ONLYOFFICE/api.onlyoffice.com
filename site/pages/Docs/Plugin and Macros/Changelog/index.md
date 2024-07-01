The list of changes for ONLYOFFICE Plugins and Macros API.

## Version 8.1

* Added the ability to add the plugin [toolbar menu items](/plugin/types).
* Added the ability to create [multiple left panels](/plugin/variations) for plugins.
* Added the [information](/plugin/global#ContextMenuOptions) about the current position of the context menu plugin event.
* Added the [onToolbarMenuClick](/plugin/events/ontoolbarmenuclick) event.
* Added the [ActivateWindow](/plugin/executemethod/common/activatewindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [AddToolbarMenuItem](/plugin/executemethod/common/addtoolbarmenuitem) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetSelectedOleObjects](/plugin/executemethod/common/getselectedoleobjects) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetAllComments](/plugin/executemethod/cell/getallcomments) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
* Added the [GetCustomFunctions](/plugin/executemethod/cell/getcustomfunctions) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
* Added the [SetCustomFunctions](/plugin/executemethod/cell/setcustomfunctions) method to *window\.Asc.plugin.executeMethod* for Spreadsheet Api.
* Added the [GetAllComments](/plugin/executemethod/slide/getallcomments) method to *window\.Asc.plugin.executeMethod* for Presentation Api.
* Added the [OLEProperties](/plugin/global#OLEProperties) type to the simple type definitions.
* Added the [ToolbarMenuItem](/plugin/global#ToolbarMenuItem) type to the simple type definitions.
* Added the [ToolbarMenuMainItem](/plugin/global#ToolbarMenuMainItem) type to the simple type definitions.
* Added the [ToolbarMenuTab](/plugin/global#ToolbarMenuTab) type to the simple type definitions.
* Added the [ToolbarMenuItemType](/plugin/global#ToolbarMenuItemType) type to the simple type definitions.
* Added the *icons* and *data* parameters to the [ContextMenuItem](/plugin/global#ContextMenuItem) object.
* Added the [menu](/plugin/config#menu) config parameter.

## Version 8.0

* Added the [SearchNext](/plugin/executemethod/text/searchnext) method to *window\.Asc.plugin.executeMethod*.
* Added the [EndSlideShow](/plugin/executemethod/slide/endslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [GoToNextSlideInSlideShow](/plugin/executemethod/slide/gotonextslideinslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [GoToPreviousSlideInSlideShow](/plugin/executemethod/slide/gotopreviousslideinslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [GoToSlideInSlideShow](/plugin/executemethod/slide/gotoslideinslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [PauseSlideShow](/plugin/executemethod/slide/pauseslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [ResumeSlideShow](/plugin/executemethod/slide/resumeslideshow) method to *window\.Asc.plugin.executeMethod*.
* Added the [StartSlideShow](/plugin/executemethod/slide/startslideshow) method to *window\.Asc.plugin.executeMethod*.

## Version 7.5

* Added the *align* parameter to the [ShowButton](/plugin/executemethod/common/showbutton) method of *window\.Asc.plugin.executeMethod*.

## Version 7.4

* Added the ability to download ready-to-use plugins from [ONLYOFFICE Plugin Marketplace](/plugin/installation/desktop#plugin-manager) in ONLYOFFICE Desktop Editors.
* Added the [sendToPlugin](/plugin/sendtoplugin) method to the *Plugin* object.
* Added the [onContextMenuClick](/plugin/events/oncontextmenuclick) event.
* Added the [onContextMenuShow](/plugin/events/oncontextmenushow) event.
* Added the [AddContextMenuItem](/plugin/executemethod/common/addcontextmenuitem) method to *window\.Asc.plugin.executeMethod*.
* Added the [CloseWindow](/plugin/executemethod/common/closewindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetCurrentSentence](/plugin/executemethod/text/getcurrentsentence) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetCurrentWord](/plugin/executemethod/text/getcurrentword) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetDocumentLang](/plugin/executemethod/common/getdocumentlang) method to *window\.Asc.plugin.executeMethod*.
* Added the [InstallDeveloperPlugin](/plugin/executemethod/common/installdeveloperplugin) method to *window\.Asc.plugin.executeMethod*.
* Added the [MouseMoveWindow](/plugin/executemethod/common/mousemovewindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [MouseUpWindow](/plugin/executemethod/common/mouseupwindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [ReplaceCurrentSentence](/plugin/executemethod/text/replacecurrentsentence) method to *window\.Asc.plugin.executeMethod*.
* Added the [ReplaceCurrentWord](/plugin/executemethod/text/replacecurrentword) method to *window\.Asc.plugin.executeMethod*.
* Added the [ResizeWindow](/plugin/executemethod/common/resizewindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [SendToWindow](/plugin/executemethod/common/sendtowindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [ShowWindow](/plugin/executemethod/common/showwindow) method to *window\.Asc.plugin.executeMethod*.
* Added the [UpdateContextMenuItem](/plugin/executemethod/common/updatecontextmenuitem) method to *window\.Asc.plugin.executeMethod*.
* Added the *backup* parameter to the [RemovePlugin](/plugin/executemethod/common/removeplugin) method of *window\.Asc.plugin.executeMethod*.
* Added the *NewLineSeparator* parameter to the [GetSelectedText](/plugin/executemethod/common/getselectedtext) method of *window\.Asc.plugin.executeMethod*.
* Added the *replaceMode* parameter to the [ImageData](/plugin/global#ImageData) object.

## Version 7.3

* Added the *sign* type to the [initDataType](/plugin/config#initDataType) config parameter.
* Added the [AddAddinField](/plugin/executemethod/text/addaddinfield) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetAllAddinFields](/plugin/executemethod/text/getalladdinfields) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetVBAMacros](/plugin/executemethod/common/getvbamacros) method to *window\.Asc.plugin.executeMethod*.
* Added the [OnDropEvent](/plugin/executemethod/common/ondropevent) method to *window\.Asc.plugin.executeMethod*.
* Added the [RemoveFieldWrapper](/plugin/executemethod/text/removefieldwrapper) method to *window\.Asc.plugin.executeMethod*.
* Added the [SetEditingRestrictions](/plugin/executemethod/text/seteditingrestrictions) method to *window\.Asc.plugin.executeMethod*.
* Added the [UpdateAddinFields](/plugin/executemethod/text/updateaddinfields) method to *window\.Asc.plugin.executeMethod*.
* Added the [Spreadsheet Api](/plugin/executemethod/cell) methods to *window\.Asc.plugin.executeMethod*.
* Added the [Presentation Api](/plugin/executemethod/slide) methods to *window\.Asc.plugin.executeMethod*.

## Version 7.2

* Added the [onAddComment](/plugin/events/onaddcomment) event.
* Added the [onChangeCommentData](/plugin/events/onchangecommentdata) event.
* Added the [onRemoveComment](/plugin/events/onremovecomment) event.
* Added the [AcceptReviewChanges](/plugin/executemethod/text/acceptreviewchanges) method to *window\.Asc.plugin.executeMethod*.
* Added the [MoveToNextReviewChange](/plugin/executemethod/text/movetonextreviewchange) method to *window\.Asc.plugin.executeMethod*.
* Added the [RejectReviewChanges](/plugin/executemethod/text/rejectreviewchanges) method to *window\.Asc.plugin.executeMethod*.
* Changed the plugin [localization](/plugin/localization) scheme.
* Added the [ONLYOFFICE Plugin Marketplace](/plugin/installation/onpremises#plugin-manager).
* Added the [ChangeOleObject](/plugin/executemethod/text/changeoleobject) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetAllForms](/plugin/executemethod/form/getallforms) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetFileToDownload](/plugin/executemethod/common/getfiletodownload) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetFormsByTag](/plugin/executemethod/form/getformsbytag) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetFormValue](/plugin/executemethod/form/getformvalue) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetImageDataFromSelection](/plugin/executemethod/common/getimagedatafromselection) method to *window\.Asc.plugin.executeMethod*.
* Added the [GetInstalledPlugins](/plugin/executemethod/common/getinstalledplugins) method to *window\.Asc.plugin.executeMethod*.
* Added the [InstallPlugin](/plugin/executemethod/common/installplugin) method to *window\.Asc.plugin.executeMethod*.
* Added the [PutImageDataToSelection](/plugin/executemethod/common/putimagedatatoselection) method to *window\.Asc.plugin.executeMethod*.
* Added the [RemovePlugin](/plugin/executemethod/common/removeplugin) method to *window\.Asc.plugin.executeMethod*.
* Added the [SetFormValue](/plugin/executemethod/form/setformvalue) method to *window\.Asc.plugin.executeMethod*.
* Added the [ShowButton](/plugin/executemethod/common/showbutton) method to *window\.Asc.plugin.executeMethod*.
* Added the [UpdatePlugin](/plugin/executemethod/common/updateplugin) method to *window\.Asc.plugin.executeMethod*.
* Added the [onBlurContentControl](/plugin/events/onblurcontentcontrol) event.
* Added the [onChangeContentControl](/plugin/events/onchangecontentcontrol) event.
* Added the [onFocusContentControl](/plugin/events/onfocuscontentcontrol) event.
