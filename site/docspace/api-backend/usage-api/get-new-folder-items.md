# getNewFolderItems

Referenced types are defined in the [full reference](../files.md).

> FileEntryBaseArrayWrapper getNewFolderItems(folderId)

`GET /api/2.0/files/{folderId}/news`

Get new folder items

Lists the entries of a folder that are new for the calling member - the files and folders created or changed there since they last opened it - ordered from the most recently changed backwards. It is what the badge of a room is filled from, and it is personal: two members of the same room get different answers. Reading this list does not clear the marks, so the same entries come back until the folder itself is opened with `GET api/2.0/files/{folderId}`, which does clear them. A folder with nothing new answers with an empty list, and marks disappear on their own when the entry behind them is deleted or moved out of reach. The caller needs read access to the folder and is otherwise answered with 403. The whole list arrives at once, without paging or filtering, and the call is read-only.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entries of the folder that are new for the caller | [**FileEntryBaseArrayWrapper**](../files.md#model-fileentrybasearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read this folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../files.md#model-fileentrybasearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
