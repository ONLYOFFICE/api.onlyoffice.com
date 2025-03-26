# 浏览器

在向 ONLYOFFICE 文档服务器执行客户端浏览器请求时，必须将令牌添加到参数中以验证数据。

## 打开文件

在 ONLYOFFICE 文档中[打开](../../get-started/how-it-works/opening-file.md)文件进行编辑时，必须将[令牌](../../usage-api/config/config.md#token)添加到配置中以验证参数。

 JSON 格式的 JWT 令牌的*有效负载*必须与[config](../../usage-api/advanced-parameters.md)具有相同的结构。

> 请注意，从 7.1 版本开始，将严格规范要签名的参数列表。不要忘记将下面列出的所有参数添加到您的签名中。

``` json
{
  "document": {
    "key": "Khirz6zTPdfd7",
    "permissions": {
      "comment": true,
      "commentGroups": {
        "edit": ["Group2", ""],
        "remove": [""],
        "view": ""
      },
      "copy": true,
      "deleteCommentAuthorOnly": false,
      "download": true,
      "edit": true,
      "editCommentAuthorOnly": false,
      "fillForms": true,
      "modifyContentControl": true,
      "modifyFilter": true,
      "print": true,
      "review": true,
      "reviewGroups": ["Group1", "Group2", ""]
    },
    "url": "https://example.com/url-to-example-document.docx"
  },
  "editorConfig": {
    "callbackUrl": "https://example.com/url-to-callback.ashx",
    "mode": "edit",
    "user": {
      "group": "Group1",
      "id": "78e1e841",
      "name": "Smith"
    }
  }
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicGVybWlzc2lvbnMiOnsiY29tbWVudCI6dHJ1ZSwiY29tbWVudEdyb3VwcyI6eyJlZGl0IjpbIkdyb3VwMiIsIiJdLCJyZW1vdmUiOlsiIl0sInZpZXciOiIifSwiY29weSI6dHJ1ZSwiZGVsZXRlQ29tbWVudEF1dGhvck9ubHkiOmZhbHNlLCJkb3dubG9hZCI6dHJ1ZSwiZWRpdCI6dHJ1ZSwiZWRpdENvbW1lbnRBdXRob3JPbmx5IjpmYWxzZSwiZmlsbEZvcm1zIjp0cnVlLCJtb2RpZnlDb250ZW50Q29udHJvbCI6dHJ1ZSwibW9kaWZ5RmlsdGVyIjp0cnVlLCJwcmludCI6dHJ1ZSwicmV2aWV3Ijp0cnVlLCJyZXZpZXdHcm91cHMiOlsiR3JvdXAxIiwiR3JvdXAyIiwiIl19LCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZWRpdG9yQ29uZmlnIjp7ImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2FsbGJhY2suYXNoeCIsIm1vZGUiOiJlZGl0IiwidXNlciI6eyJncm91cCI6Ikdyb3VwMSIsImlkIjoiNzhlMWU4NDEiLCJuYW1lIjoiU21pdGgifX19.irYst9vmsLoQtC-95A-6W8DnbqGXCbmcxJajfbPh6tQ"
}
```

## 方法

### insertImage

调用 [insertImage](../../usage-api/methods.md#insertimage) 方法将图像插入文件时，必须添加令牌 以验证参数。

 JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "c": "add",
    "images": [
      {
        "fileType": "png",
        "url": "https://example.com/url-to-example-image.png"
      }
    ]
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiYWRkIiwiaW1hZ2VzIjpbeyJmaWxlVHlwZSI6InBuZyIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtaW1hZ2UucG5nIn1dfQ._tPxpJrPbom_f83qgX4_AB9v1cfK2LSQsfomfl7zJ58"
}
```

### refreshFile

在调用 [refreshFile](../../usage-api/methods.md#refreshfile) 方法更新文件版本时，必须添加令牌以验证参数。

JWT 令牌的有效载荷（JSON 格式）必须与 [config](../../usage-api/advanced-parameters.md) 结构相同。

  ``` json
  {
    "document": {
      "key": "Khirz6zTPdfd7",
      "permissions": {
        "comment": true,
        "commentGroups": {
          "edit": ["Group2", ""],
          "remove": [""],
          "view": ""
        },
        "copy": true,
        "deleteCommentAuthorOnly": false,
        "download": true,
        "edit": true,
        "editCommentAuthorOnly": false,
        "fillForms": true,
        "modifyContentControl": true,
        "modifyFilter": true,
        "print": true,
        "review": true,
        "reviewGroups": ["Group1", "Group2", ""]
      },
      "url": "https://example.com/url-to-example-document.docx"
    },
    "editorConfig": {
      "callbackUrl": "https://example.com/url-to-callback.ashx",
      "mode": "edit",
      "user": {
        "group": "Group1",
        "id": "78e1e841",
        "name": "Smith"
      }
    }
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicGVybWlzc2lvbnMiOnsiY29tbWVudCI6dHJ1ZSwiY29tbWVudEdyb3VwcyI6eyJlZGl0IjpbIkdyb3VwMiIsIiJdLCJyZW1vdmUiOlsiIl0sInZpZXciOiIifSwiY29weSI6dHJ1ZSwiZGVsZXRlQ29tbWVudEF1dGhvck9ubHkiOmZhbHNlLCJkb3dubG9hZCI6dHJ1ZSwiZWRpdCI6dHJ1ZSwiZWRpdENvbW1lbnRBdXRob3JPbmx5IjpmYWxzZSwiZmlsbEZvcm1zIjp0cnVlLCJtb2RpZnlDb250ZW50Q29udHJvbCI6dHJ1ZSwibW9kaWZ5RmlsdGVyIjp0cnVlLCJwcmludCI6dHJ1ZSwicmV2aWV3Ijp0cnVlLCJyZXZpZXdHcm91cHMiOlsiR3JvdXAxIiwiR3JvdXAyIiwiIl19LCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZWRpdG9yQ29uZmlnIjp7ImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2FsbGJhY2suYXNoeCIsIm1vZGUiOiJlZGl0IiwidXNlciI6eyJncm91cCI6Ikdyb3VwMSIsImlkIjoiNzhlMWU4NDEiLCJuYW1lIjoiU21pdGgifX19.irYst9vmsLoQtC-95A-6W8DnbqGXCbmcxJajfbPh6tQ"
}
```

### setHistoryData

在 ONLYOFFICE 文档中调用[setHistoryData](../../usage-api/methods.md#sethistorydata)方法查看文档[历史](../../get-started/how-it-works/document-history.md)版本时，必须添加令牌以验证参数。

JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "changesUrl": "https://example.com/url-to-changes.zip",
    "key": "Khirz6zTPdfd7",
    "previous": {
      "key": "af86C7e71Ca8",
      "url": "https://example.com/url-to-the-previous-version-of-the-document.docx"
    },
    "url": "https://example.com/url-to-example-document.docx",
    "version": 2
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.7gaOe1_4OvgRLYD0oGk_bMrVdPaLmgZVNIgQCUQdgoE"
}
```

### setMailMergeRecipients

当调用 [setMailMergeRecipients](../../usage-api/methods.md#setmailmergerecipients) 方法将邮件合并的收件人数据插入文件时，必须添加令牌以验证参数。

JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "fileType": "xlsx",
    "url": "https://example.com/url-to-example-recipients.xlsx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ"
}
```

### setReferenceData

当调用 [setReferenceData](../../usage-api/methods.md#setreferencedata) 方法通过外部链接将数据插入电子表格时，必须添加令牌以验证参数。

JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。待签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "fileType": "xlsx",
    "path": "sample.xlsx",
    "referenceData": {
      "fileKey": "BCFA2CED",
      "instanceId": "https://example.com",
      "key": "Khirz6zTPdfd7"
    },
    "url": "https://example.com/url-to-example-document.xlsx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w"
}
```

### setReferenceSource

当调用 [setReferenceSource](../../usage-api/methods.md#setreferencesource) 方法更改外部数据源时，必须添加令牌以验证参数。

 JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。需要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "fileType": "xlsx",
    "path": "sample.xlsx",
    "referenceData": {
      "fileKey": "BCFA2CED",
      "instanceId": "https://example.com",
      "key": "Khirz6zTPdfd7"
    },
    "url": "https://example.com/url-to-example-document.xlsx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w"
}
```

### setRequestedDocument

当调用 [setRequestedDocument](../../usage-api/methods.md#setrequesteddocument) 方法选择要比较或组合的文档时，必须添加token 以验证参数。

JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。需要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "c": "compare",
    "fileType": "docx",
    "url": "https://example.com/url-to-example-document.docx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8"
}
```

### setRequestedSpreadsheet

当调用 [setRequestedSpreadsheet](../../usage-api/methods.md#setrequestedspreadsheet) 方法将邮件合并的收件人数据插入文件时，必须添加令牌以验证参数。

 JSON 格式的 JWT 令牌的有效负载必须与方法参数具有相同的结构。需要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "c": "mailmerge",
    "fileType": "xlsx",
    "url": "https://example.com/url-to-example-recipients.xlsx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌:

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ"
}
```

### setRevisedFile

当调用 [setRevisedFile](../../usage-api/methods.md#setrevisedfile) 方法来选择一个文档进行比较时，必须添加令牌来验证参数。

JSON 格式的 JWT 令牌的有效负载须与方法参数具有相同的结构。要签名的参数列表没有严格规定，但我们建议您指定所有发送的参数：

  ``` json
  {
    "fileType": "docx",
    "url": "https://example.com/url-to-example-document.docx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理] (../../get-started/how-it-works/how-it-works.md) 章节。

示例令牌：

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8"
}
```
