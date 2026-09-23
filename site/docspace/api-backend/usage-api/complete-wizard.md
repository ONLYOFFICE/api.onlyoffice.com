# completeWizard

Referenced types are defined in the [full reference](../api.md).

> WizardSettingsWrapper completeWizard(WizardRequestsDto)

`PUT /api/2.0/settings/wizard/complete`

Complete the Wizard settings

Finishes the initial portal setup wizard: sets the owner's password and locale, applies the supplied license if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new portal is created, and the link is consumed as part of authenticating the request; the caller must also hold the EditPortalSettings permission. An empty password or a malformed email address is rejected without completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does not cover the portal. This call is meant to run once per portal; running it again is accepted but has no further effect once the wizard is already completed. It returns the resulting wizard settings, including the completed flag.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WizardRequestsDto** | body | [**WizardRequestsDto**](../api.md#model-wizardrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Resulting wizard settings, including the completed flag | [**WizardSettingsWrapper**](../api.md#model-wizardsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The email address is malformed, or the password is empty | - | - |
| **402** | The supplied license is missing, invalid, expired, or its user quota does not cover the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WizardSettingsWrapper**](../api.md#model-wizardsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
