# updateEmailActivationSettings

> EmailActivationSettingsWrapper updateEmailActivationSettings(EmailActivationSettings)

`PUT /api/2.0/settings/emailactivation`

Update the email activation settings

Updates the current user's own preference for whether the email confirmation prompt is displayed on their account. Requires an authenticated session; every role may change its own setting, and the change never affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted, without validating them against the account's actual email confirmation state, so `show` can be set to `true` even after the address is already confirmed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailActivationSettings** | body | [**EmailActivationSettings**](../../models/email-activation-settings.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Email activation settings exactly as submitted | [**EmailActivationSettingsWrapper**](../../models/email-activation-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmailActivationSettingsWrapper**](../../models/email-activation-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
