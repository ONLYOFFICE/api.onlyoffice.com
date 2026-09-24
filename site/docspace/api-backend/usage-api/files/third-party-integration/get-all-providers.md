# getAllProviders

> ProviderArrayWrapper getAllProviders(excludewebdav)

`GET /api/2.0/files/thirdparty/providers`

Get all third-party providers

Lists the third-party storage services this portal can connect, with everything a connection form needs: the display name, the key to send as `providerKey`, whether the service authenticates through OAuth 2.0, the OAuth client ID and redirect URL where it does, and whether the caller has to supply the server address. Several WebDAV presets share the key `WebDav` and are told apart by their names, so keep the name the caller chose next to the key when building the request. Pass `excludewebdav=true` to drop the whole WebDAV family, including the kDrive and Yandex presets, and keep only the OAuth services. The call is read-only. An empty array is a normal answer: it is what a guest gets, and what everyone gets while the portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`). The `connected` flag of an element says the service is available on this portal, not that an account of it exists - the caller's own accounts are listed by `GET api/2.0/files/thirdparty`.

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
