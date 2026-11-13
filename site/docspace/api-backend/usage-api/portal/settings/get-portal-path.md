# getPortalPath

> StringWrapper getPortalPath(virtualPath)

`GET /api/2.0/portal/path`

Get a path to the portal

Returns the absolute URL of a path on the portal, with the scheme, the current domain, and the virtual root. Any signed-in user can call it, including a guest. The call is read-only. It does not check the path or the access of the caller to it. An empty `virtualPath` returns the portal root. The call adds a path that starts with `/` to the root and resolves `~/` against the virtual root. It returns a value that starts with `http://`, `https://`, or `mailto:` unchanged. The answer is a JSON string. It has the current domain, so after a rename the call returns the new domain.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **virtualPath** | query | **String** | The path to resolve. It is taken as it is: an omitted or empty value yields the portal root, a value starting with `/` is appended to that root, a value starting with `~/` is resolved against the virtual root, and one that already begins with `http://`, `https://` or `mailto:` is handed back unchanged. Nothing checks that the path exists or that the caller may open it. | [optional] [example: `/portal/documents`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL that the given portal-relative path resolves to | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
