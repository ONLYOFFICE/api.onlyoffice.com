# getGroupsMembersWithFileSecurity

> GroupMemberSecurityArrayWrapper getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue)

`GET /api/2.0/files/file/{fileId}/group/{groupId}/share`

Get file access of group members

Returns the members of a group with their access to a file that the group has access to. Any signed-in user can call it, except a guest. A guest gets 403. The call is read-only. It sorts the members by first name. Use `startIndex` and `count` to page through the list. The response headers carry the total. A `count` out of range returns 400. The call returns an empty list for a group without access to the file, or an unknown file. It also returns an empty list if the caller cannot read the file. It also returns an empty list to a caller who cannot change the access of the file. In these cases the total is 0. So an empty list does not mean that the group has no members. A user gets no contacts, phone, location, or notes of the other members.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose access is being read. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **groupId** | path | **UUID** (uuid) | The group whose members are listed. Take it from the entries of `GET api/2.0/files/file/{id}/share` that stand for a group; a group that holds no rights on this file is answered with an empty list. | [required] [example: `9924256a-739c-462b-af15-e652a3b1b6eb`] |
| **count** | query | **Integer** (int32) | How many members at most to answer with. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many members to skip before answering, used together with `count` to page through a large group. | [optional] [example: `0`] |
| **filterValue** | query | **String** | Keeps only the members whose first name, last name or email contains this value. The value is matched in lower case, so an uppercase one finds nothing. | [optional] [example: `john`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The members of the group with the access each of them has on the file | [**GroupMemberSecurityArrayWrapper**](../../models/group-member-security-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or the `count` is outside its allowed range | - | - |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupMemberSecurityArrayWrapper**](../../models/group-member-security-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose access is being read. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
