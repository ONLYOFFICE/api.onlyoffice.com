# changeFileOwner

> FileEntryBaseArrayWrapper changeFileOwner(ChangeOwnerRequestDto)

`POST /api/2.0/files/owner`

Change the room or file owner

Changes the owner of the listed rooms and files to one account. Requires the owner of each listed entry, or a DocSpace admin. Other callers get 403. The call changes data, one entry at a time. It stops at the first entry it may not change, and earlier entries stay changed. An entry that the account already owns stays unchanged, so you can repeat the call. The previous owner stays in a transferred room as its room manager. A transferred file gets a new version by the new owner. The call skips third-party files. The call returns 403 if the new owner is not an active DocSpace admin or room admin. It also returns 403 for a private room if the new owner has no encryption keys. It also returns 403 for a folder that is not a room, or a file outside the common section. A file that is locked or being edited also returns 403. If the new owner lacks keys to some encrypted files of a private room, the call returns 409. To find these files, use `GET api/2.0/privacyroom/{roomId}/access/missing`. After their keys are added, repeat the call. Without `userId`, the call returns 400. It also returns 400 if a string file id points to a storage account that is not connected.  Raises the `room.updated` webhook for every listed room whose owner changes. Raises the `agent.updated` webhook instead for a listed AI agent whose owner changes. Raises the `file.updated` webhook for every file whose owner changes.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ChangeOwnerRequestDto** | body | [**ChangeOwnerRequestDto**](../../models/change-owner-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms and files whose owner has been changed, as folder and file objects | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `userId`, or a third-party file identifier refers to a storage account that is not connected | - | - |
| **403** | The new owner is not an active account allowed to manage rooms or has not set up encryption keys for a listed private room, the caller may not change the owner of a listed entry, a listed folder lies outside the rooms and common sections, or a listed file is locked, being edited or lies outside the common section | - | - |
| **409** | The new owner holds no key for some encrypted files of a listed private room: `GET api/2.0/privacyroom/{roomId}/access/missing` names them, and the call can be repeated once their keys are written | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
