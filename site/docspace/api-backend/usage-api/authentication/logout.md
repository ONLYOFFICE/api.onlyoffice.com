# logout

> StringWrapper logout()

`POST /api/2.0/authentication/logout`

Log out

Ends the session of the authentication cookie that comes with the request. The token of that session stops working, and the call clears the portal cookies. A token sent only in the `Authorization` header stays valid. To end such a session, use `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. Anyone can call it without signing in. Without a session cookie, the call ends nothing. You can repeat it. Other sessions of the user stay open. To end them, use `PUT api/2.0/security/activeconnections/logoutallexceptthis`. For a user who signed in through SSO, the call can return a single logout URL. It does so when SSO is on and has an SLO address. Open this URL to end the session at the identity provider too. For other users, the result is empty.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The single logout URL to open when the user signed in through SSO, or an empty result when no further action is needed | [**StringWrapper**](../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../models/string-wrapper.md)

## Authorization

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
