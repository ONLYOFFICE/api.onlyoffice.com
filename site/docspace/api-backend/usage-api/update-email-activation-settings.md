# updateEmailActivationSettings

Referenced types are defined in the [full reference](../api.md).

> EmailActivationSettingsWrapper updateEmailActivationSettings(EmailActivationSettings)

`PUT /api/2.0/settings/emailactivation`

Update the email activation settings

Updates the current user's own preference for whether the email confirmation prompt is displayed on their account. Requires an authenticated session; every role may change its own setting, and the change never affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted, without validating them against the account's actual email confirmation state, so `show` can be set to `true` even after the address is already confirmed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailActivationSettings** | body | [**EmailActivationSettings**](../api.md#model-emailactivationsettings) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Email activation settings exactly as submitted | [**EmailActivationSettingsWrapper**](../api.md#model-emailactivationsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmailActivationSettingsWrapper**](../api.md#model-emailactivationsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
