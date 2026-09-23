# generateXlsxByFolder

Referenced types are defined in the [full reference](../files.md).

> XlsxReportResponseWrapper generateXlsxByFolder(folderId)

`POST /api/2.0/files/folder/{folderId}/xlsx`

Generate XLSX report by folder

Rebuilds the spreadsheet that gathers the answers submitted to a form, starting from the Complete folder that holds the filled copies. The answer names the original form the results belong to, says in `isNewFile` whether the spreadsheet is being created or an existing one rewritten in place, and carries the queued job in `task`; the file itself is not ready yet, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the identifier of the form until the task reports completion. The folder has to be the Complete folder of a form-filling room and has to hold at least one submitted copy whose original form still exists, and the caller needs the right to maintain that form, which the room manager has. A folder that does not exist, or one that holds nothing to report on, is answered with 404, and a folder of the wrong kind or a caller without those rights with 403. The call is mutating: it writes the results file of the form.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued report task together with the form the answers belong to | [**XlsxReportResponseWrapper**](../files.md#model-xlsxreportresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The folder is not a completed-forms folder, or the caller may not maintain the form | - | - |
| **404** | The folder, the submitted copy or the original form was not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**XlsxReportResponseWrapper**](../files.md#model-xlsxreportresponsewrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
