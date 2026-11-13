# setParticipantServiceLimits

> Int32Wrapper setParticipantServiceLimits(SetParticipantServiceLimitsRequestDto)

`PUT /api/2.0/portal/payment/servicelimit/participants`

Set the user service limits

Sets the same personal spending limit on the AI services for each listed portal user. It replaces the personal limit that a user already has and turns it on. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call returns 400 if neither `amountValue` nor `quantityValue` is set. If a user in `userIds` does not exist, the call returns 404. The call changes data. A user listed twice gets one limit. The call returns 400 for an empty list or more than 1000 users. So split a larger group into several calls. Unlike `PUT api/2.0/portal/payment/servicelimit`, this call sets the whole limit. So a threshold that you leave out is removed. The period can change. A lifetime limit that stays lifetime keeps its count. Each personal limit applies instead of the limit for every user. The AI services also check the limit of the portal. You can repeat the call with the same body. The accounting service can reject a threshold with 400. The call returns the number of personal limits that it set. To list them, use `GET api/2.0/portal/payment/servicelimit/participants`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SetParticipantServiceLimitsRequestDto** | body | [**SetParticipantServiceLimitsRequestDto**](../../models/set-participant-service-limits-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of personal limits that were set | [**Int32Wrapper**](../../models/int-32-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `userIds` is empty or lists more than 1000 users, neither `amountValue` nor `quantityValue` is given, a value is outside its range, or the accounting service rejects a threshold, such as a quantity for services with different units | - | - |
| **403** | The caller may not edit the portal settings or is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer, or one of the users does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**Int32Wrapper**](../../models/int-32-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
