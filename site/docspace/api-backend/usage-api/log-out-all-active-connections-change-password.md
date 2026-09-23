# logOutAllActiveConnectionsChangePassword

Referenced types are defined in the [full reference](../api.md).

> StringWrapper logOutAllActiveConnectionsChangePassword()

`PUT /api/2.0/security/activeconnections/logoutallchangepassword`

Log out and reset password

Closes every active connection of the calling user and returns the link that user has to open to set a new password - the answer to a suspicious sign-in seen in `GET api/2.0/security/activeconnections`. Any signed-in user may call it for their own account and nothing has to be called first; the same clean-up for somebody else is `PUT api/2.0/security/activeconnections/logoutall/{userId}`. The call is mutating and destructive for sessions - every token and cookie issued to the user before it stops working and the clients holding them are disconnected - and it is not idempotent: the request is written to the portal audit trail, which invalidates the link any earlier call returned, and the caller's own client is handed a fresh cookie in the response and stays signed in through a new connection. The password itself is not changed here, and the link is handed back to the caller rather than mailed to the user: the URL carries a time-limited `PasswordChange` key, which the confirmation page it opens - or `PUT api/2.0/people/{userid}/password` - needs to accept the new password. A failure is swallowed instead of reported, so an empty body with status 200 means nothing was done and the call has to be repeated.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URL the user has to open to set a new password, or an empty result when the operation failed | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
