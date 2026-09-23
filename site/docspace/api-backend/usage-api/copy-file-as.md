# copyFileAs

Referenced types are defined in the [full reference](../files.md).

> FileEntryBaseWrapper copyFileAs(fileId, CopyAsJsonElement)

`POST /api/2.0/files/file/{fileId}/copyas`

Copy a file

Copies one file into another folder under a new title, converting its content when the new title names a different format, and answers with the copy that was created. The extension of `destTitle` decides what happens: the same extension as the source copies the bytes as they are, a different one has the document service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a string for a folder in a connected third-party storage; anything else is answered with an empty body and nothing is copied. The caller needs read access to the source file and the right to create files in the destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to copy. | [required] [example: `1`] |
| **CopyAsJsonElement** | body | [**CopyAsJsonElement**](../files.md#model-copyasjsonelement) | The title, the destination and the conversion options of the copy. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The copy that was created | [**FileEntryBaseWrapper**](../files.md#model-fileentrybasewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The content cannot be converted into the format of the new title | - | - |
| **403** | The caller may not read the file or may not create files in the destination folder | - | - |
| **404** | The file or the destination folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseWrapper**](../files.md#model-fileentrybasewrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
