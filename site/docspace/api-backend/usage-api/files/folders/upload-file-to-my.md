# uploadFileToMy

> FileArrayWrapper uploadFileToMy(createNewIfExist, storeOriginalFile, keepConvertStatus, file)

`POST /api/2.0/files/@my/upload`

Upload a file to My documents

Uploads one file to My documents of the caller and returns it in an array with one item. Send it as a `multipart/form-data` part. The file takes the name of the part. To set another name, use `POST api/2.0/files/@my/insert`. Any signed-in user can call it, except a guest. A guest has no My documents, so the call returns 404. If the account cannot create files there, the call returns 403. The call changes data. By default, a file with the same title gets a new version. If that file is locked or open in the editor, the call stores a second file with the same title. With `createNewIfExist` set to true, the call adds a numeric suffix to the new title. Do not repeat the call. Each call adds a version or a file. The `storeOriginalFile` flag also changes an account setting for later uploads, like `PUT api/2.0/files/storeoriginal`. The portal queues the conversion of the formats in `extsMustConvert` of `GET api/2.0/files/settings`. If the request has no file part, the call returns 400. The call returns 402 if the file is over the size limit of one request or the storage quota. Send a large file through `POST api/2.0/files/{folderId}/upload/create_session`. If the installation does not allow the file extension, the call returns 415.  Raises the `file.created` and `file.uploaded` webhooks for a new file and for a new version of an existing file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **createNewIfExist** | query | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] [example: `true`] |
| **storeOriginalFile** | query | **Boolean** | Reaches further than this request: it writes a setting on the calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted one, and leaving it out keeps whatever the account already has. | [optional] [example: `true`] |
| **keepConvertStatus** | query | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] [example: `true`] |
| **file** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request without it is rejected as invalid. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | An array holding the single uploaded file | [**FileArrayWrapper**](../../models/file-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request has no file part | - | - |
| **402** | The file exceeds the single-request upload limit, or storing it would exceed a storage quota or size limit | - | - |
| **403** | Uploading a file to the personal section is not allowed for this account | - | - |
| **404** | The caller has no personal section, so there is nothing to store the file in | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileArrayWrapper**](../../models/file-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
