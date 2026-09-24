# deleteFileVersions

> FileOperationArrayWrapper deleteFileVersions(DeleteVersionBatchRequestDto)

`PUT /api/2.0/files/fileops/deleteversion`

Delete file versions

Queues a background job that removes the listed versions from the history of one file, and answers with the caller's delete operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports `finished`; a failure met while the job runs is reported in its `error` rather than as a status code. Removal is permanent — deleted versions do not travel through Trash and cannot be restored, while the file itself stays in place with the versions that are left. Send the numbers that `GET api/2.0/files/file/{fileId}/history` reports, and send at least one: an empty list is not an empty request, it deletes the whole file instead. The number of the current version is refused before anything is queued, while numbers that no longer exist are passed over without a complaint. The caller needs the rights that deleting the file itself would need, so a member with read-only rights is refused, as are a file in an archived room and a file that is already in Trash, and a file that does not exist is answered as missing. To delete the file itself use `PUT api/2.0/files/fileops/delete`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeleteVersionBatchRequestDto** | body | [**DeleteVersionBatchRequestDto**](../../models/delete-version-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The delete operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
