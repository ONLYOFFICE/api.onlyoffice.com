# checkMoveOrCopyDestFolder

> CheckDestFolderWrapper checkMoveOrCopyDestFolder(inDto)

`GET /api/2.0/files/fileops/checkdestfolder`

Check the destination folder

Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted, only some of them or none, and `files` names the ones that are. The check is about what the destination allows to be stored in it rather than about name clashes — everywhere except a form-filling room every file is accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an archived room are refused with 403, a destination that does not exist is answered as missing, and a request without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request play no part here. The call changes nothing; for same-named entries at the destination use `GET api/2.0/files/fileops/move`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **inDto** | query | **BatchRequestDto** | The files and folders to move or copy, the folder they go to, and the way name clashes are settled. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the destination accepts all of the listed files, some of them or none, and which ones it accepts | [**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
