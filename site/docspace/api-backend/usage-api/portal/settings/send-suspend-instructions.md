# sendSuspendInstructions

> sendSuspendInstructions()

`POST /api/2.0/portal/suspend`

Send suspension instructions

Sends the portal owner an email with the links that deactivate the portal and make it active again. This call does not change the portal. Only the portal owner can call it. Other callers get 403, including a DocSpace admin. The call also works while the portal is unpaid. By default, a repeated call within 10 minutes of the email sends nothing and returns 200. A later call sends a new email, and the links of earlier emails keep working. The first link signs `PUT api/2.0/portal/suspend`, and the second signs `PUT api/2.0/portal/continue`. By default, the first link works for 7 days, and the second never expires. To delete the portal instead, use `POST api/2.0/portal/delete`. On a server installation, you cannot deactivate the last space. Spaces with limited access do not count.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The request is accepted: the deactivation letter is queued and the request recorded in the audit trail, unless the same letter already went out within the repeat period; the portal itself is still active and the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
