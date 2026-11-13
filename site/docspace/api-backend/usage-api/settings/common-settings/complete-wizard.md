# completeWizard

> WizardSettingsWrapper completeWizard(WizardRequestDto)

`PUT /api/2.0/settings/wizard/complete`

Complete the Wizard settings

Completes the first setup of the portal. It sets the email and password of the portal owner, the language, and the time zone. It also applies the license if the installation needs one. Sign the request with the confirmation token of the setup wizard. Its account also needs the EditPortalSettings permission. Otherwise, the call returns 403. Take the token from `wizardToken` of `GET api/2.0/settings` before setup is complete. The call changes data. Do not repeat it. If the email changes, the owner must confirm the new address. It returns the wizard settings with `completed` set. The call returns 400 if `email` or `passwordHash` is missing, the email is malformed, or the license starts later.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WizardRequestDto** | body | [**WizardRequestDto**](../../models/wizard-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Resulting wizard settings, including the completed flag | [**WizardSettingsWrapper**](../../models/wizard-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `email` or `passwordHash`, the email address is empty or malformed, or the license's start date is in the future | - | - |
| **403** | The account the confirmation link was issued for has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WizardSettingsWrapper**](../../models/wizard-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
