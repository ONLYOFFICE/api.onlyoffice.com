# getPortalTariff

> TariffWrapper getPortalTariff(refresh)

`GET /api/2.0/portal/tariff`

Get the portal tariff

Returns the tariff of the portal, with its state, the end of the current period, and its quotas. Any signed-in user can call it, including a guest. Every caller gets `state`. A room admin or a DocSpace admin also gets `dueDate` and `delayDueDate`. Only a caller with the EditPortalSettings permission gets the other fields. The portal owner and DocSpace admins have this permission. The call is read-only and also works while the portal is unpaid. With `refresh` set to `true`, the call reads the tariff from the billing system instead of the cache. To see what the next period costs, use `GET api/2.0/portal/tariff/upcoming`.

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
