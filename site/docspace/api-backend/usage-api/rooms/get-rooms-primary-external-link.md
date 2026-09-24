# getRoomsPrimaryExternalLink

> FileShareWrapper getRoomsPrimaryExternalLink(id)

`GET /api/2.0/files/rooms/{id}/link`

Get the room primary external link

Returns the primary external link of a room, which is the one address meant to be handed out to people outside the portal. A public room and a form filling room get such a link when they are created, and asking for it again returns the same link rather than a new one, so the answer is stable. In a room that has no primary link yet this call creates one instead of reporting nothing, which needs the right to manage the links of the room: a member invited with a lower level is refused with 403, and so is anybody who is not in the room at all. A link that was explicitly revoked stays revoked and is reported as missing rather than recreated, and an unknown room is answered with 404 as well. An archived public room still reports its link. The answer is the same entry that `GET api/2.0/files/rooms/{id}/links` returns with the primary flag set, including the request token that has to travel with the address.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the room | [**FileShareWrapper**](../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not see the links of this room | - | - |
| **404** | No room with this ID is visible to the caller, or its primary link was revoked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../models/file-share-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
