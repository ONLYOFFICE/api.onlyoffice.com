# getCheckoutSetupUrl

> StringWrapper getCheckoutSetupUrl(BackUrl, SuccessUrl)

`GET /api/2.0/portal/payment/checkoutsetupurl`

Get the checkout setup page URL

Hands back the hosted page on which a payment method is attached to the portal's billing account, for the case where money has to be taken later - a wallet top-up or an automatic one - rather than a plan bought now. A portal that already has a payment method on file answers with an empty result; a DocSpace administrator may ask for the page, but once the portal has a billing customer with an e-mail, only its payer may. The call itself changes nothing and may be repeated: the payment method is stored by the payment provider when the returned page is completed, after which `GET api/2.0/portal/payment/customerinfo` reports it as set. The URL is absolute, carries the caller's e-mail, the language of the request and the currency of the region, and redirects to `successUrl` or `backUrl` when the user finishes or cancels. It buys nothing - a plan is bought with `PUT api/2.0/portal/payment/url`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BackUrl** | query | **URI** (uri) | The absolute address the setup page sends the user back to when attaching a payment method is abandoned. It has to be a well-formed URL and must be reachable by that user rather than by the portal. | [required] [example: `https://example.com/payment/back`] [minLength: 0] [maxLength: 255] |
| **SuccessUrl** | query | **URI** (uri) | The absolute address the setup page sends the user to once the payment provider has stored the payment method. Reaching it means a method is now on file, which `GET api/2.0/portal/payment/customerinfo` confirms; nothing has been charged. | [required] [example: `https://example.com/payment/success`] [minLength: 0] [maxLength: 255] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL of the payment method setup page, or an empty result when the portal already has a payment method | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator or, once a billing customer exists, not its payer; or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
