# getDocServiceUrl

> DocServiceUrlWrapper getDocServiceUrl(version)

`GET /api/2.0/files/docservice`

Get the document service address

Reports where this portal expects ONLYOFFICE Docs to be: the public Document Server address, the URL of the editor api script and of the preload page a client loads before opening a document, the address used inside the private network, the address the Document Server calls this portal back on, the name of the request signature header, whether SSL verification is on, and whether all of it is still at the deployment default. The call is read-only and needs no authorization: an anonymous caller and every role from the portal owner down to a guest read the same values. Pass `version=true` to have the editor version of the running Document Server included in `version`; left out, `version` comes back empty and the portal answers without contacting the Document Server at all. A version request never fails the call - when the Document Server does not answer, a fallback version string is reported instead of an error, so the value is no proof that the server is reachable. The signature secret is not part of the answer, only the header name it travels in. To change any of these settings use `PUT api/2.0/files/docservice`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **version** | query | **Boolean** | Whether the running Document Server is asked for its editor version so that `version` can report it. Left off, the portal answers from its own settings without contacting the Document Server and `version` comes back empty. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The document service location, with the editor version filled in when it was requested | [**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocServiceUrlWrapper**](../../models/doc-service-url-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
