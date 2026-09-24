# submitConsent

> submitConsent(client\_id, state, scope)

`POST /oauth2/authorize`

Submit the consent decision

Submits the user's consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client's redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **client\_id** | form | **String** | The client the consent is being given to. It has to be the same client the authorization request named. | [optional] |
| **state** | form | **String** | The opaque value carried through from the authorization request, returned unchanged on the redirect so the client can match the answer to its request. | [optional] |
| **scope** | form | **String** | The scopes the user agreed to, as a space-separated list. Anything the user declined is left out, so this may be narrower than what was requested. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **302** | Redirect to the client's redirect URI with authorization code | - | - |
| **200** | Returned instead of the redirect when the request carries the X-Disable-Redirect header: the target URL is sent in the X-Redirect-URI response header and the body is empty | - | - |
| **400** | Invalid request parameters | - | - |

## Return type

null (empty response body)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined
