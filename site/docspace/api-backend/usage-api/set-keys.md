# setKeys

Referenced types are defined in the [full reference](../files.md).

> EncryptionKeyArrayWrapper setKeys(EncryptionKeyRequestDto)

`POST /api/2.0/privacyroom/keys`

Create an encryption key

Stores a new encryption key pair for the calling user and answers with that user's whole key set. The material is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while `privateKeyEnc` arrives already encrypted with the user's own password, so the portal keeps it as opaque text. A member must hold at least one key before they can be invited to a private room, which makes this the first call of the private-room flow. Every authenticated member manages their own keys and only their own, there is no parameter for somebody else's, and a guest is refused, which is also why a guest cannot become a member of a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller's set and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EncryptionKeyRequestDto** | body | [**EncryptionKeyRequestDto**](../files.md#model-encryptionkeyrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | The encryption key is created. Answered 200 before DocSpace 4.0; the response body is unchanged | [**EncryptionKeyArrayWrapper**](../files.md#model-encryptionkeyarraywrapper) | - |
| **400** | The key material is missing, blank or too large to be stored | - | - |
| **409** | A key with the same identifier already exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../files.md#model-encryptionkeyarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
