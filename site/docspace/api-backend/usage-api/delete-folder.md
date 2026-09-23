# deleteFolder

Referenced types are defined in the [full reference](../files.md).

> FileOperationArrayWrapper deleteFolder(folderId, DeleteFolder)

`DELETE /api/2.0/files/folder/{folderId}`

Delete a folder

Queues the deletion of one folder together with everything inside it, and answers with the file operations of the caller, the one just created among them. The folder is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the folder is moved to the Trash section, from where it can be restored; `immediately=true` discards it for good instead, and inside a room, where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing sessions on the contents have ended, so files somebody is working on are not pulled away. The caller needs the right to delete the folder, which the room manager, a portal administrator acting as room manager and a content creator acting on a folder of their own have; editing access alone, read access and a guest are refused. The call is destructive. To delete several items at once use `PUT api/2.0/files/fileops/delete`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder to delete, together with everything it holds. | [required] [example: `10`] |
| **DeleteFolder** | body | [**DeleteFolder**](../files.md#model-deletefolder) | How the deletion is to be carried out. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller, including the deletion just queued | [**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json
