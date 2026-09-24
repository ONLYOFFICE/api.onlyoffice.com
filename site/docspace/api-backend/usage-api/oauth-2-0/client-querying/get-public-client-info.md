# getPublicClientInfo

> ClientInfoResponse getPublicClientInfo(clientId)

`GET /api/2.0/oauth2/clients/{clientId}/public/info`

Get public client info

Returns the same consent-facing client information as the signed read, but without requiring a portal signature. It is meant for a login or consent page that has to render the client before the user is known, so it resolves the client by ID alone: there is no authentication, no tenant scoping and no creator check, and any caller who knows a client ID can read that client's public details. It still exposes no secret, no redirect URIs and no allowed origins. Being unauthenticated it is rate-limited on a separate, tighter budget than the signed endpoints. An unknown client ID, and an identifier that is not a client ID at all, are both reported as 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved client public info | [**ClientInfoResponse**](../../models/client-info-response.md) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **404** | No client with this ID exists, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../../models/problem-detail.md) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../../models/problem-detail.md) | - |

## Return type

[**ClientInfoResponse**](../../models/client-info-response.md)

## Authorization

[cookieAuth](../oauth-2-0.md#cookieauth), [bearerAuth](../oauth-2-0.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
