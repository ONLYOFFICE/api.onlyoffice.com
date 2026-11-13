# disableParticipantServiceLimits

> Int32Wrapper disableParticipantServiceLimits()

`PUT /api/2.0/portal/payment/servicelimit/participants/disable`

Disable the user service limits

Turns off every personal spending limit on the AI services. Each user then falls back to the limit for every user, if it is set. The limit of the portal and the limit for every user do not change. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The turned-off limits stop restricting their users immediately. The portal keeps them, so you can turn each one back on with `PUT api/2.0/portal/payment/servicelimit`. The call changes data, and a repeated call turns off nothing more. The call returns the number of limits that it turned off, or 0 if none was in force. To turn off the limit of one user, use `PUT api/2.0/portal/payment/servicelimit` with `enabled` set to false.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of personal limits that were switched off | [**Int32Wrapper**](../../models/int-32-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**Int32Wrapper**](../../models/int-32-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
