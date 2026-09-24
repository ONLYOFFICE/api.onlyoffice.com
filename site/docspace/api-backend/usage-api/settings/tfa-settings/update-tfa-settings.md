# updateTfaSettings

> BooleanWrapper updateTfaSettings(TfaRequestsDto)

`PUT /api/2.0/settings/tfaapp`

Update the TFA settings

Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace administrator; other members are refused, and a request that names the owner's account in `id` or in `mandatoryUsers` is refused unless `id` carries the caller's own account. `trustedIps` takes single addresses, inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address. Switching a method on is disruptive: it resets the portal's authentication cookies, so every session on the portal, the caller's own included, has to sign in again. The answer is `true` when a method was switched on and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller's own confirmation link in the same step.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestsDto** | body | [**TfaRequestsDto**](../../models/tfa-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the SMS or the authenticator method was switched on, `false` when TFA was turned off | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **405** | The requested method is not enabled on this portal, or the SMS method has no configured provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
