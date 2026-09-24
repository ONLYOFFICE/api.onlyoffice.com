# getPaymentSettings

> PaymentSettingsWrapper getPaymentSettings()

`GET /api/2.0/settings/payment`

Get the payment settings

Returns the portal's payment-related configuration: the sales contact email, the URL to buy or extend a subscription, whether the portal is Standalone, the current license's trial status and expiration date, and the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the portal's own subscription payment is overdue, since this is how the caller finds the link to resolve it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Payment-related settings: sales contact, buy URL, Standalone flag, license, and quota cap | [**PaymentSettingsWrapper**](../../models/payment-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PaymentSettingsWrapper**](../../models/payment-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
