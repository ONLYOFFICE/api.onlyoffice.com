# authorizeOAuth

> authorizeOAuth(response\_type, client\_id, redirect\_uri, scope)

`GET /oauth2/authorize`

Start the authorization flow

Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client's redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **response\_type** | query | **String** | The OAuth 2.0 response type. Only code is supported: this server issues an authorization code, never a token, from this endpoint. | [required] [example: `code`] |
| **client\_id** | query | **String** | The identifier the client was given when it was registered. It selects both the client shown on the consent screen and the set of redirect URIs the request is checked against. | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **redirect\_uri** | query | **String** | Where to send the user once authorization is complete. It has to be one of the redirect URIs registered for the client, otherwise the request is refused. | [required] [example: `https://example.com`] |
| **scope** | query | **String** | The permissions being asked for, as a space-separated list. Every scope has to be one the client is registered for, and the consent screen lists exactly these. | [required] [example: `files:read`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **302** | Redirect to the login page, to the consent page, or back to the client's redirect URI with an authorization code | - | - |
| **200** | Returned instead of the redirect when the request carries the X-Disable-Redirect header: the target URL is sent in the X-Redirect-URI response header and the body is empty | - | - |
| **400** | Invalid request parameters | - | - |

## Return type

null (empty response body)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined
