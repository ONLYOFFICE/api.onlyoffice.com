# unblockPortal

> unblockPortal()

`PUT /api/2.0/portal/unblock`

Unblock a portal

Unblocks this portal, blocked by the retention policy after a long period without use, so its users can sign in again. The portal must be blocked. The call is authorized only by the unblocking link the retention letters send to the owner; it works for the current block only. The call is mutating: it makes the portal active, records the unblocking in the audit trail, refreshes its Content Security Policy and restarts the retention count. Nothing is returned in the body; to check the status, read `tenantStatus` from `GET api/2.0/settings`, which a blocked portal still answers. A lapsed paid tariff stays unpaid after the unblocking, so renewing it is the next step. The letters of a free portal carry no such link: support unblocks it. The call does not bring back a portal deleted at the end of its retention period, or one its owner deactivated, which `PUT api/2.0/portal/continue` brings back. An invalid link, a link of an earlier block, or a portal that is no longer blocked, a repeated call included, is refused with 401; an ordinary sign-in token instead of the link is refused with 403.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal is active again and its users can sign in; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The unblocking link is invalid, was mailed for an earlier block, or the portal is not blocked | - | - |
| **403** | The call carries an ordinary sign-in token instead of the unblocking link | - | - |
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
