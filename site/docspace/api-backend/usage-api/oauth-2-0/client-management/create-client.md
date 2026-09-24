# createClient

> ClientResponse createClient(CreateClientRequest)

`POST /api/2.0/oauth2/clients`

Create a new OAuth2 client

Registers a new OAuth2 client in the caller's tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant's scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateClientRequest** | body | [**CreateClientRequest**](../../models/create-client-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | Client successfully created | [**ClientResponse**](../../models/client-response.md) | - |
| **400** | Missing required fields, validation failed, an unknown scope was requested, or the client limit for this tenant has been reached | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **403** | Insufficient permissions to create client | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **415** | The Content-Type header is not application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |

## Return type

[**ClientResponse**](../../models/client-response.md)

## Authorization

[x-signature](../oauth-2-0.md#x-signature)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
