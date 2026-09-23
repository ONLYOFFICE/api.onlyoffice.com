# updatePayment

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper updatePayment(QuantityRequestDto)

`PUT /api/2.0/portal/payment/update`

Change the subscription quantity

Changes how many units of the plan the portal is paying for - the number of administrators it covers - and lets the payment provider bill the difference against the payment method already on file. The portal must have a billing customer and a plan bought through `PUT api/2.0/portal/payment/url`, and while the portal is on a priced plan the product name in `quantity` has to be that same plan, which `GET api/2.0/portal/payment/quota` reports, because a subscription is changed here and not swapped. Only the payer - the portal user whose e-mail is the billing customer's e-mail - may call it. The call is mutating and charges money, and it is guarded against a double submission: once the new quantity is in effect, repeating the same request fails with 400 because that quantity is already set. The result is `true` when the provider accepted the change and `false` when it declined it without an error. Exactly one product per call is accepted, the operation is limited to ten requests a minute per user by default and answers 429 above that, and wallet services are not bought here - use `PUT api/2.0/portal/payment/updatewallet` for those.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuantityRequestDto** | body | [**QuantityRequestDto**](../api.md#model-quantityrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the provider accepted the new quantity, `false` when it declined it | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The product is not the plan currently paid, or the quantity is already the one in effect | - | - |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
