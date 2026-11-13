# uploadFile

> FileArrayWrapper uploadFile(folderId, createNewIfExist, storeOriginalFile, keepConvertStatus, file)

`POST /api/2.0/files/{folderId}/upload`

Upload a file

Uploads a file to the folder in one multipart request and names it by the uploaded part. To give the name separately or send a raw body, use `POST api/2.0/files/{folderId}/insert`. Requires the right to create content in the folder. Other callers get 403. In a room, its owner, room managers, and content creators have it. A guest has it there only as a content creator. In My documents, the owner and anyone with read and write access to the folder have it. A section root, an archived or private room, and an AI agent or AI project root also return 403. The call changes data. If the folder has a file with this name, `createNewIfExist` true stores a copy with a numeric suffix. With false, the call adds a new version to that file if the caller can edit it. Otherwise, it stores a second file with the same name. A guest never adds a version this way. So a repeated call adds another version or another file. The response is a list with exactly one file. The call saves `storeOriginalFile` as a setting of the caller, like `PUT api/2.0/files/storeoriginal`. It saves the setting even when the upload then fails. Later uploads use it too. The call returns 400 if the request has no file part. A missing folder returns 404. It returns 402 if the file is over the upload limit or a storage quota. If the installation does not allow uploads with this extension, the call returns 415. If the file is not a PDF and the room is a form-filling room, the call returns 403.  Raises the `file.created` and `file.uploaded` webhooks for a new file and for a new version of an existing file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **createNewIfExist** | query | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] [example: `true`] |
| **storeOriginalFile** | query | **Boolean** | Reaches further than this request: it writes a setting on the calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted one, and leaving it out keeps whatever the account already has. | [optional] [example: `true`] |
| **keepConvertStatus** | query | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] [example: `true`] |
| **file** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request without it is rejected as invalid. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored file, as a list with one element | [**FileArrayWrapper**](../../models/file-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request has no file part | - | - |
| **402** | The file exceeds the single-request upload limit, or storing it would exceed a storage quota or size limit | - | - |
| **403** | The caller cannot add content to this folder, the folder is a section root or in a private room, or a file that is not a PDF is stored in a form-filling room | - | - |
| **404** | No folder with the specified ID | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileArrayWrapper**](../../models/file-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder that receives the file; take the id from a listing such as &#x60;GET api/2.0/files/@root&#x60;. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFileArrayWrapper**](../../models/third-party-file-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
