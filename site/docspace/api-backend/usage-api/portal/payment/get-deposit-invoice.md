# getDepositInvoice

> StringWrapper getDepositInvoice(id)

`GET /api/2.0/portal/payment/customer/deposits/{id}/invoice`

Get the top-up invoice

Returns the address of the invoice page for one top-up of the portal wallet. The address is absolute and leads to the billing provider. A top-up has an invoice only if `hasInvoice` is true. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The caller does not have to be the payer. The call is read-only. Do not store the address. Request it right before the user opens the invoice. The call returns 404 for an unknown top-up, a top-up without an invoice, or no billing customer. If the billing or accounting service rejects the request or does not answer, the call returns 402. A later retry may succeed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Long** (int64) | The ID of the top-up, taken from the `id` field of `GET api/2.0/portal/payment/customer/deposits`. | [required] [example: `15342`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute address of the hosted invoice page for the top-up | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The billing or the accounting service rejected the request for the top-up or its invoice link, or did not answer | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer, no top-up with this ID, or the top-up has no invoice | - | - |
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
