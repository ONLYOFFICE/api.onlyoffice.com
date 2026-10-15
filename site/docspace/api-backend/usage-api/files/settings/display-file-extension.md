# displayFileExtension

> BooleanWrapper displayFileExtension(SettingsRequestDto)

`PUT /api/2.0/files/displayfileextension`

Display a file extension

Stores whether file titles are shown to the caller with their extension, and returns the value that is now stored. It is a preference of the calling account: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. Only the presentation changes - the titles kept by the portal always include the extension, and the listing and file operations keep returning them in full, so a client that trims the extension for display must add it back before it renames or searches for anything. Writing a value that is already stored is accepted and leaves the setting untouched. The value is published as `displayFileExtension` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with extensions hidden. This governs display alone: which extensions may be uploaded, viewed or edited at all is published by the same settings operation as separate format lists.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../../models/settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if file titles are shown with their extension | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
