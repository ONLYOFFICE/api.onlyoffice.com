# regenerateSecret

Referenced types are defined in the [full reference](../oauth.md).

> ClientSecretResponse regenerateSecret(clientId)

`PATCH /api/2.0/oauth2/clients/{clientId}/regenerate`

Regenerate client secret

Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to regenerate secret for | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client secret successfully regenerated | [**ClientSecretResponse**](../oauth.md#model-clientsecretresponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **403** | Insufficient permissions to regenerate client secret | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

[**ClientSecretResponse**](../oauth.md#model-clientsecretresponse)

## Authorization

[x-signature](../oauth.md#x-signature)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
