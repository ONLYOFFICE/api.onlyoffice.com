# getThirdPartyAuthProviders

> AccountInfoArrayWrapper getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly)

`GET /api/2.0/people/thirdparty/providers`

Get third-party providers

Returns the third-party identity providers this portal has enabled, each with the URL that starts the login with it, so a client can render the social sign-in buttons. It needs no authentication and is the operation to call before showing a login or an invitation page; an empty list means the portal has no provider configured, not that the call failed. The call is read-only, and `linked` says whether the provider is already connected to the calling profile - for an anonymous caller there is nothing to compare against, so every entry comes back with false. The order is fixed by the portal, except that a caller located in China gets `weixin` first. Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of redirecting the desktop application. Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and `POST api/2.0/people/thirdparty/signup` to create a profile through one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **inviteView** | query | **Boolean** | Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled provider. | [optional] [example: `false`] |
| **settingsView** | query | **Boolean** | Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window. With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only for a mobile browser or for the DocSpace desktop application. | [optional] [example: `false`] |
| **clientCallback** | query | **String** | The name of the client-side function the popup calls back when the provider authorization finishes. It is placed into the returned URLs as they are, and it is only used by the popup mode. | [optional] [example: `onAuthCallback`] |
| **fromOnly** | query | **String** | Keeps only the named provider, compared case-insensitively against the lowercase provider names such as `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider. | [optional] [example: `google`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The enabled providers, each with its login URL and its link state for the caller | [**AccountInfoArrayWrapper**](../../models/account-info-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AccountInfoArrayWrapper**](../../models/account-info-array-wrapper.md)

## Authorization

[cookieAuth](../people.md#cookieauth), [bearerAuth](../people.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
