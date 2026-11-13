# getRoomSecurityInfo

> FileShareArrayWrapper getRoomSecurityInfo(id, filterType, count, startIndex, filterValue)

`GET /api/2.0/files/rooms/{id}/share`

Get the room access rights

Returns one page of the members of a room with their access. The list starts with the owner, then room managers, groups, other members, guests, and pending invitations. Use `filterType` to select what the call lists. By default, it lists accounts and groups, without links. To read the links, use `GET api/2.0/files/rooms/{id}/links`. Use `filterValue` to match the display name. A pending invitation matches by its email. Requires read access to the room. Other callers get 403. A DocSpace admin can read the list of any room. The call is read-only. Use `startIndex` and `count` to page through the list. The order stays the same between calls. The response headers carry the total. To list links here, the caller needs the right to see the links. Without it, the call returns an empty page. A `count` out of range returns 400. If the room does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose access list is read, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **filterType** | query | **ShareFilterType** | What kind of access entries to list. The default covers accounts and groups and leaves the sharing links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. | [optional] [example: `0`] [enum: `0`, `1`, `2`, `4`, `8`, `15`, `16`, `32`] |
| **count** | query | **Integer** (int32) | How many entries to return in one answer. The total number of matching entries comes back in the response headers, so it is what tells the caller whether another page is needed. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many matching entries to skip before the page starts. Together with the page size it walks the list, which is ordered by role and then by name and is therefore stable between calls. | [optional] [example: `0`] |
| **filterValue** | query | **String** | Keeps only the entries whose displayed name contains this text. An invitation that has not been accepted yet is listed under the email address it was sent to, so that is what has to be searched for. | [optional] [example: `Smith`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the room access entries, ordered by role and then by name | [**FileShareArrayWrapper**](../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not read the room | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../models/file-share-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room whose access list is read, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
