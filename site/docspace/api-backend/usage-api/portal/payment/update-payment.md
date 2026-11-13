# updatePayment

> BooleanWrapper updatePayment(QuantityRequestDto)

`PUT /api/2.0/portal/payment/update`

Change the subscription quantity

Changes the number of admins that the paid plan of the portal covers. The payment provider bills the difference to the payment method on file. The portal needs a plan bought with `PUT api/2.0/portal/payment/url`. If the portal has no billing customer, the call returns 404. The payer is the portal user whose email is the email of the billing customer. Only the payer can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The call spends money. If the provider accepted the change, a repeated call with the same quantity returns 400. The call returns `true` if the provider accepted the change. It returns `false` if the provider declined it, or if the call failed or timed out. After a failure the change may still be applied, so check the plan before you repeat the call. On a priced plan, `quantity` must name the current plan from `GET api/2.0/portal/payment/quota`. The call returns 400 for more than one product, another plan, or a wallet service. It returns 402 if the portal already exceeds a limit of the plan in the new quantity. By default, the limit is 10 calls a minute per user. More calls return 429. To buy wallet services, use `PUT api/2.0/portal/payment/updatewallet`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuantityRequestDto** | body | [**QuantityRequestDto**](../../models/quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the provider accepted the new quantity, `false` when it declined it or the call failed or timed out | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `quantity`, `quantity` does not hold exactly one product, the product is not a subscription plan or not the plan currently paid, or the quantity is already the one in effect | - | - |
| **402** | The portal already has more administrators, users, rooms or AI agents, or stores more data, than the plan in the new quantity allows | - | - |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
