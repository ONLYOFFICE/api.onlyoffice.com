# updateServiceLimit

> ServiceLimitWrapper updateServiceLimit(UpdateServiceLimitRequestDto)

`PUT /api/2.0/portal/payment/servicelimit`

Update a service limit

Changes the thresholds of a spending limit on the AI services, or turns it off and on with `enabled`. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call changes data, but only in the fields that you send. An omitted threshold keeps its value, so you cannot remove a threshold here. To remove one, delete the limit with `DELETE api/2.0/portal/payment/servicelimit/{id}`. Then create it again with `POST api/2.0/portal/payment/servicelimit`. This is also the way to change the scope or the user. `PUT api/2.0/portal/payment/servicelimit/participants` can change the period of a personal limit. A turned-off limit stops restricting the AI services immediately. A new threshold applies from the next AI operation. If it is below the spending, the AI services stop until the period ends. You can repeat the call with the same body. The call returns 404 if the portal has no AI service limit with this ID. The accounting service can reject a threshold with 400. An example is a quantity for services with different units.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateServiceLimitRequestDto** | body | [**UpdateServiceLimitRequestDto**](../../models/update-service-limit-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The service limit as it was stored | [**ServiceLimitWrapper**](../../models/service-limit-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The ID is zero or negative, a value is outside its range, or the accounting service rejects a threshold, such as a quantity for services with different units | - | - |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer, or the portal has no limit on the AI services with this ID | - | - |
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
