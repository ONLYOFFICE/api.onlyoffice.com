---
sidebar_position: -4
---

# 上传大文件

本文将介绍如何使用 DocSpace API Backend 上传大文件。

## 第 1 步. 创建文件上传会话

要上传大小超过 10 MB（10,485,760 字节）的文件，您需要通过向以下[端点](../../../../docspace/api-backend/usage-api/create-upload-session.api.mdx)发送 POST 请求来创建会话：

``` http
POST /api/2.0/files/{folderid}/upload/create_session
```

请求正文必须包含的最少数据：

``` json
{
  "CreateOn": "2024-01-01T12:00:00.600Z",
  "FileName": "name.docx",
  "FileSize": 15728640,
  "folderId": 12345
}
```

响应中将返回包含所创建会话信息的对象：

``` json
{
  "success": true,
  "data": {
    "bytes_total": 15728640,
    "bytes_uploaded": 0,
    "created": "2024-01-01T12:00:00.600Z",
    "expired": "2024-01-01T12:00:00.600Z",
    "id": "00000000000000000000000000000000",
    "location": "https://example.onlyoffice.io/ChunkedUploader.ashx?uid=00000000000000000000000000000000",
    "path": [12345]
  }
}
```

*location* 参数包含用于上传文件块的 URL。

## 第 2 步. 分块并上传文件

将文件拆分为块。每个块的大小必须等于或小于 10 MB（1010241024 字节），且必须是 512 字节的倍数。使用获取到的 URL 上传各个块。

### 注意事项

:::note
请注意以下细节：

- 每个块必须按其在文件中出现的顺序提交。
- 每个块必须是 **512** 字节的倍数，且等于或小于 **10 MB**。
- 接收每个块后，如果未发生错误，服务器将响应上传会话的当前信息。
- 当上传的字节数等于初始请求中发送的字节数时，服务器将响应 **201 Created** 状态，并向您发送有关已上传文件的信息。
:::

请求正文必须包含 **FormData** 对象。

**"Content-type": "multipart/form-data"** 标头类型指定请求正文包含 *multipart* 格式的数据。

上传最后一个块后，服务器将返回以下格式的对象：

``` json
{
  "file": {},
  "folderId": 12345,
  "id": 123456,
  "title": "demo.docx",
  "uploaded": true,
  "version": 1
}
```

以下是 Node.js 示例：

``` ts
const fileResponse = await fetch("url_to_file");
const data = await fileResponse.arrayBuffer();
const size = fileResponse.headers.get("content-length");
const chunkUploadSize = 1024 * 1023;
const folderId = "your_folder_id";

const body = {
  CreateOn: new Date().toISOString(),
  FileName: "file_name",
  FileSize: size,
  folderId,
};

const url = `https://example.onlyoffice.com/api/2.0/files/${folderId}/upload/create_session`;
const sessionResponse = await fetch(url, {
  body: JSON.stringify(body),
  headers: {"Content-Type": "application/json"},
  method: "POST",
});

const session = await sessionResponse.json();

const requestsDataArray = [];
const chunks = Math.ceil(size / chunkUploadSize);
let chunk = 0;

while (chunk < chunks) {
  const offset = chunk * chunkUploadSize;
  const formData = new FormData();
  formData.append("file", new Blob([data.slice(offset, offset + chunkUploadSize)]));
  requestsDataArray.push(formData);
  chunk += 1;
}

let result;
for (const formData of requestsDataArray) {
  const headers = {
    ...formData.getHeaders(),
    "Content-Type": "multipart/form-data",
  };
  result = await fetch(session.data.location, {
    body: formData,
    headers,
    method: "POST",
  });
};
```
