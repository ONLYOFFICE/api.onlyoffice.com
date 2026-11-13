# suspendPortal

> suspendPortal()

`PUT /api/2.0/portal/suspend`

Deactivate a portal

Deactivates the portal. Its users can no longer work in it, and its rooms, files, and accounts stay. Sign the request with the confirmation token from the first link of the email that `POST api/2.0/portal/suspend` sends. The call also checks that the token belongs to the portal owner. Other callers get 403, including an ordinary sign-in token. The call changes data. After it, the portal returns 404 for most calls, and a repeated call also returns 404. To make the portal active again, use `PUT api/2.0/portal/continue` with the second link of the email. To delete the portal for good, use `DELETE api/2.0/portal/delete`. On a server installation, you cannot deactivate the last space. Spaces with limited access do not count.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal is now suspended, its users can no longer work in it and its content is kept; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The account the confirmation link was issued for is not the portal owner | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
