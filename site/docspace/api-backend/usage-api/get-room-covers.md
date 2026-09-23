# getRoomCovers

Referenced types are defined in the [full reference](../files.md).

> CoversResultArrayWrapper getRoomCovers()

`GET /api/2.0/files/rooms/covers`

Get room cover gallery

Returns the gallery of cover pictures a room can be given: every entry pairs the identifier to send to `POST api/2.0/files/rooms/{id}/cover` with the drawing itself as inline vector markup ready to be rendered. The gallery is built into the product rather than stored per portal, so it is the same for every account and every room, does not depend on what rooms exist, and its identifiers do not change with the language of the request. The identifiers are unique and stable, which makes them safe to keep in a client, while the drawings behind them may change between product versions. Any account of the portal may read the gallery, but a guest is refused. The list is the only source of valid cover identifiers: a value that is not in it is rejected wherever a cover is set, including room creation and room update. The call changes nothing and is safe to repeat.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in room covers with their identifiers and vector markup | [**CoversResultArrayWrapper**](../files.md#model-coversresultarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CoversResultArrayWrapper**](../files.md#model-coversresultarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
