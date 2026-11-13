# replaceKey

> EncryptionKeyArrayWrapper replaceKey(EncryptionKeyRequestDto)

`PUT /api/2.0/privacyroom/keys`

Rotate an encryption key

Replaces the key material of one encryption key pair of the calling user. The call finds the pair by `id` and leaves the other pairs unchanged. Without `id`, it replaces the pair with the all-zero `id`. The call replaces both halves, so send the private half even when it does not change. Any signed-in user can call it, except a guest. A guest gets 403. The call changes data, and you can repeat it with the same body. It returns every key the caller holds after the change. After this call, `GET api/2.0/privacyroom/{roomId}/access` returns the new public half. To create a pair, use `POST api/2.0/privacyroom/keys`. If the caller has no pair with this `id`, the call returns 404. The call returns 400 if the body is missing, `publicKey` or `privateKeyEnc` is blank, or a key is too long. A malformed `id` also returns 400. A 400 leaves the stored pair unchanged.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EncryptionKeyRequestDto** | body | [**EncryptionKeyRequestDto**](../../models/encryption-key-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption key is replaced | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The key material is missing, blank or too large to be stored | - | - |
| **403** | The caller is a guest, who cannot own encryption keys | - | - |
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
