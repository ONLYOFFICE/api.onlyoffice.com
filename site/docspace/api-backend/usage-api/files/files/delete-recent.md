# deleteRecent

> deleteRecent(BaseBatchRequestDto)

`DELETE /api/2.0/files/recent`

Delete recent files

Deletes files from the Recent section of the calling account, which `GET api/2.0/files/recent` returns. The files themselves and the sections of other users stay unchanged. Any signed-in user can call it. The call does not check access, so you can delete a file that you can no longer read. Folder ids change nothing. If a third-party storage no longer has the file, its entry stays. The call changes data. You can repeat it with the same body. It returns an empty body and does not report what it deleted. The portal adds an entry again when the caller opens the file or calls `POST api/2.0/files/file/{fileId}/recent`. The call reads only `fileIds` and `folderIds` from the body. To hide the whole section, use `PUT api/2.0/files/displayrecent`. If a string id points to a storage account that is not connected, the call returns 400. If it names an unknown storage type, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Empty answer: the listed entries no longer appear in the Recent section | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party file or folder identifier refers to a storage account that is not connected | - | - |
| **404** | A third-party file or folder identifier names a storage type the portal does not know | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
