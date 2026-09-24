# getRightQuota

> TenantQuotaWrapper getRightQuota()

`GET /api/2.0/portal/quota/right`

Get the recommended quota

Recommends the cheapest quota this portal could run on and still fit: the lowest-priced quota that is not billed yearly, whose user allowance is above the number of active accounts and whose storage allowance is above the space already used. The caller needs the portal-settings right and gets 403 without it. The call is read-only, idempotent and buys nothing - it only picks one quota out of those the portal may switch to, comparing them with the figures that `GET api/2.0/portal/userscount` and `GET api/2.0/portal/usedspace` report. The answer is a single quota in the same shape as `GET api/2.0/portal/quota`, with sizes in bytes; when no quota is large enough the answer is an empty body with 200 and not an error, so handle the empty result as nothing to recommend. Yearly quotas are left out by design, so the recommendation is always a monthly one - the full list to choose from comes from `GET api/2.0/portal/payment/quotas`, and the purchase itself is started with `PUT api/2.0/portal/payment/url`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The cheapest monthly quota that would still fit this portal, or an empty body when none does | [**TenantQuotaWrapper**](../../models/tenant-quota-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantQuotaWrapper**](../../models/tenant-quota-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
