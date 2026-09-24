# checkMoveOrCopyBatchItems

> FileEntryBaseArrayWrapper checkMoveOrCopyBatchItems(inDto)

`GET /api/2.0/files/fileops/move`

Check move or copy conflicts

Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the request that clashes, and an empty array means the batch would go through without one. The `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is passed over. The caller needs create access to the destination: an archived room and a room the caller cannot write to are refused with 403, a destination that does not exist is answered as missing, and a request without `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all use `GET api/2.0/files/fileops/checkdestfolder`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **inDto** | query | **BatchRequestDto** | The files and folders to move or copy, the folder they go to, and the way name clashes are settled. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The listed items that already have a same-named entry in the destination folder | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
