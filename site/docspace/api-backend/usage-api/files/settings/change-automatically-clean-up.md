# changeAutomaticallyCleanUp

> AutoCleanUpDataWrapper changeAutomaticallyCleanUp(AutoCleanupRequestDto)

`PUT /api/2.0/files/settings/autocleanup`

Update the trash bin auto-clearing setting

Writes the trash auto-clearing setting of the calling account and returns the pair that is now stored. Both fields are written together from the request, so a call that omits `gap` stores an interval outside the published list rather than keeping the previous one - always send the interval, including when `set` is false. While clearing is on, an item is removed from the caller's trash for good once it has been there longer than the interval, and each trashed entry reports the moment it is due to disappear in its own `autoDelete` field; switching clearing off stops that and leaves whatever is in the trash. The setting belongs to the calling account alone: every authenticated role down to a guest may change its own, one member's choice never affects another, and an unauthenticated caller is refused. Items already removed are not recoverable. Read the pair back with `GET api/2.0/files/settings/autocleanup`.

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
