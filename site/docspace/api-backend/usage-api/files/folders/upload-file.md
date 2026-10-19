# uploadFile

> FileArrayWrapper uploadFile(folderId, createNewIfExist, storeOriginalFile, keepConvertStatus, file)

`POST /api/2.0/files/{folderId}/upload`

Upload a file

Stores a file in the folder named by the path in a single multipart request, taking its name from the uploaded part; use `POST api/2.0/files/{folderId}/insert` when the name has to be given separately or the content is sent as a raw body. The answer is a list that always holds exactly one file. `createNewIfExist` settles the clash: false adds a new version to the file that already carries the name, true keeps both by giving the new one a numeric suffix. `storeOriginalFile` reaches further than this call, because it saves the setting on the calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room are refused as well, and an unknown folder gives 404. A request without a file is rejected as invalid, and a payload above the portal upload limit is refused.

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
| **403** | The caller cannot add content to this folder | - | - |
| **404** | No folder with the specified ID | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
| **500** | A file that is not a PDF is stored in a form-filling room | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
