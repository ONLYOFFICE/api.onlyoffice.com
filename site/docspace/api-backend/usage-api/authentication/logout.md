# logout

> StringWrapper logout()

`POST /api/2.0/authentication/logout`

Log out

Ends the session the request itself was made with: the login event behind the authentication cookie is closed, the sockets opened for it are disconnected, the portal cookies are cleared and a logout event is written to the login history. Send it with the cookie or token of the session that is to be closed; an anonymous call is accepted and closes nothing. The operation is mutating and idempotent - the same session cannot be closed twice - and it touches only that one session: the other sessions of the same user stay alive and are ended by `PUT api/2.0/security/activeconnections/logoutallexceptthis` or `PUT api/2.0/security/activeconnections/logout/{loginEventId}`. The answer is a single logout URL when the user signed in through SSO and the portal has an SLO endpoint configured, and the client has to open that URL to end the session on the identity provider as well; for everyone else it is empty and nothing more is needed.

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

[cookieAuth](authentication.md#cookieauth), [bearerAuth](authentication.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
