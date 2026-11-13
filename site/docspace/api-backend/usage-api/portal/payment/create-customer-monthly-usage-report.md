# createCustomerMonthlyUsageReport

> DocumentBuilderTaskWrapper createCustomerMonthlyUsageReport(CustomerMonthlyUsageReportRequestDto)

`POST /api/2.0/portal/payment/customer/usage/monthly/report`

Start the monthly usage report

Starts a job that builds the wallet spending per calendar month as an `xlsx` file. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call queues the job and returns it. The file is not ready when the response arrives. The body takes only the period, `startDate` and `endDate`. An empty body covers the time from the creation of the portal until now. The call cuts the months in the portal time zone, as `GET api/2.0/portal/payment/customer/usage/monthly` does. Repeat `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true. Then take the file from `resultFileUrl` or `resultFileId`. The portal saves the file in the My documents section of the caller. The file counts against the portal storage. Each user has one report of this kind at a time. While it runs, a repeated call returns the running job. After `isCompleted` becomes true, a repeated call starts a new job that builds a new file. To stop a running job, use `DELETE api/2.0/portal/payment/customer/usage/monthly/report`. If the build fails, the job ends with `error` filled in. The body has no service filter. For a report per service, use `POST api/2.0/portal/payment/customer/usage/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CustomerMonthlyUsageReportRequestDto** | body | [**CustomerMonthlyUsageReportRequestDto**](../../models/customer-monthly-usage-report-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued task, to be polled until `isCompleted` is true | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
