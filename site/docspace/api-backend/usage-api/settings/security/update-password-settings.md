# updatePasswordSettings

> PasswordSettingsWrapper updatePasswordSettings(PasswordSettingsRequestsDto)

`PUT /api/2.0/settings/security/password`

Update password settings

Replaces the password policy of the whole portal with the four values sent: `minLength` and the three flags that demand an uppercase letter, a digit and a special symbol. There is no partial update - a flag left out of the body is stored as `false` - so read the current policy with `GET api/2.0/settings/security/password` and send it back with your change applied. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. `minLength` has to sit between the floor the installation is configured with, 8 characters unless it was changed, and the ceiling of 30; anything outside is rejected as an invalid request. The new policy applies to passwords set from now on: existing passwords keep working until their owners change them, and nobody is asked to renew. The change is portal-wide, recorded in the audit trail, and sending the same body twice changes nothing further. The answer is the stored policy with its regular expressions.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **PasswordSettingsRequestsDto** | body | [**PasswordSettingsRequestsDto**](../../models/password-settings-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The password policy as it was stored, including the regular expressions a client can validate against | [**PasswordSettingsWrapper**](../../models/password-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested minimum length is outside the range the installation allows | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
