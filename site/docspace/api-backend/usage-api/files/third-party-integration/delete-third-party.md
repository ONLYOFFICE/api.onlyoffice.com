# deleteThirdParty

> StringWrapper deleteThirdParty(providerId)

`DELETE /api/2.0/files/thirdparty/{providerId}`

Remove a third-party account

Disconnects a third-party storage account from the portal and returns the ID of its folder. The ID has the `provider-accountId` form of third-party entries, not the numeric `providerId`. Requires the right to delete the account folder, which the user who connected the account has. Other callers get 403. The call changes data and cannot be undone. It deletes nothing at the storage service, and the files stay there. The portal deletes its link to them, the stored credentials, and the sharing records and tags of its entries. If the account is the backup storage of `POST api/2.0/files/thirdparty/backup`, the call also deletes the backup schedule. If a room stands on the account, the call returns 403. To disconnect such an account, delete the room. If no account has this `providerId`, the call returns 404. So a repeated call also returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **providerId** | path | **Integer** (int32) | The ID of the connected third-party storage account, as `providerId` of `GET api/2.0/files/thirdparty`. | [required] [example: `12`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The ID of the folder that stood for the removed account | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller neither connected the account nor has the right to delete the folder it stands for | - | - |
| **404** | No third-party account with this ID exists on the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
