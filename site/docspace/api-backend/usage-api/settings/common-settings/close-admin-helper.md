# closeAdminHelper

> closeAdminHelper()

`PUT /api/2.0/settings/closeadminhelper`

Close the admin helper

Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call scoped to the calling account only; it never affects other administrators. It returns no data on success.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The admin helper tip was dismissed for the caller | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **405** | The caller is not a DocSpace administrator, or the portal is on SaaS, custom mode, or not Standalone | - | - |
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
