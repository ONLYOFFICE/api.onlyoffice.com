# handleOptions

> handleOptions()

`OPTIONS /.well-known/oauth-authorization-server`

Probe the discovery endpoint

Answers the CORS preflight for the OAuth 2.0 Authorization Server metadata endpoint. The endpoint needs no authentication and reads nothing from the request: it always answers 200 with an empty body, and the CORS headers are added by the surrounding filter chain rather than by this handler. It changes no state, and it does not return the authorization server metadata document - issue a GET against the same path for that.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Preflight accepted; the response carries no body | - | - |

## Return type

null (empty response body)

## Authorization

[cookieAuth](../oauth-2-0.md#cookieauth), [bearerAuth](../oauth-2-0.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined
