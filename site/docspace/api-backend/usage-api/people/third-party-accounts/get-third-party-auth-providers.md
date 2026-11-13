# getThirdPartyAuthProviders

> AccountInfoArrayWrapper getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly)

`GET /api/2.0/people/thirdparty/providers`

Get third-party providers

Returns the third-party identity providers that the portal has turned on. Each item has the URL that starts sign-in with that provider. Anyone can call it without signing in. The call is read-only. An empty list means that the portal has no provider turned on. The `linked` field shows if the provider is linked to the account of the caller. For an anonymous caller, `linked` is always false. The portal sets the order, but a caller in China gets `weixin` first. If `fromOnly` is set, the call keeps only that provider. The value `openid` selects `google`. With `inviteView`, the call leaves out the providers that cannot accept an invitation. With `settingsView` or `inviteView`, the URLs always open in a popup. Otherwise, a URL redirects only for a mobile browser or the desktop app. To link a provider to your account, use `PUT api/2.0/people/thirdparty/linkaccount`. To create an account through a provider, use `POST api/2.0/people/thirdparty/signup`.

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

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
