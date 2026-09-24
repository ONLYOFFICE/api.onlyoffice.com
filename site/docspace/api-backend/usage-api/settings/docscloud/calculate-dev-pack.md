# calculateDevPack

> PaymentCalculationWrapper calculateDevPack(DocsCloudDevPackRequestDto)

`POST /api/2.0/settings/docscloud/calculatedevpack`

Calculate the Docs Connect Dev Pack switch cost

Prices the upgrade of the paid Docs Connect subscription of the current portal to Docs Connect Dev Pack for the requested number of users, without changing the subscription or charging anything. It applies the same preconditions as the switch itself: the portal must hold an active Docs Connect subscription, must not already hold a Docs Connect Dev Pack one, and its tariff must not be delayed or unpaid; the quotas and the state of the current tariff are listed by `GET api/2.0/portal/tariff`. The caller must be a DocSpace administrator of a portal registered with the billing service. The call is read-only and idempotent, so it can be repeated for different quantities before any switch is made. It returns the amount that switching would cost, the three-letter ISO 4217 currency of that amount, the quantity the amount was calculated for, and the identifier of the billing operation; an empty result means the billing service could not price the switch, which should then not be attempted. The switch itself is performed by `POST api/2.0/settings/docscloud/switchtodevpack` with the same `quantity` and takes no identifier from this response; to price a change in the number of users of a subscription the portal already has, use `PUT api/2.0/portal/payment/calculatewallet` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DocsCloudDevPackRequestDto** | body | [**DocsCloudDevPackRequestDto**](../../models/docs-cloud-dev-pack-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The cost of switching to Docs Connect Dev Pack for the requested quantity, or an empty result if the billing service could not price it | [**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The quantity is below the allowed minimum, the portal has no active Docs Connect subscription, or it already has a Docs Connect Dev Pack subscription | - | - |
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
