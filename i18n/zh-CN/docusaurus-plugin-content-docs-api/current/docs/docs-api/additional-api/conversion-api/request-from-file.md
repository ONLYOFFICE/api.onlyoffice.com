---
sidebar_position: -3.5
sidebar_label: 文件上传请求
---

import APITable from '@site/src/components/APITable/APITable';

# 文件上传请求

**文档转换服务**可以转换随请求一起发送的文件，因此 ONLYOFFICE 文档无需从**文档存储服务**下载该文件。文件通过 `multipart/form-data` 格式的 POST 请求发送到 `https://documentserver/converter/from-file` 地址，其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

:::info
此端点从 ONLYOFFICE 文档 10.0 版本开始提供。它与[请求](./request.md)端点一样，可通过[服务器设置](../../get-started/configuration/server-config/server-config.md#server) `services.CoAuthoring.server.convertServiceEnable` 关闭。
:::

## 请求部分 {#request-parts}

<APITable>

| 部分 | 类型 | 是否必填 | 描述 |
| ---- | ---- | -------- | ---- |
| file | file | 必填 | 要转换的文件。只能发送一个文件。文件大小受[服务器设置](../../get-started/configuration/server-config/server-config.md#converter) `FileConverter.converter.maxDownloadBytes` 限制。超出限制的文件将被拒绝，并返回 HTTP 413 状态码。仅在[检查异步转换状态](#asynchronous-request)时可以省略该文件。 |
| params | string | 必填 | JSON 对象形式的转换参数。它接受与发送到 `/converter` 地址的[请求](./request.md#请求参数)相同的参数，但不使用 `url`。如果未指定 `filetype`，则从上传文件名的扩展名中获取。如果参数通过令牌发送，则可以省略 `params` 部分。 |
| token | string | 非必填 | 包含转换参数的[令牌](#request-with-token)。令牌也可以作为 `params` 部分的 `token` 字段发送，或通过 `Authorization` 标头发送。 |

</APITable>

包含任何其他部分的请求均无效，并返回 `-7` 错误。

## 响应 {#response}

响应取决于转换结果：

- 转换完成后，响应正文就是转换后的文件本身。`Content-Disposition` 标头中的文件名由 `title` 参数或上传的文件名加上输出格式的扩展名构成。
- 当[异步](#asynchronous-request)转换仍在进行时，将以 JSON 格式返回[响应](./response.md)，其中 `endConvert` 参数为 `false`。
- 发生错误时，将以 JSON 格式返回包含 `error` 参数的响应。可能的值列在[错误代码](./error-codes.md)页面中。

## 请求示例 {#examples-of-requests}

### 将 txt 转换为 docx {#converting-txt-to-docx}

```bash
curl -f -X POST "https://documentserver/converter/from-file" \
  -F 'params={"filetype":"txt","outputtype":"docx","title":"Example Document Title.txt"}' \
  -F 'file=@example.txt' \
  -o "Example Document Title.docx"
```

转换后的 *docx* 文件保存为 *Example Document Title.docx*。

### 异步请求 {#asynchronous-request}

要异步转换大文件，请将 `async` 参数设置为 `true`，并指定 `key` 参数：

```bash
curl -X POST "https://documentserver/converter/from-file?shardkey=Khirz6zTPdfd7" \
  -F 'params={"async":true,"key":"Khirz6zTPdfd7","outputtype":"pdf"}' \
  -F 'file=@example.docx'
```

转换进行期间，将以 JSON 格式返回响应：

```json
{
  "endConvert": false,
  "percent": 0
}
```

要检查状态，请再次发送带有相同 `params` 部分但不含 `file` 部分的请求。转换任务由 `key` 值与其他参数共同标识，因此这些参数不得更改。转换完成后，响应正文就是转换后的文件。

```bash
curl -X POST "https://documentserver/converter/from-file?shardkey=Khirz6zTPdfd7" \
  -F 'params={"async":true,"key":"Khirz6zTPdfd7","outputtype":"pdf"}' \
  -o "example.pdf"
```

:::note
如果没有 `key` 参数，转换任务将由文件内容标识，不重新发送文件就无法检查其状态。在分片集群中，请将 [shardkey](../../get-started/configuration/shard-key.md) 参数添加到查询字符串中，否则请求将以同步方式处理。
:::

### 带令牌的请求 {#request-with-token}

如果对传入请求启用了[令牌](../signature/request/token-in-body.md)验证，则转换参数仅从令牌中获取。令牌的有效负载必须包含值为 `converter` 的 `operation` 字段，且不得包含 `url` 字段。

有效负载示例：

```json
{
  "filetype": "docx",
  "outputtype": "pdf",
  "title": "Example Document Title.docx",
  "operation": "converter"
}
```

**请求：**

```bash
curl -f -X POST "https://documentserver/converter/from-file" \
  -F 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJvdXRwdXR0eXBlIjoicGRmIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJvcGVyYXRpb24iOiJjb252ZXJ0ZXIifQ.d2nBRLobbqCdOmpmtm41cuECtNcIvMwJmLMnNrcNuKg' \
  -F 'file=@example.docx' \
  -o "Example Document Title.pdf"
```
