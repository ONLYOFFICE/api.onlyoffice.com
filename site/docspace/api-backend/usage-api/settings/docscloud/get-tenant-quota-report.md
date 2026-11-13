# getTenantQuotaReport

> DocumentBuilderTaskWrapper getTenantQuotaReport()

`GET /api/2.0/settings/docscloud/tenant/quota/report`

Get the Docs Connect quota report status

Returns the state of the Docs Connect user quota report that the caller started with `POST api/2.0/settings/docscloud/tenant/quota/report`. It shows only the caller's own job, never a report of another admin. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. The job also completes on failure, so then check `error`. It is empty if the report was built, and holds the failure message otherwise. The report file also stays in the My documents folder of the caller. An empty result means that the caller has no job. Either none was started, it was cancelled, or the portal deleted its state. The portal keeps the state of a finished job for a day, and a new report deletes it. This is a normal state, not an error. To cancel a report, use `DELETE api/2.0/settings/docscloud/tenant/quota/report`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the Docs Connect quota report job of the caller, or an empty result if there is no such job | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
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
