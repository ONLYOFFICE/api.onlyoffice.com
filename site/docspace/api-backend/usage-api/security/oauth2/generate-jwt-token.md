# generateJwtToken

> StringWrapper generateJwtToken()

`GET /api/2.0/security/oauth2/token`

Generate JWT token

Issues a short-lived JWT that identifies the calling user to the identity service, the component that stores the OAuth2 applications of this installation and their consents. Any signed-in user may call it, nothing has to be prepared first, and the token always describes the caller - it cannot be issued on behalf of somebody else. The token is signed with the installation's own key and carries the user ID, name and e-mail, the portal ID and address, whether the caller is an administrator or a guest, and whether the portal's developer tools setting leaves OAuth2 applications open to ordinary users. It expires five minutes after it was issued and is meant to be presented to the identity service in the `x-signature` header, not to this API: requests to the portal are authorized with the token that `POST api/2.0/authentication` returns, and this JWT is not accepted in its place. The call is read-only and gives the token back as a plain string; ask for a fresh one per exchange instead of storing it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The signed JWT identifying the caller, valid for five minutes | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
