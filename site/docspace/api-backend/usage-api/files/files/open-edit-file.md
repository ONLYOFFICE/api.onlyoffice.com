# openEditFile

> ConfigurationWrapper openEditFile(fileId, version, view, editorType, edit, fill)

`GET /api/2.0/files/file/{fileId}/openedit`

Get the editor configuration

Returns the editor configuration of the file. It holds the document data, the editor mode, the caller's permissions, the callback URL, and the signature token. To open a past version, pass `version`. Without access to the file history, the call then returns 403. For a PDF form, the room type sets the mode and can overrule the request. A form from the templates folder opens read-only. Outside the mobile layout, it also opens embedded. In a form-filling room, `edit` true stops the filling of the form for a caller who can edit it. If a storage quota is exceeded, the configuration is read-only and names the exceeded scope. In a private room, the configuration includes the encryption keys of the caller. Requires read access to the file through an account or an external link. Other callers get 403. The call works without payment. The call is read-only, except when it stops form filling. The call also returns 403 if the file is in Trash. If the file or version does not exist, it returns 404. If the editors cannot open the format, it returns 415.  Raises the `form.stopped` webhook when `edit` true stops the filling of a form in a form-filling room.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the editor configuration is built for. Take the id from a folder listing such as `GET api/2.0/files/{folderId}`. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | Which entry of the file history to open, numbered the way the file versions are. Left out, the current revision is opened; naming a version requires access to the history of the file. | [optional] [example: `1`] |
| **view** | query | **Boolean** | Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller's rights and the room the file lies in allow. | [optional] [example: `false`] |
| **editorType** | query | **EditorType** | Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the embedded viewer meant to be framed inside another page. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **edit** | query | **Boolean** | Asks for editing rather than viewing; the room the file lies in may still turn the request into viewing or into filling. | [optional] [example: `false`] |
| **fill** | query | **Boolean** | Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a form. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editor configuration for the requested file and mode | [**ConfigurationWrapper**](../../models/configuration-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the file, asked for a past version without access to the file history, or the file is in Trash | - | - |
| **404** | The file id, or the requested version of it, resolves to nothing | - | - |
| **415** | The file is in a format the editors can neither edit nor open for viewing, or it is an encrypted file of a private room and the connected document server cannot work with encrypted files | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConfigurationWrapper**](../../models/configuration-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the editor configuration is built for. Take the id from a folder listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyConfigurationWrapper**](../../models/third-party-configuration-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
