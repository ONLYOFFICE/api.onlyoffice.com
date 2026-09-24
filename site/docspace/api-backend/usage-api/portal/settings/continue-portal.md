# continuePortal

> continuePortal()

`PUT /api/2.0/portal/continue`

Restore a portal

Brings a deactivated portal back to the active state, so its users can sign in again and its domain serves the portal as before. It is reached only with the reactivation link that `POST api/2.0/portal/suspend` mails to the portal owner: that link authorizes the call in place of an authentication token, and no ordinary token is accepted here. The call is mutating and idempotent - it sets the status to active, re-applies the portal's Content Security Policy and refreshes its base domain, and a portal that is already active is simply left active. Nothing is returned in the body; read the result from `status` in `GET api/2.0/portal`. Deactivating the portal again means asking for a fresh letter with `POST api/2.0/portal/suspend`, because each link is issued for one operation. This operation cannot bring back a removed portal: the deletion behind `DELETE api/2.0/portal/delete` is final, and a removed portal has to be restored from a backup instead.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal is active again and its users can sign in; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
