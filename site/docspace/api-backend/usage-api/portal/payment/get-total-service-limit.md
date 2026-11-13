# getTotalServiceLimit

> ServiceLimitWrapper getTotalServiceLimit()

`GET /api/2.0/portal/payment/servicelimit/total`

Get the portal service limit

Returns the spending limit on the AI services for the portal as a whole. The spending of all users counts towards this limit. The answer also has the spending in the current period and what is left. What is left already subtracts the expected cost of AI operations that still run. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. The AI services check this limit together with the limits of the users. So a user can reach it before their own limit. If the limit is not set or was deleted, the call returns 200 with a null `response`. To create it, use `POST api/2.0/portal/payment/servicelimit` with the scope `Total`. A turned-off limit is returned with `enabled` false. If the portal has no billing customer, the call returns 404.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The limit of the portal as a whole with its spending, or null when no such limit is set | [**ServiceLimitWrapper**](../../models/service-limit-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer | - | - |
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
