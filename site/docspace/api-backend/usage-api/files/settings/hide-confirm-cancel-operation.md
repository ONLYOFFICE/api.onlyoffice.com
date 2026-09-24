# hideConfirmCancelOperation

> BooleanWrapper hideConfirmCancelOperation(SettingsRequestDto)

`PUT /api/2.0/files/hideconfirmcanceloperation`

Hide confirmation dialog when canceling operations

Stores whether the caller is asked to confirm cancelling a running file operation, and returns the value that is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. Unlike the conversion prompt of `PUT api/2.0/files/hideconfirmconvert`, this one works in both directions - `set=true` hides the confirmation, `set=false` brings it back. It is a hint for the interface only: cancelling an operation through the API is unaffected, and the operations themselves keep being reported by `GET api/2.0/files/fileops`. The value is published as `hideConfirmCancelOperation` by `GET api/2.0/files/settings`, which is the only way to read it back. Writing a value that is already stored is accepted and leaves the setting untouched. A new account starts with the confirmation shown. The prompt it hides is the one raised when a running copy, move or download is about to be abandoned, not the one raised before a deletion - that one is `PUT api/2.0/files/changedeleteconfrim`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../../models/settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the cancel confirmation is now hidden for the caller | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
