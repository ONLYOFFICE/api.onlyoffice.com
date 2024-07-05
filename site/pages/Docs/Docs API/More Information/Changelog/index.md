The list of changes of ONLYOFFICE Docs API.

## Version 8.1

* Added the [startFilling](/editors/methods#startFilling) method.
* Added the [events.onRequestStartFilling](/editors/config/events#onRequestStartFilling) event.
* Added the [docs\_api\_config](/editors/wopi/hostpage#docs_api_config) parameter to the *form* element of the WOPI host page.
* Added the [pdf](/editors/conversionapi#pdf) field to the conversion request.
* Added the [events.onSubmit](/editors/config/events#onSubmit) event.
* The *docxf* format is deprecated, please use the *pdf* format to create and edit forms.
* Changed the [documentType](/editors/config/#documentType) of the *docxf* and *oform* formats to *pdf*.
* Added the *roles* field to the [editorConfig.customization.features](/editors/config/editor/customization#features) parameter.
* Added the [shardkey](/editors/howitworks#shardkey) parameter to the URL query string when sending requests to the document command service, document conversion service, or document builder service.
* Added the [addContextMenuItem](/editors/connector#addContextMenuItem), [addToolbarMenuItem](</editors/connector#addToolbarMenuItem >) and [updateContextMenuItem](/editors/connector#updateContextMenuItem) methods to the *Automation API*.
* Added the [-10 error code](/editors/conversionapi#error-codes) to the Conversion API.
* The [editorConfig.customization.logo](/editors/config/editor/customization#logo) parameter is now available for the mobile editors.
* Added the *visible* field to the [editorConfig.customization.logo](/editors/config/editor/customization#logo) parameter.
* Added the [formsubmit](/editors/wopi/discovery#formsubmit) action to the WOPI discovery.
* The [editorConfig.customization.goback.requestClose](/editors/config/editor/customization#goback) field is deprecated, please use the [editorConfig.customization.close](/editors/config/editor/customization#close) field instead.
* Added the [Save Copy As](/editors/wopi/restapi/putrelativefile#save-as) functionality to WOPI.
* Change the default value of the [editorConfig.customization.hideRightMenu](/editors/config/editor/customization#hideRightMenu) parameter to *true*.

## Version 8.0

* Added the [WOPISrc](/editors/wopi/#wopisrc) query parameter to the requests from the browser to the server.
* Added the [watermark](/editors/conversionapi#watermark) field to the conversion request.
* Added the *pdf* document type to the [documentType](/editors/config/#documentType) parameter.
* Added the [formsdataurl](/editors/callback#formsdataurl) parameter to the *Callback handler*.
* Added the *data.id* parameter to the [events.onRequestUsers](/editors/config/events#onRequestUsers) event.
* Added the *users.image* field to the [setUsers](/editors/methods#setUsers) method.
* Added the *info* operation type to the [setUsers](/editors/methods#setUsers) method and [events.onRequestUsers](/editors/config/events#onRequestUsers) event.
* Added the *image* field to the [editorConfig.user](/editors/config/editor#user) parameter.
* Added the [editorConfig.customization.mobileForceView](/editors/config/editor/customization#mobileForceView) parameter.
* Added the *link* field to the *data* object which is sent to the [events.onRequestReferenceData](/editors/config/events#onRequestReferenceData) event.

## Version 7.5

* Added the **3** type for the [forcesavetype](/editors/callback#forcesavetype) parameter of the callback handler.
* Added the [editorConfig.customization.submitForm](/editors/config/editor/customization#submitForm) parameter.
* The [events.onRequestMailMergeRecipients](/editors/config/events#onRequestMailMergeRecipients) event is deprecated, please use the [events.onRequestSelectSpreadsheet](/editors/config/events#onRequestSelectSpreadsheet) event instead.
* The [setMailMergeRecipients](/editors/methods#setMailMergeRecipients) method is deprecated, please use the [setRequestedSpreadsheet](/editors/methods#setRequestedSpreadsheet) method instead.
* Added the [setReferenceSource](/editors/methods#setReferenceSource) method.
* Added the [events.onRequestReferenceSource](/editors/config/events#onRequestReferenceSource) event.
* Added the [-9 error code](/editors/conversionapi#error-codes) to the Conversion API.
* Added the *key* field to the [document.referenceData](/editors/config/document#referenceData) parameter.
* The [events.onRequestCompareFile](/editors/config/events#onRequestCompareFile) event is deprecated, please use the [events.onRequestSelectDocument](/editors/config/events#onRequestSelectDocument) event instead.
* The [setRevisedFile](/editors/methods#setRevisedFile) method is deprecated, please use the [setRequestedDocument](/editors/methods#setRequestedDocument) method instead.
* Added the [events.onRequestOpen](/editors/config/events#onRequestOpen) event.
* Added the [deleteForgotten](/editors/command/deleteforgotten), [getForgotten](/editors/command/getforgotten), and [getForgottenList](/editors/command/getforgottenlist) commands.

## Version 7.4

* Added opening for [dps, dpt, et, ett, mhtml, stw, sxc, sxi, sxw, wps, wpt](/editors/config/#documentType) formats.
* Added the *users.id* field to the [setUsers](/editors/methods#setUsers) method.
* Added the *c* parameter to the [setUsers](/editors/methods#setUsers) method and [events.onRequestUsers](/editors/config/events#onRequestUsers) event.

## Version 7.3

* Added the WOPI [Conversion API](/editors/wopi/conversionapi).
* Added the [setReferenceData](/editors/methods#setReferenceData) method.
* Added the [events.onRequestReferenceData](/editors/config/events#onRequestReferenceData) event.
* Added the [document.referenceData](/editors/config/document#referenceData) parameter.
* Added the [UserCanNotWriteRelative](/editors/wopi/restapi/checkfileinfo#UserCanNotWriteRelative) property to the *CheckFileInfo* WOPI operation.
* Added a scheme for [editing binary document formats](/editors/wopi/editingbinary).
* Added the [convert](/editors/wopi/discovery#convert) action to the WOPI discovery.
* Added the [PutRelativeFile](/editors/wopi/restapi/putrelativefile) WOPI operation.

## Version 7.2

* Added the [editorConfig.customization.integrationMode](/editors/config/editor/customization#integrationMode) parameter.
* Added the [Connector](/editors/connector) class to interact with text documents, spreadsheets, presentations, and fillable forms from the outside.
* Added the *theme-contrast-dark* theme id to the [editorConfig.customization.uiTheme](/editors/config/editor/customization#uiTheme) parameter.
* Added the *phone* field to the [editorConfig.customization.customer](/editors/config/editor/customization#customer) parameter.
* Added the [connections\_view](/editors/command/license#license), [users\_view\_count](/editors/command/license#license) and [users\_view](/editors/command/license#quota) parameters to the license response.
* Added the [live viewer](/editors/viewing) mode to the text document, spreadsheet and presentation editors.
* Added the [embedview](/editors/wopi/discovery#embedview) action to the WOPI discovery.
* The [services.CoAuthoring.secret.browser.string](/editors/signature/#services.CoAuthoring.secret.browser.string) parameter is deprecated, please use the [services.CoAuthoring.secret.inbox.string](/editors/signature/#services.CoAuthoring.secret.inbox.string) parameter instead.

## Version 7.1

* The *services.CoAuthoring.token.inbox.inBody* and *services.CoAuthoring.token.outbox.inBody* parameters for enabling [token in body](/editors/signature/body) are deprecated.
* Added the *X-LOOL-WOPI-IsModifiedByUser*, *X-LOOL-WOPI-IsAutosave* and *X-LOOL-WOPI-IsExitSave* request headers to the [PutFile](/editors/wopi/restapi/putfile) WOPI operation to distinguish between the type of document saving.
* The [editorConfig.customization.chat](/editors/config/editor/customization#chat) parameter is deprecated, please use the [document.permissions.chat](/editors/config/document/permissions#chat) parameter instead.
* Added conversion from [dps, dpt, et, ett, htm, mhtml, stw, sxc, sxi, sxw, wps, wpt, xlsb, xml](/editors/conversionapi#text-matrix) format.
* Added opening for [xlsb](/editors/config/#documentType) format.
* The parameter list in the initialization config [signature](/editors/signature/browser#open) has become strictly regulated.
* The [editorConfig.customization.spellcheck](/editors/config/editor/customization#spellcheck) field is deprecated, please use the [editorConfig.customization.features.spellcheck](/editors/config/editor/customization#features) field instead.
* Added the [editorConfig.customization.features](/editors/config/editor/customization#features) parameter section.
* Added the [documentLayout](/editors/conversionapi#documentLayout) parameter to the conversion request.
* Added the [documentRenderer](/editors/conversionapi#documentRenderer) parameter to the conversion request.
* Added conversion from [pdf/xps/oxps](/editors/conversionapi#text-matrix) formats to *docx*.
* Added the [document.permissions.userInfoGroups](/editors/config/document/permissions#userInfoGroups) parameter.
* Added conversion from [djvu](/editors/conversionapi#text-matrix) format to *pdf*.
* Added conversion to [ppsm, ppsx](/editors/conversionapi#presentation-matrix) formats.

## Version 7.0

* Added the *.docxf* and *.oform* [document formats](/editors/config/#documentType).
* Added conversion to and from [docxf](/editors/conversionapi#text-matrix) format.
* The [callbackUrl](/editors/callback#used-callbackUrl) is used from the last tab of the same user.
* Added the *logoDark* field to the [editorConfig.customization.customer](/editors/config/editor/customization#customer) parameter.
* Added the *imageDark* field to the [editorConfig.customization.logo](/editors/config/editor/customization#logo) parameter.
* The *imageEmbedded* field of the [editorConfig.customization.logo](/editors/config/editor/customization#logo) parameter is deprecated, please use the *image* field instead.
* Added a signature to the request for file changes specified with the *changesUrl* parameter of the [setHistoryData](/editors/methods#setHistoryData) method.
* Added the [document.permissions.protect](/editors/config/document/permissions#protect) field.
* Added the *fileType* parameter to the [onDownloadAs](/editors/config/events#onDownloadAs), [onRequestRestore](/editors/config/events#onRequestRestore) and [onRequestSaveAs](/editors/config/events#onRequestSaveAs) events.
* Added the possibility to insert several images via the [insertImage](/editors/methods#insertImage) method.
* The [assemblyFormatAsOrigin](/editors/save#assemblyFormatAsOrigin) server setting is enabled by default.
* Added the *ooxml* and *odf* values to the [outputtype](/editors/conversionapi#outputtype) parameter of the conversion request.
* Added the *fileType* and *previous.fileType* parameters to the [setHistoryData](/editors/methods#setHistoryData) method.
* Added the [filetype](/editors/callback#filetype) parameter to the *Callback handler*.
* Added the [fileType](/editors/conversionapi#fileType) field to the conversion response.
* Added conversion to [docm, dotm, xlsm, xltm, pptm, potm](/editors/conversionapi#text-matrix) formats.
* The [editorConfig.customization.reviewDisplay](/editors/config/editor/customization#reviewDisplay), [editorConfig.customization.showReviewChanges](/editors/config/editor/customization#showReviewChanges), [editorConfig.customization.trackChanges](/editors/config/editor/customization#trackChanges) parameters are deprecated, please use the [editorConfig.customization.review](/editors/config/editor/customization#review) parameter instead.
* Added the [editorConfig.customization.review.hideReviewDisplay](/editors/config/editor/customization#review) field.
* Added the [editorConfig.customization.review.hoverMode](/editors/config/editor/customization#review) field.
* Added the possibility to view the [document history](/editors/history) of the spreadsheet files.
* Added the [UI\_InsertGraphic](/editors/wopi/postmessage#UI_InsertGraphic) message for the PostMessage WOPI protocol.

## Version 6.4

* Added opening for [oxps](/editors/config/#documentType) format.
* Added support for [WOPI protocol](/editors/wopi/).
* Added the *simple* value to the [editorConfig.customization.reviewDisplay](/editors/config/editor/customization#reviewDisplay) parameter.
* Added the [threaded comments](/editors/commenting#threaded-comments) saving in the spreadsheet files.
* Added the [editorConfig.customization.uiTheme](/editors/config/editor/customization#uiTheme) field.
* Added the possibility to view the [document history](/editors/history) for the presentation files.
* Added the [editorConfig.customization.hideNotes](/editors/config/editor/customization#hideNotes) field.
* Added the [editorConfig.coEditing](/editors/config/editor#coEditing) field.
* Added the [requestClose](/editors/methods#requestClose) method.
* Added the [document.permissions.commentGroups](/editors/config/document/permissions#commentGroups) field.
* Added the [events.onPluginsReady](/editors/config/events#onPluginsReady) event.

## Version 6.3

* Added the [license](/editors/command/license) command.
* Added the [editorConfig.customization.hideRulers](/editors/config/editor/customization#hideRulers) field.
* Added the [editorConfig.customization.anonymous](/editors/config/editor/customization#anonymous) field.
* The [editorConfig.customization.commentAuthorOnly](/editors/config/editor/customization#commentAuthorOnly) field is deprecated, please use the [document.permissions.editCommentAuthorOnly](/editors/config/document/permissions#editCommentAuthorOnly) and [document.permissions.deleteCommentAuthorOnly](/editors/config/document/permissions#deleteCommentAuthorOnly) fields.
* Added the [setFavorite](/editors/methods#setFavorite) method.
* Added the *data.favorite* parameter to the [events.onMetaChange](/editors/config/events#onMetaChange) event.
* Added the [document.info.favorite](/editors/config/document/info#favorite) field.
* Added the [document.permissions.reviewGroups](/editors/config/document/permissions#reviewGroups) field.
* Added conversion to [epub, fb2, html](/editors/conversionapi#text-matrix) formats.
* Added conversion from [xml](/editors/conversionapi#text-matrix) format.

## Version 6.2

* Added a new [actions.type](/editors/callback#actions) field value (*actions.type = 2*).
* Added the [editorConfig.customization.trackChanges](/editors/config/editor/customization#trackChanges) field.
* Added the [editorConfig.customization.toolbarHideFileName](/editors/config/editor/customization#toolbarHideFileName) field.
* The *callbackUrl* for *status* **6** is selected based on [forcesavetype](/editors/callback#used-callbackUrl).
* Added opening for [fb2](/editors/config/#documentType) format.

## Version 6.1

* The *text*, *spreadsheet* and *presentation* values for [documentType](/editors/config/#documentType) parameter is deprecated, please use *word*, *cell* and *slide* values instead.
* Added the *group* field to the [editorConfig.user](/editors/config/editor#user).
* Added conversion from [fb2](/editors/conversionapi#text-matrix) format.

## Version 6.0

* Added the type of insertion in [events.onRequestInsertImage](/editors/config/events#onRequestInsertImage) event.
* Added the [editorConfig.templates](/editors/config/editor#templates) field.
* Added the [editorConfig.customization.plugins](/editors/config/editor/customization#plugins) field.
* Added the [editorConfig.customization.macros](/editors/config/editor/customization#macros) field.
* Added the [editorConfig.customization.macrosMode](/editors/config/editor/customization#macrosMode) field.
* Added the [events.onRequestCreateNew](/editors/config/events#onRequestCreateNew) event.
* Added the [document.permissions.copy](/editors/config/document/permissions#copy) field.
* The [document.permissions.rename](/editors/config/document/permissions#rename) field is deprecated, please add the [events.onRequestRename](/editors/config/events#onRequestRename) field instead.

## Version 5.5

* Added the [editorConfig.customization.spellcheck](/editors/config/editor/customization#spellcheck) field.
* Added conversion to [pdfa](/editors/conversionapi#text-matrix) format.
* Added the [events.onRequestCompareFile](/editors/config/events#onRequestCompareFile) event.
* Added the [setRevisedFile](/editors/methods#setRevisedFile) method.
* Token in [methods](/editors/signature/browser#methods) parameters.
* The [document.permissions.changeHistory](/editors/config/document/permissions#changeHistory) field is deprecated, please add the [events.onRequestRestore](/editors/config/events#onRequestRestore) field instead.
* Added the [editorConfig.customization.goback.requestClose](/editors/config/editor/customization#goback) field.
* Added the [events.onRequestSharingSettings](/editors/config/events#onRequestSharingSettings) event.
* Added the [editorConfig.customization.unit](/editors/config/editor/customization#unit) field.
* Added the [region](/editors/conversionapi#region) field.
* Added the [spreadsheetLayout](/editors/conversionapi#spreadsheetLayout) field.
* Added [input error](/editors/conversionapi#error-codes) for conversion.
* The [events.onRequestSendNotify](/editors/config/events#onRequestSendNotify) event and the [events.onRequestUsers](/editors/config/events#onRequestUsers) event can be set independently.
* Added the [editorConfig.customization.mentionShare](/editors/config/editor/customization#mentionShare) field.
* The *callbackUrl* is selected based on [status](/editors/callback#used-callbackUrl).
* Added the [editorConfig.customization.compatibleFeatures](/editors/config/editor/customization#compatibleFeatures) field.

## Version 5.4

* Added the [editorConfig.region](/editors/config/editor#region) field.
* The [document.info.created](/editors/config/document/info#created) field is deprecated, please use the [document.info.uploaded](/editors/config/document/info#uploaded) field instead.
* The [document.info.author](/editors/config/document/info#author) field is deprecated, please use the [document.info.owner](/editors/config/document/info#owner) field instead.
* The [events.onReady](/editors/config/events#onReady) event is removed.
* The *firstname* and *lastname* fields in the [editorConfig.user](/editors/config/editor#user) object is removed.
* Added the [events.onRequestSaveAs](/editors/config/events#onRequestSaveAs) event.
* Added the [events.onRequestInsertImage](/editors/config/events#onRequestInsertImage) event.
* Added the [insertImage](/editors/methods#insertImage) method.
* Added the [events.onRequestMailMergeRecipients](/editors/config/events#onRequestMailMergeRecipients) event.
* Added the [setMailMergeRecipients](/editors/methods#setMailMergeRecipients) method.
* Added the [setSharingSettings](/editors/methods#setSharingSettings) method.
* Added the [events.onRequestUsers](/editors/config/events#onRequestUsers) event.
* Added the [setUsers](/editors/methods#setUsers) method.
* Added the [events.onRequestSendNotify](/editors/config/events#onRequestSendNotify) event.

## Version 5.3

* Added [conversion](/editors/conversionapi#text-matrix) to the OOXML (dotx, xltx, potx) and ODF (ott, ots, otp) templates.
* Added the [editorConfig.customization.reviewDisplay](/editors/config/editor/customization#reviewDisplay) field.
* The [editorConfig.customization.commentAuthorOnly](/editors/config/editor/customization#commentAuthorOnly) field is now used to restrict comment deletion as well.
* Added the [editorConfig.customization.compactHeader](/editors/config/editor/customization#compactHeader) field.
* Added the [editorConfig.customization.hideRightMenu](/editors/config/editor/customization#hideRightMenu) field.
* Added the [editorConfig.customization.toolbarNoTabs](/editors/config/editor/customization#toolbarNoTabs) field.
* Added [conversion error](/editors/conversionapi#error-codes) for password protected documents.
* Added the [editorConfig.actionLink](/editors/config/editor#actionLink) field.
* Added the [setActionLink](/editors/methods#setActionLink) method.
* Added the [events.onMakeActionLink](/editors/config/events#onMakeActionLink) event.

## Version 5.2

* Token in request [body](/editors/signature/body) parameters.
* [document.permissions.comment](/editors/config/document/permissions#comment) is available in all types of editors.
* Added the [document.permissions.fillForms](/editors/config/document/permissions#fillForms) field.
* Added the [editorConfig.customization.help](/editors/config/editor/customization#help) field.
* Added the possibility to make the [editorConfig.customization.logo](/editors/config/editor/customization#logo) not clickable.
* Added for the [aspect](/editors/conversionapi#thumbnail-aspect) field value *2* for the conversion.

## Version 5.1

* Added the *format* parameter to the [downloadAs](/editors/methods#downloadAs) method.
* Added the [document.permissions.modifyContentControl](/editors/config/document/permissions#modifyContentControl) field.
* Added conversion for [OpenDocument Template](/editors/conversionapi#text-matrix) formats.
* Added the [events.onRequestClose](/editors/config/events#onRequestClose) event.
* Added the [editorConfig.customization.goback.blank](/editors/config/editor/customization#goback) field.

## Version 5.0

* Added the [document.permissions.modifyFilter](/editors/config/document/permissions#modifyFilter) field.
* Added conversion for macro-enabled document, document template and flat document [formats](/editors/conversionapi#text-matrix).
* The [events.onReady](/editors/config/events#onReady) event is deprecated, please use the [events.onAppReady](/editors/config/events#onAppReady) events instead.
* Added the [events.onDocumentReady](/editors/config/events#onDocumentReady) event.
* Added the [editorConfig.plugins.autostart](/editors/config/editor/plugins#autostart) field.
* Added the [events.onWarning](/editors/config/events#onWarning) event.
* Added the [Document Builder service](/editors/documentbuilderapi).

## Version 4.4

* Changed the [showMessage](/editors/methods#showMessage) method.
* Added conversion to [odp](/editors/conversionapi#presentation-matrix) format.
* Added the [document.permissions.comment](/editors/config/document/permissions#comment) field.
* Added the [document.permissions.changeHistory](/editors/config/document/permissions#changeHistory) field.
* Added the [events.onRequestRestore](/editors/config/events#onRequestRestore) event.
* Added the [document.permissions.rename](/editors/config/document/permissions#rename) field.
* Added the [events.onRequestRename](/editors/config/events#onRequestRename) event.
* Added the [meta](/editors/command/meta) command.
* Added the [events.onMetaChange](/editors/config/events#onMetaChange) event.
* Changed the use of *callbackUrl* from the [last user](/editors/callback#used-callbackUrl) who joined the co-editing.
* Added the [editorConfig.location](/editors/config/editor#location) field.

## Version 4.3

* Added the [destroyEditor](/editors/methods#destroyEditor) method.
* Removed the [editorConfig.plugins.url](/editors/config/editor/plugins#url) field from the plugin connection pattern.
* Added the [editorConfig.customization.commentAuthorOnly](/editors/config/editor/customization#commentAuthorOnly) field.
* Added the [editorConfig.customization.forcesave](/editors/config/editor/customization#forcesave) field.
* Added the [editorConfig.customization.showReviewChanges](/editors/config/editor/customization#showReviewChanges) field.
* Added the [forcesavetype](/editors/callback#forcesavetype) field in the callback handler request when force saving the file.
* Added the [JSON format for response](/editors/conversionapi#response) from document conversion service.

## Version 4.2

* The [firstname](/editors/config/editor#user) and [lastname](/editors/config/editor#user) fields is deprecated, please use the [name](/editors/config/editor#user) field instead.
* Added the possibility to specify the values for the [editorConfig.customization.chat](/editors/config/editor/customization#chat) and [editorConfig.customization.comments](/editors/config/editor/customization#comments) in the Open Source version.
* Added the [editorConfig.customization.compactToolbar](/editors/config/editor/customization#compactToolbar) field.
* Added the [editorConfig.customization.zoom](/editors/config/editor/customization#zoom) field.
* Added the [editorConfig.customization.autosave](/editors/config/editor/customization#autosave) field.
* The [changeshistory](/editors/callback#changeshistory) field is removed, please use the [history](/editors/callback#history) field instead.
* Changed the [setHistoryData](/editors/methods#setHistoryData) method.
* Added the possibility to convert files to [thumbnail](/editors/conversionapi#sample-thumbnail) in the [document conversion service](/editors/conversionapi).
* The POST requests are now used for the interaction with the [document command service](/editors/command) and the [document conversion service](/editors/conversionapi).
* Added the [version](/editors/command/version) command.
* Added the [signature](/editors/signature/) for the editor opening and for the incoming and outgoing requests.