# changeAccessToThirdparty

> BooleanWrapper changeAccessToThirdparty(SettingsRequestDto)

`PUT /api/2.0/files/thirdparty`

Change the third-party settings access

Turns the portal-wide permission to connect third-party storages such as Google Drive, Dropbox or Nextcloud on or off, and returns the value that is now stored. Only the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. This is a single setting for the whole portal rather than a preference of the caller, so it changes what every account sees. While it is off, connecting an account through `POST api/2.0/files/thirdparty` is refused and the contents of an already connected provider folder cannot be listed; the stored connections themselves survive and work again once it is turned back on. The providers this portal can offer are listed by `GET api/2.0/files/thirdparty/capabilities`. The same value is published as `enableThirdParty` by `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from the portal, not a success flag.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../../models/settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if third-party storages may be connected in this portal | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
