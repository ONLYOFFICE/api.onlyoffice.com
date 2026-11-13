# getCustomerMonthlyUsageReport

> DocumentBuilderTaskWrapper getCustomerMonthlyUsageReport()

`GET /api/2.0/portal/payment/customer/usage/monthly/report`

Get the monthly usage report status

Returns the state of the `xlsx` monthly usage report that the caller started with `POST api/2.0/portal/payment/customer/usage/monthly/report`. This is the call to poll. Repeat it until `isCompleted` is true. While the build runs, `percentage` shows its progress. When the file is ready, `resultFileId`, `resultFileName`, and `resultFileUrl` point to it. The file is in the My documents section of the caller. If the build fails, `error` is filled in. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. It returns only the monthly usage report of the caller, not the operations or service usage reports. An empty result means that the caller has no monthly usage report. Either none was started, or the job was stopped or removed. Starting a new report removes the completed job. So read the file link from the first answer with `isCompleted` true.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of this user's monthly usage report, or an empty result when there is none | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
