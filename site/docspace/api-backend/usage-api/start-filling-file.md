# startFillingFile

Referenced types are defined in the [full reference](../files.md).

> FileIntegerWrapper startFillingFile(fileId)

`PUT /api/2.0/files/file/{fileId}/startfilling`

Start filling a form

Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal stores the filling properties on it - the room it belongs to, its title, the account that started it and the id it keeps as the original form - so that later submissions are collected against this form. The file has to be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is stored. Access follows room membership rather than portal role: a member holding only form-filling access on the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy kept elsewhere and not a submitted result. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The form file, with the filling properties now stored on it | [**FileIntegerWrapper**](../files.md#model-fileintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller holds only form-filling access on the room, or no access to it at all | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../files.md#model-fileintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
