# 事件

事件部分定义了编辑器事件的回调函数。

## onAppReady

应用程序被加载到浏览器中。

**示例**:

```ts
function onAppReady() {
  console.log("ONLYOFFICE Document Editor is ready");
}

const config = {
  // ...
  events: {
    onAppReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onCollaborativeChanges

文档由其他用户以 `strict` 共同编辑模式共同编辑。

**示例**:

```ts
function onCollaborativeChanges() {
  console.log("The document changed by collaborative user");
}

const config = {
  // ...
  events: {
    onCollaborativeChanges,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDocumentReady

文档被加载到文档编辑器中。

**示例**:

```ts
function onDocumentReady() {
  console.log("Document is loaded");
}

const config = {
  // ...
  events: {
    onDocumentReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDocumentStateChange

修改文档时调用的函数。

**参数**：

| 参数       | 类型    | 描述                                                                                           |
| ---------- | ------- | ---------------------------------------------------------------------------------------------- |
| event.data | `boolean` | 当前用户正在编辑文档时为 `true`，当前用户的更改发送到**文档编辑服务**时为 `false`。 |

**示例**:

```ts
function onDocumentStateChange(event) {
  if (event.data) {
    console.log("The document changed");
  } else {
    console.log("Changes are collected on document editing service");
  }
}

const config = {
  // ...
  events: {
    onDocumentStateChange,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDownloadAs

调用 [downloadAs](../methods.md#downloadas) 方法时使用已编辑文件的绝对 URL 调用的函数。

**参数**：

| 参数                | 类型   | 描述                         |
| ------------------- | ------ | ---------------------------- |
| event.data.fileType | `string` | 下载文档的[文件类型](document/document.md#filetype)。 |
| event.data.url      | `string` | 要下载的文档的绝对 URL。     |

**示例**:

```ts
function onDownloadAs(event) {
  const fileType = event.data.fileType;
  const url = event.data.url;
  console.log(`ONLYOFFICE Document Editor create file: ${url}`);
}

const config = {
  // ...
  events: {
    onDownloadAs,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onError

发生错误或其他特定事件时调用的函数。

**参数**：

| 参数                         | 类型   | 描述         |
| ---------------------------- | ------ | ------------ |
| event.data.errorCode         | `number` | [错误代码](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js)。   |
| event.data.errorDescription  | `string` | 错误描述。   |

**示例**:

```ts
function onError(event) {
  console.log(`ONLYOFFICE Document Editor reports an error: code ${event.data.errorCode}, description ${event.data.errorDescription}`);
}

const config = {
  // ...
  events: {
    onError,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onInfo

应用程序打开文件时调用的函数。

**参数**：

| 参数            | 类型                 | 描述         |
| --------------- | -------------------- | ------------ |
| event.data.mode | `"view"` \| `"edit"` | 文件打开模式。 |

**示例**:

```ts
function onInfo(event) {
  console.log(`ONLYOFFICE Document Editor is opened in mode ${event.data.mode}`);
}

const config = {
  // ...
  events: {
    onInfo,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onMakeActionLink

当用户试图获取打开包含书签的文档的链接时调用的函数，滚动到书签位置。要设置书签链接，请调用 [setActionLink](../methods.md#setactionlink) 方法。

:::note
如果未声明此事件，则不会显示*获取链接*按钮。
:::

**参数**：

| 参数                    | 类型   | 描述                                                                                                               |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| event.data              | `object` | 操作数据。必须在配置中用作 [editorConfig.actionLink](./editor/editor.md#actionlink) 参数的值。 |
| event.data.action       | `object` | 定义文档中要滚动到的操作对象。 |
| event.data.action.type  | `"bookmark" \| "comment"` | 文档中的操作类型。 |
| event.data.action.data  | `string` | 与操作关联的数据：书签名称或评论 ID。 |

![onMakeActionLink](/assets/images/editor/onMakeActionLink.png#gh-light-mode-only)![onMakeActionLink](/assets/images/editor/onMakeActionLink.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onMakeActionLink(event) {
  const ACTION_DATA = event.data;
  const link = GENERATE_LINK(ACTION_DATA);
  docEditor.setActionLink(link);
}

const config = {
  // ...
  events: {
    onMakeActionLink,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onMetaChange

通过 [meta](../../additional-api/command-service/meta.md) 命令更改文档的元信息时调用的函数。

**参数**：

| 参数                | 类型    | 描述                     |
| ------------------- | ------- | ------------------------ |
| event.data.title    | `string`  | 文档标题。               |
| event.data.favorite | `boolean` | *收藏*图标高亮状态。     |

:::note
当用户点击 *收藏* 图标时，调用 [setFavorite](../methods.md#setfavorite) 方法更新*收藏*图标高亮状态[信息](./document/info.md#favorite)。如果未声明该方法，则*收藏*图标不会更改。
:::

**示例**:

```ts
function onMetaChange(event) {
  const title = event.data.title;
  const favorite = event.data.favorite;
}

const config = {
  // ...
  events: {
    onMetaChange,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onOutdatedVersion

显示 [错误](../../more-information/troubleshooting.md#the-file-version-has-been-changed) 后调用的函数，当使用旧的 [document.key](./document/document.md#key) 值打开文档进行编辑时。该值用于编辑以前的文档版本并成功保存。调用此事件时，必须使用新的 `document.key` 重新初始化编辑器。

:::danger[Deprecated]
自 8.3 版起已弃用，请改用 [onRequestRefreshFile](#onrequestrefreshfile)。
:::

**示例**:

```ts
function onOutdatedVersion() {
  location.reload(true);
}

const config = {
  // ...
  events: {
    onOutdatedVersion,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onPluginsReady

当所有插件都加载并可以使用时调用的函数。

**示例**:

```ts
function onPluginsReady() {
  console.log("All plugins are loaded");
}

const config = {
  // ...
  events: {
    onPluginsReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestClose

当用户尝试结束编辑器工作并通过单击交叉按钮将其关闭时调用的函数。

:::note
如果未声明此事件，则 [editorConfig.customization.close](./editor/customization/customization-standard-branding.md#close) 参数将不可用，并且不会显示关闭按钮。
:::

**示例**:

```ts
function onRequestClose() {
  if (window.opener) {
    window.close();
    return;
  }
  docEditor.destroyEditor();
}

const config = {
  // ...
  events: {
    onRequestClose,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestCompareFile

当用户尝试通过单击*存储中的文档*按钮来选择要进行比较的文档时调用的函数。

:::note
此事件仅适用于 [ONLYOFFICE 文档企业版](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api)和 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api)。
:::
:::danger[Deprecated]
自版本 7.5 起已弃用，请改用 [onRequestSelectDocument](#onrequestselectdocument)。
:::

## onRequestCreateNew

当用户试图通过单击*新建*按钮来创建新文档时调用的函数。

:::note
此事件用于代替 [createUrl](./editor/editor.md#createurl) 字段。如果未声明此事件且未指定 `createUrl`，则不会显示*新建*按钮。
:::

**示例**:

```ts
function onRequestCreateNew() {
  console.log("Create new document");
}

const config = {
  // ...
  events: {
    onRequestCreateNew,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestEditRights

当用户尝试通过单击*编辑当前文件*按钮将文档从查看模式切换到编辑模式时调用的函数。调用该函数时，必须在编辑模式下再次初始化编辑器。

:::note
如果 [editorConfig.mode](./editor/editor.md#mode) 设置为 `view` 且 [document.permissions.edit](./document/permissions.md#edit) 设置为 `true`，则必须声明此事件才能显示*编辑当前文件*按钮。
:::

![onRequestEditRights](/assets/images/editor/onRequestEditRights.png)
![Edit PDF button](/assets/images/editor/edit-pdf.png#gh-light-mode-only)
![Edit PDF button](/assets/images/editor/edit-pdf.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestEditRights() {
  console.log("ONLYOFFICE Document Editor requests editing rights");
  document.location.reload();
}

const config = {
  // ...
  events: {
    onRequestEditRights,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestFillingStatus

在 PDF 表单填写模式下请求当前角色的填写状态时调用的函数。

**参数**:

| 参数       | 类型     | 描述                         |
| ---------- | -------- | ---------------------------- |
| event.data | `string` | 请求填写状态的角色名称。     |

**示例**:

```ts
function onRequestFillingStatus(event) {
  const role = event.data;
  console.log("Filling status requested for role:", role);
}

const config = {
  // ...
  events: {
    onRequestFillingStatus,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestHistory

当用户试图通过单击*版本历史*按钮来显示文档版本历史时调用的函数。要显示文档版本历史记录，请调用 [refreshHistory](../methods.md#refreshhistory) 方法。

:::note
如果未声明此事件和 [onRequestHistoryData](#onrequesthistorydata) 事件，则不会显示*版本历史*按钮。
:::

<img alt="onRequestHistory" src="/assets/images/editor/onRequestHistory.png#gh-light-mode-only" width="282px" />
<img alt="onRequestHistory" src="/assets/images/editor/onRequestHistory.dark.png#gh-dark-mode-only" width="282px" />

**示例**:

```ts
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
  });
}

const config = {
  // ...
  events: {
    onRequestHistory,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

其中 `changes` 是保存文档后返回的[历史对象](../callback-handler.md#history)的 `changes`。

其中 `serverVersion` 是保存文档后返回的[历史对象](../callback-handler.md#history)中的 `serverVersion`。

## onRequestHistoryClose

当用户试图通过单击*关闭历史记录*按钮查看文档版本历史记录返回文档时调用的函数。调用该函数时，编辑器必须再次初始化，处于编辑模式。

:::note
如果未声明此事件，则不会显示*关闭历史记录*按钮。
:::

![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png#gh-light-mode-only)![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestHistoryClose() {
  document.location.reload();
}

const config = {
  // ...
  events: {
    onRequestHistoryClose,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestHistoryData

当用户尝试单击文档版本历史记录中的特定文档版本时调用的函数。要显示更改，请调用 [setHistoryData](../methods.md#sethistorydata) 方法。调用该方法时，必须添加 token 来验证参数。

:::note
如果未声明此事件和 [onRequestHistory](#onrequesthistory) 事件，则不会显示*版本历史*按钮。
:::

**参数**：

| 参数       | 类型    | 描述           |
| ---------- | ------- | -------------- |
| event.data | `number` | 文档版本号。   |

![onRequestHistoryData](/assets/images/editor/onRequestHistoryData.png#gh-light-mode-only)![onRequestHistoryData](/assets/images/editor/onRequestHistoryData.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestHistoryData(event) {
  const version = event.data;
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
  });
}

const config = {
  // ...
  events: {
    onRequestHistoryData,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

其中 `changesUrl` 是 [JSON 对象](../callback-handler.md#changesurl) 中的 `changesUrl`。

 
## onRequestInsertImage

当用户尝试通过单击*从存储中获取图像*按钮插入图像时调用的函数。要插入图像，请使用指定的命令调用 [insertImage](../methods.md#insertimage) 方法。调用此方法时，必须添加令牌以验证参数。

:::note
如果未声明此事件，则不会显示*从存储中获取图像*按钮。
:::

**参数**：

| 参数         | 类型   | 描述                                                                                    |
| ------------ | ------ | --------------------------------------------------------------------------------------- |
| event.data.c | `"add"` \| `"change"` \| `"fill"` \| `"watermark"` \| `"slide"` | 图像插入的类型。 |

![onRequestInsertImage](/assets/images/editor/onRequestInsertImage.png#gh-light-mode-only)![onRequestInsertImage](/assets/images/editor/onRequestInsertImage.dark.png#gh-dark-mode-only)

**示例**:

```ts
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
  });
}

const config = {
  // ...
  events: {
    onRequestInsertImage,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```


## onRequestMailMergeRecipients

当用户尝试通过单击*邮件合并*按钮选择收件人数据时调用的函数。

:::danger[Deprecated]
自版本 7.5 起已弃用，请改用 [onRequestSelectSpreadsheet](#onrequestselectspreadsheet)。
:::

## onRequestOpen

当用户尝试通过单击*打开源*按钮打开外部链接时调用的函数。要在新选项卡中打开包含 `path` 或 `referenceData` 参数引用的外部文件的编辑器，请通过调用带有 `path` 和 `windowName` 参数的 [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) 方法来传递指向此选项卡的链接。

:::note
如果未声明此事件，则不会显示*打开源*按钮。
:::

**参数**：

| 参数                     | 类型   | 描述                   |
| ------------------------ | ------ | ---------------------- |
| event.data.path          | `string` | 文件路径。             |
| event.data.referenceData | `object` | 来自源文件的唯一文件数据。         |
| event.data.windowName    | `string` | 新浏览器选项卡名称。   |

<img alt="Open source" src="/assets/images/editor/open-source.png" width="498px" />

**示例**:

```ts
function onRequestOpen(event) {
  const path = event.data.path;
  const referenceData = event.data.referenceData;
  const windowName = event.data.windowName;
  window.open("https://example.com/external-url.docx", event.data.windowName);
}

const config = {
  // ...
  events: {
    onRequestOpen,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```


## onRequestReferenceData

当用户尝试通过单击*数据*选项卡的*外部链接*对话框中的*更新值*按钮来刷新从外部文件插入的数据时调用的函数。要刷新数据，请调用 [setReferenceData](../methods.md#setreferencedata) 方法。调用该方法时，必须添加 `token` 来验证参数。当用户运行 [IMPORTRANGE](https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-spreadsheet-editor/Functions/importrange.aspx?from=api) 函数时，也会触发此事件。

:::note
- 如果未声明此事件，则不会显示*粘贴链接*和*更新值*按钮。
- 要将数据发送给 `setReferenceData` 方法，建议先通过 `referenceData` 参数搜索文件。如果没有这样的字段或找不到文件，则使用 `path` 或 `link` 参数。
:::

<img alt="Paste link" src="/assets/images/editor/paste-link.png" width="400px" />

<img alt="Update values" src="/assets/images/editor/update-values.png" width="400px" />

**参数**：

| 参数                     | 类型   | 描述                             |
| ------------------------ | ------ | -------------------------------- |
| event.data.referenceData | `object` | 来自源文件的唯一文件数据。       |
| event.data.path          | `string` | 文件路径或名称。                 |
| event.data.link          | `string` | 外部文件的 URL。                 |

**示例**:

```ts
function onRequestReferenceData(event) {
  const link = event.data.link;
  const referenceData = event.data.referenceData;
  const path = event.data.path;

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
  });
}

const config = {
  // ...
  events: {
    onRequestReferenceData,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestReferenceSource

当用户尝试通过单击*更改源*按钮更改外部数据源时调用的函数。要更改来源，请调用 [setReferenceSource](../methods.md#setreferencesource) 方法。调用该方法时，必须添加 `token` 来验证参数。

:::note
- 如果未声明此事件，则不会显示*更改源*按钮。
- 要将数据发送到 `setReferenceSource` 方法，建议首先通过 `referenceData` 参数搜索文件。如果没有这样的字段或找不到文件，则使用 `path` 参数。
:::

**参数**：

| 参数                     | 类型   | 描述             |
| ------------------------ | ------ | ---------------- |
| event.data.referenceData | `object` | 来自源文件的唯一文件数据。   |
| event.data.path          | `string` | 文件路径或名称。 |

<img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

**示例**:

```ts
function onRequestReferenceSource(event) {
  const referenceData = event.data.referenceData;
  const path = event.data.path;

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
  });
}

const config = {
  // ...
  events: {
    onRequestReferenceSource,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRefreshFile

在以下情况下，将调用该函数来代替 [onOutdatedVersion](#onoutdatedversion) 事件：

- 使用已用于成功保存文件的 [`key`](./document/document.md#key) 打开编辑器时；
- 在编辑器丢失连接并中断编辑会话后重新连接到服务器时。

在这些情况下，将调用 [refreshFile](../methods.md#refreshfile) 方法并更新文件版本，而无需重新加载编辑器。

**示例**:

```ts
function onRequestRefreshFile() {
  docEditor.refreshFile({
    document: {
      fileType: "docx",
      key: "Khirz6zTPdfd7",
      title: "Example Document Title.docx",
      url: "https://example.com/url-to-example-document.docx",
    },
    documentType: "word",
    editorConfig: {
      callbackUrl: "https://example.com/url-to-callback",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.vbezS2aM8Xf8qFzIAsO-jrIsi7VLxjRYkIkwh5jLTJU",
  });
}

const config = {
  // ...
  events: {
    onRequestRefreshFile,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRename

当用户试图通过单击 *重命名...* 按钮重命名文件时调用的函数。

:::note
如果未声明此事件，则不会显示*重命名...*按钮。
:::

**参数**：

| 参数       | 类型   | 描述             |
| ---------- | ------ | ---------------- |
| event.data | `string` | 新文档标题。     |

<img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png#gh-light-mode-only" width="282px" />   
<img alt="onRequestRename" src="/assets/images/editor/onRequestRename.dark.png#gh-dark-mode-only" width="282px" />

**示例**:

```ts
function onRequestRename(event) {
  const title = event.data;
  console.log(`The user is trying to rename the file to: ${title}`);
}

const config = {
  // ...
  events: {
    onRequestRename,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRestore

当用户尝试通过单击版本历史记录中的*恢复*按钮来恢复文件版本时调用的函数。调用该函数时，必须调用 [refreshHistory](../methods.md#refreshhistory) 方法再次初始化版本历史记录。

:::note
如果未声明此事件，则不会显示*恢复*按钮。*恢复*按钮仅对以前的文档版本显示，对当前版本隐藏。
:::

**参数**：

| 参数                | 类型    | 描述                                                                                   |
| ------------------- | ------- | -------------------------------------------------------------------------------------- |
| event.data.version  | `number` | 文档版本号。                                                                           |
| event.data.url      | `string`  | 来自[历史对象](../callback-handler.md#history)的文档链接。在调用文档更改时发送。        |
| event.data.fileType | `string`  | 由 `url` 链接指定的文档类型。                                                          |

![onRequestRestore](/assets/images/editor/onRequestRestore.png#gh-light-mode-only)![onRequestRestore](/assets/images/editor/onRequestRestore.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestRestore(event) {
  const fileType = event.data.fileType;
  const url = event.data.url;
  const version = event.data.version;

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
  });
}

const config = {
  // ...
  events: {
    onRequestRestore,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

其中 `changes` 是保存文档后返回的[历史对象](../callback-handler.md#history)的 `changes`。

其中 `serverVersion` 是保存文档后返回的[历史对象](../callback-handler.md#history)中的 `serverVersion`。

## onRequestSaveAs

当用户试图通过单击*另存为...*按钮来保存文件时调用的函数。

:::note
如果未声明此事件，则不会显示*另存为...*按钮。
:::

**参数**：

| 参数                | 类型   | 描述                         |
| ------------------- | ------ | ---------------------------- |
| event.data.fileType | `string` | 文档类型。                   |
| event.data.title    | `string` | 文档标题。                   |
| event.data.url      | `string` | 要下载的文档的绝对 URL。     |

![onRequestSaveAs](/assets/images/editor/onRequestSaveAs.png#gh-light-mode-only)![onRequestSaveAs](/assets/images/editor/onRequestSaveAs.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestSaveAs(event) {
  const fileType = event.data.fileType;
  const title = event.data.title;
  const url = event.data.url;
}

const config = {
  // ...
  events: {
    onRequestSaveAs,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestSelectDocument

当用户尝试选择文档以进行比较、合并或插入文本时，将调用该函数。要选择文档，请调用 [setRequestedDocument](../methods.md#setrequesteddocument) 方法。调用此方法时，必须添加令牌以验证参数。

**参数**：

| 参数         | 类型   | 描述                                                                    |
| ------------ | ------ | ----------------------------------------------------------------------- |
| event.data.c | `"compare"` \| `"combine"` \| `"insert-text"` | 文档选择类型。 |

![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.png#gh-light-mode-only)![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.dark.png#gh-dark-mode-only)

![插入文本](/assets/images/editor/insert-text.png#gh-light-mode-only)![插入文本](/assets/images/editor/insert-text.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestSelectDocument(event) {
  docEditor.setRequestedDocument({
    c: event.data.c,
    fileType: "docx",
    url: "https://example.com/url-to-example-document.docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
  });
}

const config = {
  // ...
  events: {
    onRequestSelectDocument,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```


## onRequestSelectSpreadsheet

当用户尝试通过单击”邮件合并”按钮选择收件人数据时调用的函数。要选择收件人数据，请调用 [setRequestedSpreadsheet](../methods.md#setrequestedspreadsheet) 方法。调用此方法时，必须添加令牌以验证参数。

**参数**：

| 参数         | 类型   | 描述                                              |
| ------------ | ------ | ------------------------------------------------- |
| event.data.c | `”mailmerge”` | 电子表格选择的类型。 |

![onRequestSelectSpreadsheet](/assets/images/editor/onRequestMailMergeRecipients.png)

**示例**:

```ts
function onRequestSelectSpreadsheet(event) {
  docEditor.setRequestedSpreadsheet({
    c: event.data.c,
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  });
}

const config = {
  // ...
  events: {
    onRequestSelectSpreadsheet,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```


## onRequestSendNotify

当评论中提到用户时调用的函数。要提及的用户列表应通过 [setUsers](../methods.md#setusers) 方法完成。

**参数**：

| 参数                    | 类型     | 描述                                                                                                                   |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| event.data.actionLink   | `object`   | 注释数据。必须在配置中用作 [editorConfig.actionLink](./editor/editor.md#actionlink) 参数的值。 |
| event.data.message      | `string`   | 评论消息。                                                                                                             |
| event.data.emails       | `string[]` | 要通知的用户电子邮件列表。                                                                                             |

**示例**:

```ts
function onRequestSendNotify(event) {
  const ACTION_DATA = event.data.actionLink;
  const comment = event.data.message;
  const emails = event.data.emails;
}

const config = {
  // ...
  events: {
    onRequestSendNotify,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestSharingSettings

当用户试图通过单击*更改访问权限*按钮来管理文档访问权限时调用的函数。当访问权限发生变化时，您必须调用 [setSharingSettings](../methods.md#setsharingsettings) 方法来更新有关允许与其他用户共享文档的设置的[信息](./document/info.md#sharingsettings)。

:::note
如果未声明此事件，则不会显示*更改访问权限*按钮。
:::

![onRequestSharingSettings](/assets/images/editor/onRequestSharingSettings.png#gh-light-mode-only)![onRequestSharingSettings](/assets/images/editor/onRequestSharingSettings.dark.png#gh-dark-mode-only)

**示例**:

```ts
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
  });
}

const config = {
  // ...
  events: {
    onRequestSharingSettings,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestStartFilling

当用户尝试通过单击 PDF 编辑模式下的*开始填写*按钮开始填写准备好的表单时调用的函数。当用户单击*开始填写*按钮时，将调用 [startFilling](../methods.md#startfilling) 方法来锁定 PDF 编辑（仅可查看 PDF）。

:::note
如果未声明此事件，则不会显示*开始填写*按钮。
:::

**参数**:

| 参数               | 类型       | 描述               |
| ------------------ | ---------- | ------------------ |
| event.data         | `object[]` | 角色对象的数组。    |
| event.data[].name  | `string`   | 角色名称。          |
| event.data[].color | `string`   | 十六进制格式的角色颜色（例如 `#FF0000`）。 |

![onRequestStartFilling](/assets/images/editor/onRequestStartFilling.png#gh-light-mode-only)![onRequestStartFilling](/assets/images/editor/onRequestStartFilling.dark.png#gh-dark-mode-only)

**示例**:

```ts
function onRequestStartFilling(event) {
  const roles = event.data;
  console.log("Roles:", roles);
  docEditor.startFilling();
}

const config = {
  // ...
  events: {
    onRequestStartFilling,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestUsers

当用户可以选择其他用户在评论中提及、授予编辑特定工作表范围的访问权限或设置用户头像时调用的函数。要设置用户列表，您必须调用 [setUsers](../methods.md#setusers) 方法，该方法可以根据指定的操作类型采用不同的用户列表。当执行相应的操作时，每个 `c` 类型都会调用一次 `onRequestUsers` 事件。如果使用空列表调用 `setUsers`，则 `onRequestUsers` 事件将再次触发。

**参数**：

| 参数          | 类型     | 描述                                                                                   |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| event.data.c  | `"mention"` \| `"protect"` \| `"info"` | 操作类型。                           |
| event.data.id | `string[]` | 与操作关联的用户 ID 列表。 |

<img alt="onRequestUsers" src="/assets/images/editor/onRequestUsers.png" width="309px" />

<img alt="Protect range" src="/assets/images/editor/protect-range.png" width="292px" />

**示例**:

```ts
function onRequestUsers(event) {
  const c = event.data.c;
  const id = event.data.id;

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
  });
}

const config = {
  // ...
  events: {
    onRequestUsers,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onSaveDocument

将文档保存为二进制数据时调用的函数。

**参数**:

| 参数       | 类型          | 描述                       |
| ---------- | ------------- | -------------------------- |
| event.data | `ArrayBuffer` | 二进制格式的文档文件数据。 |

**示例**:

```ts
function onSaveDocument(event) {
  const buffer = event.data;
  console.log("Document binary size:", buffer.byteLength);
}

const config = {
  // ...
  events: {
    onSaveDocument,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onStartFilling

调用 [startFilling](../methods.md#startfilling) 方法且表单准备完成后，PDF 表单准备就绪可供填写时调用的函数。

**Parameters**:

| Parameter               | Type       | Description        |
| ----------------------- | ---------- | ------------------ |
| event.data              | `object[]` | 角色对象的数组。    |
| event.data[].color      | `string`   | 角色颜色，十六进制格式（例如 `#FF0000`）。 |
| event.data[].name       | `string`   | 角色名称。     |
| event.data[].user       | `object`   | 分配给该角色的用户。 |
| event.data[].user.email | `string`   | 用户电子邮件。    |
| event.data[].user.id    | `string`   | 用户 ID。       |
| event.data[].user.image | `string`   | 用户头像的 URL。 |
| event.data[].user.name  | `string`   | 用户名称。     |

**Example**:

```ts
function onStartFilling(event) {
  const roles = event.data;
  console.log("Roles:", roles);
}

const config = {
  // ...
  events: {
    onStartFilling,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onSubmit

`3` [forcesavetype](../callback-handler.md#forcesavetype) 的强制保存请求成功执行时调用的函数，即点击*完成并提交*按钮并提交表单时调用的函数。

**示例**:

```ts
function onSubmit() {
  console.log("The form was submitted.");
}

const config = {
  // ...
  events: {
    onSubmit,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onUserActionRequired

在以下情况下需要用户操作来打开文档时调用的函数：

- 当用户需要输入密码才能打开受保护的文档时；
- 当用户需要为 `txt` 文件选择编码时；
- 当用户需要为 `csv` 文件选择编码和分隔符时。

**示例**:

```ts
function onUserActionRequired() {
  console.log("Enter a password");
}

const config = {
  // ...
  events: {
    onUserActionRequired,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onWarning

发生警告时调用的函数。

**参数**：

| 参数                           | 类型   | 描述         |
| ------------------------------ | ------ | ------------ |
| event.data.warningCode         | `number` | [警告代码](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js)。   |
| event.data.warningDescription  | `string` | 警告描述。   |

**示例**:

```ts
function onWarning(event) {
  console.log(`ONLYOFFICE Document Editor reports a warning: code ${event.data.warningCode}, description ${event.data.warningDescription}`);
}

const config = {
  // ...
  events: {
    onWarning,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
