# getPortalTariff

> TariffWrapper getPortalTariff(refresh)

`GET /api/2.0/portal/tariff`

Get the portal tariff

Returns the tariff this portal runs on: its state, the end of the current period and the quotas - the plan and its add-ons - it is made of. Nothing has to be called first, the call is read-only and idempotent, and it keeps answering while the portal's payment has lapsed, which is what a client needs in order to show a payment warning. How much of it is filled depends on the caller: every user gets `state`, which is `Trial`, `Paid`, `Delay` for the grace period after the due date, or `NotPaid`; a room or DocSpace administrator also gets `dueDate` and `delayDueDate`; and a caller with the portal-settings right additionally gets `id`, `customerId`, `licenseDate`, the `openSource`, `enterprise` and `developer` flags and `quotas`, each entry naming the quota, its quantity, its own due date and the quota it switches to next period. Dates are in the portal time zone. Pass `refresh=true` to re-read the tariff from the billing system instead of the portal cache - it is slower, so use it after a payment, not on every page. What the next period will cost is listed by `GET api/2.0/portal/tariff/upcoming`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower, so ask for it right after a payment and leave it off for ordinary page loads. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tariff of this portal, filled as far as the rights of the caller allow | [**TariffWrapper**](../../models/tariff-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TariffWrapper**](../../models/tariff-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
