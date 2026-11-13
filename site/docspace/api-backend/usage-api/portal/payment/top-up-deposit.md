# topUpDeposit

> BooleanWrapper topUpDeposit(TopUpDepositRequestDto)

`POST /api/2.0/portal/payment/deposit`

Top up the wallet

Charges the payment method of the portal and adds the amount to the portal wallet. The wallet services are paid from this balance. If the portal has no billing customer, the call returns 404. If the customer has no payment method, the call returns 403. To attach one, use `GET api/2.0/portal/payment/checkoutsetupurl`. The payer is the portal user whose email is the email of the billing customer. Only the payer can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The call spends money. Do not repeat it. Each call charges the payment method again. If the call returns `false` or times out, check the balance before you repeat it. With a delayed payment method, the balance shows the money only after the transfer settles. The call returns 400 if `currency` is not a supported accounting currency or `amount` is out of range. The call returns `true` if the payment provider accepted the charge. To read the new balance, use `GET api/2.0/portal/payment/customer/balance`. By default, the limit is 10 calls a minute per user. More calls return 429.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TopUpDepositRequestDto** | body | [**TopUpDepositRequestDto**](../../models/top-up-deposit-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the payment provider accepted the charge; with a delayed payment method the wallet is credited only after the transfer settles | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `currency` is not one of the supported accounting currencies, or `amount` is outside 1 to 999999 | - | - |
| **403** | The caller is not the payer of this portal, the portal has no billing service configured, or the customer has no payment method set | - | - |
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
