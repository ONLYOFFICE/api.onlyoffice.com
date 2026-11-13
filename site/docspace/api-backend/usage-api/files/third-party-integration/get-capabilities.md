# getCapabilities

> ArrayArrayWrapper getCapabilities()

`GET /api/2.0/files/thirdparty/capabilities`

Get third-party provider capabilities

Returns the third-party storage services that the portal can connect, in a short form. Each element is an array. Its first item is the value to send as `providerKey` to `POST api/2.0/files/thirdparty`. The OAuth services are `Box`, `DropboxV2`, `GoogleDrive`, and `OneDrive`. Their second and third items are the OAuth client ID and redirect URL. With them, you can build the address of the consent screen. A service that uses a login and password (`SharePoint`, `WebDav`, `kDrive`, or `Yandex`) has a one-item array. The list has only the services turned on in the portal configuration. It also skips an OAuth service whose app is not set up. Any signed-in user can call it. A guest gets an empty array instead of an error. The call is read-only. The array is also empty while third-party storage is turned off for the portal. To turn it on, use `PUT api/2.0/files/thirdparty`. For display names, WebDAV presets, and the flags of a connection form, use `GET api/2.0/files/thirdparty/providers`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider keys, each with the OAuth client ID and redirect URL where the service uses OAuth | [**ArrayArrayWrapper**](../../models/array-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ArrayArrayWrapper**](../../models/array-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
