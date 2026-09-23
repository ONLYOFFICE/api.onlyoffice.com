# insertFile

Referenced types are defined in the [full reference](../files.md).

> FileIntegerWrapper insertFile(folderId, InsertFile.File, InsertFile.Title, InsertFile.CreateNewIfExist, InsertFile.KeepConvertStatus, InsertFile.Stream.CanRead, InsertFile.Stream.CanWrite, InsertFile.Stream.CanSeek, InsertFile.Stream.CanTimeout, InsertFile.Stream.Length, InsertFile.Stream.Position, InsertFile.Stream.ReadTimeout, InsertFile.Stream.WriteTimeout)

`POST /api/2.0/files/{folderId}/insert`

Insert a file

Stores a file in the folder named by the path in a single request, taking its name from `title` rather than from the uploaded part, which is what separates it from `POST api/2.0/files/{folderId}/upload`. The content may arrive either as a multipart part or as the raw request body. The name is stripped of characters a title cannot hold and truncated, and `createNewIfExist` settles the clash: false adds a new version to the file that already carries the name, true keeps both by giving the new one a numeric suffix. The caller needs the right to add content to the folder, so a reader, an editor and a guest get 403, a section root and an archived room are refused as well, and an unknown folder gives 404. Formats the portal converts are converted afterwards in the background; pass `keepConvertStatus` to keep the outcome readable through `GET api/2.0/files/file/{fileId}/checkconversion`. The answer is the stored file. A large payload belongs in a chunked session instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **InsertFile.File** | form | **File** (binary) | The content to store, sent as a `multipart/form-data` part. The same content may instead be sent as the raw request body, which is what a client that cannot build a form does; when both are present the form part wins. | [optional] |
| **InsertFile.Title** | form | **String** | The name to store the file under, extension included. It wins over the name of the uploaded part, which is the reason to choose this operation over the plain upload, and it is the only name available when the content arrives as a raw body. Characters a title cannot hold are replaced with underscores and the name is cut to 170 characters before the file is stored. | [optional] |
| **InsertFile.CreateNewIfExist** | form | **Boolean** | Settles the clash with a file already carrying that title: left out, the content is written as the next version of that file; set to true, both survive and the new one gets a numeric suffix in its title. | [optional] |
| **InsertFile.KeepConvertStatus** | form | **Boolean** | Decides whether the outcome of the background conversion outlives the conversion itself. True keeps the queue record, so `GET api/2.0/files/file/{fileId}/checkconversion` can still report the result or the error; left out, the record is cleared the moment the conversion ends and that call finds nothing. | [optional] |
| **InsertFile.Stream.CanRead** | form | **Boolean** |  | [optional] |
| **InsertFile.Stream.CanWrite** | form | **Boolean** |  | [optional] |
| **InsertFile.Stream.CanSeek** | form | **Boolean** |  | [optional] |
| **InsertFile.Stream.CanTimeout** | form | **Boolean** |  | [optional] |
| **InsertFile.Stream.Length** | form | **Long** (int64) |  | [optional] |
| **InsertFile.Stream.Position** | form | **Long** (int64) |  | [optional] |
| **InsertFile.Stream.ReadTimeout** | form | **Integer** (int32) |  | [optional] |
| **InsertFile.Stream.WriteTimeout** | form | **Integer** (int32) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored file | [**FileIntegerWrapper**](../files.md#model-fileintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot add content to this folder | - | - |
| **404** | No folder with the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../files.md#model-fileintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
