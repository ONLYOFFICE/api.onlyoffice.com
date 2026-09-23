# topUpDeposit

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper topUpDeposit(TopUpDepositRequestDto)

`POST /api/2.0/portal/payment/deposit`

Top up the wallet

Charges the payment method on file and adds the amount to the portal's wallet, the balance every wallet service is paid from. The portal needs a billing customer with a payment method set - attach one with `GET api/2.0/portal/payment/checkoutsetupurl` - `currency` has to be one of the accounting currencies this installation supports, and `amount` is a whole number of currency units between 1 and 999999. Only the payer may call it. The call takes money and is not idempotent in any way: two identical requests charge twice, so a client must not retry it blindly after a timeout, and it is limited to ten requests a minute per user by default. A successful top-up pushes the new balance to the portal clients over their socket connection and re-arms the low-balance notification. The result is `true` when the payment provider accepted the charge; read the resulting balance back from `GET api/2.0/portal/payment/customer/balance`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TopUpDepositRequestDto** | body | [**TopUpDepositRequestDto**](../api.md#model-topupdepositrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the payment provider accepted the charge and the wallet was credited | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `currency` is not one of the supported accounting currencies, or `amount` is outside 1 to 999999 | - | - |
| **403** | The caller is not the payer of this portal, the portal has no billing service configured, or the customer has no payment method set | - | - |
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
