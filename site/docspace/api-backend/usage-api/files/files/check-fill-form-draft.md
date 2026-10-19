# checkFillFormDraft

> StringWrapper checkFillFormDraft(fileId, CheckFillFormDraftRequest)

`POST /api/2.0/files/masterform/{fileId}/checkfillformdraft`

Open a form draft for filling

Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal draft that filling needs. The form has to live in a form-filling room and filling has to be started for it with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into the filling flow, and a holder of an external link may call it without signing in, while a caller with neither a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into the room's in-progress folder under the caller's name, clears the new-item badge, closes the editing session of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with 403, and one that does not exist is answered as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The identifier of the PDF form to open, as it is returned by a room listing such as `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well. | [required] [example: `1`] |
| **CheckFillFormDraftRequest** | body | [**CheckFillFormDraftRequest**](../../models/check-fill-form-draft-request.md) | The revision of the form to open and what the caller intends to do with it. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editor address to open, with an optional notice fragment | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `version` | - | - |
| **401** | An anonymous caller has no external link | - | - |
| **402** | The personal draft does not fit into the storage quota of the portal or the room | - | - |
| **403** | The caller cannot open the form, asked for a past revision without history access, the form is in Trash, or the caller may fill the form but not the folder it lies in | - | - |
| **404** | The file id, or the requested version of it, resolves to nothing | - | - |
| **415** | The file is in a format the editors can neither edit nor open for viewing | - | - |
| **500** | The file lies in a third-party storage that cannot deliver it | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The identifier of the PDF form to open, as it is returned by a room listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;. The identifier of an already created draft is accepted here as well. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
