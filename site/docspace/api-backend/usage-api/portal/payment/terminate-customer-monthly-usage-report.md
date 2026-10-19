# terminateCustomerMonthlyUsageReport

> terminateCustomerMonthlyUsageReport()

`DELETE /api/2.0/portal/payment/customer/usage/monthly/report`

Terminate the monthly usage report

Stops the `xlsx` monthly usage report this user has running and drops its task, for a report that was started for the wrong period or is no longer wanted. The portal needs a billing customer and the caller has to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so `GET api/2.0/portal/payment/customer/usage/monthly/report` can still answer for a moment afterwards. The call is safe to repeat and does nothing at all when this user has no such report running: there is no response body, and status 200 says the stop was requested, not that a report was really stopped. It leaves the operations and service usage reports alone, and a report that had already finished keeps its file in My documents.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stop has been requested; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
