# hideConfirmConvert

> BooleanWrapper hideConfirmConvert(HideConfirmConvertRequestDto)

`PUT /api/2.0/files/hideconfirmconvert`

Hide the confirmation dialog when converting

Hides one of the two prompts the interface shows around file conversion, for the calling account only. The `save` field chooses which prompt, and is not the value being written: `save=true` hides the prompt that offers to keep a copy in the original format when a file is converted, `save=false` hides the prompt that offers to open the conversion result. Both flags are one-way - the operation can only hide a prompt, and there is no API to show it again - so the answer is always true and repeating the call changes nothing. The two flags are independent: hiding one leaves the other as it was. Every authenticated role down to a guest may set its own, and an unauthenticated caller is refused. The stored flags are published as `hideConfirmConvertSave` and `hideConfirmConvertOpen` by `GET api/2.0/files/settings`. Conversion itself is started by `PUT api/2.0/files/file/{fileId}/checkconversion` and is not affected by either flag.

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
