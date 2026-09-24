# testExternalDatabaseConnection

> ConnectionTestResultWrapper testExternalDatabaseConnection(ExternalDatabaseSettings)

`POST /api/2.0/settings/authservice/externaldb/test`

Test external database connection

Probes connectivity to an external database using the settings supplied in the request, without saving them or affecting the portal's own configuration. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). SQLite is only accepted as a target on a Standalone (self-hosted) installation; requesting it on SaaS is reported as a failed connection rather than an error. This is a read-only call, safe to retry. A failed connection is not an HTTP error: the response always comes back as a normal success with `success=false` and an `error` message describing what went wrong.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ExternalDatabaseSettings** | body | [**ExternalDatabaseSettings**](../../models/external-database-settings.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Connection test result: a success flag and, on failure, an error message | [**ConnectionTestResultWrapper**](../../models/connection-test-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConnectionTestResultWrapper**](../../models/connection-test-result-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
