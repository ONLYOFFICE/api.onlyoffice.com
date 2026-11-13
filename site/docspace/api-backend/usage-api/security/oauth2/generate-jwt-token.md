# generateJwtToken

> StringWrapper generateJwtToken()

`GET /api/2.0/security/oauth2/token`

Generate JWT token

Issues a JWT that identifies the caller to the identity service. That service stores the OAuth2 apps of the installation. Any signed-in user can call it, including a guest. The token always describes the caller, never another user. The installation signs it with its own key, and it expires after five minutes. The token carries the user ID, name, and email, and the portal ID and address. It also says if the caller is a DocSpace admin or a guest. Last, it says if the developer tools setting opens OAuth2 apps to all users. Send the token to the identity service in the `x-signature` header. This API does not accept it instead of the token of `POST api/2.0/authentication`. The call is read-only and returns the token as a plain string. Request a new token before each exchange instead of storing it.

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
