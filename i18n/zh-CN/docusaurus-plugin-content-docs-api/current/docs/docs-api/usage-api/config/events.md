# 事件

事件部分允许更改与事件有关的所有功能。

## onAppReady

应用程序被加载到浏览器中。

**示例**:

``` ts
function onAppReady() {
  console.log("ONLYOFFICE Document Editor is ready")
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onAppReady,
  },
})
```

## onCollaborativeChanges

文档由其他用户以 *严格* 共同编辑模式共同编辑。

**示例**:

``` ts
function onCollaborativeChanges() {
  console.log("The document changed by collaborative user")
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onCollaborativeChanges,
  },
})
```

## onDocumentReady

文档被加载到文档编辑器中。

**示例**:

``` ts
function onDocumentReady() {
  console.log("Document is loaded")
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onDocumentReady,
  },
})
```

## onDocumentStateChange

修改文档时调用的函数。使用以下参数调用它：*\{"data": true\}* --适用于当前用户正在编辑文档时。使用以下参数调用它：*\{"data": false\}* --适用于当前用户的更改发送到 **文档编辑服务**时。

**示例**:

``` ts
function onDocumentStateChange(event) {
  if (event.data) {
    console.log("文档已更改")
  } else {
    console.log("Changes are collected on document editing service")
  }
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onDocumentStateChange,
  },
})
```

## onDownloadAs

调用 [downloadAs](../methods.md#downloadas) 方法时使用已编辑文件的绝对 URL 调用的函数。要下载的文档的绝对 URL 及其类型在 *data* 参数中发送。

**示例**:

``` ts
function onDownloadAs(event) {
  const fileType = event.data.fileType
  const url = event.data.url
  console.log(`ONLYOFFICE Document Editor create file: ${url}`)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onDownloadAs,
  },
})
```

## onError

发生错误或其他特定事件时调用的函数。错误消息在 *data* 参数中发送。可以在[此处](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js)找到错误代码列表。

**示例**:

``` ts
function onError(event) {
  console.log(`ONLYOFFICE Document Editor reports an error: code ${event.data.errorCode}, description ${event.data.errorDescription}`)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onError,
  },
})
```

## onInfo

应用程序打开文件时调用的函数。模式在 *data.mode* 参数中发送。可以**查看**或**编辑**。

**示例**:

``` ts
function onInfo(event) {
  console.log(`ONLYOFFICE Document Editor is opened in mode ${event.data.mode}`)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onInfo,
  },
})
```

## onMakeActionLink

当用户试图获取打开包含书签的文档的链接时调用的函数，滚动到书签位置。

要设置书签链接，您必须调用 [setActionLink](../methods.md#setactionlink) 方法。书签数据在 *data* 参数中接收，然后必须在配置中用作 [editorConfig.actionLink](./editor/editor.md#actionlink) 参数的值。如果未声明该方法，则不会显示*获取链接*按钮。

![onMakeActionLink](/assets/images/editor/onMakeActionLink.png#gh-light-mode-only)![onMakeActionLink](/assets/images/editor/onMakeActionLink.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onMakeActionLink(event) {
  const ACTION_DATA = event.data
  const link = GENERATE_LINK(ACTION_DATA)
  docEditor.setActionLink(link)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onMakeActionLink,
  },
})
```

## onMetaChange

通过 [meta](../../additional-api/command-service/meta.md) 命令更改文档的元信息时调用的函数。

文档的名称在 *data.title* 参数中发送。*收藏* 图标高亮状态在 *data.favorite* 参数中发送。

当用户点击 *收藏* 图标时，调用 [setFavorite](../methods.md#setfavorite) 方法更新*收藏*图标高亮状态[信息](./document/info.md#favorite)如果未声明该方法，则*收藏*图标不会更改。

**示例**:

``` ts
function onMetaChange(event) {
  const title = event.data.title
  const favorite = event.data.favorite
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onMetaChange,
  },
})
```

## onOutdatedVersion

显示 [错误](../../more-information/troubleshooting.md#the-file-version-has-been-changed) 后调用的函数，当使用旧的 [document.key](./document/document.md#key) 值打开文档进行编辑时，该值用于编辑以前的文档版本并成功保存。调用此事件时，必须使用新的 *document.key* 重新初始化编辑器。

:::danger[Deprecated]
自 8.3 版起已弃用，请改用 [onRequestRefreshFile](#onrequestrefreshfile)。
:::

**示例**:

``` ts
function onOutdatedVersion() {
  location.reload(true)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onOutdatedVersion,
  },
})
```

## onPluginsReady

当所有插件都加载并可以使用时调用的函数。

**示例**:

``` ts
function onPluginsReady() {}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onPluginsReady,
  },
})
```

## onReady

当应用程序加载到浏览器中时调用的函数。

:::danger[Deprecated]
自 5.0 版起已弃用，请改用 [onAppReady](#onappready)
:::

## onRequestClose

当用户尝试结束编辑器工作并通过单击交叉按钮将其关闭时调用的函数。如果未声明该方法，则 [editorConfig.customization.close](./editor/customization/customization-standard-branding.md#close) 参数将不可用，并且不会显示关闭按钮。

**示例**:

``` ts
function onRequestClose() {
  if (window.opener) {
    window.close()
    return
  }
  docEditor.destroyEditor()
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestClose,
  },
})
```

## onRequestCompareFile

当用户尝试通过单击*存储中的文档*按钮来选择要进行比较的文档时调用的函数。

:::请注意
此事件仅适用于ONLYOFFICE文档企业版和ONLYOFFICE文档开发者版。
:::
:::danger[Deprecated]
自版本 7.5 起已弃用，请改用 [onRequestSelectDocument](#onrequestselectdocument)。
:::

## onRequestCreateNew

当用户试图通过单击*新建*按钮来创建文档时调用的函数。此方法用于代替 [createUrl](./editor/editor.md#createurl) 字段。如果未声明该方法且未指定 *createUrl*，则不会显示*新建*按钮。

**示例**:

``` ts
function onRequestCreateNew() {}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestCreateNew,
  },
})
```

## onRequestEditRights

当用户尝试通过单击*编辑当前文件*按钮将文档从查看模式切换到编辑模式时调用的函数。当用户在 *view* 或 *fillForms* 模式下打开的表单中单击*编辑 PDF* 按钮时，也会触发此事件。调用该函数时，必须在编辑模式下再次初始化编辑器。如果未声明该方法，则不会显示*编辑当前文件*和*编辑 PDF* 按钮。

:::请注意
当 [editorConfig](./editor/editor.md#mode) *模式*参数设置为 **view** 并且*编辑**文档的*权限*([文档权限](./document/permissions.md#edit))设置为 **true** 时，**onRequestEditRights** 参数是强制性的，以便用户可以切换到编辑模式。
:::

![onRequestEditRights](/assets/images/editor/onRequestEditRights.png)
![Edit PDF button](/assets/images/editor/edit-pdf.png#gh-light-mode-only)
![Edit PDF button](/assets/images/editor/edit-pdf.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestEditRights() {
  console.log("ONLYOFFICE Document Editor requests editing rights")
  document.location.reload()
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestEditRights,
  },
})
```

## onRequestHistory

当用户试图通过单击*版本历史*按钮来显示文档版本历史时调用的函数。

要显示文档版本历史记录，您必须调用 [refreshHistory](../methods.md#refreshhistory) 方法。如果未声明该方法和 [onRequestHistoryData](#onrequesthistorydata) 方法，则不会显示*版本历史*按钮。

<img alt="onRequestHistory" src="/assets/images/editor/onRequestHistory.png#gh-light-mode-only" width="282px" />
<img alt="onRequestHistory" src="/assets/images/editor/onRequestHistory.dark.png#gh-dark-mode-only" width="282px" />

**示例**:

``` ts
function onRequestHistory() {
  docEditor.refreshHistory({
    currentVersion: 2,
    history: [
      {
        created: "2010-07-06 10:13 AM",
        key: "af86C7e71Ca8",
        user: {
          id: "F89d8069ba2b",
          name: "Kate Cage",
        },
        version: 1,
      },
      {
        changes,
        created: "2010-07-07 3:46 PM",
        key: "Khirz6zTPdfd7",
        serverVersion,
        user: {
          id: "78e1e841",
          name: "John Smith",
        },
        version: 2,
      },
    ],
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestHistory,
  },
})
```

其中 **changes** 是保存文档后返回的[历史对象](../callback-handler.md#history)的*更改*。

其中 **serverVersion** 是保存文档后返回的[历史对象](../callback-handler.md#history)中的 *serverVersion*。

## onRequestHistoryClose

当用户试图通过单击*关闭历史记录*按钮查看文档版本历史记录返回文档时调用的函数。调用该函数时，编辑器必须再次初始化，处于编辑模式。如果未声明该方法，则不会显示*关闭历史记录*按钮。

![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png#gh-light-mode-only)![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestHistoryClose() {
  document.location.reload()
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestHistoryClose,
  },
})
```

## onRequestHistoryData

当用户尝试单击文档版本历史记录中的特定文档版本时调用的函数。

文档版本号在*data*参数中发送。

要显示与特定文档版本相对应的更改，您必须调用 [setHistoryData](../methods.md#sethistorydata) 方法。调用该方法时，必须添加token来验证参数。如果该方法和 [onRequestHistory](#onrequesthistory) 方法未声明，则不会显示版本历史记录按钮。

![onRequestHistoryData](/assets/images/editor/onRequestHistoryData.png#gh-light-mode-only)![onRequestHistoryData](/assets/images/editor/onRequestHistoryData.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestHistoryData(event) {
  const version = event.data
  docEditor.setHistoryData({
    changesUrl: "https://example.com/url-to-changes.zip",
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    previous: {
      fileType: "docx",
      key: "af86C7e71Ca8",
      url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsiZmlsZVR5cGUiOiJkb2N4Iiwia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4In0.pfPJs9XvCmAnPiUnZYRm0rZGPYHzqfEP7AFRjKg1af4",
    url: "https://example.com/url-to-example-document.docx",
    version,
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestHistoryData,
  },
})
```

其中 [JSON 对象](../callback-handler.md#changesurl) 中的 *changesUrl*。

 其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestInsertImage

当用户尝试通过单击*从存储中获取图像*按钮插入图像时调用的函数。

文档选择的类型在*data.c*参数中指定。

要将图像插入文件，您必须使用指定的命令调用 [insertImage](../methods.md#insertimage) 方法。调用此方法时，必须添加令牌以验证参数。如果未声明该方法，则不会显示*从存储中获取图像*按钮。

![onRequestInsertImage](/assets/images/editor/onRequestInsertImage.png#gh-light-mode-only)![onRequestInsertImage](/assets/images/editor/onRequestInsertImage.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestInsertImage(event) {
  docEditor.insertImage({
    c: event.data.c,
    images: [
      {
        fileType: "png",
        url: "https://example.com/url-to-example-image1.png",
      },
      {
        fileType: "png",
        url: "https://example.com/url-to-example-image2.png",
      },
    ],
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZXMiOlt7ImZpbGVUeXBlIjoicG5nIiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1pbWFnZTEucG5nIn0seyJmaWxlVHlwZSI6InBuZyIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtaW1hZ2UyLnBuZyJ9XX0.ly1O8-6u4Y7WJlgp9O-bJMeffHe0GtaXzyvY2UUFJTg",
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestInsertImage,
  },
})
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestMailMergeRecipients

当用户尝试通过单击*邮件合并*按钮选择收件人数据时调用的函数。

:::danger[Deprecated]
自版本 7.5 起已弃用，请改用 [onRequestSelectSpreadsheet](#onrequestselectspreadsheet)。
:::

## onRequestOpen

当用户尝试通过单击*打开源*按钮打开外部链接时调用的函数。如果未声明该方法，则不会显示此按钮。

要在新选项卡中打开包含 *path*> 或 *referenceData* 参数引用的外部文件的编辑器，您必须通过调用带有 *path* 和 *windowName* 参数的方法 [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open), 来传递指向此选项卡的链接。

具有唯一文件数据、文件路径和新浏览器选项卡名称的对象将在 *data* 参数中发送。

<img alt="Open source" src="/assets/images/editor/open-source.png" width="498px" />

**示例**:

``` ts
function onRequestOpen(event) {
  const path = event.data.path
  const referenceData = event.data.referenceData
  const windowName = event.data.windowName
  window.open({
    path: "https://example.com/external-url.docx",
    windowName: event.data.windowName,
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestOpen,
  },
})
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestReferenceData

当用户尝试通过单击 *数据*选项卡的*外部链接*对话框中的*更新值*按钮来刷新从外部文件插入的数据时调用的函数。

含有来自源文件的唯一文件数据、文件路径或名称以及文件 URL 的对象在 *data*> 参数中发送。

要通过事件参数指定的文件链接刷新数据，您必须调用 [setReferenceData](../methods.md#setreferencedata) 方法。调用该方法时，必须添加token来验证参数。 如果未声明该事件，则不会显示*粘贴链接*和*更新值*按钮。

:::请注意
要将数据发送给*setReferenceData*方法，建议先通过*referenceData*参数搜索文件。如果没有这样的字段或找不到文件，则使用 *path* 参数。
:::

<img alt="Paste link" src="/assets/images/editor/paste-link.png" width="400px" />

<img alt="Update values" src="/assets/images/editor/update-values.png" width="400px" />

当用户运行 [IMPORTRANGE](https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-spreadsheet-editor/Functions/importrange.aspx?from=api) 函数时，也会触发此事件。 *IMPORTRANGE* 参数中使用的源电子表格的 URL 被传递给 *event.data.link* 参数中的 *onRequestReferenceData* 事件。

**示例**:

``` ts
function onRequestReferenceData() {
  const link = event.data.link
  const referenceData = event.data.referenceData
  const path = event.data.path

  docEditor.setReferenceData({
    fileType: "xlsx",
    key: "Khirz6zTPdfd7",
    path: "sample.xlsx",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
    url: "https://example.com/url-to-example-document.xlsx",
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestReferenceData,
  },
})
```

## onRequestReferenceSource

当用户尝试通过单击*更改源*按钮更改外部数据源时调用的函数。

具有唯一文件数据和文件路径或名称的对象在*data* 参数中发送。

单击该按钮时，必须调用 [setReferenceSource](../methods.md#setreferencesource) 方法来更改外部数据的来源。调用该方法时，必须添加token来验证参数。如果未声明事件，则不会显示*更改源*按钮。

:::请注意
要将数据发送到*setReferenceSource*方法，建议首先通过*referenceData*参数搜索文件。如果没有这样的字段或找不到文件，则使用 *path* 参数。
:::

<img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

**示例**:

``` ts
function onRequestReferenceSource() {
  const referenceData = event.data.referenceData
  const path = event.data.path

  docEditor.setReferenceSource({
    fileType: "xlsx",
    key: "Khirz6zTPdfd7",
    path: "sample.xlsx",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
    url: "https://example.com/url-to-example-document.xlsx",
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestReferenceSource,
  },
})
```

## onRequestRefreshFile

在以下情况下，将调用该函数来代替 [onOutdatedVersion](#onoutdatedversion) 事件：

- 使用已用于成功保存文件的 [key](./document/document.md#key) 打开编辑器时；
- 在编辑器丢失连接并中断编辑会话后重新连接到服务器时。

在这些情况下，将调用 [refreshFile](../methods.md#refreshfile) 方法并更新文件版本，而无需重新加载编辑器。

**示例**:

``` ts
function onRequestRefreshFile() {
  refreshFile({
    document: {
      fileType: "docx",
      key: "Khirz6zTPdfd7",
      title: "Example Document Title.docx",
      url: "https://example.com/url-to-example-document.docx",
    },
    documentType: "word",
    editorConfig: {
      callbackUrl: "https://example.com/url-to-callback.ashx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.vbezS2aM8Xf8qFzIAsO-jrIsi7VLxjRYkIkwh5jLTJU",
  })
}
const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestRefreshFile,
  },
})
```

## onRequestRename

当用户试图通过单击 *重命名...* 按钮重命名文件时调用的函数。

:::请注意
在 6.0 版之前，*重命名...* 按钮仅在 [document.permissions.rename](./document/permissions.md#rename) 设置为 **true** 时可用。
:::

<img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png#gh-light-mode-only" width="282px" />   
<img alt="onRequestRename" src="/assets/images/editor/onRequestRename.dark.png#gh-dark-mode-only" width="282px" />

**示例**:

``` ts
function onRequestRename(event) {
  const title = event.data
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestRename,
  },
})
```

## onRequestRestore

当用户尝试通过单击版本历史记录中的*恢复*按钮来恢复文件版本时调用的函数。

如果从历史记录中调用文档版本，则文档版本号将在 *data.version* 参数中发送。此外，如果从[历史对象](../callback-handler.md#history)。此链接指定的文档类型在 *data.fileType* 参数中发送。

调用该函数时，必须调用 [refreshHistory](../methods.md#refreshhistory) 方法再次初始化版本历史记录。如果未声明该方法，则不会显示*恢复*按钮。

:::请注意
*恢复*按钮仅对以前的文档版本显示，对当前版本隐藏。在 5.5 版之前，仅当 [document.permissions.changeHistory](./document/permissions.md#changehistory) 设置为 **true** 时，*恢复* 按钮才可用。
:::

![onRequestRestore](/assets/images/editor/onRequestRestore.png#gh-light-mode-only)![onRequestRestore](/assets/images/editor/onRequestRestore.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestRestore(event) {
  const fileType = event.data.fileType
  const url = event.data.url
  const version = event.data.version

  docEditor.refreshHistory({
    currentVersion: 2,
    history: [
      {
        created: "2010-07-06 10:13 AM",
        key: "af86C7e71Ca8",
        user: {
          id: "F89d8069ba2b",
          name: "Kate Cage",
        },
        version: 1,
      },
      {
        changes,
        created: "2010-07-07 3:46 PM",
        key: "Khirz6zTPdfd7",
        serverVersion,
        user: {
          id: "78e1e841",
          name: "John Smith",
        },
        version: 2,
      },
    ],
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestRestore,
  },
})
```

其中 **changes** 保存文档后返回的[历史对象](../callback-handler.md#history)的*更改*。

其中 **serverVersion** 是保存文档后返回的[历史对象](../callback-handler.md#history)中的 *serverVersion*。

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestSaveAs

当用户试图通过单击*另存为...*按钮来保存文件时调用的函数。文档的标题、其类型和要下载的文档的绝对 URL 在 *data* 参数中发送。如果未声明该方法，将不会显示*另存为...*按钮。

![onRequestSaveAs](/assets/images/editor/onRequestSaveAs.png#gh-light-mode-only)![onRequestSaveAs](/assets/images/editor/onRequestSaveAs.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestSaveAs(event) {
  const fileType = event.data.fileType
  const title = event.data.title
  const url = event.data.url
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestSaveAs,
  },
})
```

## onRequestSelectDocument

当用户尝试选择文档以进行比较、合并或插入文本时，将调用该函数。

文档选择类型在 *data.c* 参数中指定。

要选择文档以进行比较、合并或插入文本，您必须调用 [setRequestedDocument](../methods.md#setrequesteddocument) 方法。

:::请注意
此事件仅适用于ONLYOFFICE文档企业版和 ONLYOFFICE文档开发者版。
:::

![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.png#gh-light-mode-only)![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.dark.png#gh-dark-mode-only)

![插入文本](/assets/images/editor/insert-text.png#gh-light-mode-only)![插入文本](/assets/images/editor/insert-text.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestSelectDocument() {
  docEditor.setRequestedDocument({
    c: event.data.c,
    fileType: "docx",
    url: "https://example.com/url-to-example-document.docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestSelectDocument,
  },
})
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestSelectSpreadsheet

当用户尝试通过单击“邮件合并”按钮选择收件人数据时调用的函数。

电子表格选择的类型在 *data.c* 参数中指定。

要选择收件人数据，您必须调用 [setRequestedSpreadsheet](../methods.md#setrequestedspreadsheet) 方法。调用此方法时，必须添加令牌以验证参数。如果未声明该方法，则*邮件合并*按钮将变淡且无法单击。

![onRequestSelectSpreadsheet](/assets/images/editor/onRequestMailMergeRecipients.png)

**示例**:

``` ts
function onRequestSelectSpreadsheet() {
  docEditor.setRequestedSpreadsheet({
    c: event.data.c,
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestSelectSpreadsheet,
  },
})
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

## onRequestSendNotify

当评论中提到用户时调用的函数。

消息和电子邮件列表在 *data* 参数中发送。注释数据在 *data.actionLink* 参数中接收，然后必须在配置中用作 [editorConfig.actionLink](./editor/editor.md#actionlink) 参数的值。

要提及的用户列表应通过 [setUsers](../methods.md#setusers) 方法完成。

:::请注意
在 5.4 版本中，只有在设置了 [onRequestUsers](#onrequestusers) 事件时才能使用 **onRequestSendNotify** 事件。从 5.5 版开始，**onRequestSendNotify** 和 **onRequestUsers** 之间没有这种依赖关系两者都可以独立设置。
:::

**示例**:

``` ts
function onRequestSendNotify(event) {
  const ACTION_DATA = event.data.actionLink
  const comment = event.data.message
  const emails = event.data.emails
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestSendNotify,
  },
})
```

## onRequestSharingSettings

当用户试图通过单击*更改访问权限*按钮来管理文档访问权限时调用的函数

当访问权限发生变化时，您必须调用 [setSharingSettings](../methods.md#setsharingsettings) 方法来更新有关允许与其他用户共享文档的设置的 [信息](./document/info.md#sharingsettings)。如果未声明该方法，则不会显示*更改访问权限*按钮。

![onRequestSharingSettings](/assets/images/editor/onRequestSharingSettings.png#gh-light-mode-only)![onRequestSharingSettings](/assets/images/editor/onRequestSharingSettings.dark.png#gh-dark-mode-only)

**示例**:

``` ts
function onRequestSharingSettings() {
  docEditor.setSharingSettings({
    sharingSettings: [
      {
        permissions: "Full Access",
        user: "John Smith",
      },
      {
        isLink: true,
        permissions: "Read Only",
        user: "External link",
      },
    ],
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestSharingSettings,
  },
})
```

## onRequestStartFilling

当用户尝试通过单击 pdf 编辑模式下的*开始填写*按钮开始填写准备好的表单时调用的函数。如果未声明事件，则不会显示此按钮。

当用户单击*开始填写*按钮时，将调用 [startFilling](../methods.md#startfilling) 方法来锁定 pdf 编辑（仅可查看 pdf）。

**示例**:

``` ts
function onRequestStartFilling() {
  docEditor.startFilling()
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestStartFilling,
  },
})
```

## onRequestUsers

当用户可以选择其他用户在评论中提及、授予编辑特定工作表范围的访问权限或设置用户头像时调用的函数。

从7.4版本开始，可以在*data.c*参数中指定操作类型。它可以采用两个值 - *mention*或*protect*。在版本 7.4 之前，此事件仅支持mention操作。

从8.0版本开始，新增*info*操作类型，为 *data.id* 参数中指定id的用户设置头像。

要设置用户列表，您必须调用 [setUsers](../methods.md#setusers) 方法，该方法可以根据指定的情况采用不同的用户列表 操作类型。当执行相应的操作时，每个 *c* 类型都会调用一次 *onRequestUsers* 事件。如果使用空列表调用 *setUsers*，则 *onRequestUsers* 事件将再次触发。

<img alt="onRequestUsers" src="/assets/images/editor/onRequestUsers.png" width="309px" />

<img alt="Protect range" src="/assets/images/editor/protect-range.png" width="292px" />

**示例**:

``` ts
function onRequestUsers(event) {
  const c = event.data.c
  const id = event.data.id

  docEditor.setUsers({
    c: event.data.c,
    users: [
      {
        email: "john@example.com",
        id: "78e1e841",
        image: "https://example.com/url-to-user-avatar1.png",
        name: "John Smith",
      },
      {
        email: "kate@example.com",
        id: "F89d8069ba2b",
        image: "https://example.com/url-to-user-avatar2.png",
        name: "Kate Cage",
      },
    ],
  })
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onRequestUsers,
  },
})
```

## onSubmit

*3* [forcesavetype](../callback-handler.md#forcesavetype) 的强制保存请求成功执行时调用的函数，即点击**完成并提交**按钮并提交表单时调用的函数。

**示例**:

``` ts
function onSubmit(event) {
  console.log("The form was submitted.")
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onSubmit,
  },
})
```

## onUserActionRequired

在以下情况下需要用户操作来打开文档时调用的函数：

- 当用户需要输入密码才能打开受保护的文档时；
- 当用户需要为 *txt* 文件选择编码时；
- 当用户需要为 *csv* 文件选择编码和分隔符时。

**示例**:

``` ts
function onUserActionRequired() {
  console.log("Enter a password")
}
const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onUserActionRequired,
  },
})
```

## onWarning

发生警告时调用的函数。警告消息在 *data* 参数中发送。可以在[此处](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js)此处。

**示例**:

``` ts
function onWarning(event) {
  console.log(`ONLYOFFICE Document Editor reports a warning: code ${event.data.warningCode}, description ${event.data.warningDescription}`)
}

const docEditor = new DocsAPI.DocEditor("placeholder", {
  events: {
    onWarning,
  },
})
```
