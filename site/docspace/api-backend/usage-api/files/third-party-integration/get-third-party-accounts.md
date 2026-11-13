# getThirdPartyAccounts

> ThirdPartyAccountArrayWrapper getThirdPartyAccounts()

`GET /api/2.0/files/thirdparty`

Get the third-party accounts

Returns the third-party storage accounts that the caller connected, one element per account. Any signed-in user can call it. The list skips the accounts of other users. It also skips the backup account of `GET api/2.0/files/thirdparty/backup`, even for a DocSpace admin. The call is read-only. It returns a plain array without paging and in no fixed order. An empty array means that the caller connected nothing. The response has no credentials. To browse an account, take its folder ID from `GET api/2.0/files/@root`. The answer of `POST api/2.0/files/thirdparty` also has it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party accounts the caller has connected | [**ThirdPartyAccountArrayWrapper**](../../models/third-party-account-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThirdPartyAccountArrayWrapper**](../../models/third-party-account-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
