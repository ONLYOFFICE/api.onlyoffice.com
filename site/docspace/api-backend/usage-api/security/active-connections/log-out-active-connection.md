# logOutActiveConnection

> BooleanWrapper logOutActiveConnection(loginEventId)

`PUT /api/2.0/security/activeconnections/logout/{loginEventId}`

Log out one connection

Ends one active connection of a user on this portal. Its token and cookie stop working, and this cannot be undone. Other connections stay open. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`. The `loginEvent` field of that call shows your own connection, so you can avoid ending it. Any signed-in user can end their own connections, including a guest. Only a DocSpace admin can end a connection of another user. Other callers get 403. The call returns `true` when it ended the connection. It returns `false` if this portal has no such active connection or the call failed. So a repeated call returns `false`. To end all other connections in one call, use `PUT api/2.0/security/activeconnections/logoutallexceptthis`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **loginEventId** | path | **Integer** (int32) | The sign-in to act on, by login event ID. Take it from the `id` of an item of `GET api/2.0/security/activeconnections`, which also marks the connection the caller is using, so a client can avoid picking its own. | [required] [example: `12345`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the connection was open and has been closed, `false` when this portal has no such active connection or the attempt failed | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator and the connection belongs to another user | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
