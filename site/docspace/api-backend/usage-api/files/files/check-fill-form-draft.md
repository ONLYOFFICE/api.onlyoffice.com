# checkFillFormDraft

> StringWrapper checkFillFormDraft(fileId, CheckFillFormDraftRequest)

`POST /api/2.0/files/masterform/{fileId}/checkfillformdraft`

Open a form draft for filling

Returns the editor address of a PDF form, or of a personal draft that it creates. To start filling in a form-filling room, use `PUT api/2.0/files/file/{fileId}/manageformfilling` first. Requires read access to the form. Other callers get 403. An external link holder can call it without signing in. Without a sign-in or link key, the call returns 401. With `action` set to `view` or `embedded`, the call returns the address of the form itself. It does the same for a caller who can edit the form, and before filling starts. Otherwise, a caller with fill-forms access gets a personal draft. The first such call changes data. It copies the form to the in-progress folder under the caller's name and clears its new mark. A repeated call returns the same draft. It creates a new one if the draft is deleted, in Trash, or locked by another user. Without a sign-in, each call creates a new draft. For an invalid draft, the call returns its address with a notice to discard it. A draft becomes invalid if the form is deleted or changed, or the caller loses fill-forms access. The next call on the form then creates a new draft. When the call creates or rejects a draft, the address ends with a `#message/` notice for the editor. For the full editor configuration, use `GET api/2.0/files/file/{fileId}/openedit`. The call returns 403 for a form in Trash or in a folder where the caller cannot fill forms. It also returns 403 for a past revision without history access. The call returns 404 for an unknown file or revision. It returns 400 if the body has no `version`. It returns 415 for a format the editors cannot open. It returns 402 if the draft exceeds the storage quota.

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
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
