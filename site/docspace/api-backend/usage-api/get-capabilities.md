# getCapabilities

Referenced types are defined in the [full reference](../files.md).

> ArrayArrayWrapper getCapabilities()

`GET /api/2.0/files/thirdparty/capabilities`

Get third-party provider capabilities

Lists the third-party storage services this portal is able to connect, in the compact form a connection dialog needs. Every element is itself an array whose first item is the provider key accepted as `providerKey` by `POST api/2.0/files/thirdparty`. For the services that authenticate through OAuth 2.0 (`Box`, `DropboxV2`, `GoogleDrive`, `OneDrive`) the second and third items are the OAuth client ID and the redirect URL this portal is registered with, so the caller can build the consent screen URL itself; the services that authenticate by login and password (`SharePoint`, `WebDav`, `kDrive`, `Yandex`) contribute a single-item array. Only the services enabled in the portal configuration are listed, and an OAuth service whose application is not configured is left out. The call is read-only. An empty array is a normal answer rather than a failure: it is what a guest gets, and what everyone gets while the portal-wide third-party switch is off (`PUT api/2.0/files/thirdparty`). For display names, the WebDAV presets and the flags a connection form needs, use `GET api/2.0/files/thirdparty/providers` instead.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider keys, each with the OAuth client ID and redirect URL where the service uses OAuth | [**ArrayArrayWrapper**](../files.md#model-arrayarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ArrayArrayWrapper**](../files.md#model-arrayarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
