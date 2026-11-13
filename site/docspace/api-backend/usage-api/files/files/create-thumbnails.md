# createThumbnails

> ObjectArrayWrapper createThumbnails(BaseBatchRequestDto)

`POST /api/2.0/files/thumbnails`

Queue file thumbnails

Starts building preview thumbnails for the files in `fileIds`. The call reads only `fileIds` from the body. It returns these ids unchanged, and an empty list without them. This answer does not confirm that the portal queued anything. The portal writes a failure to queue the work to its log and does not report it. The portal does not build thumbnails for files of a third-party storage. The call does not check access to the files. Any signed-in user can call it. Anyone with an external share link can call it without signing in. Other callers get 401. The call queues work. You can repeat it. The response has no thumbnails. To get one, poll `GET api/2.0/files/file/{fileId}` until `thumbnailStatus` shows that the thumbnail is created. Then read `thumbnailUrl`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file ids from the request, echoed back | [**ObjectArrayWrapper**](../../models/object-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | An anonymous caller has no external link | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ObjectArrayWrapper**](../../models/object-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
