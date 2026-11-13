# getFormSubmissions

> FormSubmissionsWrapper getFormSubmissions(fileId)

`GET /api/2.0/files/file/{fileId}/submissions`

Get form submission results

Returns all submissions of a PDF form. The field `metadata` describes the form fields in layout order, and `submissions` has one record per completed copy. The call returns only the submissions of the version that is being filled now. The spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` covers every version, one sheet per group of versions with the same fields. Requires read access to the form. Other callers get 403. The call is read-only. The call also returns 403 if the file does not exist or is not a PDF form. It returns 403 if the filling never started, the file is a filled copy, or the form left its room. To read the roles and whose turn it is, use `GET api/2.0/files/file/{fileId}/formroles`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The submissions collected for the form, with the description of its fields | [**FormSubmissionsWrapper**](../../models/form-submissions-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The form does not exist or is not a PDF, the caller has no read access to it, its filling has not started, it is a copy rather than the original form, or it lies outside the room its filling was started in | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FormSubmissionsWrapper**](../../models/form-submissions-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
