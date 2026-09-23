# getPresignedFileUri

Referenced types are defined in the [full reference](../files.md).

> FileLinkWrapper getPresignedFileUri(fileId)

`GET /api/2.0/files/file/{fileId}/presigned`

Get a signed download address

Returns a direct download address for the current content of the file together with the signature token that the document service validates, which is what the portal hands over when the editors have to fetch the document themselves. The address points at the portal's file stream endpoint and is rewritten to the host the document service can reach, so on a deployment where the editors sit behind a private address it is not the address a browser should follow. The answer also carries the extension of the stored document, leading dot included. The caller needs read access to the file, and an unknown file id is reported as missing. The call only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value is worth requesting again once a token has expired. For a link meant for a person, a plain address with no token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The download address of the file with its signature token | [**FileLinkWrapper**](../files.md#model-filelinkwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileLinkWrapper**](../files.md#model-filelinkwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
