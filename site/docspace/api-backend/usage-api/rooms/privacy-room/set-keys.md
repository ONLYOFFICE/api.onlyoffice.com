# setKeys

> EncryptionKeyArrayWrapper setKeys(EncryptionKeyRequestDto)

`POST /api/2.0/privacyroom/keys`

Create an encryption key

Creates an encryption key pair for the calling user. A user needs at least one key before anyone can invite them to a private room. Any signed-in user can call it, except a guest. A guest gets 403. The call changes data, and a repeated call with the same `id` returns 409. A body without `id` uses the all-zero `id`, so its repeat also returns 409. It returns 201 with every key the caller now holds. Before DocSpace 4.0, it returned 200 with the same body. To change an existing pair, use `PUT api/2.0/privacyroom/keys`. The call returns 400 if the body is missing, `publicKey` or `privateKeyEnc` is blank, or a key is too long. A malformed `id` also returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EncryptionKeyRequestDto** | body | [**EncryptionKeyRequestDto**](../../models/encryption-key-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | The encryption key is created. Answered 200 before DocSpace 4.0; the response body is unchanged | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | - |
| **400** | The key material is missing, blank or too large to be stored | - | - |
| **403** | The caller is a guest, who cannot own encryption keys | - | - |
| **409** | A key with the same identifier already exists | - | - |
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
