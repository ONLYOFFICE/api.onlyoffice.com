# updateTfaSettings

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper updateTfaSettings(TfaRequestsDto)

`PUT /api/2.0/settings/tfaapp`

Update the TFA settings

Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace administrator; other members are refused, and a request that names the owner's account in `id` or in `mandatoryUsers` is refused unless `id` carries the caller's own account. `trustedIps` takes single addresses, inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address. Switching a method on is disruptive: it resets the portal's authentication cookies, so every session on the portal, the caller's own included, has to sign in again. The answer is `true` when a method was switched on and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller's own confirmation link in the same step.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestsDto** | body | [**TfaRequestsDto**](../api.md#model-tfarequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the SMS or the authenticator method was switched on, `false` when TFA was turned off | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **405** | The requested method is not enabled on this portal, or the SMS method has no configured provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
