# getPasswordSettings

> PasswordSettingsWrapper getPasswordSettings()

`GET /api/2.0/settings/security/password`

Get password settings

Returns the password policy of the portal. It has the minimum length and the flags that require an uppercase letter, a digit, and a special symbol. It also has regular expressions to check a password before sending it. Any signed-in user can call it. A request signed with the confirmation token from an emailed link also works. So an invited user or a user who resets a password can check the new password. The call works even if the portal payment is overdue. The call is read-only. It supports `If-Modified-Since` with the `Last-Modified` value of an earlier answer. If the policy has not changed since then, the call returns 304 with an empty body. A portal that nobody configured requires 8 characters with all three flags off. The portal also refuses passwords over 30 characters, and the answer does not show this limit. To change the policy, use `PUT api/2.0/settings/security/password`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal password policy: the minimum length, the uppercase, digit and special-symbol requirements, and the regular expressions a client can validate against | [**PasswordSettingsWrapper**](../../models/password-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The password policy has not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PasswordSettingsWrapper**](../../models/password-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
