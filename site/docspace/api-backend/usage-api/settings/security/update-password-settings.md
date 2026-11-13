# updatePasswordSettings

> PasswordSettingsWrapper updatePasswordSettings(PasswordSettingsRequestDto)

`PUT /api/2.0/settings/security/password`

Update password settings

Updates the password policy of the portal with `minLength`, `upperCase`, `digits`, and `specSymbols`. The call replaces all four values, and a flag left out of the body is stored as `false`. So first read the policy with `GET api/2.0/settings/security/password`. Then send it back with your change. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. The new policy applies only to passwords set after this call. Existing passwords keep working, and nobody is asked to change them. The call returns 400 if the body cannot be read, `minLength` is missing, or `minLength` is out of range. It returns the stored policy with its regular expressions.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **PasswordSettingsRequestDto** | body | [**PasswordSettingsRequestDto**](../../models/password-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The password policy as it was stored, including the regular expressions a client can validate against | [**PasswordSettingsWrapper**](../../models/password-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `minLength`, or the minimum length is outside the range the installation allows | - | - |
| **403** | The caller has no portal-settings right | - | - |
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
