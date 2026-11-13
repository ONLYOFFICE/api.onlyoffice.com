# updateTfaSettings

> BooleanWrapper updateTfaSettings(TfaRequestDto)

`PUT /api/2.0/settings/tfaapp`

Update the TFA settings

Sets the portal-wide two-factor authentication policy. With `type` `1`, it switches on the SMS method, and with `2`, the authenticator app. Any other `type`, including `0`, turns TFA off. Switching one method on switches the other off. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If `id` or `mandatoryUsers` names the portal owner while `id` is not the caller, the call returns 403. The call changes data and replaces the trusted and mandatory lists. Switching a method on signs out every session on the portal, including the caller's. With `type` `1` or `2`, a repeated call saves the same policy and signs everyone out again. You can repeat a call that turns TFA off. It returns `true` if it switched a method on. It returns `false` if it turned TFA off. To also get the caller's own confirmation link, use `PUT api/2.0/settings/tfaappwithlink`. If the method is unavailable on the portal or SMS has no provider, the call returns 405. The call returns 400 for an unreadable `type` or a malformed ID. It also returns 400 if a `trustedIps` entry is not an address, range, or CIDR block. It works even when the portal payment is overdue.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestDto** | body | [**TfaRequestDto**](../../models/tfa-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the SMS or the authenticator method was switched on, `false` when TFA was turned off | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `type` is `null`, an empty string or a string that is neither a number nor built from the names `None`, `Sms` and `App`, or a `trustedIps` entry is not a single address, an inclusive range or a CIDR block | - | - |
| **403** | The caller has no portal-settings right, or names the owner's account in `id` or `mandatoryUsers` while `id` is not the caller's own | - | - |
| **405** | The requested method is not enabled on this portal, or the SMS method has no configured provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
