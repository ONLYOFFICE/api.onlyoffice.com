# getPortalQuota

> TenantQuotaWrapper getPortalQuota()

`GET /api/2.0/portal/quota`

Get the portal quota

Returns the quota of the portal, which is the allowance its tariff gives. It has the limits on users, paid users, rooms, total size, and file size, and the features. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only and also works while the portal is unpaid. Sizes are in bytes. A free or trial quota has no price. The quota shows what the portal may use, not what it uses. The usage comes from `GET api/2.0/portal/usedspace` and `GET api/2.0/portal/userscount`. To list the quotas the portal can switch to, use `GET api/2.0/portal/payment/quotas`. To read the billing state, use `GET api/2.0/portal/tariff`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The allowance the current tariff grants this portal, with sizes in bytes | [**TenantQuotaWrapper**](../../models/tenant-quota-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
