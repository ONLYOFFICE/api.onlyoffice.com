# getUserKeysForRoom

> EncryptionKeyArrayWrapper getUserKeysForRoom(roomId)

`GET /api/2.0/privacyroom/{roomId}/access`

Get private room access keys

Returns the encryption keys that give access to a private room: one entry per key held by each of its members, which is what a client needs in order to encrypt a file key for everyone allowed to open the room's content. Only the caller's own entries carry `privateKeyEnc`; another member's entry carries the public half alone, and an entry with no public half is not reported as access at all. The room has to be a private one, a room created without private mode holds no access keys and the call is refused, and it has to still exist: an unknown room, or one already moved to Trash, is reported as missing, while an archived private room still answers. Access follows room membership and not portal role: any member from read access upwards receives the full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key of their own, the room creator included once they delete their last key. The call is read-only. For the keys of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **roomId** | path | **Integer** (int32) | The private room whose access keys are read. Take it from the `id` of the room returned by `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption keys associated with the privacy room | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
