# terminateTenantQuotaReport

> terminateTenantQuotaReport()

`DELETE /api/2.0/settings/docscloud/tenant/quota/report`

Terminate the Docs Connect quota report

Cancels the Docs Connect user quota report of the caller and deletes its job. After this call, the caller can start a new report with `POST api/2.0/settings/docscloud/tenant/quota/report`. The call affects only the caller's own job, never a report of another admin. It succeeds even when the caller has no report job. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call queues the cancellation, and you can repeat it. A 200 response means that the request is queued, not that the job has stopped. Repeat `GET api/2.0/settings/docscloud/tenant/quota/report` until it returns an empty result. The response has no body. A report file that is already saved in the My documents folder of the caller stays there. To delete it, use `DELETE api/2.0/files/file/{fileId}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The termination request has been queued for the report worker; the response has no body | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
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
