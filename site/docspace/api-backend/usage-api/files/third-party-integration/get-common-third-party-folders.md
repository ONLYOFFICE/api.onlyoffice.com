# getCommonThirdPartyFolders

> ThirdPartyFolderArrayWrapper getCommonThirdPartyFolders()

`GET /api/2.0/files/thirdparty/common`

Get common third-party folders

Returns the third-party storage accounts of the legacy Common section, as folder entries. Each entry stands for one account, and the folder operations can browse it. Any signed-in user can call it. The call skips accounts whose folder the caller cannot read, so the list differs between users. The call is read-only. It returns a plain array without paging. In most portals the array is empty, and that is not an error. The reason is that `POST api/2.0/files/thirdparty` attaches accounts to the Rooms section, not to Common. So only accounts from an older portal appear here. The array is also empty if third-party storage is turned off or no storage service is set up. For the caller's own accounts in any section, use `GET api/2.0/files/thirdparty`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party accounts attached to the Common section, as folder entries | [**ThirdPartyFolderArrayWrapper**](../../models/third-party-folder-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThirdPartyFolderArrayWrapper**](../../models/third-party-folder-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
