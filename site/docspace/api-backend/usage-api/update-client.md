# updateClient

Referenced types are defined in the [full reference](../oauth.md).

> updateClient(clientId, UpdateClientRequest)

`PUT /api/2.0/oauth2/clients/{clientId}`

Update an existing OAuth2 client

Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to update | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |
| **UpdateClientRequest** | body | [**UpdateClientRequest**](../oauth.md#model-updateclientrequest) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully updated | - | - |
| **400** | Missing required fields, validation failed, or the client could not be updated because of concurrent modification | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **403** | Insufficient permissions to update client | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **415** | The Content-Type header is not application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

null (empty response body)

## Authorization

[x-signature](../oauth.md#x-signature)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## OAuth20ClientQueryingApi
