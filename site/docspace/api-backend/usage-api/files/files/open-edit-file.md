# openEditFile

> ConfigurationIntegerWrapper openEditFile(fileId, version, view, editorType, edit, fill)

`GET /api/2.0/files/file/{fileId}/openedit`

Get the editor configuration

Builds everything an editor client needs to open the file: the document descriptor with its download address, title, type and document key, the editor configuration with the mode, the caller's permissions, the user and the customization, the callback the editors report back to, and the signature token the document service validates. `version` opens one entry of the file history and requires access to that history; left out, the current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType` picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the request: a form-filling room, a virtual data room, a public room and a user folder each produce their own mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded scope named. In a private room the caller's encryption keys are added to the editor configuration. Payment is not required and an anonymous caller opens through an external link.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the editor configuration is built for. Take the id from a folder listing such as `GET api/2.0/files/{folderId}`. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | Which entry of the file history to open, numbered the way the file versions are. Left out, the current revision is opened; naming a version requires access to the history of the file. | [optional] [example: `1`] |
| **view** | query | **Boolean** | Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller's rights and the room the file lies in allow. | [optional] [example: `false`] |
| **editorType** | query | **EditorType** | Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the embedded viewer meant to be framed inside another page. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **edit** | query | **Boolean** | Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is being edited; the room may still turn the request into viewing or into filling. | [optional] [example: `false`] |
| **fill** | query | **Boolean** | Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a form. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editor configuration for the requested file and mode | [**ConfigurationIntegerWrapper**](../../models/configuration-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the file, or asked for a past version without access to the file history | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConfigurationIntegerWrapper**](../../models/configuration-integer-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
