# getGroupsMembersWithFileSecurity

Referenced types are defined in the [full reference](../files.md).

> GroupMemberSecurityRequestArrayWrapper getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue)

`GET /api/2.0/files/file/{fileId}/group/{groupId}/share`

Get file access of group members

Lists the members of one portal group together with the access each of them has on a file that group was granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on that member alone, `overridden` says which of the two applies, `owner` marks the member who created the file, and `canEditAccess` says whether the caller may still change that member's level. Take the group identifier from the group entries of `GET api/2.0/files/file/{id}/share`. `startIndex` and `count` page through the members, `filterValue` keeps only those whose first name, last name or email contains the value - the comparison is made in lower case, so an uppercase value matches nothing - and the number of members is reported in the response headers. Members come back ordered by first name. A group that holds no rights on this file, a file the caller cannot read and a file that does not exist are all answered with an empty list rather than an error, so an empty answer does not mean that the group has no members. A guest is refused. The call is read-only.

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
| **200** | The members of the group with the access each of them has on the file | [**GroupMemberSecurityRequestArrayWrapper**](../files.md#model-groupmembersecurityrequestarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupMemberSecurityRequestArrayWrapper**](../files.md#model-groupmembersecurityrequestarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
