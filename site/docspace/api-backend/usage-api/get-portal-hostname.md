# getPortalHostname

Referenced types are defined in the [full reference](../api.md).

> StringWrapper getPortalHostname()

`GET /api/2.0/settings/machine`

Get the portal hostname

Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call. The value reflects whatever the caller connected through, including a reverse proxy's public name, and is not necessarily the tenant's configured alias or mapped domain.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Hostname the current request arrived on | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
