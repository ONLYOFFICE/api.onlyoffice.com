# getUserQuotaSettings

> EntityQuotaSettingsWrapper getUserQuotaSettings()

`GET /api/2.0/settings/userquotasettings`

Get the user quota settings

Returns the default storage quota for each user of the portal: whether it is on, and its size in bytes. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. If `enableQuota` is false, the portal does not apply the default size. It supports `If-Modified-Since` with the `Last-Modified` value of the last answer. If nothing changed, it returns 304 with an empty body.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current per-user default storage quota settings | [**EntityQuotaSettingsWrapper**](../../models/entity-quota-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The per-user quota settings have not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EntityQuotaSettingsWrapper**](../../models/entity-quota-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
