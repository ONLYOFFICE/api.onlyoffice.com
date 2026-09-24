# changeFileOwner

> FileEntryBaseArrayWrapper changeFileOwner(ChangeOwnerRequestDto)

`POST /api/2.0/files/owner`

Change the room or file owner

Hands the ownership of the listed rooms and files over to a single account, and returns the entries as they look afterwards. Among folders only rooms are accepted - take their identifiers from `GET api/2.0/files/rooms`; a plain folder is refused. A file is accepted only while it lies in the portal's common section, so a file kept inside a room or in a personal section is refused as well, and so is a file that is locked or currently open in the editor. The new owner has to be an active account that is allowed to manage rooms, and a private room additionally requires that this account has already set up its encryption keys; a deactivated account, a guest or a plain member is rejected. The caller must be the creator of every listed room, or a portal administrator. The call mutates the entries one at a time and stops at the first item it may not touch, leaving the entries already processed changed, so a partial answer is possible; an item whose owner is already the target account is returned untouched, which makes a repeat safe. The previous owner keeps access to a transferred room as its manager, while a transferred file is saved as a new version authored by the new owner. An entry that lives on a connected third-party account is quietly left out.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ChangeOwnerRequestDto** | body | [**ChangeOwnerRequestDto**](../../models/change-owner-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms and files whose owner has been changed, as folder and file objects | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
