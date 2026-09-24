# getPaymentAccount

> StringWrapper getPaymentAccount(backUrl)

`GET /api/2.0/portal/payment/account`

Get the billing account page

Hands back the address of the portal page on which the billing account is managed - the payment method on file, the invoices and the receipts - so a client can link to it instead of assembling the address itself. The portal must already have a billing customer: one that has never had it gets an empty result, and an installation without a billing service answers 403. Only the payer or the portal owner may read it, and the call changes nothing. The value is relative to the portal root (`payment.ashx`), and the optional `backUrl` is appended to it as a query parameter so the page can send the user back where they came from. It is not a checkout page: a plan is bought with `PUT api/2.0/portal/payment/url` and a payment method is attached with `GET api/2.0/portal/payment/checkoutsetupurl`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **backUrl** | query | **URI** (uri) | The absolute address the billing account page should offer as its way back. It is appended to the returned portal-relative address as a query parameter rather than followed here, and omitting it yields the bare address of the page. | [optional] [example: `https://example.com`] [minLength: 0] [maxLength: 255] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal-relative address of the billing account page, or an empty result when the portal has no billing customer | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is neither the payer nor the portal owner, or the portal has no billing service configured | - | - |
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
