# changePortalTheme

> DarkThemeSettingsWrapper changePortalTheme(DarkThemeSettingsRequestDto)

`PUT /api/2.0/people/theme`

Change the portal theme

Changes the interface theme of the caller to `Base`, `Dark`, or `System`. The theme belongs to the account, not to the portal. Any signed-in user can call it, including a guest. The call changes data. You can repeat it with the same body. It returns the saved theme. If the body has no `theme`, the call returns 400. The `theme` field of `GET api/2.0/people/@self` has the same value.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DarkThemeSettingsRequestDto** | body | [**DarkThemeSettingsRequestDto**](../../models/dark-theme-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme that was stored | [**DarkThemeSettingsWrapper**](../../models/dark-theme-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `theme` | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
