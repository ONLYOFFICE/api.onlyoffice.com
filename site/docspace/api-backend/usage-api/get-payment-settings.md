# getPaymentSettings

Referenced types are defined in the [full reference](../api.md).

> PaymentSettingsWrapper getPaymentSettings()

`GET /api/2.0/settings/payment`

Get the payment settings

Returns the portal's payment-related configuration: the sales contact email, the URL to buy or extend a subscription, whether the portal is Standalone, the current license's trial status and expiration date, and the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the portal's own subscription payment is overdue, since this is how the caller finds the link to resolve it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Payment-related settings: sales contact, buy URL, Standalone flag, license, and quota cap | [**PaymentSettingsWrapper**](../api.md#model-paymentsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PaymentSettingsWrapper**](../api.md#model-paymentsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
