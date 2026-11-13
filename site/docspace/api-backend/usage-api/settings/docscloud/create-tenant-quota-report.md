# createTenantQuotaReport

> DocumentBuilderTaskWrapper createTenantQuotaReport()

`POST /api/2.0/settings/docscloud/tenant/quota/report`

Start the Docs Connect quota report

Starts a background job that saves the Docs Connect user quota of the current portal as an xlsx file. The portal saves the file in the My documents folder of the caller. The report lists the editors and viewers with the type and expiration date of each. It also sums up the internal, external, and remaining users against the license limits. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call does not check for a Docs Connect tenant. Without one, the job fails and puts the reason in `error`. The call queues work. Repeat `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true. Then take the file from `resultFileId` or `resultFileUrl`. To cancel a running job, use `DELETE api/2.0/settings/docscloud/tenant/quota/report`. Each caller has one report job at a time. While it runs, a repeated call returns that job and starts no second one. After the job ends, a repeated call builds a new report and saves another file. A new job comes back with `percentage` 0, not the report. The report shows the quota at the moment of the build, and its file name has the build date. To read the same data as JSON, use `GET api/2.0/settings/docscloud/tenant/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The initial state of the queued report generation job, with zero progress and an uncompleted status | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
