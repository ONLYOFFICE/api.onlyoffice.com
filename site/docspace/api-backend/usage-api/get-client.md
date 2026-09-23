# getClient

Referenced types are defined in the [full reference](../oauth.md).

> ClientResponse getClient(clientId)

`GET /api/2.0/oauth2/clients/{clientId}`

Get client details

Returns the whole stored record of one client: its name and description, its secret, scopes, redirect URIs, allowed origins, logout redirect URIs and audit fields. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. Whatever the caller may not see is reported as 404 rather than 403, so absence and lack of access are deliberately indistinguishable, and an identifier that is not a valid client ID is reported the same way. The response is a single object, not a collection.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client details successfully retrieved | [**ClientResponse**](../oauth.md#model-clientresponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **403** | Insufficient permissions to view client | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

[**ClientResponse**](../oauth.md#model-clientresponse)

## Authorization

[x-signature](../oauth.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
