# Changelog

The list of changes of ONLYOFFICE Docs API.

## Version 9.1

- The document is opened in viewer mode with an error message if it cannot be [locked](../using-wopi/key-concepts.md#lock) in WOPI.
- Added the [UserCanOnlyComment](../using-wopi/wopi-rest-api/checkfileinfo.md#UserCanOnlyComment) property to the *CheckFileInfo* WOPI operation.
- The [editorConfig.customization.uitheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) parameter is now available for the mobile editors.
- Added opening for [hml](../usage-api/config/document/document.md#filetype) format.
- Added conversion from [pptx](../additional-api/conversion-api/conversion-tables.md#presentation-file-formats) format to *txt*.
- Changed the [editorConfig.customization.logo.image](../usage-api/config/editor/customization/customization-standard-branding.md#logoimage) size requirement to 300x20.

## Version 9.0

- Added the [editorConfig.customization.suggestFeature](../usage-api/config/editor/customization/customization-standard-branding.md#suggestfeature) parameter.
- Changed [editorConfig.customization.macros](../usage-api/config/editor/customization/customization-standard-branding.md#macros): in version 9.0.3, this parameter completely disables running, adding, and editing macros (not just automatic startup).
- The [editorConfig.customization.toolbarHideFileName](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarhidefilename) parameter is now available for the mobile editors.
- Added the *theme-white* and *theme-night* theme ids to the [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) parameter.
- Added opening for [odg](../usage-api/config/document/document.md#filetype) format.
- Added opening for [md](../usage-api/config/document/document.md#filetype) format.
- Added the ability to [preload](../get-started/configuration/preload.md) the editor static resources.
- Added the [editorConfig.customization.forceWesternFontSize](../usage-api/config/editor/customization/customization-standard-branding.md#forcewesternfontsize) parameter for the Chinese (Simplified) UI.
- Added the [editorConfig.customization.layout.header.user](../usage-api/config/editor/customization/customization-white-label.md#layoutheaderuser) parameter.
- Added conversion from [vsdm, vsdx, vssm, vssx, vstm, vstx](../additional-api/conversion-api/conversion-tables.md#diagram-document-file-formats) formats.
- Added the *diagram* document type to the [documentType](../usage-api/config/config.md#documenttype) parameter.

## Version 8.3

- Added the [editorConfig.customization.features.featuresTips](../usage-api/config/editor/customization/customization-standard-branding.md#featuresfeaturestips) parameter.
- Added the [editorConfig.customization.showHorizontalScroll](../usage-api/config/editor/customization/customization-standard-branding.md#showhorizontalscroll) and [editorConfig.customization.showVerticalScroll](../usage-api/config/editor/customization/customization-standard-branding.md#showverticalscroll) parameters.
- Added the [editorConfig.customization.slidePlayerBackground](../usage-api/config/editor/customization/customization-standard-branding.md#slideplayerbackground) parameter.
- Added the [editorConfig.customization.wordHeadingsColor](../usage-api/config/editor/customization/customization-standard-branding.md#wordheadingscolor) parameter.
- Added the [editorConfig.customization.mobile.info](../usage-api/config/editor/customization/customization-standard-branding.md#mobileinfo) parameter.
- Added opening for [pages, key, numbers, hwp, hwpx](../usage-api/config/document/document.md#filetype) formats.
- Added the [events.onUserActionRequired](../usage-api/config/events.md#onuseractionrequired) event.
- Added the [refreshFile](../usage-api/methods.md#refreshfile) method.
- Added the [events.onRequestRefreshFile](../usage-api/config/events.md#onrequestrefreshfile) event.
- The document editing will be prohibited for all users editing the document with the specified *key*, if the *users* parameter is not specified for the [drop](../additional-api/command-service/drop.md) command.
- The [editorConfig.customization.submitForm](../usage-api/config/editor/customization/customization-standard-branding.md#submitform) parameter can now be used as an object.
- The [editorConfig.customization.compactToolbar](../usage-api/config/editor/customization/customization-standard-branding.md#compacttoolbar) parameter is now available for the viewer.
- Added the [editorConfig.customization.pointerMode](../usage-api/config/editor/customization/customization-standard-branding.md#pointermode) parameter.

## Version 8.2

- The [editorConfig.customization.mobileForceView](../usage-api/config/editor/customization/customization-standard-branding.md#mobileforceview) parameter is deprecated, please use the [editorConfig.customization.mobile](../usage-api/config/editor/customization/customization-standard-branding.md#mobile) parameter instead.
- Added the *Password* and *PasswordToOpen* request parameters to the [WOPI conversion API](../using-wopi/conversion-api.md).
- The [editorConfig.region](../usage-api/config/editor/editor.md#region) field is now used to define the default measurement units in all editor types.
- The [editorConfig.location](../usage-api/config/editor/editor.md#location) field is deprecated, please use the [editorConfig.region](../usage-api/config/editor/editor.md#region) field instead.
- Added the *insert-text* type of document selection to the *c* parameter of the [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) method.
- The `https://documentserver/coauthoring/CommandService.ashx` address of the [command service](../additional-api/command-service/command-service.md) is replaced with `https://documentserver/command`.
- Added the *users* parameter to the response of the [info](../additional-api/command-service/info.md) command.
- Added the [tabBackground](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabbackground) field to the *editorConfig.customization.features* parameter.
- Added the [tabStyle](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabstyle) field to the *editorConfig.customization.features* parameter.
- Added the [imageLight](../usage-api/config/editor/customization/customization-standard-branding.md#logoimagelight) field to the *editorConfig.customization.logo* parameter.
- The [editorConfig.customization.toolbarNoTabs](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarnotabs) field is deprecated, please use the [editorConfig.customization.features.tabStyle](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabstyle) and [editorConfig.customization.features.tabBackground](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabbackground) fields instead.

## Version 8.1

- Added the [editorConfig.plugins.options](../usage-api/config/editor/plugins.md#options) parameter.
- Added the possibility to [insert](../usage-api/methods.md#insertimage) the *tif* / *tiff* image type into the file.
- Added the [startFilling](../usage-api/methods.md#startfilling) method.
- Added the [events.onRequestStartFilling](../usage-api/config/events.md#onrequeststartfilling) event.
- Added the [docs\_api\_config](../using-wopi/host-page.md#parameters) parameter to the *form* element of the WOPI host page.
- Added the [pdf](../additional-api/conversion-api/request.md#pdf) field to the conversion request.
- Added the [events.onSubmit](../usage-api/config/events.md#onsubmit) event.
- Added the *roles* field to the [editorConfig.customization.features](../usage-api/config/editor/customization/customization-standard-branding.md#features) parameter.
- Added the [shardkey](../get-started/configuration/shard-key.md) parameter to the URL query string when sending requests to the ONLYOFFICE Docs API, document command service, document conversion service, or document builder service.
- Added the [addContextMenuItem](../usage-api/automation-api.md#addcontextmenuitem), [addToolbarMenuItem](../usage-api/automation-api.md#addtoolbarmenuitem) and [updateContextMenuItem](../usage-api/automation-api.md#updatecontextmenuitem) methods to the *Automation API*.
- Added the [-10 error code](../additional-api/conversion-api/error-codes.md) to the Conversion API.
- The [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) parameter is now available for the mobile editors.
- Added the *visible* field to the [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) parameter.
- Added the [formsubmit](../using-wopi/wopi-discovery.md#formsubmit) action to the WOPI discovery.
- The [editorConfig.customization.goback.requestClose](../usage-api/config/editor/customization/customization-standard-branding.md#goback) field is deprecated, please use the [editorConfig.customization.close](../usage-api/config/editor/customization/customization-standard-branding.md#close) field instead.
- Added the [Save Copy As](../using-wopi/wopi-rest-api/putrelativefile.md#save-copy-as) functionality to WOPI.
- Change the default value of the [editorConfig.customization.hideRightMenu](../usage-api/config/editor/customization/customization-standard-branding.md#hiderightmenu) parameter to *true*.

## Version 8.0

- Added the [document.isForm](../usage-api/config/document/document.md#isform) parameter.
- Added the [WOPISrc](../using-wopi/key-concepts.md#wopisrc) query parameter to the requests from the browser to the server.
- Added the [watermark](../additional-api/conversion-api/request.md#watermark) field to the conversion request.
- Added the *pdf* document type to the [documentType](../usage-api/config/config.md#documenttype) parameter.
- Added the [formsdataurl](../usage-api/callback-handler.md#formsdataurl) parameter to the *Callback handler*.
- Added the *data.id* parameter to the [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) event.
- Added the *users.image* field to the [setUsers](../usage-api/methods.md#setusers) method.
- Added the *info* operation type to the [setUsers](../usage-api/methods.md#setusers) method and [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) event.
- Added the *image* field to the [editorConfig.user](../usage-api/config/editor/editor.md#user) parameter.
- Added the [editorConfig.customization.mobileForceView](../usage-api/config/editor/customization/customization-standard-branding.md#mobileforceview) parameter.
- Added the *link* field to the *data* object which is sent to the [events.onRequestReferenceData](../usage-api/config/events.md#onrequestreferencedata) event.

## Version 7.5

- Added the **3** type for the [forcesavetype](../usage-api/callback-handler.md#forcesavetype) parameter of the callback handler.
- Added the [editorConfig.customization.submitForm](../usage-api/config/editor/customization/customization-standard-branding.md#submitform) parameter.
- The [events.onRequestMailMergeRecipients](../usage-api/config/events.md#onrequestmailmergerecipients) event is deprecated, please use the [events.onRequestSelectSpreadsheet](../usage-api/config/events.md#onrequestselectspreadsheet) event instead.
- The [setMailMergeRecipients](../usage-api/methods.md#setmailmergerecipients) method is deprecated, please use the [setRequestedSpreadsheet](../usage-api/methods.md#setrequestedspreadsheet) method instead.
- Added the [setReferenceSource](../usage-api/methods.md#setreferencesource) method.
- Added the [events.onRequestReferenceSource](../usage-api/config/events.md#onrequestreferencesource) event.
- Added the [-9 error code](../additional-api/conversion-api/error-codes.md) to the Conversion API.
- Added the *key* field to the [setReferenceData](../usage-api/methods.md#setreferencedata) method.
- The [events.onRequestCompareFile](../usage-api/config/events.md#onrequestcomparefile) event is deprecated, please use the [events.onRequestSelectDocument](../usage-api/config/events.md#onrequestselectdocument) event instead.
- The [setRevisedFile](../usage-api/methods.md#setrevisedfile) method is deprecated, please use the [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) method instead.
- Added the [events.onRequestOpen](../usage-api/config/events.md#onrequestopen) event.
- Added the [deleteForgotten](../additional-api/command-service/deleteforgotten.md), [getForgotten](../additional-api/command-service/getforgotten.md), and [getForgottenList](../additional-api/command-service/getforgottenlist.md) commands.

## Version 7.4

- Added the [mobileView](../using-wopi/wopi-discovery.md#mobileView) and [mobileEdit](../using-wopi/wopi-discovery.md#mobileEdit) actions to the WOPI discovery.
- Added opening for [dps, dpt, et, ett, mhtml, stw, sxc, sxi, sxw, wps, wpt](../usage-api/config/config.md#documenttype) formats.
- Added the *users.id* field to the [setUsers](../usage-api/methods.md#setusers) method.
- Added the *c* parameter to the [setUsers](../usage-api/methods.md#setusers) method and [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) event.

## Version 7.3

- Added the WOPI [Conversion API](../using-wopi/conversion-api.md).
- Added the [setReferenceData](../usage-api/methods.md#setreferencedata) method.
- Added the [events.onRequestReferenceData](../usage-api/config/events.md#onrequestreferencedata) event.
- Added the [document.referenceData](../usage-api/config/document/document.md#referencedata) parameter.
- Added the [UserCanNotWriteRelative](../using-wopi/wopi-rest-api/checkfileinfo.md#UserCanNotWriteRelative) property to the *CheckFileInfo* WOPI operation.
- Added a scheme for [editing binary document formats](../using-wopi/editing-binary-documents.md).
- Added the [convert](../using-wopi/wopi-discovery.md#convert) action to the WOPI discovery.
- Added the [PutRelativeFile](../using-wopi/wopi-rest-api/putrelativefile.md) WOPI operation.

## Version 7.2

- Added the [editorConfig.customization.integrationMode](../usage-api/config/editor/customization/customization-standard-branding.md#integrationmode) parameter.
- Added the [Connector](../usage-api/automation-api.md) class to interact with text documents, spreadsheets, presentations, PDFs, and fillable forms from the outside.
- Added the *theme-contrast-dark* theme id to the [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) parameter.
- Added the *phone* field to the [editorConfig.customization.customer](../usage-api/config/editor/customization/customization-standard-branding.md#customer) parameter.
- Added the [connections\_view](../additional-api/command-service/license.md#license.connections_view), [users\_view\_count](../additional-api/command-service/license.md#license.users_view_count) and [users\_view](../additional-api/command-service/license.md#quota.users_view) parameters to the license response.
- Added the [live viewer](../get-started/how-it-works/viewing.md) mode to the text document, spreadsheet and presentation editors.
- Added the [embedview](../using-wopi/wopi-discovery.md#embedview) action to the WOPI discovery.
- The [services.CoAuthoring.secret.browser.string](../additional-api/signature/signature.md#parameters) parameter is deprecated, please use the [services.CoAuthoring.secret.inbox.string](../additional-api/signature/signature.md#parameters) parameter instead.

## Version 7.1

- The *services.CoAuthoring.token.inbox.inBody* and *services.CoAuthoring.token.outbox.inBody* parameters for enabling [token in body](../additional-api/signature/request/token-in-body.md) are deprecated.
- Added the *X-LOOL-WOPI-IsModifiedByUser*, *X-LOOL-WOPI-IsAutosave* and *X-LOOL-WOPI-IsExitSave* request headers to the [PutFile](../using-wopi/wopi-rest-api/putfile.md) WOPI operation to distinguish between the type of document saving.
- The [editorConfig.customization.chat](../usage-api/config/editor/customization/customization-standard-branding.md#chat) parameter is deprecated, please use the [document.permissions.chat](../usage-api/config/document/permissions.md#chat) parameter instead.
- Added conversion from [dps, dpt, et, ett, htm, mhtml, stw, sxc, sxi, sxw, wps, wpt, xlsb, xml](../additional-api/conversion-api/conversion-tables.md) format.
- Added opening for [xlsb](../usage-api/config/config.md#documenttype) format.
- The parameter list in the initialization config [signature](../additional-api/signature/browser.md#opening-file) has become strictly regulated.
- The [editorConfig.customization.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#spellcheck) field is deprecated, please use the [editorConfig.customization.features.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#features) field instead.
- Added the [editorConfig.customization.features](../usage-api/config/editor/customization/customization-standard-branding.md#features) parameter section.
- Added the [documentLayout](../additional-api/conversion-api/request.md#documentLayout) parameter to the conversion request.
- Added the [documentRenderer](../additional-api/conversion-api/request.md#documentRenderer) parameter to the conversion request.
- Added conversion from [pdf/xps/oxps](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) formats to *docx*.
- Added the [document.permissions.userInfoGroups](../usage-api/config/document/permissions.md#userinfogroups) parameter.
- Added conversion from [djvu](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) format to *pdf*.
- Added conversion to [ppsm, ppsx](../additional-api/conversion-api/conversion-tables.md#presentation-file-formats) formats.

## Version 7.0

- The [callbackUrl](../usage-api/callback-handler.md) is used from the last tab of the same user.
- Added the *logoDark* field to the [editorConfig.customization.customer](../usage-api/config/editor/customization/customization-standard-branding.md#customer) parameter.
- Added the *imageDark* field to the [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) parameter.
- The *imageEmbedded* field of the [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) parameter is deprecated, please use the *image* field instead.
- Added a signature to the request for file changes specified with the *changesUrl* parameter of the [setHistoryData](../usage-api/methods.md#sethistorydata) method.
- Added the [document.permissions.protect](../usage-api/config/document/permissions.md#protect) field.
- Added the *fileType* parameter to the [onDownloadAs](../usage-api/config/events.md#ondownloadas), [onRequestRestore](../usage-api/config/events.md#onrequestrestore) and [onRequestSaveAs](../usage-api/config/events.md#onrequestsaveas) events.
- Added the possibility to insert several images via the [insertImage](../usage-api/methods.md#insertimage) method.
- The [assemblyFormatAsOrigin](../get-started/how-it-works/saving-file.md#saving-in-original-format) server setting is enabled by default.
- Added the *ooxml* and *odf* values to the [outputtype](../additional-api/conversion-api/request.md#outputtype) parameter of the conversion request.
- Added the *fileType* and *previous.fileType* parameters to the [setHistoryData](../usage-api/methods.md#sethistorydata) method.
- Added the [filetype](../usage-api/callback-handler.md#filetype) parameter to the *Callback handler*.
- Added the [fileType](../additional-api/conversion-api/response.md#fileType) field to the conversion response.
- Added conversion to [docm, dotm, xlsm, xltm, pptm, potm](../additional-api/conversion-api/conversion-tables.md) formats.
- The [editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay), [editorConfig.customization.showReviewChanges](../usage-api/config/editor/customization/customization-standard-branding.md#showreviewchanges), [editorConfig.customization.trackChanges](../usage-api/config/editor/customization/customization-standard-branding.md#trackchanges) parameters are deprecated, please use the [editorConfig.customization.review](../usage-api/config/editor/customization/customization-standard-branding.md#review) parameter instead.
- Added the [editorConfig.customization.review.hideReviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#review) field.
- Added the [editorConfig.customization.review.hoverMode](../usage-api/config/editor/customization/customization-standard-branding.md#review) field.
- Added the possibility to view the [document history](../get-started/how-it-works/document-history.md) of the spreadsheet files.
- Added the [UI\_InsertGraphic](../using-wopi/postmessage.md#UI_InsertGraphic) message for the PostMessage WOPI protocol.

## Version 6.4

- Added opening for [oxps](../usage-api/config/config.md#documenttype) format.
- Added support for [WOPI protocol](../using-wopi/overview.md).
- Added the *simple* value to the [editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay) parameter.
- Added the [threaded comments](../get-started/how-it-works/commenting.md#threaded-comments-in-spreadsheets) saving in the spreadsheet files.
- Added the [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) field.
- Added the possibility to view the [document history](../get-started/how-it-works/document-history.md) for the presentation files.
- Added the [editorConfig.customization.hideNotes](../usage-api/config/editor/customization/customization-standard-branding.md#hidenotes) field.
- Added the [editorConfig.coEditing](../usage-api/config/editor/editor.md#coediting) field.
- Added the [requestClose](../usage-api/methods.md#requestclose) method.
- Added the [document.permissions.commentGroups](../usage-api/config/document/permissions.md#commentgroups) field.
- Added the [events.onPluginsReady](../usage-api/config/events.md#onpluginsready) event.

## Version 6.3

- Added the [license](../additional-api/command-service/license.md) command.
- Added the [editorConfig.customization.hideRulers](../usage-api/config/editor/customization/customization-standard-branding.md#hiderulers) field.
- Added the [editorConfig.customization.anonymous](../usage-api/config/editor/customization/customization-standard-branding.md#anonymous) field.
- The [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) field is deprecated, please use the [document.permissions.editCommentAuthorOnly](../usage-api/config/document/permissions.md#editcommentauthoronly) and [document.permissions.deleteCommentAuthorOnly](../usage-api/config/document/permissions.md#deletecommentauthoronly) fields.
- Added the [setFavorite](../usage-api/methods.md#setfavorite) method.
- Added the *data.favorite* parameter to the [events.onMetaChange](../usage-api/config/events.md#onmetachange) event.
- Added the [document.info.favorite](../usage-api/config/document/info.md#favorite) field.
- Added the [document.permissions.reviewGroups](../usage-api/config/document/permissions.md#reviewgroups) field.
- Added conversion to [epub, fb2, html](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) formats.
- Added conversion from [xml](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) format.

## Version 6.2

- Added a new [actions.type](../usage-api/callback-handler.md#actions) field value (*actions.type = 2*).
- Added the [editorConfig.customization.trackChanges](../usage-api/config/editor/customization/customization-standard-branding.md#trackchanges) field.
- Added the [editorConfig.customization.toolbarHideFileName](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarhidefilename) field.
- The *callbackUrl* for *status* **6** is selected based on [forcesavetype](../usage-api/callback-handler.md).
- Added opening for [fb2](../usage-api/config/config.md#documenttype) format.

## Version 6.1

- The *text*, *spreadsheet* and *presentation* values for [documentType](../usage-api/config/config.md#documenttype) parameter is deprecated, please use *word*, *cell* and *slide* values instead.
- Added the *group* field to the [editorConfig.user](../usage-api/config/editor/editor.md#user).
- Added conversion from [fb2](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) format.

## Version 6.0

- Added the type of insertion in [events.onRequestInsertImage](../usage-api/config/events.md#onrequestinsertimage) event.
- Added the [editorConfig.templates](../usage-api/config/editor/editor.md#templates) field.
- Added the [editorConfig.customization.plugins](../usage-api/config/editor/customization/customization-standard-branding.md#plugins) field.
- Added the [editorConfig.customization.macros](../usage-api/config/editor/customization/customization-standard-branding.md#macros) field.
- Added the [editorConfig.customization.macrosMode](../usage-api/config/editor/customization/customization-standard-branding.md#macrosmode) field.
- Added the [events.onRequestCreateNew](../usage-api/config/events.md#onrequestcreatenew) event.
- Added the [document.permissions.copy](../usage-api/config/document/permissions.md#copy) field.
- The [document.permissions.rename](../usage-api/config/document/permissions.md#rename) field is deprecated, please add the [events.onRequestRename](../usage-api/config/events.md#onrequestrename) field instead.

## Version 5.5

- The `https://documentserver/ConvertService.ashx` address of the [conversion service](../additional-api/conversion-api/request.md) is replaced with `https://documentserver/converter`.
- Added the [editorConfig.customization.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#spellcheck) field.
- Added conversion to [pdfa](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) format.
- Added the [events.onRequestCompareFile](../usage-api/config/events.md#onrequestcomparefile) event.
- Added the [setRevisedFile](../usage-api/methods.md#setrevisedfile) method.
- Token in [methods](../additional-api/signature/browser.md#methods) parameters.
- The [document.permissions.changeHistory](../usage-api/config/document/permissions.md#changehistory) field is deprecated, please add the [events.onRequestRestore](../usage-api/config/events.md#onrequestrestore) field instead.
- Added the [editorConfig.customization.goback.requestClose](../usage-api/config/editor/customization/customization-standard-branding.md#goback) field.
- Added the [events.onRequestSharingSettings](../usage-api/config/events.md#onrequestsharingsettings) event.
- Added the [editorConfig.customization.unit](../usage-api/config/editor/customization/customization-standard-branding.md#unit) field.
- Added the [region](../additional-api/conversion-api/request.md#region) field.
- Added the [spreadsheetLayout](../additional-api/conversion-api/request.md#spreadsheetLayout) field.
- Added [input error](../additional-api/conversion-api/error-codes.md) for conversion.
- The [events.onRequestSendNotify](../usage-api/config/events.md#onrequestsendnotify) event and the [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) event can be set independently.
- Added the [editorConfig.customization.mentionShare](../usage-api/config/editor/customization/customization-standard-branding.md#mentionshare) field.
- The *callbackUrl* is selected based on [status](../usage-api/callback-handler.md).
- Added the [editorConfig.customization.compatibleFeatures](../usage-api/config/editor/customization/customization-standard-branding.md#compatiblefeatures) field.

## Version 5.4

- Added the [editorConfig.region](../usage-api/config/editor/editor.md#region) field.
- The [document.info.created](../usage-api/config/document/info.md#created) field is deprecated, please use the [document.info.uploaded](../usage-api/config/document/info.md#uploaded) field instead.
- The [document.info.author](../usage-api/config/document/info.md#author) field is deprecated, please use the [document.info.owner](../usage-api/config/document/info.md#owner) field instead.
- The [events.onReady](../usage-api/config/events.md#onready) event is removed.
- The *firstname* and *lastname* fields in the [editorConfig.user](../usage-api/config/editor/editor.md#user) object is removed.
- Added the [events.onRequestSaveAs](../usage-api/config/events.md#onrequestsaveas) event.
- Added the [events.onRequestInsertImage](../usage-api/config/events.md#onrequestinsertimage) event.
- Added the [insertImage](../usage-api/methods.md#insertimage) method.
- Added the [events.onRequestMailMergeRecipients](../usage-api/config/events.md#onrequestmailmergerecipients) event.
- Added the [setMailMergeRecipients](../usage-api/methods.md#setmailmergerecipients) method.
- Added the [setSharingSettings](../usage-api/methods.md#setsharingsettings) method.
- Added the [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) event.
- Added the [setUsers](../usage-api/methods.md#setusers) method.
- Added the [events.onRequestSendNotify](../usage-api/config/events.md#onrequestsendnotify) event.

## Version 5.3

- Added [conversion](../additional-api/conversion-api/conversion-tables.md) to the OOXML (dotx, xltx, potx) and ODF (ott, ots, otp) templates.
- Added the [editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay) field.
- The [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) field is now used to restrict comment deletion as well.
- Added the [editorConfig.customization.compactHeader](../usage-api/config/editor/customization/customization-standard-branding.md#compactheader) field.
- Added the [editorConfig.customization.hideRightMenu](../usage-api/config/editor/customization/customization-standard-branding.md#hiderightmenu) field.
- Added the [editorConfig.customization.toolbarNoTabs](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarnotabs) field.
- Added [conversion error](../additional-api/conversion-api/error-codes.md) for password protected documents.
- Added the [editorConfig.actionLink](../usage-api/config/editor/editor.md#actionlink) field.
- Added the [setActionLink](../usage-api/methods.md#setactionlink) method.
- Added the [events.onMakeActionLink](../usage-api/config/events.md#onmakeactionlink) event.

## Version 5.2

- Token in request [body](../additional-api/signature/request/token-in-body.md) parameters.
- [document.permissions.comment](../usage-api/config/document/permissions.md#comment) is available in all types of editors.
- Added the [document.permissions.fillForms](../usage-api/config/document/permissions.md#fillforms) field.
- Added the [editorConfig.customization.help](../usage-api/config/editor/customization/customization-standard-branding.md#help) field.
- Added the possibility to make the [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) not clickable.
- Added for the [aspect](../additional-api/conversion-api/request.md#thumbnail.aspect) field value *2* for the conversion.

## Version 5.1

- Added the *format* parameter to the [downloadAs](../usage-api/methods.md#downloadas) method.
- Added the [document.permissions.modifyContentControl](../usage-api/config/document/permissions.md#modifycontentcontrol) field.
- Added conversion for [OpenDocument Template](../additional-api/conversion-api/conversion-tables.md) formats.
- Added the [events.onRequestClose](../usage-api/config/events.md#onrequestclose) event.
- Added the [editorConfig.customization.goback.blank](../usage-api/config/editor/customization/customization-standard-branding.md#goback) field.

## Version 5.0

- Added the [document.permissions.modifyFilter](../usage-api/config/document/permissions.md#modifyfilter) field.
- Added conversion for macro-enabled document, document template and flat document [formats](../additional-api/conversion-api/conversion-tables.md).
- The [events.onReady](../usage-api/config/events.md#onready) event is deprecated, please use the [events.onAppReady](../usage-api/config/events.md#onappready) events instead.
- Added the [events.onDocumentReady](../usage-api/config/events.md#ondocumentready) event.
- Added the [editorConfig.plugins.autostart](../usage-api/config/editor/plugins.md#autostart) field.
- Added the [events.onWarning](../usage-api/config/events.md#onwarning) event.
- Added the [Document Builder service](../additional-api/document-builder-api.md).

## Version 4.4

- Changed the [showMessage](../usage-api/methods.md#showmessage) method.
- Added conversion to [odp](../additional-api/conversion-api/conversion-tables.md#presentation-file-formats) format.
- Added the [document.permissions.comment](../usage-api/config/document/permissions.md#comment) field.
- Added the [document.permissions.changeHistory](../usage-api/config/document/permissions.md#changehistory) field.
- Added the [events.onRequestRestore](../usage-api/config/events.md#onrequestrestore) event.
- Added the [document.permissions.rename](../usage-api/config/document/permissions.md#rename) field.
- Added the [events.onRequestRename](../usage-api/config/events.md#onrequestrename) event.
- Added the [meta](../additional-api/command-service/meta.md) command.
- Added the [events.onMetaChange](../usage-api/config/events.md#onmetachange) event.
- Changed the use of *callbackUrl* from the [last user](../usage-api/callback-handler.md) who joined the co-editing.
- Added the [editorConfig.location](../usage-api/config/editor/editor.md#location) field.

## Version 4.3

- Added the [destroyEditor](../usage-api/methods.md#destroyeditor) method.
- Removed the [editorConfig.plugins.url](../usage-api/config/editor/plugins.md#url) field from the plugin connection pattern.
- Added the [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) field.
- Added the [editorConfig.customization.forcesave](../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) field.
- Added the [editorConfig.customization.showReviewChanges](../usage-api/config/editor/customization/customization-standard-branding.md#showreviewchanges) field.
- Added the [forcesavetype](../usage-api/callback-handler.md#forcesavetype) field in the callback handler request when force saving the file.
- Added the [JSON format for response](../additional-api/conversion-api/response.md) from document conversion service.

## Version 4.2

- The [firstname](../usage-api/config/editor/editor.md#user) and [lastname](../usage-api/config/editor/editor.md#user) fields is deprecated, please use the [name](../usage-api/config/editor/editor.md#user) field instead.
- Added the possibility to specify the values for the [editorConfig.customization.chat](../usage-api/config/editor/customization/customization-standard-branding.md#chat) and [editorConfig.customization.comments](../usage-api/config/editor/customization/customization-standard-branding.md#comments) in the Open Source version.
- Added the [editorConfig.customization.compactToolbar](../usage-api/config/editor/customization/customization-standard-branding.md#compacttoolbar) field.
- Added the [editorConfig.customization.zoom](../usage-api/config/editor/customization/customization-standard-branding.md#zoom) field.
- Added the [editorConfig.customization.autosave](../usage-api/config/editor/customization/customization-standard-branding.md#autosave) field.
- The [changeshistory](../usage-api/callback-handler.md#changeshistory) field is removed, please use the [history](../usage-api/callback-handler.md#history) field instead.
- Changed the [setHistoryData](../usage-api/methods.md#sethistorydata) method.
- Added the possibility to convert files to [thumbnail](../additional-api/conversion-api/request.md#generating-png-thumbnail-from-docx) in the [document conversion service](../additional-api/conversion-api/request.md).
- The POST requests are now used for the interaction with the [document command service](../additional-api/command-service/command-service.md) and the [document conversion service](../additional-api/conversion-api/request.md).
- Added the [version](../additional-api/command-service/version.md) command.
- Added the [signature](../additional-api/signature/signature.md) for the editor opening and for the incoming and outgoing requests.
