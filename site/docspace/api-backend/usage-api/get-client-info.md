# getClientInfo

Referenced types are defined in the [full reference](../oauth.md).

> ClientInfoResponse getClientInfo(clientId)

`GET /api/2.0/oauth2/clients/{clientId}/info`

Get client info

Retrieves the detailed information for a client with the ID specified in the request. It returns the consent-facing subset of the client - name, description, logo, the website, terms and policy URLs, authentication methods and scopes - and deliberately omits the secret, the redirect URIs and the allowed origins, which is what makes it safe to render on a consent screen. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. A client the caller may not see is reported as 404, exactly like an unknown one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved client info | [**ClientInfoResponse**](../oauth.md#model-clientinforesponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **403** | Insufficient permissions to view client information | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

[**ClientInfoResponse**](../oauth.md#model-clientinforesponse)

## Authorization

[x-signature](../oauth.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
