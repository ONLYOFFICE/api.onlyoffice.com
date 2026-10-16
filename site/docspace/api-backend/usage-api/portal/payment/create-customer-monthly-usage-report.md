# createCustomerMonthlyUsageReport

> DocumentBuilderTaskWrapper createCustomerMonthlyUsageReport(CustomerMonthlyUsageReportRequestDto)

`POST /api/2.0/portal/payment/customer/usage/monthly/report`

Start the monthly usage report

Queues the wallet spending added up per calendar month as an `xlsx` file and returns the task that will build it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace administrator. The body takes only the period - `startDate` and `endDate`, both inclusive - and an empty body covers everything from the portal creation date to now; the months are cut in the portal time zone, exactly as in `GET api/2.0/portal/payment/customer/usage/monthly`. Poll `GET api/2.0/portal/payment/customer/usage/monthly/report` until `isCompleted` is true, then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller's own My documents section, where it counts against the portal storage like any other file. One monthly usage report per user is tracked at a time - a call made while the previous one is still running answers with that task - and `DELETE api/2.0/portal/payment/customer/usage/monthly/report` stops it. There is no service filter here: for a report per service use `POST api/2.0/portal/payment/customer/usage/report`.

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
