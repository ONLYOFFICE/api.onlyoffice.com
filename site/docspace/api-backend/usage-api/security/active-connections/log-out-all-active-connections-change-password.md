# logOutAllActiveConnectionsChangePassword

> StringWrapper logOutAllActiveConnectionsChangePassword()

`PUT /api/2.0/security/activeconnections/logoutallchangepassword`

Log out and reset password

Ends all active connections of the calling user and returns a link to set a new password. Use it after a suspicious sign-in. Any signed-in user can call it for their own account, including a guest. To end the connections of another user, use `PUT api/2.0/security/activeconnections/logoutall/{userId}`. Every token and cookie issued to the user before the call stops working. This cannot be undone. The response sets a new auth cookie, so a cookie-based caller stays signed in. The call does not change the password or email the link. The link opens the page that sets the new password through `PUT api/2.0/people/{userId}/password`. You can repeat the call, but each call makes the earlier link invalid. Repeat it with the new cookie, not with the first token. If the call fails, it still returns 200 with an empty result, so call it again.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URL the user has to open to set a new password, or an empty result when the operation failed | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
