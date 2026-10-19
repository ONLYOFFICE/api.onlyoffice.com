# getCustomerOperationsReport

> DocumentBuilderTaskWrapper getCustomerOperationsReport()

`GET /api/2.0/portal/payment/customer/operationsreport`

Get the operations report status

Returns the state of the `xlsx` wallet operations report this user started with `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller's My documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report kind, so it never reports another administrator's report, nor the service usage and monthly usage ones, which have their own status operations. An empty result means this user has no operations report at all - none was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the next report is started, so read the file link out of the same answer that first reports `isCompleted`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of this user's operations report, or an empty result when there is none | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
