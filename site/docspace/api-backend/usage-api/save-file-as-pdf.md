# saveFileAsPdf

Referenced types are defined in the [full reference](../files.md).

> FileIntegerWrapper saveFileAsPdf(id, SaveAsPdfInteger)

`POST /api/2.0/files/file/{id}/saveaspdf`

Save a file as PDF

Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with the file that was created. The source is left untouched, so the two files then live side by side. `title` names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the name of the source with its extension replaced. The conversion is done by the document service while the request waits, so the call takes as long as the document needs and answers with the finished file rather than with a queue entry. The caller needs read access to the source file and the right to create files in the destination folder, and is otherwise refused; a source file or a destination folder that does not exist is answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique when one of that name is already there. The result is marked as new for the room, and for a form the portal recognises it is stored as a PDF form. To convert in place instead use `PUT api/2.0/files/file/{fileId}/checkconversion`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file to convert; it is left untouched. | [required] [example: `1`] |
| **SaveAsPdfInteger** | body | [**SaveAsPdfInteger**](../files.md#model-saveaspdfinteger) | The destination folder and the name of the PDF. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The PDF file that was created | [**FileIntegerWrapper**](../files.md#model-fileintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | The source file or the destination folder does not exist | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
