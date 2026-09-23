# createThumbnails

Referenced types are defined in the [full reference](../files.md).

> ObjectArrayWrapper createThumbnails(BaseBatchRequestDto)

`POST /api/2.0/files/thumbnails`

Queue file thumbnails

Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids that were sent. That answer echoes the request and does not confirm that anything was queued: the work is handed over to a background worker, and a failure on the way there is written to the log rather than reported to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped as well, because the worker handles portal storage only. Access to the individual files is not checked here; the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../files.md#model-basebatchrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file ids from the request, echoed back | [**ObjectArrayWrapper**](../files.md#model-objectarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ObjectArrayWrapper**](../files.md#model-objectarraywrapper)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
