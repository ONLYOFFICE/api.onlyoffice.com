---
sidebar_position: -3.5
sidebar_label: File upload request
---

import APITable from '@site/src/components/APITable/APITable';

# File upload request

The **document conversion service** can convert a file sent in the request itself, so ONLYOFFICE Docs does not need to download it from the **document storage service**. The file is sent with a POST request in the `multipart/form-data` format to the `https://documentserver/converter/from-file` address, where **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

:::info
This endpoint is available in ONLYOFFICE Docs starting with version 10.0. It is turned off together with the [request](./request.md) endpoint by the `services.CoAuthoring.server.convertServiceEnable` [server setting](../../get-started/configuration/server-config/server-config.md#server).
:::

## Request parts

<APITable>

| Part | Type | Presence | Description |
| ---- | ---- | -------- | ----------- |
| file | file | required | The file to convert. Only one file can be sent. Its size is limited by the `FileConverter.converter.maxDownloadBytes` [server setting](../../get-started/configuration/server-config/server-config.md#converter). A larger file is rejected with the HTTP 413 status code. The file can be omitted only when [checking the status](#asynchronous-request) of an asynchronous conversion. |
| params | string | required | The conversion parameters as a JSON object. It takes the same parameters as the [request](./request.md#request-parameters) to the `/converter` address, except `url`, which is not used. If `filetype` is not specified, it is taken from the extension of the uploaded file name. The `params` part can be omitted if the parameters are sent in a token. |
| token | string | optional | The [token](#request-with-token) with the conversion parameters. The token can also be sent as the `token` field of the `params` part or in the `Authorization` header. |

</APITable>

Any other part makes the request invalid, and the `-7` error is returned.

## Response

The response depends on the conversion result:

- When the conversion is completed, the response body is the converted file itself. The file name in the `Content-Disposition` header is formed from the `title` parameter or the uploaded file name, with the extension of the output format.
- When an [asynchronous](#asynchronous-request) conversion is still in progress, the [response](./response.md) is returned in JSON format with the `endConvert` parameter set to `false`.
- When an error occurs, the response is returned in JSON format with the `error` parameter. The possible values are listed on the [error codes](./error-codes.md) page.

## Examples of requests

### Converting txt to docx

```bash
curl -f -X POST "https://documentserver/converter/from-file" \
  -F 'params={"filetype":"txt","outputtype":"docx","title":"Example Document Title.txt"}' \
  -F 'file=@example.txt' \
  -o "Example Document Title.docx"
```

The converted *docx* file is saved as *Example Document Title.docx*.

### Asynchronous request

To convert a large file asynchronously, set the `async` parameter to `true` and specify the `key` parameter:

```bash
curl -X POST "https://documentserver/converter/from-file?shardkey=Khirz6zTPdfd7" \
  -F 'params={"async":true,"key":"Khirz6zTPdfd7","outputtype":"pdf"}' \
  -F 'file=@example.docx'
```

While the conversion is in progress, the response is returned in JSON format:

```json
{
  "endConvert": false,
  "percent": 0
}
```

To check the status, send the request with the same `params` part again, but without the `file` part. The conversion task is identified by the `key` value together with the other parameters, so they must not change. When the conversion is completed, the response body is the converted file.

```bash
curl -X POST "https://documentserver/converter/from-file?shardkey=Khirz6zTPdfd7" \
  -F 'params={"async":true,"key":"Khirz6zTPdfd7","outputtype":"pdf"}' \
  -o "example.pdf"
```

:::note
Without the `key` parameter, the conversion task is identified by the file contents, and its status cannot be checked without sending the file again. In a sharded cluster, add the [shardkey](../../get-started/configuration/shard-key.md) parameter to the query string. Otherwise, the request is processed synchronously.
:::

### Request with token

When the [token](../signature/request/token-in-body.md) validation is enabled for incoming requests, the conversion parameters are taken from the token only. The token payload must contain the `operation` field with the `converter` value and must not contain the `url` field.

Sample payload:

```json
{
  "filetype": "docx",
  "outputtype": "pdf",
  "title": "Example Document Title.docx",
  "operation": "converter"
}
```

**Request:**

```bash
curl -f -X POST "https://documentserver/converter/from-file" \
  -F 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJvdXRwdXR0eXBlIjoicGRmIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJvcGVyYXRpb24iOiJjb252ZXJ0ZXIifQ.d2nBRLobbqCdOmpmtm41cuECtNcIvMwJmLMnNrcNuKg' \
  -F 'file=@example.docx' \
  -o "Example Document Title.pdf"
```
