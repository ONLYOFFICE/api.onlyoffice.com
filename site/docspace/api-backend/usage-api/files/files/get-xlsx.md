# getXlsx

> DocumentBuilderTaskWrapper getXlsx(fileId)

`GET /api/2.0/files/file/{fileId}/xlsx`

Get form report generation status

Reports how far the spreadsheet of submitted form answers has got, the one queued by `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports the caller's own run and not one started by another member of the room; address it with the id of the original form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress percentage, the error text when the run failed, and the id, name and address of the produced file once it is there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer before the first run and not an error. The call only reads and is meant to be polled until completion is reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued, not here.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the report generation task, or nothing when no run is on record | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
