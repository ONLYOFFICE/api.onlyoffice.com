# applyExternalSharePassword

> ExternalShareWrapper applyExternalSharePassword(key, ExternalShareRequestParam)

`POST /api/2.0/files/share/{key}/password`

Unlock a password-protected link

Submits the password of a protected external share link and answers with the same resolved link data as `GET api/2.0/files/share/{key}`, so this operation is called only after that one reported that a password is required. The token in the path is the `requestToken` of the link, and the password is the one chosen by the member who shared the entry. The call needs no authentication; a signed-in caller that may already read the room is let through by the resolve operation itself and does not need the password at all. A correct password is remembered for the caller, so later requests with the same token resolve without repeating it, and a wrong one is reported in the `status` field as an invalid password rather than as an HTTP error, while the remembered password is dropped. Attempts are counted per link and per calling address: once the portal's limit is reached, further attempts are rejected until the block expires, which makes the operation unsuitable for trying passwords in a loop. Nothing about the entry is changed by the call itself.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **key** | path | **String** | The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that carries the link's own identifier, so it cannot be assembled by hand. | [required] [example: `q7Ry8cQ1lZ0dP3sK2mXfA9tBnV6hJ4uE8wCz5oLg`] |
| **ExternalShareRequestParam** | body | [**ExternalShareRequestParam**](../../models/external-share-request-param.md) | The body of the request, holding the password to check. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entry the token points at, with the status the link reached after the password was checked | [**ExternalShareWrapper**](../../models/external-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too many requests | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalShareWrapper**](../../models/external-share-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
