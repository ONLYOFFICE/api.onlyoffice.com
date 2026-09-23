# isFormPDF

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper isFormPDF(fileId)

`GET /api/2.0/files/file/{fileId}/isformpdf`

Check the PDF file

Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean. The check is by content, not by extension: the beginning of the file is read and the answer is `true` only when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without being read. Use it before offering the form-filling operations on a file, because a document that answers `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a member of the room with read-only rights gets the answer; a caller without access to the room is refused and an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True when the file is a PDF form made in the editors, false otherwise | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
