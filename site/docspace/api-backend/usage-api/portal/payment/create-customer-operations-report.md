# createCustomerOperationsReport

> DocumentBuilderTaskWrapper createCustomerOperationsReport(CustomerOperationsReportRequestDto)

`POST /api/2.0/portal/payment/customer/operationsreport`

Start the operations report

Starts a job that builds the history of the wallet movements as an `xlsx` file. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call queues the job and returns it. The file is not ready when the response arrives. The body takes the filters of `GET api/2.0/portal/payment/customer/operations`. An empty body covers the time from the creation of the portal until now. If `serviceName` has a name that the installation does not sell, the call returns 404. The file marks the AI services paid with the portal's own provider keys, `ai-tools-byok` and `ai-search-byok`, as BYOK. Repeat `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true. Then take the file from `resultFileUrl` or `resultFileId`. The portal saves the file in the My documents section of the caller. The file counts against the portal storage. Each user has one report of this kind at a time. While it runs, a repeated call returns the running job. After `isCompleted` becomes true, a repeated call starts a new job that builds a new file. To stop a running job, use `DELETE api/2.0/portal/payment/customer/operationsreport`. If the build fails, the job ends with `error` filled in.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CustomerOperationsReportRequestDto** | body | [**CustomerOperationsReportRequestDto**](../../models/customer-operations-report-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued task, to be polled until `isCompleted` is true | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or one of the names in `serviceName` is not a wallet service of this installation | - | - |
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
