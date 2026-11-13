# getGlobalServiceLimit

> ServiceLimitWrapper getGlobalServiceLimit()

`GET /api/2.0/portal/payment/servicelimit/global`

Get the global service limit

Returns the spending limit on the AI services for every user. It applies to each user separately, if the user has no personal limit in force. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. The answer has no spending, since each user has their own. To read the spending of each user, use `GET api/2.0/portal/payment/servicelimit/participants`. The `periodEnd` field shows when the current period ends for everyone, and is null for a lifetime limit. If the limit is not set or was deleted, the call returns 200 with a null `response`. To create it, use `POST api/2.0/portal/payment/servicelimit` with the scope `Global`. A turned-off limit is returned with `enabled` false. If the portal has no billing customer, the call returns 404.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The limit for every user, or null when no such limit is set | [**ServiceLimitWrapper**](../../models/service-limit-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
