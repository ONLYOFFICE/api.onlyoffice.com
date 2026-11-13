# unblockPortal

> unblockPortal()

`PUT /api/2.0/portal/unblock`

Unblock a portal

Unblocks the portal after the retention policy blocked it for a long time without use. Its users can then sign in again. Sign the request with the confirmation token from the unblocking link in the retention email to the owner. An ordinary sign-in token gets 403. The call changes data and makes the portal active. It also restarts the retention count. A repeated call returns 401. It also returns 401 for an invalid link, an earlier block's link, or a portal that is not blocked. The call returns no data. To check the status, read `tenantStatus` from `GET api/2.0/settings`, which a blocked portal still answers. A lapsed paid tariff stays unpaid, so renew it next. The emails of a free portal have no such link, and support unblocks it. The call does not bring back a deleted portal or one that its owner deactivated. To make a deactivated portal active, use `PUT api/2.0/portal/continue`.

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
