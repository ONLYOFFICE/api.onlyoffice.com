# getRoomTagsInfo

Referenced types are defined in the [full reference](../files.md).

> STRINGArrayWrapper getRoomTagsInfo(count, startIndex, filterValue)

`GET /api/2.0/files/tags`

Get available room tags

Returns the custom room tags available to the caller as a flat array of names, not of objects. What the array holds depends on the account: a portal administrator gets the whole catalog, including tags that no room uses yet, while every other account gets only the tags attached to rooms it can see, with duplicates removed. An empty answer therefore means that this caller sees no tagged room, not that the portal has no tags. `filterValue` keeps the names that contain the given text, ignoring case, while `count` and `startIndex` page the result; no total is returned, so a page shorter than `count` is the signal that the list is exhausted. The names are exactly the values accepted by the `tags` filter of `GET api/2.0/files/rooms` and by the room tag calls, which makes this the call to fill a tag picker with. Add a tag with `POST api/2.0/files/tags` and check whether one is still in use with `GET api/2.0/files/tags/{tagName}/haslinks`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **count** | query | **Integer** (int32) | How many tag names one page may carry. The answer reports no total, so a page shorter than this is the sign that the list is exhausted. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many tag names to skip before the page begins. Raise it by the number of names already received to read the next page. | [optional] [example: `0`] [min: 0] [max: 2147483647] |
| **filterValue** | query | **String** | Keeps only the tag names that contain this text, ignoring case. It is a substring match, so a fragment from the middle of a name is enough. | [optional] [example: `conf`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tag names available to the caller | [**STRINGArrayWrapper**](../files.md#model-stringarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**STRINGArrayWrapper**](../files.md#model-stringarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
