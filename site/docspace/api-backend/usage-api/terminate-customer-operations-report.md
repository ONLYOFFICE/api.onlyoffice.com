# terminateCustomerOperationsReport

Referenced types are defined in the [full reference](../api.md).

> terminateCustomerOperationsReport()

`DELETE /api/2.0/portal/payment/customer/operationsreport`

Terminate the operations report

Stops the `xlsx` wallet operations report this user has running and drops its task, for a report that was started with the wrong filters or is no longer wanted. The portal needs a billing customer and the caller has to be a DocSpace administrator. The stop is asked of the worker that builds the file rather than done here, so `GET api/2.0/portal/payment/customer/operationsreport` can still answer for a moment afterwards. The call is safe to repeat and does nothing at all when this user has no report running: there is no response body, and status 200 says the stop was requested, not that a report was really stopped. A report that had already finished keeps its file in My documents - nothing is deleted from there.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stop has been requested; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
