# createHtmlFileInMyDocuments

Referenced types are defined in the [full reference](../files.md).

> FileIntegerWrapper createHtmlFileInMyDocuments(CreateTextOrHtmlFile)

`POST /api/2.0/files/@my/html`

Create an HTML file in My documents

Creates an HTML file in the caller's own My documents section out of the markup passed as the content, and answers with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads: with `true` the file that already carries this title is updated, the markup replacing its content and a version appearing in its history, while with `false`, which is also the default, another file is created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents section and is refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/html`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateTextOrHtmlFile** | body | [**CreateTextOrHtmlFile**](../files.md#model-createtextorhtmlfile) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created or updated HTML file | [**FileIntegerWrapper**](../files.md#model-fileintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not create a file in this section | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
