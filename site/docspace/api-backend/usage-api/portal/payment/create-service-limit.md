# createServiceLimit

> ServiceLimitWrapper createServiceLimit(CreateServiceLimitRequestDto)

`POST /api/2.0/portal/payment/servicelimit`

Create a service limit

Creates a spending limit on the AI services, which are AI tools and AI search together. The `scope` field sets whom the limit applies to. The scope `Total` is for the portal as a whole, and `Global` is for every user separately. The scope `Custom` is for the user in `userId`. Only `Custom` takes `userId`, and other cases return 400. A personal limit applies to its user instead of the limit for every user. The AI services also check the limit of the portal. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call changes data. The call returns 400 if neither `amountValue` nor `quantityValue` is set. With both, the AI services stop when either is reached. The accounting service can also reject a threshold with 400. An example is a quantity for services with different units. If the user does not exist, the call returns 404. A second limit of the same scope or for the same user returns 409. So a repeated call returns 409. To change a limit, use `PUT api/2.0/portal/payment/servicelimit`. The update call cannot change the scope, the user, or the period later.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateServiceLimitRequestDto** | body | [**CreateServiceLimitRequestDto**](../../models/create-service-limit-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The service limit as it was created | [**ServiceLimitWrapper**](../../models/service-limit-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `scope` is missing, neither `amountValue` nor `quantityValue` is given, `userId` is missing for the scope `Custom` or given for another scope, a value is outside its range, or the accounting service rejects a threshold, such as a quantity for services with different units | - | - |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer, or the user does not exist | - | - |
| **409** | A limit of this scope, or for this user, exists already | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ServiceLimitWrapper**](../../models/service-limit-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
