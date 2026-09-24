# getPortalUsersCount

> Int64Wrapper getPortalUsersCount()

`GET /api/2.0/portal/userscount`

Get a number of portal users

Returns how many accounts this portal currently has in the active state, whatever their role, so a client can show the seat usage next to the allowance. Accounts that were invited but have not joined yet and accounts that were disabled or removed are not counted. The caller needs the portal-settings right and is refused without it; the call is read-only and idempotent, and the number moves as soon as an account joins, is disabled or is deleted. The answer is a plain number, not an object. Compare it with `countUser` and `countPaidUser` from `GET api/2.0/portal/quota` to see how much of the allowance is left, and with `GET api/2.0/portal/quota/right` for the smallest quota that would still hold everyone. When the accounts themselves are needed, and not only how many there are, list them with the People API instead - this operation cannot filter by role, group or status.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of accounts of this portal that are in the active state | [**Int64Wrapper**](../../models/int-64-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**Int64Wrapper**](../../models/int-64-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
