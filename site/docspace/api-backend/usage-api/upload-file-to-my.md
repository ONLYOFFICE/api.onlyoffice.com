# uploadFileToMy

Referenced types are defined in the [full reference](../files.md).

> FileIntegerArrayWrapper uploadFileToMy(createNewIfExist, storeOriginalFile, keepConvertStatus, File)

`POST /api/2.0/files/@my/upload`

Upload a file to My documents

Uploads one file into the caller's own My documents section and returns it inside a single-element array; one request stores exactly one file. The destination takes no identifier: it is resolved from the calling account and created on first use, while a guest account has none and is answered as missing (404). The body has to be `multipart/form-data` carrying the file part; a request without it is rejected as invalid, and the stored name comes from that part, since unlike `POST api/2.0/files/@my/insert` there is no separate title. The call is not idempotent: by default a file of the same title is overwritten as a new version, while `createNewIfExist=true` stores a separate copy under a title made unique with a numeric suffix. `storeOriginalFile` is not a per-request switch: it writes the same account setting as `PUT api/2.0/files/storeoriginal`, which decides what happens to the formats listed in `extsMustConvert` of `GET api/2.0/files/settings` when they are converted after the response - false replaces the uploaded file with the converted one, true keeps both; `keepConvertStatus=true` keeps that conversion result readable through `GET api/2.0/files/file/{fileId}/checkconversion`. Files over the single-request size limit or the account's storage quota are refused; send those through `POST api/2.0/files/{folderId}/upload/create_session`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **createNewIfExist** | query | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] [example: `true`] |
| **storeOriginalFile** | query | **Boolean** | Reaches further than this request: it writes a setting on the calling account, the same one `PUT api/2.0/files/storeoriginal` writes, and it stays in force for later uploads. True keeps both the uploaded file and the copy the portal converts it into, false replaces the uploaded file with the converted one, and leaving it out keeps whatever the account already has. | [optional] [example: `true`] |
| **keepConvertStatus** | query | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] [example: `true`] |
| **File** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part; the name of that part becomes the title of the stored file, with characters a title cannot hold replaced and the name cut to 170 characters. A request without it is rejected as invalid. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | An array holding the single uploaded file | [**FileIntegerArrayWrapper**](../files.md#model-fileintegerarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Uploading a file to the personal section is not allowed for this account | - | - |
| **404** | The caller has no personal section, so there is nothing to store the file in | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerArrayWrapper**](../files.md#model-fileintegerarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## FilesOperationsApi
