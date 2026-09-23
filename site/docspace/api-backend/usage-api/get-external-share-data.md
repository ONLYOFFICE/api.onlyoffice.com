# getExternalShareData

Referenced types are defined in the [full reference](../files.md).

> ExternalShareWrapper getExternalShareData(key, fileId, folderId)

`GET /api/2.0/files/share/{key}`

Resolve an external share link

Resolves the token of an external share link into the room or file it points at, and reports the outcome of validating the link. The token is the `requestToken` of a link returned by the link operations of an entry, such as `GET api/2.0/files/file/{id}/link` or `GET api/2.0/files/rooms/{id}/link`. The call needs no authentication and answers a refused link in the `status` field rather than with an HTTP error, so that field has to be read before anything else: a token that matches no link, and a link whose entry has been archived or moved to the trash, both resolve as invalid; a link past its expiration date resolves as expired; a password-protected link resolves as requiring a password, which is then submitted through `POST api/2.0/files/share/{key}/password`; and a public link resolves as denied when the portal forbids sharing with people outside it. The call is not read-only: for a signed-in caller the first successful resolution puts the entry into the account's own lists, and for a visitor without an account it opens an anonymous session that later requests with the same token reuse. Pass `fileId` or `folderId` to have an entry inside the link's target echoed back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **key** | path | **String** | The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that carries the link's own identifier, so it cannot be assembled by hand. | [required] [example: `q7Ry8cQ1lZ0dP3sK2mXfA9tBnV6hJ4uE8wCz5oLg`] |
| **fileId** | query | **String** | A file inside the room the link points at, echoed back in the answer's entity fields so a client can show what was opened. The value is ignored when the file does not sit under the link's target, and passing it together with a folder has no effect - the file wins. | [optional] [example: `9`] |
| **folderId** | query | **String** | A folder inside the room the link points at, echoed back in the answer's entity fields. It is ignored when the folder does not sit under the link's target, and when a file is passed as well. | [optional] [example: `3`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entry the token points at, with the validation status of the link | [**ExternalShareWrapper**](../files.md#model-externalsharewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalShareWrapper**](../files.md#model-externalsharewrapper)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
