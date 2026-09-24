# deleteClient

> deleteClient(clientId)

`DELETE /api/2.0/oauth2/clients/{clientId}`

Delete an OAuth2 client

Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to delete | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully deleted | - | - |
| **400** | The client ID is blank, or the client could not be deleted | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **403** | Insufficient permissions to delete client | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |

## Return type

null (empty response body)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
