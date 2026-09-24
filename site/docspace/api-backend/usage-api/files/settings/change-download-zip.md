# changeDownloadZip

> ICompressWrapper changeDownloadZip(DisplayRequestDto)

`PUT /api/2.0/files/settings/downloadtargz`

Change the download archive format

Selects the archive format the portal packs the caller's multi-item downloads into: `set=true` switches to `.tar.gz`, `set=false` back to `.zip`. The choice is stored for the calling account only, so every authenticated role down to a guest may set its own, while an unauthenticated caller is refused. It takes effect on the archives built by `PUT api/2.0/files/fileops/bulkdownload` and by the download links that operation returns; archives already produced keep the format they were packed with. The returned archive object carries no readable fields of its own, so it cannot be used to confirm the change: read `downloadTarGz` from `GET api/2.0/files/settings` instead. Writing the same value again is safe and changes nothing else. A new account starts on `.zip`. The format decides only how the archive is packed: which items go into it, and the access needed to take them, are decided by the bulk-download operation itself, and a single file is downloaded as it is whatever is stored here.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DisplayRequestDto** | body | [**DisplayRequestDto**](../../models/display-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The archive helper for the format that is now selected | [**ICompressWrapper**](../../models/i-compress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ICompressWrapper**](../../models/i-compress-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
