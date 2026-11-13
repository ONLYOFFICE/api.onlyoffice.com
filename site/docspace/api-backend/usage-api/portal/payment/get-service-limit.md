# getServiceLimit

> ServiceLimitWrapper getServiceLimit(id)

`GET /api/2.0/portal/payment/servicelimit/{id}`

Get a service limit

Returns one spending limit on the AI services of the portal by its ID. A limit applies to the portal as a whole, to every user, or to one user. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. The answer has the scope, thresholds, period, and state of the limit, but no spending. To read the spending of the portal, use `GET api/2.0/portal/payment/servicelimit/total`. To read the spending of each user, use `GET api/2.0/portal/payment/servicelimit/participants`. The call returns 404 if the portal has no billing customer or no AI service limit with this ID. If `id` is zero or negative, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the service limit, as returned in `id` by the operation that created it or by the reads of limits. | [required] [example: `42`] [min: 1] [max: 2147483647] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The service limit with its scope, thresholds, period and state | [**ServiceLimitWrapper**](../../models/service-limit-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The ID is zero or negative | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
