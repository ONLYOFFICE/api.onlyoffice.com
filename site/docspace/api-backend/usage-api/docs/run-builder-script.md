# runBuilderScript

> FileOperationWrapper runBuilderScript(RunBuilderScriptRequestDto)

`POST /api/2.0/docs/builder`

Run a document builder script

Queues a background run of a document builder script and answers with the operation just started. The script names portal files by identifier - `builder.OpenFile(1234)` - where the document builder documentation writes an address; only portal files can be opened, and none from a private room or a room with a watermark, nor is a result saved into such a room. A script may call OpenFile and SaveFile at most 20 times each, counting every call written in it. The caller needs edit access to every file the script opens, which may also be copied, and to each file `outputs` replaces, which must not be locked or open in an editor, and the right to create files in each folder a result is saved into. Each file the script saves goes where `outputs` says, keyed by the name given to SaveFile: `fileId` stores it as a new version of that file, `folderId` as a new file there; an unlisted file goes to `folderId` or to the folder of the opened file. Each entry of `outputs` names exactly one of `fileId` and `folderId`; `title` goes only with `folderId`, since a replaced file keeps its title, and a result stored over `fileId` has to be in that file's format. The call is not idempotent: each call is a new run. Poll `GET api/2.0/files/fileops` with the returned `id` until the operation reports `finished`: `files` then lists the saved files, a replaced one with its new version, including those saved before a failure, and `error` the reason a failed build gave. A build that has not finished after 10 minutes is given up and reported as failed. A caller runs one script at a time: a new request while an earlier one is queued or running is refused with 403, so wait for `finished` before starting the next. For a plain format change use `POST api/2.0/docs/converter`. What can be refused in advance fails at once with 400, 403 or 404.

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
