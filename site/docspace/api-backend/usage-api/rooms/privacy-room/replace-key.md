# replaceKey

> EncryptionKeyArrayWrapper replaceKey(EncryptionKeyRequestDto)

`PUT /api/2.0/privacyroom/keys`

Rotate an encryption key

Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the submitted `publicKey` and `privateKeyEnc`, and the caller's other pairs are left untouched. The pair has to exist already, an `id` that is not in the caller's set is answered with 404, and a first key is created with `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory, and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body leaves the same state. It answers with every key the caller holds afterwards, and from then on `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EncryptionKeyRequestDto** | body | [**EncryptionKeyRequestDto**](../../models/encryption-key-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption key is replaced | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The key material is missing, blank or too large to be stored | - | - |
| **404** | The encryption key to replace is not found | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
