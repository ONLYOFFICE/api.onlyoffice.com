# updateTfaSettingsLink

> StringWrapper updateTfaSettingsLink(TfaRequestDto)

`PUT /api/2.0/settings/tfaappwithlink`

Update TFA settings with a link

Sets the portal-wide two-factor policy as `PUT api/2.0/settings/tfaapp` does. It also returns the caller's own confirmation link. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If `id` or `mandatoryUsers` names the portal owner while `id` is not the caller, the call returns 403. Any `type` other than `1` and `2` turns TFA off. The call changes data. Switching a method on signs out every session on the portal. With `type` `1` or `2`, a repeated call signs everyone out again and returns a new link. You can repeat a call that turns TFA off. The call returns an empty string if it turned TFA off or the caller is exempt. Usually, the caller is exempt through their own address in `trustedIps`. For the authenticator method, the call sets the link's cookie but does not return its value. To get the value, use `GET api/2.0/settings/tfaapp/confirm`, which issues a new link. If the method is unavailable on the portal or SMS has no provider, the call returns 405. The call returns 400 for an unreadable `type` or a malformed ID. It also returns 400 if a `trustedIps` entry is not an address, range, or CIDR block.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestDto** | body | [**TfaRequestDto**](../../models/tfa-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The caller's own confirmation link, or an empty string when TFA was turned off or the caller is exempt | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `type` is `null`, an empty string or a string that is neither a number nor built from the names `None`, `Sms` and `App`, or a `trustedIps` entry is not a single address, an inclusive range or a CIDR block | - | - |
| **403** | The caller has no portal-settings right, or names the owner's account in `id` or `mandatoryUsers` while `id` is not the caller's own | - | - |
| **405** | The requested method is not enabled on this portal, or the SMS method has no configured provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
