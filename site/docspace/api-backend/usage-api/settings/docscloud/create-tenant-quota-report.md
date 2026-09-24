# createTenantQuotaReport

> DocumentBuilderTaskWrapper createTenantQuotaReport()

`POST /api/2.0/settings/docscloud/tenant/quota/report`

Start the Docs Connect quota report

Queues a background job that renders the current Docs Connect user quota of the portal into an xlsx file and saves that file in the My documents folder of the calling user; the report lists the editor and the viewer users with the type and the expiration date of each, and summarizes the internal, external and remaining users against the license limits. The file is not ready when the response arrives: poll `GET api/2.0/settings/docscloud/tenant/quota/report` until `isCompleted` is true, then take the file from `resultFileId` or `resultFileUrl`, and use `DELETE api/2.0/settings/docscloud/tenant/quota/report` to cancel a job that is still running. The caller must be a portal administrator allowed to edit the portal settings. The portal should have an activated Docs Connect tenant: this call does not check that, and without a tenant the job itself fails and reports the reason in the `error` of the status response. One report per caller runs at a time: while a report of this user is still being built, the call describes that running job and no second generation is started, so a repeated call is safe. What comes back is the initial state of the job, with `percentage` 0 and a created `status`, not the report; the report is a point-in-time snapshot and carries the generation date in its file name. To read the same data as JSON, without building a file, use `GET api/2.0/settings/docscloud/tenant/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The initial state of the queued report generation job, with zero progress and an uncompleted status | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
