# getPublicClientInfo

Referenced types are defined in the [full reference](../oauth.md).

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
| **200** | Successfully retrieved client public info | [**ClientInfoResponse**](../oauth.md#model-clientinforesponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **404** | No client with this ID exists, or the ID cannot be parsed as a client ID | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](../oauth.md#model-problemdetail) | - |

## Return type

[**ClientInfoResponse**](../oauth.md#model-clientinforesponse)

## Authorization

[cookieAuth](../oauth.md#cookieauth), [bearerAuth](../oauth.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## OAuth20DiscoveryApi
