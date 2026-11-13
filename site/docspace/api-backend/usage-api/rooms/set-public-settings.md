# setPublicSettings

> setPublicSettings(SetPublicDto)

`PUT /api/2.0/files/roomtemplate/public`

Set room template public access

Changes whether a room template is shared with everyone. If `public` is true, the Everyone group gets read access. Then any user who can create rooms can use the template with `POST api/2.0/files/rooms/fromtemplate`. If `public` is false, the Everyone group loses access. In both cases, the call removes access for all other users and groups of the template. This includes the users from `share` at creation. So you cannot add one recipient with this call. Only the owner of the template can call it. Other callers get 403, even the portal owner. The call changes data and returns nothing. You can repeat it with the same body. The call returns 404 if `id` is an ordinary room or unknown. It returns 400 if the body has no `id` or `id` is less than 1. To read the setting, use `GET api/2.0/files/roomtemplate/{id}/public`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetPublicDto** | body | [**SetPublicDto**](../models/set-public-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The recipient list of the template has been rewritten to match the requested access; nothing is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, or `id` is less than 1 | - | - |
| **403** | The caller is not allowed to change who the template is shared with | - | - |
| **404** | `id` does not identify a room template | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
