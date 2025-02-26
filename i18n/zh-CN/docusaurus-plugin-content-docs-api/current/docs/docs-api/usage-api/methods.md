---
sidebar_position: -3
---

# Methods

初始化**文档编辑器**后，您将获得可用于调用方法的对象。

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config)
```

## createConnector

[connector](./automation-api.md) 创建连接器以与外部的文本文档、电子表格、演示文稿和可填充表单交互。

> 此参数仅适用于 ONLYOFFICE 开发者版的编辑。

  ``` ts
  docEditor.createConnector()
  ```

## denyEditingRights

 拒绝编辑。当您想让文档编辑不可用时，可以调用此方法。

  ``` ts
  docEditor.denyEditingRights(message)
  ```

| 参数 | 类型   | 出现 | 描述                           |
| --------- | ------ | -------- | ------------------------------------- |
| message   | string | 可选的 | 定义对话的文本消息。 |

## destroyEditor

销毁 *docEditor* 对象。当您想使用其他配置重新启动文档编辑器时，可以调用此方法。从 4.3 版开始使用。

  ``` ts
  docEditor.destroyEditor()
  ```

## downloadAs

下载编辑后的文件。只有在存在 [onDownloadAs](./config/events.md#ondownloadas) 事件 时才能调用该方法。**文档编辑服务**异步创建文档并使用参数中的链接触发 **onDownloadAs** 事件。

  ``` ts
  docEditor.downloadAs(format)
  ```

| 参数 | 类型   | 出现 | 描述                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format    | string | 可选的 | 定义下载文件的格式。您可以在 [转换表](../additional-api/conversion-api/conversion-tables.md) 中找到所有可能的格式。但是您不能下载 *bmp*, *gif*, *jpg*, *png* 等图像格式的文件。 如果未定义该参数，则根据文件类型以OOXML格式下载文件。 |

> 请注意从 *djvu*, *pdf*, *xps* 格式的转换不可用。将下载原始格式。

## insertImage

将图像插入文件中。从版本 7.0 开始，此方法允许用户插入多个图像。*图像*数组用于执行此操作。此方法必须在 [onRequestInsertImage](./config/events.md#onrequestinsertimage) 事件之后调用。

  ``` ts
  docEditor.insertImage({
    c: "add",
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
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiYWRkIiwiaW1hZ2VzIjpbeyJmaWxlVHlwZSI6InBuZyIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtaW1hZ2UxLnBuZyJ9LHsiZmlsZVR5cGUiOiJwbmciLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWltYWdlMi5wbmcifV19.JfSa__qPeY3MjUgdkJDjdfJWBgvCmEdLfFzjd3WgeUA",
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数       | 类型             | 出现 | 描述                                                                                                                                                                                                                                                                     |
| --------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c               | string           | 必需的 | 从事件中定义一种图像插入类型。可以是：*add*, *change*, *fill*, *watermark*, *slide*. 默认值为"*添加*"。                                                                                                                                         |
| fileType        | string           | 必需的 | 定义要插入文件的图像类型。 可以是：*bmp*, *gif*, *jpe*, *jpeg*, *jpg*, *png*。自 7.0 版起已弃用，请改用 *images.fileType* 参数。                                                                                  |
| images          | array of objects | 必需的 | 定义要插入的图像数组。                                                                                                                                                                                                                                      |
| images.fileType | string           | 必需的 | 定义要插入文件的图像类型。可以是：*bmp*, *gif*, *jpe*, *jpeg*, *jpg*, *png*, *tif*, *tiff*.                                                                                                                                                     |
| images.url      | string           | 必需的 | 定义存储源图像的绝对 URL。使用本地链接时请务必添加 [令牌](../get-started/how-it-works/security.md)。                                                                                                              |
| token           | string           | 可选的 | 定义以 [令牌](../additional-api/signature/browser.md#insertimage) 形式添加到参数的加密签名。                                                                                                                                |
| url             | string           | 必需的 | 定义存储源图像的绝对 URL。使用本地链接时请务必添加 [令牌](../get-started/how-it-works/security.md) 否则会出现错误。 自 7.0 版起已弃用，请改用 *images.url* 参数。 |

  > 在 7.0 版本之前，此方法只允许插入一张图片，并具有以下参数：
  >
  > ``` ts
  > docEditor.insertImage({
  >   c: "add",
  >   fileType: "png",
  >   url: "https://example.com/url-to-example-image.png",
  > })
  >```
  >
  > 请注意，此结构已弃用，下一个编辑器版本将不支持此结构。请使用新的。

## refreshFile

无需重新加载编辑器即可更新文件版本。必须在 [onRequestRefreshFile](./config/events.md#onrequestrefreshfile) 事件之后调用此方法。

此方法必须采用当前文件版本的编辑器初始化配置。配置必须包含用于签署 [open a file](../additional-api/signature/browser.md#opening-file) 进行编辑的请求的所有参数。以下参数无法在配置中更改：[documentType](./config/config.md#documenttype)、[type](./config/config.md#type)、[events](./config/events.md)。

``` ts
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
```

## refreshHistory

显示文档版本历史。此方法必须在 [onRequestHistory](./config/events.md#onrequesthistory) 事件之后调用。

  ``` ts
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
        created: "2010-07-07 3:46 PM",
        key: "Khirz6zTPdfd7",
        user: {
          id: "78e1e841",
          name: "John Smith",
        },
        version: 2,
      },
    ],
  })
  ```

如果在编辑和保存文档后返回带有对象更改和 serverVersion的 *历史记录* ，则在serverVersion参数 中发送 *更改*和 *serverVersion* 中的对象更改。

  ``` ts
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
  ```

其中 **changes** 是保存文档后返回的  [历史对象](./callback-handler.md#history) 的 *更改* 。

其中 **serverVersion** 是保存文档后返回的 [历史对象](./callback-handler.md#history) 中的 *serverVersion*。

显示错误消息，解释为什么无法显示版本历史记录。

  ``` ts
  docEditor.refreshHistory({
    error: "Exception",
  })
  ```

| 参数             | 类型    | 出现 | 描述                                                                                                                                       |
| --------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| currentVersion        | integer | 必需的 | 定义当前文档版本号。                                                                                                      |
| error                 | string  | 可选的 | 定义错误消息文本。                                                                                                                   |
| history               | array   | 必需的 | 使用文档版本定义数组。                                                                                                    |
| history.changes       | object  | 可选的 | 定义保存文档后返回的 [历史对象](./callback-handler.md#history) 的*更改*。                      |
| history.created       | string  | 必需的 | 定义文档版本创建日期。                                                                                                       |
| history.key           | string  | 必需的 | 定义服务用来识别文档的唯一文档标识符。                                                             |
| history.serverVersion | integer | 可选的 | 定义当前服务器版本号。 如果发送 *changes* 参数，则还需要发送 *serverVersion* 参数。 |
| history.user          | object  | 可选的 | 定义作为文档版本作者的用户。                                                                                      |
| history.user.id       | string  | 可选的 | 定义作为文档版本作者的用户的标识符。                                                                    |
| history.user.name     | string  | 可选的 | 定义作为文档版本作者的用户的名称                                                                          |
| history.version       | integer | 必需的 | 定义文档版本号。                                                                                                              |

## requestClose

 请求关闭编辑器。建议在 [destroyEditor](#destroyeditor) 方法之前调用该方法来检查编辑器中是否有一些未保存的数据。 如果存在未保存的数据，则会显示对话框询问用户是否要继续编辑或关闭编辑器，丢失所有未保存的数据。如果选择*关闭*选项，则将调用 [onRequestClose](./config/events.md#onrequestclose) 事件。

  ``` ts
  docEditor.requestClose()
  ```

## setActionLink

设置包含书签的文档的链接。 此方法必须在 [onMakeActionLink](./config/events.md#onmakeactionlink) 事件之后调用。软件集成商必须处理从**文档编辑服务**接收到的 *ACTION_DATA* 以设置链接。 该链接由软件集成商创建，他们在 **文档管理器**中使用 ONLYOFFICE 文档。

  ``` ts
  docEditor.setActionLink(link)
  ```

| 参数 | 类型   | 出现 | 描述                                                                       |
| --------- | ------ | -------- | --------------------------------------------------------------------------------- |
| link      | string | 必需的 | 定义允许滚动到文档中书签位置的链接。 |

## setFavorite

更改 *收藏* 图标状态。此方法必须在 [onMetaChange](./config/events.md#onmetachange) 事件之后调用。

  ``` ts
  docEditor.setFavorite(favorite)
  ```

| 参数 | 类型    | 出现 | 描述                                                                  |
| --------- | ------- | -------- | ---------------------------------------------------------------------------- |
| favorite  | boolean | true     | 定义 *收藏夹* 图标是否突出显示 (**true**) 或不突出显示 (**false**)。 |

## setHistoryData

发送文档链接以查看版本历史。此方法必须在 [onRequestHistoryData](./config/events.md#onrequesthistorydata) 事件之后调用。

  ``` ts
  docEditor.setHistoryData({
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.iRcdHve235L5K1e29SmUBkuHcxb63WHRko51WMJlmS0",
    url: "https://example.com/url-to-example-document.docx",
    version: 2,
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

如果在编辑和保存文档后，返回到包含更改数据的文件的 *changesurl* 链接，请通过此链接下载文件，并在 *changesurl* 参数中发送文件URL。文档上一版本的绝对 URL 地址必须在 *previous.url* 参数中发送。

  ``` ts
  docEditor.setHistoryData({
    changesUrl: "https://example.com/url-to-changes.zip",
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    previous: {
      fileType: "docx",
      key: "af86C7e71Ca8",
      url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsiZmlsZVR5cGUiOiJkb2N4Iiwia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.ril3Ol3rvYne3g0dG8TdKCiwJ7-7kkYGc6-XWMvp8FU",
    url: "https://example.com/url-to-example-document.docx",
    version: 2,
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

发送错误消息，说明文档版本无法显示的原因:

  ``` ts
  docEditor.setHistoryData({
    error: "Exception",
    version: 2,
  })
  ```

| 参数         | 类型    | 出现 | 描述                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| changesUrl        | string  | 可选的 | 定义带有文档更改数据的文件的url地址，可以通过 *changesurl* 链接从保存文档后返回的 [JSON对象](./callback-handler.md#changesurl) 中下载。文件请求使用由 ONLYOFFICE 文档检查的令牌进行签名。            |
| error             | string  | 可选的 | 定义错误消息文本。                                                                                                                                                                                                                                                                                             |
| fileType          | string  | 可选的 | 定义使用 *url* 参数指定的文档的扩展名。                                                                                                                                                                                                                                                    |
| key               | string  | 必需的 | 定义文档标识符，用于明确标识文档文件。                                                                                                                                                                                                                                           |
| previous          | object  | 可选的 | 如果在保存文档后返回 *changesUrl* 地址，则定义上一版本文档的对象。                                                                                                                                                                                                  |
| previous.fileType | string  | 可选的 | 定义使用 *previous.url* 参数指定的文档的扩展。                                                                                                                                                                                                                                           |
| previous.key      | string  | 必需的 | 定义文档先前版本的文档标识符。                                                                                                                                                                                                                                                    |
| previous.url      | string  | 必需的 | 定义上一版本文档的 url 地址。                                                                                                                                                                                                                                                            |
| token             | string  | 可选的 | 定义以 [令牌](../additional-api/signature/browser.md#sethistorydata) 形式添加到参数的加密签名。                                                                                                                                                                        |
| url               | string  | 必需的 | 定义当前文档版本的 url 地址。可以从保存文档后返回的 [JSON](./callback-handler.md#url) 对象中的 *url* 链接下载。使用本地链接时请务必添加 [令牌](../get-started/how-it-works/how-it-works.md)。 否则会出现错误。 |
| version           | integer | 必需的 | 定义文档版本号。                                                                                                                                                                                                                                                                                        |

## setMailMergeRecipients

将邮件合并的收件人数据插入文件中。此方法必须在 [onRequestMailMergeRecipients](./config/events.md#onrequestmailmergerecipients) 事件之后调用。自版本 7.5 起已弃用，请改用 [setRequestedSpreadsheet](#setrequestedspreadsheet)。

  ``` ts
  docEditor.setMailMergeRecipients({
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数 | 类型   | 出现 | 描述                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileType  | string | 必需的 | 定义文件中邮件合并的电子表格类型。可以是：*csv*, *fods*, *ods*, *ots*, *xls*, *xlsm*, *xlsx*, *xlt*, *xltm*, *xltx*。                                                    |
| token     | string | 可选的 | 定义以 [令牌](../additional-api/signature/browser.md#setmailmergerecipients) 形式添加到参数的加密签名。                                         |
| url       | string | 必需的 | 定义存储源数据的绝对 URL。使用本地链接时请务必添加 [令牌](../get-started/how-it-works/security.md)。否则会出现错误。 |

## setReferenceData

通过指向文件的链接刷新数据, 该链接使用 *referenceData*、*path* 或 *link* 参数指定。 此方法必须在 [onRequestReferenceData](./config/events.md#onrequestreferencedata) 事件之后调用。

  > 此参数仅可用于 ONLYOFFICE 开发者版的编辑。

  > 请注意，仅当用户有权访问要从中获取数据的文件时，才会执行此方法。

  ``` ts
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
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

显示错误消息，说明是否有错误发生：

  ``` ts
  docEditor.setReferenceData({
    error: "Exception",
  })
  ```

| 参数     | 类型   | 出现 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error         | string | 可选的 | 定义错误消息文本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fileType      | string | 可选的 | 定义用 *url* 参数指定的文档的扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| key           | string | 可选的 | 定义服务用于从共同编辑会话获取数据的唯一文档标识符。如果发送已知密钥，将从缓存中获取文档。每次编辑并保存文档时，都必须重新生成密钥。 文档 url 可以用作**key**，但不能包含特殊字符，且长度限制为 128 个符号。                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| path          | string | 必需的 | 定义公式编辑器的文件名或相对路径。它用于在执行 [onRequestReferenceData](./config/events.md#onrequestreferencedata) 事件时识别文件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| referenceData | object | 可选的 | 定义由集成商生成的对象，用于唯一标识其系统中的文件。此数据必须与 [document.referenceData](./config/document/document.md#referencedata) 配置参数中的相同：<br/><br/>**fileKey** - 服务用来获取文件链接的唯一文档标识符。在编辑和保存文档时不得更改它（即它不等于 [document.key](./config/document/document.md#key) 参数）,<br/>**type**: string,<br/>**example**: "BCFA2CED";<br/><br/>**instanceId** -  唯一的系统标识符。 如果数据是从一个系统上的文件复制的，然后插入到另一个系统上的文件中，那么通过链接粘贴将不可用，并且上下文菜单中将没有相应的按钮，<br/>**type**: string,<br/>**example**: `https://example.com`. |
| token         | string | 可选的 | 以 [令牌](../additional-api/signature/browser.md#setreferencedata) 的形式定义添加到参数的加密签名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| url           | string | 必需的 | 定义下载当前文件的 URL 地址。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## setReferenceSource

更改外部数据源。该方法可以在 [onRequestReferenceSource](./config/events.md#onrequestreferencesource) 事件之后调用。

  > 请注意，仅当用户对要从中获取数据的文件具有权限时才会执行此方法。

  ``` ts
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
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

显示一条错误消息，解释是否发生任何错误：

  ``` ts
  docEditor.setReferenceSource({
    error: "Exception",
  })
  ```

| 参数     | 类型   | 出现 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error         | string | 可选的 | 定义错误消息文本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fileType      | string | 可选的 | 定义用 *url* 参数指定的文档的扩展名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| key           | string | 可选的 | 定义服务用于从共同编辑会话获取数据的唯一文档标识符。如果发送已知密钥，将从缓存中获取文档。每次编辑并保存文档时，都必须重新生成密钥。文档 url 可以用作**key**，但不能包含特殊字符，且长度限制为 128 个符号。                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| path          | string | 必需的 | 定义公式编辑器的文件名或相对路径。 它用于在执行 [onRequestReferenceSource](./config/events.md#onrequestreferencesource) 事件时识别文件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| referenceData | object | 可选的 | 定义由集成商生成的对象，用于唯一标识其系统中的文件。此数据必须与 [document.referenceData](./config/document/document.md#referencedata) 配置参数中的相同：<br/><br/>**fileKey** - 服务用来获取文件链接的唯一文档标识符。在编辑和保存文档时不得更改它（即它不等于 [document.key](./config/document/document.md#key) 参数),<br/>**type**: string,<br/>**example**: "BCFA2CED";<br/><br/>**instanceId** - 唯一的系统标识符。 如果数据是从一个系统上的文件复制的，然后插入到另一个系统上的文件中，那么通过链接粘贴将不可用，并且上下文菜单中将没有相应的按钮，<br/>**type**: string,<br/>**example**: `https://example.com`. |
| token         | string | 可选的 | 定义以 [令牌](../additional-api/signature/browser.md#setreferencesource) 形式添加到参数的加密签名。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| url           | string | 必需的 | 定义下载当前文件的 URL 地址。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## setRequestedDocument

选择用于比较、合并或插入文本的文档。该方法可以在 [onRequestSelectDocument](./config/events.md#onrequestselectdocument) 事件之后调用。

> 此参数仅可用于 ONLYOFFICE 企业版和 ONLYOFFICE 开发者版。

  ``` ts
  docEditor.setRequestedDocument({
    c: "compare",
    fileType: "docx",
    url: "https://example.com/url-to-example-document.docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数 | 类型   | 出现 | 描述                                                                                                                                                                                            |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| c         | string | 必需的 | 定义从事件中选择的文档类型。 可以是： *compare*、*combine*、*insert-text*. 默认值为"compare"。                                                                   |
| fileType  | string | 必需的 | 您定义要选择的文档的类型。可以是：*doc*, *docm*, *docx*, *dot*, *dotm*, *dotx*, *epub*, *fodt*, *odt*, *ott*, *rtf*, *wps*.                                                       |
| token     | string | 可选的 | 以 [令牌](../additional-api/signature/browser.md#setrequesteddocument) 的形式定义添加到参数的加密签名。                                             |
| url       | string | 必需的 | 定义存储源文档的绝对 URL。 使用本地链接时，请务必添加 [令牌](../get-started/how-it-works/security.md)。否则会出现错误。 |

## setRequestedSpreadsheet

将邮件合并的收件人数据插入到文件中。必须在 [onRequestSelectSpreadsheet](./config/events.md#onrequestselectspreadsheet) 事件之后调用此方法。

  ``` ts
  docEditor.setRequestedSpreadsheet({
    c: "mailmerge",
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数 | 类型   | 出现 | 描述                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c         | string | 必需的 | 定义从事件中选择的电子表格类型。 可以是 *mailmerge*。                                                                                                                        |
| fileType  | string | 必需的 | 定义文件中邮件合并的电子表格类型。可以是：*csv*, *fods*, *ods*, *ots*, *xls*, *xlsm*, *xlsx*, *xlt*, *xltm*, *xltx*.                                                     |
| token     | string | 可选的 | 以 [令牌](../additional-api/signature/browser.md#setrequestedspreadsheet) 的形式定义添加到参数的加密签名。                                        |
| url       | string | 必需的 | 定义存储源数据的绝对 URL。 使用本地链接时，请务必添加 [令牌](../get-started/how-it-works/security.md) 令牌。否则会出现错误。 |

## setRevisedFile

选择一个文档进行比较。此方法必须在 [onRequestCompareFile](./config/events.md#onrequestcomparefile) 事件之后调用。自版本 7.5 起已弃用，请改用 [setRequestedDocument](#setrequesteddocument)。

> 此参数仅可用于 ONLYOFFICE 企业版和 ONLYOFFICE 开发者版。

  ``` ts
  docEditor.setRevisedFile({
    fileType: "docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
    url: "https://example.com/url-to-example-document.docx",
  })
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数 | 类型   | 出现 | 描述                                                                                                                                                                                            |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileType  | string | 必需的 | 定义要比较的文档类型。可以是：*doc*, *docm*, *docx*, *dot*, *dotm*, *dotx*, *epub*, *fodt*, *odt*, *ott*, *rtf*, *wps*.                                                          |
| token     | string | 可选的 | 定义以 [令牌](../additional-api/signature/browser.md#setrevisedfile) 形式添加到参数的加密签名。                                                   |
| url       | string | 必需的 | 定义存储源文档的绝对 URL。使用本地链接时请务必添加 [令牌](../get-started/how-it-works/security.md)。否则会出现错误。 |

## setSharingSettings

更新有关允许与其他用户共享文档的设置的 [信息](./config/document/info.md#sharingsettings)。该方法可以在 [onRequestSharingSettings](./config/events.md#onrequestsharingsettings) 事件之后调用。

  ``` ts
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
  ```

| 参数                   | 类型            | 出现 | 描述                                                             |
| --------------------------- | --------------- | -------- | ----------------------------------------------------------------------- |
| sharingSettings             | 对象数组 | 可选的 | 定义允许与其他用户共享文档的设置。 |
| sharingSettings.permissions | string          | 可选的 | 定义具有上述名称的用户的访问权限。             |
| sharingSettings.user        | string          | 可选的 | 定义将与之共享文档的用户的名称。    |

## setUsers

设置用户列表、用来在评论中提及、授予编辑特定工作表范围的访问权限，或设置用户头像。此方法必须在 [onRequestUsers](./config/events.md#onrequestusers) 事件之后调用。

  ``` ts
  docEditor.setUsers({
    c: "protect",
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
  ```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅 [工作原理](../../get-started/how-it-works/how-it-works.md) 部分。

| 参数   | 类型             | 出现 | 描述                                                                                                                                                                                                      |
| ----------- | ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c           | string           | 必需的 | 定义 [onRequestUsers](./config/events.md#onrequestusers) 事件的操作类型。它可以采用以下值之一 - *mention*, *protect* 或 *info*。T默认值为 *mention*。|
| users       | array of strings | 可选的 | 定义用户列表。                                                                                                                                                                                   |
| users.email | string           | 可选的 | 定义用户的电子邮件地址。 当 *c* 参数为 *mention* 时，此字段是必需的。                                                                                                              |
| users.id    | string           | 可选的 | 定义用户的身份。当 *c* 参数为*protect*时，此字段是必需的。                                                                                                              |
| users.image | string           | 可选的 | 定义用户头像的路径。 当*c*参数为*info*时，此字段是必需的。                                                                                                                  |
| users.name  | string           | 可选的 | 定义用户的全名。                                                                                                                                                                               |

> 请注意，对用户头像的请求是未经授权发送的，因为头像 URL 被插入到编辑器框架的 HTML 中。 此外，还可能出现CORS问题。 在这种情况下，请使用base64格式的头像。例如，*"data:image/png,base64,\*\*\*\*\*"*。

> 请注意，如果您订阅了 *onRequestUsers* 事件并使用 *setUsers* 方法发送头像，则 [user.image](./config/editor/editor.md#user) 初始化配置中的字段不是必需的。如果头像以base64格式发送并且初始化配置使用JWT签名，我们特别不建议指定此参数。 在这种情况下，令牌就会太长。

## showMessage

显示带有消息的工具提示。 该方法只能在 [onAppReady](./config/events.md#onappready) 事件之后调用。

  ``` ts
  docEditor.showMessage(message)
  ```

| 参数 | 类型   | 出现 | 描述               |
| --------- | ------ | -------- | ------------------------- |
| message   | string | 必需的 | 定义消息文本。 |

> 请注意，嵌入式平台 [类型](./config/config.md#type) 不支持显示带有消息的工具提示。

## startFilling

开始填写准备好的表格并锁定 pdf 编辑（仅可查看 pdf）。 仅在 [onRequestStartFilling](./config/events.md#onrequeststartfilling) 事件之后才可调用此方法。

  ``` ts
  docEditor.startFilling()
  ```
