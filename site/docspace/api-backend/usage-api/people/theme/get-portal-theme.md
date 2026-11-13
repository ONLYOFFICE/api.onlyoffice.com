# getPortalTheme

> DarkThemeSettingsWrapper getPortalTheme()

`GET /api/2.0/people/theme`

Get the portal theme

Returns the interface theme of the caller, which is `Base`, `Dark`, or `System`. The theme belongs to the account, not to the portal. Any signed-in user can call it, including a guest. The call is read-only. If the caller has never chosen a theme, the call returns `System`. The `theme` field of `GET api/2.0/people/@self` has the same value.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme of the calling account | [**DarkThemeSettingsWrapper**](../../models/dark-theme-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DarkThemeSettingsWrapper**](../../models/dark-theme-settings-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
