# getTenantUsage

> DocsCloudUsageWrapper getTenantUsage(refresh)

`GET /api/2.0/settings/docscloud/tenant/usage`

Get the Docs Connect tenant usage

Returns the number of active Docs Connect users of the current portal in the current period. The `since` field is the start of that period, in UTC. The portal needs a Docs Connect tenant from `POST api/2.0/settings/docscloud/trial` or a Docs Connect purchase. Without one, the call returns 400, and `GET api/2.0/settings/docscloud/tenant` returns an empty result. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The portal caches the answer for a minute. To read the current state from Docs Connect, pass `refresh=true`. The `activeCount` field is one total for the whole tenant, with no split by role and no limit. For the editor and viewer split with the license limits, use `GET api/2.0/settings/docscloud/tenant/info`. To list the counted users one by one, use `GET api/2.0/settings/docscloud/tenant/quota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Pass `true` to skip the cached copy and request the usage statistics from Docs Connect again, replacing the cached one; with the default `false` the answer may be up to a minute old. | [optional] [default to `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of active Docs Connect users of the portal and the date the count starts from | [**DocsCloudUsageWrapper**](../../models/docs-cloud-usage-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no activated Docs Connect tenant, so there is no usage information to return | - | - |
| **403** | The caller has no portal-settings right | - | - |
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
