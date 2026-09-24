# deleteTenantClients

> deleteTenantClients()

`DELETE /api/2.0/oauth2/clients/tenant`

Delete all tenant OAuth2 clients

Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant's client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully deleted | - | - |
| **400** | The clients could not be deleted because of concurrent modification | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **403** | Insufficient permissions to delete tenant clients | [**ProblemDetail**](../../models/problem-detail.md) | - |
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
