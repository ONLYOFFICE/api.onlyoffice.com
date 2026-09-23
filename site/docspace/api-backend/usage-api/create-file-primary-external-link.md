# createFilePrimaryExternalLink

Referenced types are defined in the [full reference](../files.md).

> FileShareWrapper createFilePrimaryExternalLink(id, FileLinkRequest)

`POST /api/2.0/files/file/{id}/link`

Create the file primary external link

Answers with the primary external link of a file, creating it on the first call and returning the one that already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`. The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate` its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days, `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is not recreated but answered with 404. Read the address from `sharedTo.shareLink`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file the link points at. | [required] [example: `1`] |
| **FileLinkRequest** | body | [**FileLinkRequest**](../files.md#model-filelinkrequest) | The settings of the link. They are applied in full, so a field left out is reset rather than kept. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the file | [**FileShareWrapper**](../files.md#model-filesharewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not share the file | - | - |
| **404** | The file does not exist, or its primary link was revoked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../files.md#model-filesharewrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
