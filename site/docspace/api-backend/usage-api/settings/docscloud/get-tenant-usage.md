# getTenantUsage

> DocsCloudUsageWrapper getTenantUsage(refresh)

`GET /api/2.0/settings/docscloud/tenant/usage`

Get the Docs Connect tenant usage

Returns the Docs Connect usage of the current portal: the number of users who have been active in Docs Connect in the current period, and the moment that period is counted from. The portal must have an activated Docs Connect tenant, granted by `POST api/2.0/settings/docscloud/trial` or by a Docs Connect purchase: an empty result from `GET api/2.0/settings/docscloud/tenant` means there is none and this call fails with 400. The caller must be a portal administrator allowed to edit the portal settings, on an installation where the Docs Connect service is configured. The call is read-only, idempotent and cached for a minute, so pass `refresh=true` to read the current state from Docs Connect. In the result, `activeCount` counts the users seen since `since`, which is in UTC, and it is one total for the whole tenant, with no split by role and no limit to compare it against. For the editor and viewer breakdown with the license limits use `GET api/2.0/settings/docscloud/tenant/info`, and for the users counted one by one `GET api/2.0/settings/docscloud/tenant/quota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the usage statistics from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of active Docs Connect users of the portal and the date the count starts from | [**DocsCloudUsageWrapper**](../../models/docs-cloud-usage-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no usage information to return | - | - |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocsCloudUsageWrapper**](../../models/docs-cloud-usage-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
