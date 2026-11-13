# getAmazonS3Regions

> AmazonS3RegionArrayWrapper getAmazonS3Regions()

`GET /api/2.0/settings/storage/s3/regions`

Get the Amazon S3 regions

Returns the Amazon regions that the server knows, with their display names and partition details. The list is built into the server, so it is the same for every portal. It changes only with a server update, so you can cache it. Use the system name of an entry as the region in `props` of an Amazon S3 storage. This applies to `PUT api/2.0/settings/storage`, `PUT api/2.0/settings/storage/cdn`, and a backup schedule. Pick the region from this list. Any signed-in user can call it. The call is read-only. The list has no paging or filters.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Amazon regions known to this installation | [**AmazonS3RegionArrayWrapper**](../../models/amazon-s-3-region-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AmazonS3RegionArrayWrapper**](../../models/amazon-s-3-region-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
