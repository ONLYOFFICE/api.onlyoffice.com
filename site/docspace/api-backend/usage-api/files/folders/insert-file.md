# insertFile

> FileWrapper insertFile(folderId, insertFile.file, insertFile.title, insertFile.createNewIfExist, insertFile.keepConvertStatus, insertFile.stream.canRead, insertFile.stream.canWrite, insertFile.stream.canSeek, insertFile.stream.canTimeout, insertFile.stream.length, insertFile.stream.position, insertFile.stream.readTimeout, insertFile.stream.writeTimeout)

`POST /api/2.0/files/{folderId}/insert`

Insert a file

Uploads a file to the folder in one request and names it by `title`. The content can be a multipart part or the raw request body. To name the file by the uploaded part, use `POST api/2.0/files/{folderId}/upload`. Requires the right to create content in the folder. Other callers get 403. In a room, its owner, room managers, and content creators have it. A guest has it there only as a content creator. In My documents, the owner and anyone with read and write access to the folder have it. A section root, an archived or private room, and an AI agent or AI project root also return 403. The call changes data. It removes characters that a title cannot have and shortens a long name. If the folder has a file with this name, `createNewIfExist` true stores a copy with a numeric suffix. With false, the call adds a new version to that file if the caller can edit it. Otherwise, it stores a second file with the same name. A guest never adds a version this way. So a repeated call adds another version or another file. A `version` above 1 in the response means that the call added a version. The portal converts some formats in the background after the upload. To read that result with `GET api/2.0/files/file/{fileId}/checkconversion`, pass `keepConvertStatus`. A missing folder returns 404. The call returns 402 if the file is over the upload limit or a storage quota. If the installation does not allow uploads with this extension, the call returns 415. If the file is not a PDF and the room is a form-filling room, the call returns 403. To upload a large file, use `POST api/2.0/files/{folderId}/session`.  Raises the `file.created` and `file.uploaded` webhooks for a new file and for a new version of an existing file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **insertFile.file** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw request body, which is what a client that cannot build a form does; when both are present the form part wins. | [optional] |
| **insertFile.title** | form | **String** | The name to store the file under, extension included. It wins over the name of the uploaded part, which is the reason to choose this operation over the plain upload, and it is the only name available when the content arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170 characters before the file is stored. | [optional] |
| **insertFile.createNewIfExist** | form | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] |
| **insertFile.keepConvertStatus** | form | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] |
| **insertFile.stream.canRead** | form | **Boolean** |  | [optional] |
| **insertFile.stream.canWrite** | form | **Boolean** |  | [optional] |
| **insertFile.stream.canSeek** | form | **Boolean** |  | [optional] |
| **insertFile.stream.canTimeout** | form | **Boolean** |  | [optional] |
| **insertFile.stream.length** | form | **Long** (int64) |  | [optional] |
| **insertFile.stream.position** | form | **Long** (int64) |  | [optional] |
| **insertFile.stream.readTimeout** | form | **Integer** (int32) |  | [optional] |
| **insertFile.stream.writeTimeout** | form | **Integer** (int32) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored file with its id and the title it was actually saved under; a `version` above 1 means the content was added to a file that already carried this name instead of creating a new one | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The file exceeds the single-request upload limit, or storing it would exceed a storage quota or size limit | - | - |
| **403** | The caller cannot add content to this folder, the folder is a section root or in a private room, or a file that is not a PDF is stored in a form-filling room | - | - |
| **404** | No folder with the specified ID | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
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
| **folderId** | path | **String** | The folder that receives the file; take the id from a listing such as &#x60;GET api/2.0/files/@root&#x60;. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
