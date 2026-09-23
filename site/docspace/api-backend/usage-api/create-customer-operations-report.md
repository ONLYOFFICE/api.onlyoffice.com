# createCustomerOperationsReport

Referenced types are defined in the [full reference](../api.md).

> DocumentBuilderTaskWrapper createCustomerOperationsReport(CustomerOperationsReportRequestDto)

`POST /api/2.0/portal/payment/customer/operationsreport`

Start the operations report

Queues the history of the wallet movements as an `xlsx` file and returns the task that will build it; the file is not ready when the response arrives. The portal needs a billing customer and the caller has to be a DocSpace administrator. The body takes the same filters as `GET api/2.0/portal/payment/customer/operations` - the service names, the date range, the participant, the operation type and status, the credit and debit directions and the ordering - and an empty body reports everything from the portal creation date to now; a service name this installation does not sell fails with 404. Poll `GET api/2.0/portal/payment/customer/operationsreport` until `isCompleted` is true, then take the file from `resultFileUrl` or open `resultFileId`: the finished file is saved into the caller's own My documents section, where it counts against the portal storage like any other file. One operations report per user is tracked at a time - a call made while the previous one is still running answers with that task - and `DELETE api/2.0/portal/payment/customer/operationsreport` stops it. A build that fails ends the task with `error` filled in rather than failing this call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CustomerOperationsReportRequestDto** | body | [**CustomerOperationsReportRequestDto**](../api.md#model-customeroperationsreportrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued task, to be polled until `isCompleted` is true | [**DocumentBuilderTaskWrapper**](../api.md#model-documentbuildertaskwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or one of the names in `serviceName` is not a wallet service of this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../api.md#model-documentbuildertaskwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
