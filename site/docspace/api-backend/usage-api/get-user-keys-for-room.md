# getUserKeysForRoom

Referenced types are defined in the [full reference](../files.md).

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
| **200** | The encryption keys associated with the privacy room | [**EncryptionKeyArrayWrapper**](../files.md#model-encryptionkeyarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../files.md#model-encryptionkeyarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
