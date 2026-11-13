# sendDeleteInstructions

> sendDeleteInstructions()

`POST /api/2.0/portal/delete`

Send removal instructions

Sends the portal owner an email with the link that deletes the portal. This call does not change the portal. Only the portal owner can call it. Other callers get 403, including a DocSpace admin. The call also works while the portal is unpaid. By default, a repeated call within 10 minutes of the email sends nothing and returns 200. A later call sends a new email, and the links of earlier emails keep working for 7 days by default. If the portal has payments and is not on trial, the email also warns that the subscription stops renewing. The link signs `DELETE api/2.0/portal/delete`, which deletes the portal and cannot be undone. To deactivate the portal instead, use `POST api/2.0/portal/suspend`. On a server installation, you cannot delete the last space. Spaces with limited access do not count.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The request is accepted, and the removal letter is queued unless one already went out within the repeat period; nothing about the portal has changed yet and the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not the portal owner or has no portal-settings right | - | - |
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
