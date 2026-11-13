# getRoomTagsInfo

> StringArrayWrapper getRoomTagsInfo(count, startIndex, filterValue)

`GET /api/2.0/files/tags`

Get available room tags

Returns the names of the custom room tags that the caller can see, as an array of strings. Any signed-in user can call it. A DocSpace admin gets the whole catalog, including tags that no room has. Any other caller gets only the tags of the active rooms that it can see, without repeats. So an empty list means that the caller sees no tagged room. The call is read-only. The list has no total, so a page shorter than `count` is the last one. Use these names in the `tags` filter of `GET api/2.0/files/rooms` and in the room tag calls. To create a tag, use `POST api/2.0/files/tags`. To check whether a tag is in use, use `GET api/2.0/files/tags/{tagName}/haslinks`. The call returns 400 if `count` or `startIndex` is out of range.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **count** | query | **Integer** (int32) | How many tag names one page may carry. The answer reports no total, so a page shorter than this is the sign that the list is exhausted. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many tag names to skip before the page begins. Raise it by the number of names already received to read the next page. | [optional] [example: `0`] [min: 0] [max: 2147483647] |
| **filterValue** | query | **String** | Keeps only the tag names that contain this text, ignoring case. It is a substring match, so a fragment from the middle of a name is enough. | [optional] [example: `conf`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tag names available to the caller | [**StringArrayWrapper**](../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or the `startIndex` is negative | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringArrayWrapper**](../models/string-array-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
