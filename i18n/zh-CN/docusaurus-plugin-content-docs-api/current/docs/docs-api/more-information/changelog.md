# 变更日志

ONLYOFFICE 文档 API 的更改列表。

## 版本 9.0

- 添加了 [editorConfig.customization.suggestFeature](../usage-api/config/editor/customization/customization-standard-branding.md#suggestfeature) 参数。
- 更改了 [editorConfig.customization.macros](../usage-api/config/editor/customization/customization-standard-branding.md#macros)：在 9.0.3 版本中，此参数将完全禁用运行、添加和编辑宏（而不仅仅是自动启动）。
- [editorConfig.customization.toolbarHideFileName](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarhidefilename) 参数现已可用于移动编辑器。
- 在 [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) 参数中新增浅色主题和深色主题的主题 ID。
- 新增对 [odg](../usage-api/config/document/document.md#filetype) 格式的打开支持。
- 新增对 [md](../usage-api/config/document/document.md#filetype) 格式的打开支持。
- 新增[预加载](../get-started/configuration/preload.md)编辑器静态资源的能力。
- 针对简体中文界面，新增 [editorConfig.customization.forceWesternFontSize](../usage-api/config/editor/customization/customization-standard-branding.md#forcewesternfontsize) 参数。
- 新增 [editorConfig.customization.layout.header.user](../usage-api/config/editor/customization/customization-white-label.md#layoutheaderuser) 参数。
- 新增对 [vsdm、vsdx、vssm、vssx、vstm、vstx](../additional-api/conversion-api/conversion-tables.md#diagram-document-file-formats) 格式的转换能力。
- 在 [文档类型](../usage-api/config/config.md#documenttype) 参数中新增*diagram*文档类型。

## 版本 8.3 {#version-83}

- 添加了 [editorConfig.customization.features.featuresTips](../usage-api/config/editor/customization/customization-standard-branding.md#featuresfeaturestips) 参数。
- 添加了 [editorConfig.customization.showHorizontalScroll](../usage-api/config/editor/customization/customization-standard-branding.md#showhorizontalscroll) 和 [editorConfig.customization.showVerticalScroll](../usage-api/config/editor/customization/customization-standard-branding.md#showverticalscroll) 参数。
- 添加了 [editorConfig.customization.slidePlayerBackground](../usage-api/config/editor/customization/customization-standard-branding.md#slideplayerbackground) 参数。
- 添加了 [editorConfig.customization.wordHeadingsColor](../usage-api/config/editor/customization/customization-standard-branding.md#wordheadingscolor) 参数。
- 添加了 [editorConfig.customization.mobile.info](../usage-api/config/editor/customization/customization-standard-branding.md#mobileinfo) 参数。
- 添加了 [pages, key, numbers, hwp, hwpx](../usage-api/config/config.md#documenttype) 格式的打开方式。
- 添加了 [events.onUserActionRequired](../usage-api/config/events.md#onuseractionrequired) 事件。
- 添加了 [refreshFile](../usage-api/methods.md#refreshfile) 方法。
- 添加了 [events.onRequestRefreshFile](../usage-api/config/events.md#onrequestrefreshfile) 事件。
- 如果未为 [drop](../additional-api/command-service/drop.md) 命令指定 *users* 参数，则将禁止所有使用指定 *key* 编辑文档的用户编辑文档。
- [editorConfig.customization.submitForm](../usage-api/config/editor/customization/customization-standard-branding.md#submitform) 参数现在可以用作对象。
- [editorConfig.customization.compactToolbar](../usage-api/config/editor/customization/customization-standard-branding.md#compacttoolbar) 参数现在可用于查看器。
- 添加了 [editorConfig.customization.pointerMode](../usage-api/config/editor/customization/customization-standard-branding.md#pointermode) 参数。

## 版本 8.2

- 参数 [editorConfig.customization.mobileForceView](../usage-api/config/editor/customization/customization-standard-branding.md#mobileforceview) 已弃用，请改用 [editorConfig.customization.mobile](../usage-api/config/editor/customization/customization-standard-branding.md#mobile) 参数.
- 在 [WOPI conversion API](../using-wopi/conversion-api.md)中新增 *Password* 和 *PasswordToOpen* 请求参数。
- [editorConfig.region](../usage-api/config/editor/editor.md#region) 字段现用于定义所有编辑器类型的默认度量单位。
- [editorConfig.location](../usage-api/config/editor/editor.md#location) 字段已弃用，请改用 [editorConfig.region](../usage-api/config/editor/editor.md#region) 字段。
- 在 [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) 方法的 *c* 参数中新增 *insert-text* 类型的文档选择。
- [命令服务](../additional-api/command-service/command-service.md)地址 `https://documentserver/coauthoring/CommandService.ashx` 已替换为 `https://documentserver/command`。
- 在 [info](../additional-api/command-service/info.md) 命令的响应中新增 *users* 参数。
- 在 *editorConfig.customization.features* 参数中新增 [tabBackground](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabbackground) 字段。
- 在 *editorConfig.customization.features* 参数中新增 [tabStyle](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabstyle) 字段。
- 在 *editorConfig.customization.logo* 参数中新增 [imageLight](../usage-api/config/editor/customization/customization-standard-branding.md#logoimagelight) 字段。
- [editorConfig.customization.toolbarNoTabs](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarnotabs) 字段已弃用，请改用 [editorConfig.customization.features.tabStyle](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabstyle) 和 [editorConfig.customization.features.tabBackground](../usage-api/config/editor/customization/customization-standard-branding.md#featurestabbackground) 字段。

## 版本 8.1

- 新增 [editorConfig.plugins.options](../usage-api/config/editor/plugins.md#options)参数。
- 新增支持将 *tif* / *tiff* 图像类型[插入](../usage-api/methods.md#insertimage) 文件。
- 添加了 [startFilling](../usage-api/methods.md#startfilling) 方法。
- 添加了 [events.onRequestStartFilling](../usage-api/config/events.md#onrequeststartfilling) 事件。
- 向 WOPI 主机页面的 *form* 元素添加了 [docs\_api\_config](../using-wopi/host-page.md#parameters) 参数。
- 向转换请求添加了 [pdf](../additional-api/conversion-api/request.md#pdf) 字段。
- 添加了 [events.onSubmit](../usage-api/config/events.md#onsubmit) 事件。
- 将 *roles* 字段添加到 [editorConfig.customization.features](../usage-api/config/editor/customization/customization-standard-branding.md#features) 参数。
- 发送时将 [shardkey](../get-started/configuration/shard-key.md) 参数添加到 URL 查询字符串请求到文档命令服务、文档转换服务或文档生成器服务。
- 向 *Automation API* 添加了 [addContextMenuItem](../usage-api/automation-api.md#addcontextmenuitem), [addToolbarMenuItem](../usage-api/automation-api.md#addtoolbarmenuitem) 和 [updateContextMenuItem](../usage-api/automation-api.md#updatecontextmenuitem) 方法。
- 向 Conversion API 添加了 [-10 错误代码](../additional-api/conversion-api/error-codes.md)。
- [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) 参数现在可用于移动编辑器。
- 向 [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) 参数添加了 *visible* 字段。
- 向 WOPI 发现添加了 [formsubmit](../using-wopi/wopi-discovery.md#formsubmit) 操作。
- [editorConfig.customization.goback.requestClose](../usage-api/config/editor/customization/customization-standard-branding.md#goback) 字段已弃用，请使用 [editorConfig.customization.close](../usage-api/config/editor/customization/customization-standard-branding.md#close) 字段。
- 向 WOPI 添加了 [Save Copy As](../using-wopi/wopi-rest-api/putrelativefile.md#save-copy-as) 功能。
- 将 [editorConfig.customization.hideRightMenu](../usage-api/config/editor/customization/customization-standard-branding.md#hiderightmenu) 参数的默认值更改为 *true*。

## 版本 8.0

- 添加了 [document.isForm](../usage-api/config/document/document.md#isform) 参数。
- 在浏览器向服务器的请求中添加了 [WOPISrc](../using-wopi/key-concepts.md#wopisrc) 查询参数。
- 向转化请求添加了 [watermark](../additional-api/conversion-api/request.md#watermark) 字段。
- 在 [documentType](../usage-api/config/config.md#documenttype) 参数中添加了 *pdf* 文档类型。
- 在*回调处理器* 中新增[formsdataurl](../usage-api/callback-handler.md#formsdataurl)参数。
- 向 [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) 事件添加了 *data.id* 参数。
- 将 *users.image* 字段添加到 [setUsers](../usage-api/methods.md#setusers) 方法中。
- 在 [setUsers](../usage-api/methods.md#setusers) 方法和  [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) 事件中新增 *info* 操作类型。
- 在 [editorConfig.user](../usage-api/config/editor/editor.md#user) 参数中添加了 *image* 字段。
- 添加了 [editorConfig.customization.mobileForceView](../usage-api/config/editor/customization/customization-standard-branding.md#mobileforceview) 参数。
- 将 *link* 字段添加到 *data* 对象，该对象发送到 [events.onRequestReferenceData](../usage-api/config/events.md#onrequestreferencedata) 事件。

## 版本 7.5

- 为回调处理程序的 [forcesavetype](../usage-api/callback-handler.md#forcesavetype) 参数添加了类型**3**。
- 添加了 [editorConfig.customization.submitForm](../usage-api/config/editor/customization/customization-standard-branding.md#submitform) 参数。
- [events.onRequestMailMergeRecipients](../usage-api/config/events.md#onrequestmailmergerecipients) 事件已弃用，请使用 [events.onRequestSelectSpreadsheet](../usage-api/config/events.md#onrequestselectspreadsheet) 事件。
- [setMailMergeRecipients](../usage-api/methods.md#setmailmergerecipients) 方法已弃用，请使用 [setRequestedSpreadsheet](../usage-api/methods.md#setrequestedspreadsheet) 方法。
- 添加了 [setReferenceSource](../usage-api/methods.md#setreferencesource) 方法。
- 添加了 [events.onRequestReferenceSource](../usage-api/config/events.md#onrequestreferencesource) 事件。
- 向 Conversion API 添加了 [-9 error code](../additional-api/conversion-api/error-codes.md) -9 错误代码。
- 在 [setReferenceData](../usage-api/methods.md#setreferencedata) 参数中添加了 *key* 字段。
- [events.onRequestCompareFile](../usage-api/config/events.md#onrequestcomparefile) 事件已弃用，请使用 [events.onRequestSelectDocument](../usage-api/config/events.md#onrequestselectdocument) 事件。
- [setRevisedFile](../usage-api/methods.md#setrevisedfile) 方法已弃用，请使用 [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) 方法。
- 添加了 [events.onRequestOpen](../usage-api/config/events.md#onrequestopen) 事件。
- 添加了 [deleteForgotten](../additional-api/command-service/deleteforgotten.md)、 [getForgotten](../additional-api/command-service/getforgotten.md) 和 [getForgottenList](../additional-api/command-service/getforgottenlist.md) 命令。

## 版本 7.4

- 在 WOPI discovery 中新增 [mobileView](../using-wopi/wopi-discovery.md#mobileView) 和 [mobileEdit](../using-wopi/wopi-discovery.md#mobileEdit) 操作。
- 添加了打开 [dps、dpt、et、ett、mhtml、stw、sxc、sxi、sxw、wps、wpt](../usage-api/config/config.md#documenttype) 格式的功能。
- 在 [setUsers](../usage-api/methods.md#setusers) 方法中添加了 *users.id* 字段。
- 在 [setUsers](../usage-api/methods.md#setusers) 方法和 [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) 事件中添加了 *c* 参数。

## 版本 7.3

- 添加了 WOPI [转换 API](../using-wopi/conversion-api.md)。
- 添加了 [setReferenceData](../usage-api/methods.md#setreferencedata) 方法。
- 添加了 [events.onRequestReferenceData](../usage-api/config/events.md#onrequestreferencedata) 事件。
- 添加了 [document.referenceData](../usage-api/config/document/document.md#referencedata) 参数。
- 向 *CheckFileInfo* WOPI 操作添加了 [UserCanNotWriteRelative](../using-wopi/wopi-rest-api/checkfileinfo.md#UserCanNotWriteRelative) 属性。
- 添加了 [编辑二进制文档格式](../using-wopi/editing-binary-documents.md) 的方案。
- 向 WOPI 发现添加了 [convert](../using-wopi/wopi-discovery.md#convert) 操作。
- 添加了 [PutRelativeFile](../using-wopi/wopi-rest-api/putrelativefile.md) WOPI 操作。

## 版本 7.2

- 添加了 [editorConfig.customization.integrationMode](../usage-api/config/editor/customization/customization-standard-branding.md#integrationmode) 参数。
- 添加了 [Connector](../usage-api/automation-api.md) 类，以与外部的文本文档、电子表格、演示文稿和可填写表单进行交互。
- 将*theme-contrast-dark*主题id添加到 [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) 参数中。
- 将 *phone* 字段添加到 [editorConfig.customization.customer](../usage-api/config/editor/customization/customization-standard-branding.md#customer) 参数中。
- 向许可证响应添加 [connections\_view](../additional-api/command-service/license.md#license.connections_view), [users\_view\_count](../additional-api/command-service/license.md#license.users_view_count) 和 [users\_view](../additional-api/command-service/license.md#quota.users_view)。
- 在文本文档、电子表格和演示文稿编辑器中添加了 [实时查看器](../get-started/how-it-works/viewing.md) 模式。
- 将 [embedview](../using-wopi/wopi-discovery.md#embedview) 操作添加到 wopi 发现中。
- [services.CoAuthoring.secret.browser.string](../additional-api/signature/signature.md#parameters) 参数已弃用，请改用 [services.CoAuthoring.secret.inbox.string](../additional-api/signature/signature.md#parameters) 参数。

## 版本 7.1

- 用于启用[正文中令牌](../additional-api/signature/request/token-in-body.md)的 *services.CoAuthoring.token.inbox.inBody* 和 *services.CoAuthoring.token.outbox.inBody* 参数已经弃用。
- 在 [PutFile](../using-wopi/wopi-rest-api/putfile.md) WOPI 操作中添加了 *X-LOOL-WOPI-IsModifiedByUser*、 *X-LOOL-WOPI-IsAutosave* 和 *X-LOOL-WOPI-IsExitSave* 请求标头，以区分文档保存的类型。
- [editorConfig.customization.chat](../usage-api/config/editor/customization/customization-standard-branding.md#chat) 参数已弃用，请改用 [document.permissions.chat](../usage-api/config/document/permissions.md#chat) 参数。
- 添加了从 [dps、dpt、et、ett、htm、mhtml、stw、sxc、sxi、sxw、wps、wpt、xlsb、xml](../additional-api/conversion-api/conversion-tables.md) 格式转换的功能。
- 添加了打开 [xlsb](../usage-api/config/config.md#documenttype) 格式的功能。
- 初始化配置 [signature](../additional-api/signature/browser.md#opening-file) 中的参数列表已得到严格规范。
- [editorConfig.customization.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#spellcheck) 字段已弃用，请改用 [editorConfig.customization.features.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#features) 字段。
- 添加了 [editorConfig.customization.features](../usage-api/config/editor/customization/customization-standard-branding.md#features) 参数部分。
- 在转换请求中添加了 [documentLayout](../additional-api/conversion-api/request.md#documentLayout) 参数。
- 在转换请求中添加了 [documentRenderer](../additional-api/conversion-api/request.md#documentRenderer) 参数。
- 添加了从 [pdf/xps/oxps](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式到 *docx* 的转换。
- 添加了 [document.permissions.userInfoGroups](../usage-api/config/document/permissions.md#userinfogroups) 参数。
- 添加了从 [djvu](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式到 *pdf* 的转换。
- 添加了对 [ppsm、ppsx](../additional-api/conversion-api/conversion-tables.md#presentation-file-formats) 格式的转换。

## 版本 7.0

- 使用来自同一用户的最后一个标签的 [callbackUrl](../usage-api/callback-handler.md)。
- 在 [editorConfig.customization.customer](../usage-api/config/editor/customization/customization-standard-branding.md#customer) 参数中添加了 *logoDark* 字段。
- 在 [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) 参数中添加了 *imageDark* 字段。
- [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) 参数的 *imageEmbedded* 字段已弃用，请改用 *image* 字段。
- 为[setHistoryData](../usage-api/methods.md#sethistorydata)方法的 *changesUrl* 参数指定的文件更改请求添加了签名。
- 添加了 [document.permissions.protect](../usage-api/config/document/permissions.md#protect) 字段。
- 在 [onDownloadAs](../usage-api/config/events.md#ondownloadas), [onRequestRestore](../usage-api/config/events.md#onrequestrestore) 和 [onRequestSaveAs](../usage-api/config/events.md#onrequestsaveas) 事件中添加了 *fileType* 参数。
- 添加了通过 [insertImage](../usage-api/methods.md#insertimage) 方法插入多个图像的可能性。
- [assemblyFormatAsOrigin](../get-started/how-it-works/saving-file.md#saving-in-original-format) 服务器设置默认启用。
- 在转换请求的 [outputtype](../additional-api/conversion-api/request.md#outputtype) 参数中添加了 *ooxml* 和 *odf* 值。
- 向 [setHistoryData](../usage-api/methods.md#sethistorydata) 方法添加了 *fileType* 和 *previous.fileType* 参数。
- 将 [filetype](../usage-api/callback-handler.md#filetype) 参数添加到 *回调处理程序*。
- 在转换响应中添加了 [fileType](../additional-api/conversion-api/response.md#fileType) 字段。
- 添加了到 [docm, dotm, xlsm, xltm, pptm, potm](../additional-api/conversion-api/conversion-tables.md) 格式的转换。
- [editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay), [editorConfig.customization.showReviewChanges](../usage-api/config/editor/customization/customization-standard-branding.md#showreviewchanges), [editorConfig.customization.trackChanges](../usage-api/config/editor/customization/customization-standard-branding.md#trackchanges) 参数已弃用，请改用 [editorConfig.customization.review](../usage-api/config/editor/customization/customization-standard-branding.md#review) 参数。
- 添加了 [editorConfig.customization.review.hideReviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#review) 字段。
- 添加了 [editorConfig.customization.review.hoverMode](../usage-api/config/editor/customization/customization-standard-branding.md#review) 字段。
- 添加了查看电子表格文件的 [文档历史记录](../get-started/how-it-works/document-history.md) 的可能性。
- 为 PostMessage WOPI 协议添加了 [UI\_InsertGraphic](../using-wopi/postmessage.md#UI_InsertGraphic) 消息。

## 版本 6.4

- 增加了打开 [oxps](../usage-api/config/config.md#documenttype) 格式的功能。
- 增加了对 [WOPI 协议](../using-wopi/overview.md) 的支持。
- 将 *simple* 值添加到 [editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay) 参数中。
- 添加了保存在电子表格文件中的 [threaded comments](../get-started/how-it-works/commenting.md#threaded-comments-in-spreadsheets) 线程评论。
- 添加了 [editorConfig.customization.uiTheme](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) 字段。
- 添加了查看演示文件的 [文档历史记录](../get-started/how-it-works/document-history.md) 的可能性。
- 添加了 [editorConfig.customization.hideNotes](../usage-api/config/editor/customization/customization-standard-branding.md#hidenotes) 字段。
- 添加了 [editorConfig.coEditing](../usage-api/config/editor/editor.md#coediting) 字段。
- 添加了 [requestClose](../usage-api/methods.md#requestclose) 方法。
- 添加了 [document.permissions.commentGroups](../usage-api/config/document/permissions.md#commentgroups) 字段。
- 添加了 [events.onPluginsReady](../usage-api/config/events.md#onpluginsready) 事件。

## 版本 6.3

- 添加了 [license](../additional-api/command-service/license.md) 命令。
- 添加了e [editorConfig.customization.hideRulers](../usage-api/config/editor/customization/customization-standard-branding.md#hiderulers) 字段。
- 添加了 [editorConfig.customization.anonymous](../usage-api/config/editor/customization/customization-standard-branding.md#anonymous) 字段。
- [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) 字段已弃用，请使用 [document.permissions.editCommentAuthorOnly](../usage-api/config/document/permissions.md#editcommentauthoronly) 和 [document.permissions.deleteCommentAuthorOnly](../usage-api/config/document/permissions.md#deletecommentauthoronly) 字段。
- 添加了 [setFavorite](../usage-api/methods.md#setfavorite) 方法。
- 将 *data.favorite* 参数添加到 [events.onMetaChange](../usage-api/config/events.md#onmetachange) 事件。
- 添加了 [document.info.favorite](../usage-api/config/document/info.md#favorite) 字段。
- 添加了 [document.permissions.reviewGroups](../usage-api/config/document/permissions.md#reviewgroups) 字段。
- 添加了转换为 [epub, fb2, html](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式的功能。
- 添加了从 [xml](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式转换的功能。

## 版本 6.2

- 添加了一个新的 [actions.type](../usage-api/callback-handler.md#actions) 字段值 (*actions.type = 2*)。
- 添加了 [editorConfig.customization.trackChanges](../usage-api/config/editor/customization/customization-standard-branding.md#trackchanges) 字段。
- 添加了 [editorConfig.customization.toolbarHideFileName](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarhidefilename) 字段。
- 根据 [forcesavetype](../usage-api/callback-handler.md) 选择 *status* **6** 的 *callbackUrl*。
- 增加了打开 [fb2](../usage-api/config/config.md#documenttype) 格式的功能。

## 版本 6.1

- [documentType](../usage-api/config/config.md#documenttype) 参数的 *text*, *spreadsheet* 和 *presentation* 值已弃用，请改用 *word*, *cell* 和 *slide* 值。
- 将 *group* 字段添加到 [editorConfig.user](../usage-api/config/editor/editor.md#user)。
- 添加了从 [fb2](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式的转换的功能。

## 版本 6.0

- 在 [events.onRequestInsertImage](../usage-api/config/events.md#onrequestinsertimage) 事件中添加了插入类型。
- 添加了 [editorConfig.templates](../usage-api/config/editor/editor.md#templates) 字段。
- 添加了 [editorConfig.customization.plugins](../usage-api/config/editor/customization/customization-standard-branding.md#plugins) 字段。
- 添加了 [editorConfig.customization.macros](../usage-api/config/editor/customization/customization-standard-branding.md#macros) 字段。
- 添加了 [editorConfig.customization.macrosMode](../usage-api/config/editor/customization/customization-standard-branding.md#macrosmode) 字段。
- 添加了 [events.onRequestCreateNew](../usage-api/config/events.md#onrequestcreatenew) 事件。
- 添加了 [document.permissions.copy](../usage-api/config/document/permissions.md#copy) 字段。
- The [document.permissions.rename](../usage-api/config/document/permissions.md#rename) 字段已弃用，请添加 [events.onRequestRename](../usage-api/config/events.md#onrequestrename) 字段。

## 版本 5.5

- [转换服务](../additional-api/conversion-api/request.md) 地址 `https://documentserver/ConvertService.ashx` 已替换为 `https://documentserver/converter`。
- 添加了 [editorConfig.customization.spellcheck](../usage-api/config/editor/customization/customization-standard-branding.md#spellcheck) 字段。
- 添加了转换到 [pdfa](../additional-api/conversion-api/conversion-tables.md#text-document-file-formats) 格式的功能。
- 添加了 [events.onRequestCompareFile](../usage-api/config/events.md#onrequestcomparefile) 事件。
- 添加了 [setRevisedFile](../usage-api/methods.md#setrevisedfile) 方法。
- [methods](../additional-api/signature/browser.md#methods) 参数中的Token。
- [document.permissions.changeHistory](../usage-api/config/document/permissions.md#changehistory) 字段已弃用，请添加 [events.onRequestRestore](../usage-api/config/events.md#onrequestrestore) 字段。
- 添加了 [editorConfig.customization.goback.requestClose](../usage-api/config/editor/customization/customization-standard-branding.md#goback) 字段。
- 添加了 [events.onRequestSharingSettings](../usage-api/config/events.md#onrequestsharingsettings) 事件。
- 添加了 [editorConfig.customization.unit](../usage-api/config/editor/customization/customization-standard-branding.md#unit) 字段。
- 添加了 [region](../additional-api/conversion-api/request.md#region) 字段。
- 添加了转换的 [spreadsheetLayout](../additional-api/conversion-api/request.md#spreadsheetLayout) 字段。
- 添加了转换的 [输入错误](../additional-api/conversion-api/error-codes.md)。
- [events.onRequestSendNotify](../usage-api/config/events.md#onrequestsendnotify) 事件和 [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) 事件可以独立设置。
- 添加了 [editorConfig.customization.mentionShare](../usage-api/config/editor/customization/customization-standard-branding.md#mentionshare) 字段。
- [status](../usage-api/callback-handler.md) 选择 *callbackUrl*>。
- 添加了 [editorConfig.customization.compatibleFeatures](../usage-api/config/editor/customization/customization-standard-branding.md#compatiblefeatures) 字段。

## 版本 5.4

- 添加了 [editorConfig.region](../usage-api/config/editor/editor.md#region) 字段。
- [document.info.created](../usage-api/config/document/info.md#created) 字段已弃用，请改用 [document.info.uploaded](../usage-api/config/document/info.md#uploaded) 字段。
- [document.info.author](../usage-api/config/document/info.md#author) 字段已弃用，请改用 [document.info.owner](../usage-api/config/document/info.md#owner) 字段。
- [events.onReady](../usage-api/config/events.md#onready) 事件被移除。
- [editorConfig.user](../usage-api/config/editor/editor.md#user) 对象中的 *firstname* 和 *lastname* 字段被删除。
- 添加了 [events.onRequestSaveAs](../usage-api/config/events.md#onrequestsaveas) 事件。
- 添加了 [events.onRequestInsertImage](../usage-api/config/events.md#onrequestinsertimage) 事件。
- 添加了 [insertImage](../usage-api/methods.md#insertimage) 方法。
- 添加了 [events.onRequestMailMergeRecipients](../usage-api/config/events.md#onrequestmailmergerecipients) 事件。
- 添加了 [setMailMergeRecipients](../usage-api/methods.md#setmailmergerecipients) 方法。
- 添加了 [setSharingSettings](../usage-api/methods.md#setsharingsettings) 方法。
- 添加了e [events.onRequestUsers](../usage-api/config/events.md#onrequestusers) 事件。
- 添加了 [setUsers](../usage-api/methods.md#setusers) 方法。
- 添加了 [events.onRequestSendNotify](../usage-api/config/events.md#onrequestsendnotify) 事件。

## 版本 5.3

- 添加了 [转换](../additional-api/conversion-api/conversion-tables.md) 到OOXML（dotx、 xltx、potx）和 ODF（ott、ots、otp）模板的功能。
- 添加了[editorConfig.customization.reviewDisplay](../usage-api/config/editor/customization/customization-standard-branding.md#reviewdisplay) 字段。
- [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) 字段现在也用于限制评论删除。
- 添加了 [editorConfig.customization.compactHeader](../usage-api/config/editor/customization/customization-standard-branding.md#compactheader) 字段。
- 添加了 [editorConfig.customization.hideRightMenu](../usage-api/config/editor/customization/customization-standard-branding.md#hiderightmenu) 字段。
- 添加了 [editorConfig.customization.toolbarNoTabs](../usage-api/config/editor/customization/customization-standard-branding.md#toolbarnotabs) 字段。
- 为受密码保护的文档添加了 [转换错误](../additional-api/conversion-api/error-codes.md)。
- 添加了 [editorConfig.actionLink](../usage-api/config/editor/editor.md#actionlink) 字段。
- 添加了 [setActionLink](../usage-api/methods.md#setactionlink) 方法。
- 添加了 [events.onMakeActionLink](../usage-api/config/events.md#onmakeactionlink) 事件。

## 版本 5.2

- 请求 [正文](../additional-api/signature/request/token-in-body.md) 参数中的令牌。
- [document.permissions.comment](../usage-api/config/document/permissions.md#comment) 适用于所有类型的编辑器。
- 添加了 [document.permissions.fillForms](../usage-api/config/document/permissions.md#fillforms) 字段。
- 添加了 [editorConfig.customization.help](../usage-api/config/editor/customization/customization-standard-branding.md#help) 字段。
- 添加了使 [editorConfig.customization.logo](../usage-api/config/editor/customization/customization-standard-branding.md#logo) 不可点击的可能性。
- 为转换的 [aspect](../additional-api/conversion-api/request.md#thumbnail.aspect) 字段添加值 *2*。

## 版本 5.1

- 在 [downloadAs](../usage-api/methods.md#downloadas) 方法中添加了 *format* 参数。
- 添加了 [document.permissions.modifyContentControl](../usage-api/config/document/permissions.md#modifycontentcontrol) 字段。
- 添加了 [OpenDocument Template](../additional-api/conversion-api/conversion-tables.md) 格式的转换。
- 添加了 [events.onRequestClose](../usage-api/config/events.md#onrequestclose) 事件。
- 添加了 [editorConfig.customization.goback.blank](../usage-api/config/editor/customization/customization-standard-branding.md#goback) 字段。

## 版本 5.0

- 添加了 [document.permissions.modifyFilter](../usage-api/config/document/permissions.md#modifyfilter) 字段。
- 添加了启用宏的文档、文档模板和平面文档 [格式](../additional-api/conversion-api/conversion-tables.md) 的转换。
- [events.onReady](../usage-api/config/events.md#onready) 事件已弃用，请改用 [events.onAppReady](../usage-api/config/events.md#onappready) 事件。
- 添加了 [events.onDocumentReady](../usage-api/config/events.md#ondocumentready) 事件。
- 添加了 [editorConfig.plugins.autostart](../usage-api/config/editor/plugins.md#autostart) 字段。
- 添加了 [events.onWarning](../usage-api/config/events.md#onwarning) 事件。
- 添加了 [文档生成器服务](../additional-api/document-builder-api.md)。

## 版本 4.4

- 更改了 [showMessage](../usage-api/methods.md#showmessage) 方法。
- 添加了转换到 [odp](../additional-api/conversion-api/conversion-tables.md#presentation-file-formats) 格式的功能。
- 添加了 [document.permissions.comment](../usage-api/config/document/permissions.md#comment) 字段。
- 添加了 [document.permissions.changeHistory](../usage-api/config/document/permissions.md#changehistory) 字段。
- 添加了 [events.onRequestRestore](../usage-api/config/events.md#onrequestrestore) 事件。
- 添加了 [document.permissions.rename](../usage-api/config/document/permissions.md#rename) 字段。
- 添加了 [events.onRequestRename](../usage-api/config/events.md#onrequestrename) 事件。
- 添加了 [meta](../additional-api/command-service/meta.md) 命令。
- 添加了 [events.onMetaChange](../usage-api/config/events.md#onmetachange) 事件。
- 添加了 [最后一个加入共同编辑的用户](../usage-api/callback-handler.md) 对 *callbackUrl* 的使用。
- 添加了 [editorConfig.location](../usage-api/config/editor/editor.md#location) 字段。

## 版本 4.3

- 添加了 [destroyEditor](../usage-api/methods.md#destroyeditor) 方法。
- 从插件连接模式中删除了 [editorConfig.plugins.url](../usage-api/config/editor/plugins.md#url) 方法。
- 添加了 [editorConfig.customization.commentAuthorOnly](../usage-api/config/editor/customization/customization-standard-branding.md#commentauthoronly) 方法。
- 添加了 [editorConfig.customization.forcesave](../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 方法。
- 添加了 [editorConfig.customization.showReviewChanges](../usage-api/config/editor/customization/customization-standard-branding.md#showreviewchanges) 方法。
- 强制保存文件时，在回调处理程序请求中添加了 [forcesavetype](../usage-api/callback-handler.md#forcesavetype) 方法。
- 为文档转换服务的添加了 [JSON 格式响应](../additional-api/conversion-api/response.md)。

## 版本 4.2

- [firstname](../usage-api/config/editor/editor.md#user) 和 [lastname](../usage-api/config/editor/editor.md#user) 字段已弃用，请改用 [name](../usage-api/config/editor/editor.md#user) 字段。
- 添加了在开源版本中为 [editorConfig.customization.chat](../usage-api/config/editor/customization/customization-standard-branding.md#chat) 和 [editorConfig.customization.comments](../usage-api/config/editor/customization/customization-standard-branding.md#comments) 指定值的可能性。
- 添加了 [editorConfig.customization.compactToolbar](../usage-api/config/editor/customization/customization-standard-branding.md#compacttoolbar) 字段。
- 添加了 [editorConfig.customization.zoom](../usage-api/config/editor/customization/customization-standard-branding.md#zoom) 字段。
- 添加了 [editorConfig.customization.autosave](../usage-api/config/editor/customization/customization-standard-branding.md#autosave) 字段。
- [changeshistory](../usage-api/callback-handler.md#changeshistory) 字段已删除，请改用 [history](../usage-api/callback-handler.md#history) 字段。
- 更改了 [setHistoryData](../usage-api/methods.md#sethistorydata) 方法。
- 在 [文档转换服务](../additional-api/conversion-api/request.md) 中添加了将文件转换为 [缩略图](../additional-api/conversion-api/request.md#从-docx-生成-png-缩略图) 的可能性。
- POST 请求现在用于与 [文档命令服务](../additional-api/command-service/command-service.md) 和 [文档转换服务](../additional-api/conversion-api/request.md) 的交互。
- 添加了 [version](../additional-api/command-service/version.md) 命令。
- 添加了编辑器打开和传入传出请求的 [signature](../additional-api/signature/signature.md)。
