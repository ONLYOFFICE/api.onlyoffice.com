# getCheckoutSetupUrl

> StringWrapper getCheckoutSetupUrl(backUrl, successUrl)

`GET /api/2.0/portal/payment/checkoutsetupurl`

Get the checkout setup page URL

Returns the URL of the hosted page that attaches a payment method to the billing account of the portal. Use it before a wallet top-up or an automatic top-up. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The payer is the portal user whose email is the email of the billing customer. If the portal has a billing customer with an email, only the payer can call it. Other admins get 403. If the portal already has a payment method, the call returns an empty result. The call is read-only. The payment provider stores the payment method when the user completes the page. After this, `GET api/2.0/portal/payment/customerinfo` reports the method as set. The URL carries the email of the caller and the language of the request. It also carries a currency that the call picks from the IP address of the caller. The page redirects to `successUrl` or `backUrl` when the user finishes or cancels. If `backUrl` or `successUrl` is missing, invalid, or too long, the call returns 400. The page buys nothing. To buy a plan, use `PUT api/2.0/portal/payment/url`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **backUrl** | query | **URI** (uri) | The absolute address the setup page sends the user back to when attaching a payment method is abandoned. It has to be a well-formed URL and must be reachable by that user rather than by the portal. | [required] [example: `https://example.com/payment/back`] [minLength: 0] [maxLength: 255] |
| **successUrl** | query | **URI** (uri) | The absolute address the setup page sends the user to once the payment provider has stored the payment method. Reaching it means a method is now on file, which `GET api/2.0/portal/payment/customerinfo` confirms; nothing has been charged. | [required] [example: `https://example.com/payment/success`] [minLength: 0] [maxLength: 255] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL of the payment method setup page, or an empty result when the portal already has a payment method | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `backUrl` or `successUrl` is missing, does not start with `http://`, `https://` or `ftp://`, or is longer than 255 characters | - | - |
| **403** | The caller is not a DocSpace administrator or, once a billing customer exists, not its payer; or the portal has no billing service configured | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
