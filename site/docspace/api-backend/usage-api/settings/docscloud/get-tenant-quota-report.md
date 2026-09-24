# getTenantQuotaReport

> DocumentBuilderTaskWrapper getTenantQuotaReport()

`GET /api/2.0/settings/docscloud/tenant/quota/report`

Get the Docs Connect quota report status

Returns the state of the Docs Connect user quota report that the current user started with `POST api/2.0/settings/docscloud/tenant/quota/report`, so that the caller can follow the generation and pick up the resulting file. It reports the caller's own job only: a report started by another administrator is not visible here, and an empty result means this user has no job, because none was started, because it was terminated, or because a finished one has already been cleared (a job state is kept for a day, and starting a new report drops the previous finished one); that is a normal state and not an error. The caller must be a portal administrator allowed to edit the portal settings. The call is read-only and idempotent, and it is meant to be polled while the job runs. In the result, `percentage` goes from 0 to 100 and `isCompleted` becomes true both on success and on failure, so check `error`: it is empty when the report was built and carries the failure message otherwise; `resultFileId`, `resultFileName` and `resultFileUrl` are filled in only once the file exists, and that file also stays in the My documents folder of the caller. Use the `POST` operation on this path to start a report and the `DELETE` one to cancel it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the Docs Connect quota report job of the caller, or an empty result if there is no such job | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
