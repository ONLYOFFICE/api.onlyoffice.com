# getStorageProgress

> DoubleWrapper getStorageProgress()

`GET /api/2.0/settings/storage/progress`

Get the storage migration progress

Returns how far the current portal has got in moving its data to another storage, as a percentage from 0 to 100. The migration itself is started by `PUT api/2.0/settings/storage` or `DELETE api/2.0/settings/storage`, which put the portal into the migrating state; poll this operation until the value reaches 100, then the portal is served from the new storage. A value of -1 means storage migration is not offered on this installation, which is the case for every portal that is not a server one. Ask for the progress only once a migration has actually been started: for a portal whose migration the server does not remember, the call fails instead of answering with a zero. The response carries the percentage only, without the error flag the migration service reports internally, so a value that stops advancing is a reason to check the portal state with `GET api/2.0/portal` rather than proof of progress. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the call is accepted even when the portal payment has lapsed. Nothing is written and the call is safe to repeat.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Migration progress as a percentage, or -1 where storage migration is not offered | [**DoubleWrapper**](../../models/double-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DoubleWrapper**](../../models/double-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
