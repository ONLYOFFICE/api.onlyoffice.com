# addTemplates

> BooleanWrapper addTemplates(TemplatesRequestDto)

`POST /api/2.0/files/templates`

Add template files

Adds files to the personal template list of the calling account. The portal offers this list when a user starts a new document from an existing one. Any signed-in user can call it, except a guest. A guest gets 403. The call skips files without read access and unknown ids. It also skips a file whose extension is not in `extsWebTemplate` of `GET api/2.0/files/settings`. The call changes data. You can repeat it with the same body. It returns `true` even when it adds nothing. No operation of this API reads the list back. To delete files from the list, use `DELETE api/2.0/files/templates`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TemplatesRequestDto** | body | [**TemplatesRequestDto**](../../models/templates-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the request was understood, which does not mean that anything was added | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
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
