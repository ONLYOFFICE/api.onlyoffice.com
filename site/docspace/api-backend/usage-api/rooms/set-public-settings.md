# setPublicSettings

> setPublicSettings(SetPublicDto)

`PUT /api/2.0/files/roomtemplate/public`

Set room template public access

Switches the room template named by `id` between shared with everyone and private, rewriting its whole recipient list in the process. With `public` true the Everyone group is granted read access, so every member allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with false that access is taken away. In both cases every other account and group the template was shared with — including the addresses passed as `share` when it was created — loses access, so this is not a way to add a single recipient to an existing list. Only the account that owns the template may call it: a portal administrator who does not own it is refused, and so is a member invited to the source room. The identifier has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing, and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetPublicDto** | body | [**SetPublicDto**](../models/set-public-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The recipient list of the template has been rewritten to match the requested access; nothing is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
