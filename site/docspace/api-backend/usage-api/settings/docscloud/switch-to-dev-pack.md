# switchToDevPack

> BooleanWrapper switchToDevPack(DocsCloudDevPackRequestDto)

`POST /api/2.0/settings/docscloud/switchtodevpack`

Switch Docs Connect to Docs Connect Dev Pack

Switches the paid Docs Connect subscription of the current portal to Docs Connect Dev Pack for `quantity` users. The call charges the price difference to the portal wallet and moves the license to the new product. To check the subscriptions and the tariff state first, use `GET api/2.0/portal/tariff`. To get the price, use `POST api/2.0/settings/docscloud/calculatedevpack` with the same `quantity`. Requires a DocSpace admin. Other callers get 403. The call spends money, and a repeated call returns 400. Concurrent calls run one after another, so the portal charges the wallet once. It returns `true` if the subscription is switched. It returns `false` if the billing service declines the switch. Then the portal charges nothing and stays on Docs Connect. It also returns `false` if the billing service does not answer, or the portal cannot read its answer. Then the switch may be done. So check `GET api/2.0/portal/tariff` with `refresh=true` before you call again. To change the number of users, or to return to Docs Connect at the next billing period, use `PUT api/2.0/portal/payment/updatewallet`. The call returns 400 if the body cannot be read. It also returns 400 without an active Docs Connect subscription. It also returns 400 if the portal already has Docs Connect Dev Pack, or `quantity` is below its minimum. It returns 402 if the tariff is delayed or not paid. It returns 403 if the billing service is not configured. It returns 404 for a portal without a billing customer, or an installation without these wallet products.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DocsCloudDevPackRequestDto** | body | [**DocsCloudDevPackRequestDto**](../../models/docs-cloud-dev-pack-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Boolean value: true if the subscription is switched to Docs Connect Dev Pack, false if the billing service declines it | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, the quantity is below the allowed minimum, the portal has no active Docs Connect subscription, or it already has a Docs Connect Dev Pack subscription | - | - |
| **402** | The portal tariff is delayed or not paid, so the subscription cannot be switched | - | - |
| **403** | The caller is not a DocSpace administrator, or the billing service is not configured | - | - |
| **404** | The portal is not registered as a billing customer, or the Docs Connect and Docs Connect Dev Pack wallet products are not configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
