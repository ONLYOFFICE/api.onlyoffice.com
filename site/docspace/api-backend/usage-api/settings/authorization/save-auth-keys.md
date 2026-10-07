# saveAuthKeys

> BooleanWrapper saveAuthKeys(SaveAuthKeysRequestDto)

`POST /api/2.0/settings/authservice`

Save the authorization keys

Saves the authorization keys for one third-party storage or authorization provider, identified by name, or clears them when every submitted key is left empty. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); a provider that does not allow its keys to be changed from the API rejects the call outright. A provider that is only available on a paid plan additionally requires the portal's tariff to include third-party storage, or Standalone licensing, before the call is accepted. Keys that fail the provider's own validation are cleared and the call is rejected rather than left partially applied. This is a mutating, idempotent call: resaving identical keys succeeds and reports no change. It returns whether the keys actually changed, not the keys themselves; connecting Telegram or an external database through this call also triggers the matching real-time connection update.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SaveAuthKeysRequestDto** | body | [**SaveAuthKeysRequestDto**](../../models/save-auth-keys-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the provider's keys actually changed | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `name` or `props`, a key has no `name` or `value` or a `value` longer than 4000 characters, or the submitted keys failed the provider's own validation | - | - |
| **402** | The provider is a paid option not covered by the portal's current pricing plan | - | - |
| **403** | The caller has no portal-settings right, or the provider is unknown or its keys cannot be set | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
