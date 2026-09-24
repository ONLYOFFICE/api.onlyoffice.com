# setEncryptionInfo

> setEncryptionInfo(fileId, AccessRequestKeyDto)

`PUT /api/2.0/files/{fileId}/access`

Set file encryption information

Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that person's key. The file has to lie in a private room, and every account named in the request has to have read access to it. The caller needs read access to the file and the right to create content in that room, which its members with editing rights and its admins have; a caller without those rights, a file outside a private room and a file that does not exist are all refused with 403. Read the result back with `GET api/2.0/files/{fileId}/access`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the keys are issued for; it has to lie in a private room. | [required] [example: `12345`] |
| **AccessRequestKeyDto** | body | [**List**](../../models/access-request-key-dto.md) | One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of everybody else are left as they are, so sending no entry for a person does not revoke that person's key. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file keys were stored | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not issue keys for this file, or the file is not in a private room | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
