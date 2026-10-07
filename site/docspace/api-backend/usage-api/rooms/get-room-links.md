# getRoomLinks

> FileShareArrayWrapper getRoomLinks(id, type)

`GET /api/2.0/files/rooms/{id}/links`

Get the room links

Returns the sharing links of a room, with the invitation and the external links mixed together unless `type` narrows it to one kind. Each entry carries the link address, its title, access level, expiration, the flag that marks the primary external link of the room and, for invitation links, how many times it may still be used. Public and form filling rooms come with an external link created for them, so an empty answer there means that the link was revoked rather than that the room is private; rooms of the other kinds start with no links at all and only gain one when somebody creates it, which for a collaboration room and a virtual data room can be an invitation link alone. The caller needs access to the room and the right to see its links: a member invited without that right gets an empty list rather than an error, while somebody who is not in the room at all is refused. Paging parameters are not honoured here: the first hundred links are returned and the reported count is the number of entries actually sent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose links are listed, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **type** | query | **LinkType** | Narrows the answer to one kind of link: invitation links, which turn whoever opens them into a member, or external links, which open the room without an account. Leaving it out returns both kinds together. | [optional] [example: `1`] [enum: `0`, `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The sharing links of the room | [**FileShareArrayWrapper**](../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not read the room | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **500** | A third-party identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../models/file-share-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room whose links are listed, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
