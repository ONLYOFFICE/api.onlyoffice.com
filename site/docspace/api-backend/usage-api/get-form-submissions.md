# getFormSubmissions

Referenced types are defined in the [full reference](../files.md).

> FormSubmissionsWrapper getFormSubmissions(fileId)

`GET /api/2.0/files/file/{fileId}/submissions`

Get form submission results

Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form, in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding the values that were entered. It is the data behind the results table a client shows for a form, and the same data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of the version that is currently being filled are reported. The form has to be a PDF form whose filling has been started and which is still the original form of its room; a form that was never started, a copy of a form and a form whose room has been moved away are all refused. Read access to the form is enough, so every member of the room can read the results, while a caller without access to it is refused with 403. The operation is read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The submissions collected for the form, with the description of its fields | [**FormSubmissionsWrapper**](../files.md#model-formsubmissionswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no read access to the form | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FormSubmissionsWrapper**](../files.md#model-formsubmissionswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
