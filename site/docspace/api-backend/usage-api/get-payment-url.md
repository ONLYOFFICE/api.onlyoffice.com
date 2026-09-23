# getPaymentUrl

Referenced types are defined in the [full reference](../api.md).

> StringWrapper getPaymentUrl(PaymentUrlRequestDto)

`PUT /api/2.0/portal/payment/url`

Get the payment page URL

Starts the purchase of a monthly paid plan for this portal by handing back the hosted checkout page the buyer has to open; nothing is bought until that page is completed. The portal must have no paid plan yet - a portal whose plan is already paid gets an empty result and changes its subscription through `PUT api/2.0/portal/payment/update` instead - and the product name in `quantity` must be one of the monthly, non-wallet plans listed by `GET api/2.0/portal/payment/quotas`. Only a DocSpace administrator may call it. The call itself changes nothing on the portal and may be repeated: the money is taken by the payment provider on the checkout page, and the plan becomes active once the provider confirms it. The returned URL is absolute and single-purpose - it carries the caller's e-mail, the language of the request and the currency of the request region, and it redirects to `successUrl` or `backUrl` when the buyer finishes or cancels. Exactly one product per call is accepted and its quantity has to be greater than zero; yearly and wallet products are refused, and wallet services are bought with `PUT api/2.0/portal/payment/updatewallet` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **PaymentUrlRequestDto** | body | [**PaymentUrlRequestDto**](../api.md#model-paymenturlrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The absolute URL of the checkout page to open, or an empty result when the portal already has a paid plan | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `quantity` holds more than one product, a quantity that is not greater than zero, or a product that is not a monthly plan | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
