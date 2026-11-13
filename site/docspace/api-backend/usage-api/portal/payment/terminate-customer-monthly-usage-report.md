# terminateCustomerMonthlyUsageReport

> terminateCustomerMonthlyUsageReport()

`DELETE /api/2.0/portal/payment/customer/usage/monthly/report`

Terminate the monthly usage report

Stops the `xlsx` monthly usage report that the caller has running and removes its job. Use it for a report with wrong filters or a report that is no longer needed. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call queues a stop request for the worker that builds the file. So `GET api/2.0/portal/payment/customer/usage/monthly/report` can still return the job for a short time. You can repeat the call. It also deletes a finished report job. Without a job, it does nothing. The response has no body. A 200 response means that the stop was requested, not that a report was stopped. The call does not stop the operations or service usage reports. A finished report keeps its file in My documents.

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
