# saveDefaultFolder

> StudioDefaultPageSettingsWrapper saveDefaultFolder(DefaultProductRequestDto)

`PUT /api/2.0/settings/defaultfolder`

Set the default folder

Sets which folder the current user's account opens into by default, such as My Documents, the rooms list, or favorites. Requires an authenticated session; every role may set its own default, and the change never affects any other user. Only folder types the client actually offers as a landing page are accepted; picking My Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating, idempotent call. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultProductRequestDto** | body | [**DefaultProductRequestDto**](../../models/default-product-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved default folder setting for the current user | [**StudioDefaultPageSettingsWrapper**](../../models/studio-default-page-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StudioDefaultPageSettingsWrapper**](../../models/studio-default-page-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
