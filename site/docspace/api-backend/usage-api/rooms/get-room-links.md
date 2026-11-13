# getRoomLinks

> FileShareArrayWrapper getRoomLinks(id, type)

`GET /api/2.0/files/rooms/{id}/links`

Get the room links

Returns the links of a room. If `type` is set, the list has only links of this type. Otherwise, it has invitation and external links together. Each entry has the address, title, access, expiration, and the flag of the primary external link. Invitation links also show how many uses are left. Public and form-filling rooms get an external link when they are created. So an empty list there means that the link was revoked. Other rooms start with no links. Collaboration and virtual data rooms can have only an invitation link. Requires read access to the room. Other callers get 403. A member without the right to see the links gets an empty list. The call is read-only. It returns at most the first 100 links and ignores paging parameters. The count in the response is the number of entries sent. If the room does not exist, the call returns 404. If a string `id` points to a storage account that is not connected, the call returns 400.

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
| **id** | path | **String** | The room whose links are listed, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
