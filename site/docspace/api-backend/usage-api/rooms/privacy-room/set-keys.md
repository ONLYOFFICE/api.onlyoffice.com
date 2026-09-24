# setKeys

> EncryptionKeyArrayWrapper setKeys(EncryptionKeyRequestDto)

`POST /api/2.0/privacyroom/keys`

Create an encryption key

Stores a new encryption key pair for the calling user and answers with that user's whole key set. The material is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while `privateKeyEnc` arrives already encrypted with the user's own password, so the portal keeps it as opaque text. A member must hold at least one key before they can be invited to a private room, which makes this the first call of the private-room flow. Every authenticated member manages their own keys and only their own, there is no parameter for somebody else's, and a guest is refused, which is also why a guest cannot become a member of a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller's set and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EncryptionKeyRequestDto** | body | [**EncryptionKeyRequestDto**](../../models/encryption-key-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | The encryption key is created. Answered 200 before DocSpace 4.0; the response body is unchanged | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | - |
| **400** | The key material is missing, blank or too large to be stored | - | - |
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
