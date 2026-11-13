# getThirdPartyCode

> StringWrapper getThirdPartyCode(provider)

`GET /api/2.0/thirdparty/{provider}`

Get provider consent URL

Returns the OAuth 2.0 consent URL of an external provider as a string. The user opens it in a browser to give the portal access to their account. First, save the client ID, secret, and redirect URI of the provider with `POST api/2.0/settings/authservice`. Without them, the URL has no `client_id`, and the provider refuses it. Any signed-in user can call it. The call is read-only. The URL also asks for the scopes the portal needs, such as Drive with offline access for Google. Its `state` points to the `thirdparty/{provider}/code` page of the portal. There, the provider returns the code, or an error if the user declines. Only Google, Dropbox, DocuSign, Box, OneDrive, WordPress, and GitHub produce a URL. For any other provider, the call returns 200 with no URL. If the provider is not a valid value, the call returns 400. With `desktop=true` in the query, the call copies the query string into `state` for the callback. This call does not exchange the code. To connect a storage account, pass the code as `token` to `POST api/2.0/files/thirdparty`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **provider** | path | **LoginProvider** | The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a client identifier and the provider refuses it. | [required] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The consent URL of the provider, ready to be opened in a browser; empty when the requested provider is not one of the seven this operation supports | [**StringWrapper**](../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `provider` in the path is not one of the login provider names or numbers | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../models/string-wrapper.md)

## Authorization

[Basic](thirdparty.md#basic), [OAuth2](thirdparty.md#oauth2) (scopes: read, write), [ApiKeyBearer](thirdparty.md#apikeybearer), [asc_auth_key](thirdparty.md#asc_auth_key), [Bearer](thirdparty.md#bearer), [OpenId](thirdparty.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
