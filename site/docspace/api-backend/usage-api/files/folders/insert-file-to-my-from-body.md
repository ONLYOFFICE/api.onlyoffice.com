# insertFileToMyFromBody

> FileWrapper insertFileToMyFromBody(file, title, createNewIfExist, keepConvertStatus, stream.canRead, stream.canWrite, stream.canSeek, stream.canTimeout, stream.length, stream.position, stream.readTimeout, stream.writeTimeout)

`POST /api/2.0/files/@my/insert`

Insert a file into My documents

Stores one file in the caller's own My documents section, the personal storage every portal member has, and returns the stored file. The destination takes no identifier: it is resolved from the calling account and created on first use, while a guest account has none and is answered as missing (404). Send the content as a `multipart/form-data` part or as the raw request body, and name it with `title`, which wins over the name of the uploaded part and has invalid characters replaced before storing. The call is not idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy under a title made unique with a numeric suffix; a title held by a file that is locked or open in the editor cannot be overwritten either, and a second file appears under the same title. Formats listed in `extsMustConvert` of `GET api/2.0/files/settings` are converted after the response is sent; `keepConvertStatus=true` keeps that result readable through `GET api/2.0/files/file/{fileId}/checkconversion`, which otherwise drops it. Files over the single-request size limit or the account's storage quota are refused: send those through `POST api/2.0/files/{folderId}/upload/create_session`, and use `POST api/2.0/files/{folderId}/insert` for any other destination.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **file** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw request body, which is what a client that cannot build a form does; when both are present the form part wins. | [optional] |
| **title** | form | **String** | The name to store the file under, extension included. It wins over the name of the uploaded part, which is the reason to choose this operation over the plain upload, and it is the only name available when the content arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170 characters before the file is stored. | [optional] |
| **createNewIfExist** | form | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] |
| **keepConvertStatus** | form | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] |
| **stream.canRead** | form | **Boolean** |  | [optional] |
| **stream.canWrite** | form | **Boolean** |  | [optional] |
| **stream.canSeek** | form | **Boolean** |  | [optional] |
| **stream.canTimeout** | form | **Boolean** |  | [optional] |
| **stream.length** | form | **Long** (int64) |  | [optional] |
| **stream.position** | form | **Long** (int64) |  | [optional] |
| **stream.readTimeout** | form | **Integer** (int32) |  | [optional] |
| **stream.writeTimeout** | form | **Integer** (int32) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored file, with the identifier, version and title it was saved under | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The file exceeds the single-request upload limit, or storing it would exceed a storage quota or size limit | - | - |
| **403** | Creating a file in the personal section is not allowed for this account | - | - |
| **404** | The caller has no personal section, so there is nothing to store the file in | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
