# saveDefaultFolder

> StudioDefaultPageSettingsWrapper saveDefaultFolder(DefaultProductRequestDto)

`PUT /api/2.0/settings/defaultfolder`

Set the default folder

Sets the section that opens first for the calling user, such as My documents, rooms, or favorites. Any signed-in user can call it, including a guest. It does not change the setting of other users. The call changes data. You can repeat it with the same body. It returns the saved setting. The call returns 400 for a missing or unsupported type, or for My documents chosen by a guest.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultProductRequestDto** | body | [**DefaultProductRequestDto**](../../models/default-product-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved default folder setting for the current user | [**StudioDefaultPageSettingsWrapper**](../../models/studio-default-page-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `defaultFolderType`, the folder is not one a start page can be set to, or a guest chooses My documents | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StudioDefaultPageSettingsWrapper**](../../models/studio-default-page-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
