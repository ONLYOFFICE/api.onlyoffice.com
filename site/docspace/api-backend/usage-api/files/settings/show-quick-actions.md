# showQuickActions

> BooleanWrapper showQuickActions(SettingsRequestDto)

`PUT /api/2.0/files/showquickactions`

Display quick actions

Turns the quick action buttons shown next to a file name on or off, and answers with the value that was sent. This is a preference of the calling account rather than a portal setting, so it changes what the caller sees and nothing for anybody else; any authenticated role down to a guest may set it, while an unauthenticated caller is refused. The value is written only when it differs from the one already stored, and only then is the change recorded in the audit trail, so repeating the same call is harmless and leaves no trace. An account that has never set it is treated as having the buttons on. The answer echoes the request instead of re-reading what was stored, so read the setting back through `GET api/2.0/files/settings`, which publishes it as `showQuickActions`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../../models/settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if quick action buttons are now shown to the caller next to a file name | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
