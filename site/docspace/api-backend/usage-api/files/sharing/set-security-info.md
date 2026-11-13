# setSecurityInfo

> FileShareArrayWrapper setSecurityInfo(SecurityInfoRequestDto)

`PUT /api/2.0/files/share`

Set sharing rights in batch

Changes the access of accounts and groups to the listed files and folders. The access `None` deletes the rights. Requires the right to manage access to each entry. Other callers get 403. The call changes data, one entry at a time. You can repeat it with the same body. It stops at the first entry it may not change. Earlier entries stay changed. It skips subjects the caller may not share with, such as another user's guest. It also skips deactivated accounts, deleted groups, and files outside My documents and rooms. If `notify` is true, the portal emails the accounts about the change. It returns the new rights of these subjects on each changed entry. A skipped subject or entry is not in the answer. An empty `share` changes nothing and returns an empty list. A repeat skips subjects that already have the listed access, so it sends no email. A repeated `None` changes nothing but returns the rights of the other listed subjects on that entry. In a listed room, a repeated `None` for an account emails a room invitation if `notify` is true. For one room, use `PUT api/2.0/files/rooms/{id}/share`. The call returns 400 for an invalid or too long `email`, too many email invitations, or a too long `sharingMessage`. It also returns 403 if a subject cannot get the access, or lacks encryption keys for a private room.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SecurityInfoRequestDto** | body | [**SecurityInfoRequestDto**](../../models/security-info-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rights of the listed accounts and groups on every entry that was processed | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, an `email` in `share` is malformed or longer than 255 characters, `share` invites more addresses by email than the portal allows at once, or `sharingMessage` is longer than 255 characters | - | - |
| **403** | The caller may not change the sharing of a listed entry, a listed subject cannot be given the requested access on it, or a listed private room has an account in `share` that has not set up its encryption keys | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
