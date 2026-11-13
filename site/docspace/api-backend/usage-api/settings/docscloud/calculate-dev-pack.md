# calculateDevPack

> PaymentCalculationWrapper calculateDevPack(DocsCloudDevPackRequestDto)

`POST /api/2.0/settings/docscloud/calculatedevpack`

Calculate the Docs Connect Dev Pack switch cost

Calculates the price of switching the portal from Docs Connect to Docs Connect Dev Pack for `quantity` users. The call changes nothing and charges nothing. To check the subscriptions and the tariff state first, use `GET api/2.0/portal/tariff`. Requires a DocSpace admin. Other callers get 403. The call is read-only, so you can try several values of `quantity` before the switch. An empty result means that the billing service cannot price the switch. In that case, do not start the switch. To switch, use `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity`. It needs no value from this response. To price a new number of users for an existing subscription, use `PUT api/2.0/portal/payment/calculatewallet`. The call returns 400 if the body cannot be read, or the portal has no active Docs Connect subscription. It also returns 400 if the portal already has Docs Connect Dev Pack, or `quantity` is below its minimum. It returns 402 if the tariff is delayed or not paid. It returns 403 if the billing service is not configured. It returns 404 for a portal without a billing customer, or an installation without these wallet products.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DocsCloudDevPackRequestDto** | body | [**DocsCloudDevPackRequestDto**](../../models/docs-cloud-dev-pack-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The cost of switching to Docs Connect Dev Pack for the requested quantity, or an empty result if the billing service could not price it | [**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, the quantity is below the allowed minimum, the portal has no active Docs Connect subscription, or it already has a Docs Connect Dev Pack subscription | - | - |
| **402** | The portal tariff is delayed or not paid, so the switch cannot be priced | - | - |
| **403** | The caller is not a DocSpace administrator, or the billing service is not configured | - | - |
| **404** | The portal is not registered as a billing customer, or the Docs Connect and Docs Connect Dev Pack wallet products are not configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
