# deleteTemplates

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper deleteTemplates(request\_body)

`DELETE /api/2.0/files/templates`

Delete template files

Takes the listed files off the personal template list of the calling account, leaving the files themselves untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid request. Every authenticated member type may manage their own list, a guest is refused, and read access to a file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an empty array, an id that does not exist and a file that was never a template all achieve, so it confirms nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not interchangeable.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **List** | The files to take off the template list, by id; this array is the whole request body. Only a file stored in the portal itself can be a template, which is why an id here is always numeric. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the files named in the array are no longer templates of the caller | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../files.md#model-booleanwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
