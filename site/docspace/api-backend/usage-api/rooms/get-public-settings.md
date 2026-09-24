# getPublicSettings

> BooleanWrapper getPublicSettings(id)

`GET /api/2.0/files/roomtemplate/{id}/public`

Get room template public access

Reports whether the room template addressed by `id` is shared with everyone or is reachable only by the accounts it was explicitly shared with. True means the Everyone group holds read access, so any member allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; false means only the owner and the named recipients can. The identifier has to belong to a room template — take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4 — while an ordinary room, a deleted template or an unknown value is answered as missing. The caller needs read access to the template, so somebody else's private template is refused even for a portal administrator, and members who cannot reach the Templates section at all are refused whatever the template's state. The call only reads state; use `PUT api/2.0/files/roomtemplate/public` to change it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an ordinary room is not accepted. | [required] [example: `1234`] [min: 1] [max: 2147483647] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when the template is shared with everyone, false when only its owner and the accounts it was shared with can reach it | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
