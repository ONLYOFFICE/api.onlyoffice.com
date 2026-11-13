# getPaymentUrl

> StringWrapper getPaymentUrl(PaymentUrlRequestDto)

`PUT /api/2.0/portal/payment/url`

Get the payment page URL

Starts the purchase of a monthly paid plan for the portal and returns the URL of the hosted checkout page. Nothing is bought until the buyer completes that page. The plan becomes active after the payment provider confirms the payment. Requires a DocSpace admin. Other callers get 403. It also returns 403 if the installation has no billing service. The call itself is read-only, so you can repeat it. If the portal already has a paid plan, the call returns an empty result. If the billing service fails, the call also returns an empty result. Repeated calls then return it for up to 10 minutes. To change a paid plan, use `PUT api/2.0/portal/payment/update`. The URL carries the email of the caller and the language of the request. It also carries a currency that the call picks from the IP address of the caller. The page redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Take a monthly plan for `quantity` from `GET api/2.0/portal/payment/quotas`. The call returns 400 if `quantity` holds more than one product or a quantity of zero or less. It also returns 400 for a yearly plan or a wallet service. To buy wallet services, use `PUT api/2.0/portal/payment/updatewallet`. The call returns 402 if the portal already exceeds a limit of the requested plan. These limits cover admins, users, rooms, AI agents, and storage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **PaymentUrlRequestDto** | body | [**PaymentUrlRequestDto**](../../models/payment-url-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL of the checkout page to open, or an empty result when the portal already has a paid plan or the billing service failed | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `backUrl`, `successUrl` or `quantity`, `backUrl` or `successUrl` does not start with `http://`, `https://` or `ftp://` or is longer than 255 characters, or `quantity` does not hold exactly one product, holds a quantity that is not greater than zero, or a product that is not a monthly plan | - | - |
| **402** | The portal already has more administrators, users, rooms or AI agents, or stores more data, than the plan in the requested quantity allows | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
