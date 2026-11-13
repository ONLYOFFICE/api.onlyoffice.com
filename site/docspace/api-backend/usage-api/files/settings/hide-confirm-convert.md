# hideConfirmConvert

> BooleanWrapper hideConfirmConvert(HideConfirmConvertRequestDto)

`PUT /api/2.0/files/hideconfirmconvert`

Hide the confirmation dialog when converting

Hides one of two conversion prompts for the calling account. If `save` is true, the call hides the prompt to keep a copy in the original format. If `save` is false, it hides the prompt to open the converted file. Any signed-in user can call it. The call changes data, and you can repeat it with the same body. No call of the API shows a hidden prompt again. The call always returns `true`. To read both flags, use `hideConfirmConvertSave` and `hideConfirmConvertOpen` of `GET api/2.0/files/settings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **HideConfirmConvertRequestDto** | body | [**HideConfirmConvertRequestDto**](../../models/hide-confirm-convert-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the chosen conversion prompt is now hidden | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
