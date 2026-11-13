# logOutAllActiveConnectionsForUser

> logOutAllActiveConnectionsForUser(userId)

`PUT /api/2.0/security/activeconnections/logoutall/{userId}`

Log out a user everywhere

Ends all active connections of one portal user. Every token and cookie issued to that user before the call stops working. This cannot be undone. Any signed-in user can end their own connections, including a guest. Only a DocSpace admin can end the connections of another user. Other callers get 403. You can repeat the call. A user with no connections, or an unknown ID, also returns 200. The response has no body. If callers end their own connections, the response sets a new auth cookie, so they stay signed in. The account stays active, and the password stays valid. To keep the current connection, use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.

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
