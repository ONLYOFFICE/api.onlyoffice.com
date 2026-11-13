# setFormFieldChanges

> setFormFieldChanges(fileId, SetFormFieldChangesRequest)

`PUT /api/2.0/files/file/{fileId}/fieldchanges`

Report renamed form fields

Reports which fields of the original PDF form of a form-filling room the user renamed in the editor since it opened `version`, told apart by the field ids the editor keeps. The editor sends it while editing, only when `GET api/2.0/files/file/{fileId}/openedit` returns `trackFormFieldChanges` true. The caller needs the right to edit the form; once its filling is started, a content creator keeps it only for a form they created or started. A report replaces the previous one of the same `sessionId`, even after a forcesave, and one whose `sequence` is not above the last of that session is dropped, so a repeated or late call is harmless; give every editor tab its own `sessionId`. A field left out of `renames` kept its key. When the editor saves the version, a renamed field keeps its earlier answers under its new name in the forms database and the spreadsheet report. Ignored, still with 200: a `version` the form does not have yet, a compared one older than the last earlier version with responses, a new session past 20 of one user on one version, a report past the renames the form can keep. With Document Server Community Edition the call is refused with 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The PDF form open in the editor: the original form of a form-filling room. | [required] [example: `35`] |
| **SetFormFieldChangesRequest** | body | [**SetFormFieldChangesRequest**](../../models/set-form-field-changes-request.md) | The changed keys. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The report was taken; a late, repeated or surplus one is dropped without an error | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body is missing, `version` is less than 1, `sequence` is negative, `renames` has more than 500 entries or a null one, a key is empty or longer than 255 characters, or `sessionId` is longer than 64 characters or has other characters than letters, digits, hyphens and underscores | - | - |
| **403** | The file is not a PDF form of a form-filling room, it is a copy of a form, the caller may not edit it, or the document editors are Community Edition, which do not track renamed fields | - | - |
| **404** | No file with this identifier exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
