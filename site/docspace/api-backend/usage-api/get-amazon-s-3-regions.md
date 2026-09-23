# getAmazonS3Regions

Referenced types are defined in the [full reference](../api.md).

> AmazonS3RegionArrayWrapper getAmazonS3Regions()

`GET /api/2.0/settings/storage/s3/regions`

Get the Amazon S3 regions

Returns the Amazon regions the server knows about, each with its system name such as `eu-central-1`, the display name to show a user, and the partition details the region belongs to: partition name, DNS suffix, the pattern its region names match and the template its host names are built from. This is static reference data compiled into the server rather than portal configuration: nothing is read from the settings, nothing is written, the answer is the same for every portal and changes only when the server is updated, so it can be cached by the caller. Use the system name of an entry as the region value in `props` when configuring an Amazon S3 storage with `PUT api/2.0/settings/storage`, `PUT api/2.0/settings/storage/cdn` or a backup schedule, and prefer picking a value from here over typing one, because a region the server does not know cannot be reached. Any authenticated caller may read the list, no portal-settings permission is asked for, and the result is neither paginated nor filtered.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Amazon regions known to this installation | [**AmazonS3RegionArrayWrapper**](../api.md#model-amazons3regionarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AmazonS3RegionArrayWrapper**](../api.md#model-amazons3regionarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
