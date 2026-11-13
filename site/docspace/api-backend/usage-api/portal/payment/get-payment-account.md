# getPaymentAccount

> StringWrapper getPaymentAccount(backUrl)

`GET /api/2.0/portal/payment/account`

Get the billing account page

Returns the address of the portal page where the payer manages the billing account. The page shows the payment method, the invoices, and the receipts. The address is relative to the portal root. The call adds `backUrl` to the address as a query parameter. If the portal has no billing customer, the call returns an empty result to any caller. The payer is the portal user whose email is the email of the billing customer. Otherwise, only the payer or the portal owner can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. If `backUrl` is not a valid URL or is too long, the call returns 400. The page buys nothing. To buy a plan, use `PUT api/2.0/portal/payment/url`. To attach a payment method, use `GET api/2.0/portal/payment/checkoutsetupurl`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **backUrl** | query | **URI** (uri) | The absolute address the billing account page should offer as its way back. It is appended to the returned portal-relative address as a query parameter rather than followed here, and omitting it yields the bare address of the page. | [optional] [example: `https://example.com`] [minLength: 0] [maxLength: 255] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal-relative address of the billing account page, or an empty result when the portal has no billing customer | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `backUrl` does not start with `http://`, `https://` or `ftp://`, or is longer than 255 characters | - | - |
| **403** | The caller is neither the payer nor the portal owner, or the portal has no billing service configured | - | - |
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
