# setFolderSecurityInfo

Referenced types are defined in the [full reference](../files.md).

> FileShareArrayWrapper setFolderSecurityInfo(id, SecurityInfoSimpleRequestDto)

`PUT /api/2.0/files/folder/{id}/share`

Share a folder

Grants, changes or withdraws the rights of the listed accounts and groups on one folder, and answers with the rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get, and the level that denies everything takes the access away instead; an empty `share` changes nothing and is answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to another member, is dropped without an error. With `notify` set, each account named is emailed about the access it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the folder, which the manager of the room it belongs to and a portal administrator acting as room manager are; anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to repeat. For a room use `PUT api/2.0/files/rooms/{id}/share`, which invites people by email as well.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder whose sharing is being changed. A folder stored on the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **SecurityInfoSimpleRequestDto** | body | [**SecurityInfoSimpleRequestDto**](../files.md#model-securityinfosimplerequestdto) | The rights to apply to the folder, and whether to announce them by mail. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rights the listed subjects hold on the folder after the change | [**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
