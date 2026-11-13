# getExternalShareData

> ExternalShareWrapper getExternalShareData(key, fileId, folderId)

`GET /api/2.0/files/share/{key}`

Resolve an external share link

Returns the room or file that an external share link points at, and the link status. Anyone can call it without signing in. The call changes data, and you can repeat it. For a signed-in caller, the first valid call adds the entry to their lists. For a visitor, it opens an anonymous session that later requests with the same token reuse. The call reports a refused link in `status`, not with an HTTP error code. So read `status` first. The status is invalid for an unknown token, and for a link to an archived or trashed entry. It is expired for a link past its expiration date. For a protected link, the status asks for a password. To send it, use `POST api/2.0/files/share/{key}/password`. A signed-in caller who can read the room gets no password request. If the portal forbids sharing outside it, a public link is denied to an anonymous visitor.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **key** | path | **String** | The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that carries the link's own identifier, so it cannot be assembled by hand. | [required] [example: `q7Ry8cQ1lZ0dP3sK2mXfA9tBnV6hJ4uE8wCz5oLg`] |
| **fileId** | query | **String** | A file inside the room the link points at, echoed back in the answer's entity fields so a client can show what was opened. The value is ignored when the file does not sit under the link's target, and passing it together with a folder has no effect - the file wins. | [optional] [example: `9`] |
| **folderId** | query | **String** | A folder inside the room the link points at, echoed back in the answer's entity fields. It is ignored when the folder does not sit under the link's target, and when a file is passed as well. | [optional] [example: `3`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entry the token points at, with the validation status of the link | [**ExternalShareWrapper**](../../models/external-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalShareWrapper**](../../models/external-share-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
