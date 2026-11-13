# getRightQuota

> TenantQuotaWrapper getRightQuota()

`GET /api/2.0/portal/quota/right`

Get the recommended quota

Returns the cheapest quota that is not yearly and allows more users than the portal has active accounts. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only and buys nothing. The answer has the shape of `GET api/2.0/portal/quota`, with sizes in bytes. If no quota fits, the call returns 200 with no quota. To list all quotas, use `GET api/2.0/portal/payment/quotas`. To buy one, use `PUT api/2.0/portal/payment/url`.

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
