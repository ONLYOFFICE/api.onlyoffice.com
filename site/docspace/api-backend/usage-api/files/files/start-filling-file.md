# startFillingFile

> FileWrapper startFillingFile(fileId)

`PUT /api/2.0/files/file/{fileId}/startfilling`

Start filling a form

Starts filling of a PDF form in a form-filling room and returns the form. The portal saves the room, the title, the starting account, and the original form id on the file. The portal then collects later submissions for this form. For any other file, the call changes nothing and returns the file. A caller who cannot read the file gets 403, whatever the file is. Requires a role in the room other than `FillForms`, or the right to edit the room. Other callers get 403. The call changes data, and you can repeat it. A repeated call makes the caller the starting account and takes the title from the current file name. The call also returns 403 for an encrypted file. If the file does not exist, the call returns 404. To build a spreadsheet of the submitted answers, use `POST api/2.0/files/file/{fileId}/xlsx`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy kept elsewhere and not a submitted result. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The form file, with the filling properties now stored on it | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the file, or holds only form-filling access on the room, or no access to it at all | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy kept elsewhere and not a submitted result. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
