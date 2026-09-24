# setFileSecurityInfo

> FileShareArrayWrapper setFileSecurityInfo(id, SecurityInfoSimpleRequestDto)

`PUT /api/2.0/files/file/{id}/share`

Share a file

Grants, changes or withdraws the rights of the listed accounts and groups on one file, and answers with the rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get, and the level that denies everything takes the access away instead; an empty `share` changes nothing and is answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to another member, is dropped without an error, so compare the answer with what was sent. With `notify` set, each account named is emailed about the access it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the file, which its creator, the manager of the room it lies in and a portal administrator acting as room manager are; anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to repeat. For several files and folders in one request use `PUT api/2.0/files/share`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **SecurityInfoSimpleRequestDto** | body | [**SecurityInfoSimpleRequestDto**](../../models/security-info-simple-request-dto.md) | The rights to apply to the file, and whether to announce them by mail. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rights the listed subjects hold on the file after the change | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
