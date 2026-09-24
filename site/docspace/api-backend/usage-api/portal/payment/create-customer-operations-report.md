# createCustomerOperationsReport

> DocumentBuilderTaskWrapper createCustomerOperationsReport(CustomerOperationsReportRequestDto)

`POST /api/2.0/portal/payment/customer/operationsreport`

Start the operations report

Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` - the service names, the date range, the participant, the operation type and status, the credit and debit directions and the ordering - and an empty body reports everything from the portal creation date to now; a service name this installation does not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller's own My documents section, where it counts against the portal storage like any other file. One operations report per user is tracked at a time - a call made while the previous one is still running answers with that task - and `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with `error` filled in rather than failing this call.

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
