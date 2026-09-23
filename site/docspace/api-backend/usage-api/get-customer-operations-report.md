# getCustomerOperationsReport

Referenced types are defined in the [full reference](../api.md).

> DocumentBuilderTaskWrapper getCustomerOperationsReport()

`GET /api/2.0/portal/payment/customer/operationsreport`

Get the operations report status

Returns the state of the `xlsx` wallet operations report this user started with `POST api/2.0/portal/payment/customer/operationsreport`: `percentage` while it is being built, `isCompleted` when it is done, `resultFileId`, `resultFileName` and `resultFileUrl` pointing at the file in the caller's My documents, and `error` when the build failed. The portal needs a billing customer and the caller has to be a DocSpace administrator; the call is read-only and is the one to poll. The task is kept per user and per report kind, so it never reports another administrator's report, nor the service usage and monthly usage ones, which have their own status operations. An empty result means this user has no operations report at all - none was started, or the finished one was already picked up or terminated. A completed task is dropped as soon as the next report is started, so read the file link out of the same answer that first reports `isCompleted`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of this user's operations report, or an empty result when there is none | [**DocumentBuilderTaskWrapper**](../api.md#model-documentbuildertaskwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../api.md#model-documentbuildertaskwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
