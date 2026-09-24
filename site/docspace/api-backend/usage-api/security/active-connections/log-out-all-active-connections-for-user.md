# logOutAllActiveConnectionsForUser

> logOutAllActiveConnectionsForUser(userId)

`PUT /api/2.0/security/activeconnections/logoutall/{userId}`

Log out a user everywhere

Closes every active connection of one portal user: the connections are marked inactive, every token and cookie issued to that user before the call stops working, the clients holding them are disconnected and a logout entry is written to the portal audit trail. Nothing has to be called first; `userId` is the portal user ID that `GET api/2.0/people` returns. A user may pass their own ID, while ending somebody else's connections requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive for those sessions and idempotent - a user with nothing open is not an error - and it returns no content, so the state afterwards is read from `GET api/2.0/security/activeconnections`. A caller who ends their own connections is handed a fresh cookie in the response and stays signed in through a new connection. Nothing else about the user changes: the account stays enabled and the password stays valid, and to keep the current connection alive instead use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. Acting on an account other than the caller's own generally needs administrator rights. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The connections of that user have been closed; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator and the ID in the path is not their own | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
