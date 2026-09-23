# updateTfaSettingsLink

Referenced types are defined in the [full reference](../api.md).

> StringWrapper updateTfaSettingsLink(TfaRequestsDto)

`PUT /api/2.0/settings/tfaappwithlink`

Update TFA settings with a link

Applies the same portal-wide two-factor authentication change as `PUT api/2.0/settings/tfaapp` and additionally returns the confirmation link the caller needs to pass the new challenge, so an administrator who has just switched TFA on can go straight to setting it up for themselves. The caller has to be the portal owner or a DocSpace administrator, and a request that names the owner's account in `id` or in `mandatoryUsers` is refused unless `id` carries the caller's own account. Every effect of the plain call applies here too: the methods are mutually exclusive, `type` `0` turns TFA off, `trustedIps` and the two mandatory lists behave the same way, and switching a method on resets the portal's authentication cookies, so all sessions have to sign in again. The answer is an empty string whenever there is no link to hand out: when the request turned TFA off, and when the caller is exempt from the challenge, most often because their own address is in the `trustedIps` list of that very request. The cookie the link depends on is not returned here, read it with `GET api/2.0/settings/tfaapp/confirm`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestsDto** | body | [**TfaRequestsDto**](../api.md#model-tfarequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The caller's own confirmation link, or an empty string when TFA was turned off or the caller is exempt | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is neither the portal owner nor a DocSpace administrator, or is placing the owner under the policy | - | - |
| **405** | The requested method is not enabled on this portal, or the SMS method has no configured provider | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsTelegramApi
