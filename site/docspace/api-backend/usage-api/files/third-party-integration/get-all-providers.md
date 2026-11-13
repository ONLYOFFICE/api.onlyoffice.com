# getAllProviders

> ProviderArrayWrapper getAllProviders(excludewebdav)

`GET /api/2.0/files/thirdparty/providers`

Get all third-party providers

Returns the third-party storage services that the portal configuration lists, with the data of a connection form. With `excludewebdav=true`, the list has only the OAuth services. Any signed-in user can call it. A guest gets an empty array instead of an error. The call is read-only. The array is also empty while third-party storage is turned off for the portal. To turn it on, use `PUT api/2.0/files/thirdparty`. The list also has OAuth services whose app is not set up, with `connected` false. To list the accounts of the caller, use `GET api/2.0/files/thirdparty`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **excludewebdav** | query | **Boolean** | Set to true to leave out the whole WebDAV family, the kDrive and Yandex presets included, and keep only the services that authenticate through OAuth 2.0; false lists all of them. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storage services this portal can connect | [**ProviderArrayWrapper**](../../models/provider-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ProviderArrayWrapper**](../../models/provider-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
