# getPublicSettings

> BooleanWrapper getPublicSettings(id)

`GET /api/2.0/files/roomtemplate/{id}/public`

Get room template public access

Returns whether a room template is shared with everyone. If `true`, the Everyone group has read access. Then any user who can create rooms can use the template with `POST api/2.0/files/rooms/fromtemplate`. If `false`, only the owner of the template and the users it is shared with can use it. Requires read access to the template. Other callers get 403, even a DocSpace admin. The user types user and guest always get 403. The call is read-only. It returns 404 if `id` is an ordinary room, a deleted template, or unknown. If `id` is less than 1, the call returns 400. To change the setting, use `PUT api/2.0/files/roomtemplate/public`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an ordinary room is not accepted. | [required] [example: `1234`] [min: 1] [max: 2147483647] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when the template is shared with everyone, false when only its owner and the accounts it was shared with can reach it | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or `id` is less than 1 | - | - |
| **403** | The caller has no read access to the template | - | - |
| **404** | `id` does not identify a room template | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
