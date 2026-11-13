# changeAutomaticallyCleanUp

> AutoCleanUpDataWrapper changeAutomaticallyCleanUp(AutoCleanupRequestDto)

`PUT /api/2.0/files/settings/autocleanup`

Update the trash bin auto-clearing setting

Changes the trash auto-clearing setting of the calling account. It returns the setting that is now stored. Any signed-in user can call it. The call changes data, and you can repeat it with the same body. The call writes `set` and `gap` together. If you omit `gap`, the call stores 0, which is not a valid interval. So send `gap` even when `set` is false. While clearing is on, the portal deletes an item after it stays in the trash longer than `gap`. This deletion cannot be undone. Turning clearing off keeps the items in the trash.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AutoCleanupRequestDto** | body | [**AutoCleanupRequestDto**](../../models/auto-cleanup-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The trash auto-clearing setting that is now stored for the caller | [**AutoCleanUpDataWrapper**](../../models/auto-clean-up-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AutoCleanUpDataWrapper**](../../models/auto-clean-up-data-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
