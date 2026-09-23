# emptyTrash

Referenced types are defined in the [full reference](../files.md).

> FileOperationArrayWrapper emptyTrash(Single, folderType)

`PUT /api/2.0/files/fileops/emptytrash`

Empty the Trash folder

Queues a background job that permanently removes the content of the caller's own Trash, and answers with the caller's delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports `finished`. Every authenticated account may empty its own Trash and only its own: no per-item access check takes place because nothing outside the caller's Trash is touched. With `folderType` the sweep is narrowed to the items that were originally stored in sections and rooms of the named types, so clearing what came from personal documents leaves what came from rooms untouched; without the parameter the whole Trash is emptied. What is removed here cannot be restored afterwards, which is the difference from `PUT api/2.0/files/fileops/delete`, where `immediately=false` puts items into Trash in the first place. Calling it on an already empty Trash queues nothing and answers with the operations that are already there.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Single** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every delete operation that the caller has running or unread. | [optional] [example: `false`] |
| **folderType** | query | **List** | Limits the sweep to the items whose original location was inside a section or a room of one of the named types, leaving the rest of the Trash untouched; without the parameter the whole Trash is emptied. `5` covers what was deleted from personal documents, `14` what was deleted from rooms. | [optional] [example: `[5]`] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The delete operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
