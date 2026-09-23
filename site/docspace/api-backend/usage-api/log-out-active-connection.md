# logOutActiveConnection

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper logOutActiveConnection(loginEventId)

`PUT /api/2.0/security/activeconnections/logout/{loginEventId}`

Log out one connection

Closes one active connection: the sign-in behind `loginEventId` is marked inactive, the token and cookie tied to it stop working, the client holding it is disconnected and a logout entry is written to the portal audit trail. Take `loginEventId` from the `id` of an item of `GET api/2.0/security/activeconnections`, which also reports in `loginEvent` which connection the caller is using, so a client can avoid closing its own. A user may close their own connections, while closing somebody else's requires a DocSpace administrator and any other caller is refused with 403. The call is mutating, destructive for that one session and idempotent, and it leaves every other connection of the user alone - `PUT api/2.0/security/activeconnections/logoutallexceptthis` is the way to close the rest in one go. Only `true` means the connection was open and has just been closed; `false` comes back when this portal has no such active connection, including one that was already closed, and after any other failure.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **loginEventId** | path | **Integer** (int32) | The sign-in to act on, by login event ID. Take it from the `id` of an item of `GET api/2.0/security/activeconnections`, which also marks the connection the caller is using, so a client can avoid picking its own. | [required] [example: `12345`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the connection was open and has been closed, `false` when this portal has no such active connection or the attempt failed | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator and the connection belongs to another user | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
