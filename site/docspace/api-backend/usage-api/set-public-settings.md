# setPublicSettings

Referenced types are defined in the [full reference](../files.md).

> setPublicSettings(SetPublicDto)

`PUT /api/2.0/files/roomtemplate/public`

Set room template public access

Switches the room template named by `id` between shared with everyone and private, rewriting its whole recipient list in the process. With `public` true the Everyone group is granted read access, so every member allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with false that access is taken away. In both cases every other account and group the template was shared with — including the addresses passed as `share` when it was created — loses access, so this is not a way to add a single recipient to an existing list. Only the account that owns the template may call it: a portal administrator who does not own it is refused, and so is a member invited to the source room. The identifier has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing, and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetPublicDto** | body | [**SetPublicDto**](../files.md#model-setpublicdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Ok | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
