# reorderRoom

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper reorderRoom(id)

`PUT /api/2.0/files/rooms/{id}/reorder`

Reorder room contents

Renumbers the manual order of the items lying directly in a room so that they run from one upwards with no gaps and no duplicates, and returns the room. The order of the items relative to each other is preserved: only the numbers are compacted, and nothing is moved, renamed, duplicated or deleted. Files and folders share one sequence. Nested folders keep their own numbering and are not touched, so each level is compacted on its own. The operation is meant for a room with indexing turned on, where the manual order is what listings follow; a room without indexing accepts it and simply has nothing that depends on the result. Running it twice changes nothing the second time, and an already dense sequence is left as it is, which makes the call safe to retry. The caller must be a manager of the room; a member invited with any other level is refused, an archived room is rejected, and an unknown or deleted room is answered as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room whose contents were renumbered | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
