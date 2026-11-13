# runBuilderScript

> FileOperationWrapper runBuilderScript(RunBuilderScriptRequestDto)

`POST /api/2.0/docs/builder`

Run a document builder script

Queues a document builder script to run in the background. The script can open only portal files, by id. Requires edit and copy access to every file the script opens. Other callers get 403. Each file `outputs` replaces needs edit access. Each target folder needs the right to create files. Without these rights, the call also returns 403. It also returns 403 if a replaced file is locked, open in an editor, or in the trash. A file or folder in a private room or a room with a watermark also returns 403. The call queues work and returns the started operation. Do not repeat it. A caller can run one script at a time. A new call while an earlier script is queued or running returns 403. After a run ends, each call runs the script again. It saves new files under free names. In a room, the portal notifies the room members about each new file. It adds a new version to each replaced file. To track the run, poll `GET api/2.0/files/fileops` with the returned `id` until `finished` is true. Then `files` lists the saved files, including those saved before a failure. A replaced file appears with its new version. On a failure, `error` gives the reason. The portal stops a build after 10 minutes and reports it as failed. The portal saves files missing from `outputs` in `folderId` or the folder of the opened file. To only change the format of a file, use `POST api/2.0/docs/converter`. The call returns 400 if the script has more than 20 OpenFile or SaveFile calls. It also returns 400 for an `outputs` key that the script never saves. It also returns 400 if an `outputs` entry has both `fileId` and `folderId`, or neither. A replaced file keeps its title, so an entry with `fileId` and `title` returns 400. It also returns 400 if the saved name has another extension than the file at `fileId`. A malformed script or argument also returns 400, and so does a saved file with nowhere to go. The call returns 404 if an opened or replaced file, or a target folder, does not exist. The call returns these codes before it queues the script.  Raises the `file.created` webhook for each new file the queued script saves. Raises the `file.updated` webhook for each existing file the queued script replaces.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RunBuilderScriptRequestDto** | body | [**RunBuilderScriptRequestDto**](../models/run-builder-script-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued document builder operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The script or the argument is malformed or too long, the script calls OpenFile or SaveFile too often, a file is addressed by an address, an `outputs` entry breaks the rules above, or a saved file has nowhere to go | - | - |
| **403** | You cannot edit or copy a file the script opens or write a result, a file the script opens lies in a private room or in a room with a watermark, the file to replace or a target folder lies in a private room or in a room with a watermark, the file to replace is locked, being edited or in the trash, or another script of yours is still queued or running | - | - |
| **404** | A file the script opens or replaces, or a target folder, does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationWrapper**](../models/file-operation-wrapper.md)

## Authorization

[Basic](docs.md#basic), [OAuth2](docs.md#oauth2) (scopes: read, write), [ApiKeyBearer](docs.md#apikeybearer), [asc_auth_key](docs.md#asc_auth_key), [Bearer](docs.md#bearer), [OpenId](docs.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
