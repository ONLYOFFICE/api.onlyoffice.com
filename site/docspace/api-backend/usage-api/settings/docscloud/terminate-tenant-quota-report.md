# terminateTenantQuotaReport

> terminateTenantQuotaReport()

`DELETE /api/2.0/settings/docscloud/tenant/quota/report`

Terminate the Docs Connect quota report

Cancels the Docs Connect user quota report that the current user started with `POST api/2.0/settings/docscloud/tenant/quota/report` and removes its job, so that a new report can be started right away. There is no precondition: the call is accepted even when this user has no report job at all, and it affects the caller's own job only, never one started by another administrator. The caller must be a portal administrator allowed to edit the portal settings. The cancellation is asynchronous and idempotent: 200 means the request has been queued for the report worker, not that the job has already stopped, so poll `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. Nothing is returned in the body. A report file that has already been saved in the My documents folder of the caller is left there and has to be deleted through the file operations if it is no longer wanted.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The termination request has been queued for the report worker; the response has no body | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
