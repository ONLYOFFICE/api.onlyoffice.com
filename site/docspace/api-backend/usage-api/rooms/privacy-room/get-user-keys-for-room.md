# getUserKeysForRoom

> EncryptionKeyArrayWrapper getUserKeysForRoom(roomId)

`GET /api/2.0/privacyroom/{roomId}/access`

Get private room access keys

Returns the encryption keys of all members of a private room, one entry per key. An app uses them to encrypt a file key for every member. Requires membership in the room, with any access level, and a key of the caller's own. Other callers get 403. A DocSpace admin who is not a member also gets 403. The call is read-only. Only the caller's own entries include `privateKeyEnc`. The call skips entries without a public key. An archived private room still returns its keys. To get the keys of one file, use `GET api/2.0/files/file/{fileId}/publickeys`. To get the keys of users before you invite them, use `GET api/2.0/privacyroom/{roomId}/access/candidates`. If the room is not private, the call returns 400. If the room is unknown or in Trash, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **roomId** | path | **Integer** (int32) | The private room whose access keys are read. Take it from the `id` of the room returned by `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption keys associated with the privacy room | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The room is not a private room | - | - |
| **403** | The caller has no read access to the room or holds no encryption key of their own | - | - |
| **404** | The room is not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
