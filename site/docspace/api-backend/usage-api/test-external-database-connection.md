# testExternalDatabaseConnection

Referenced types are defined in the [full reference](../api.md).

> ConnectionTestResultWrapper testExternalDatabaseConnection(ExternalDatabaseSettings)

`POST /api/2.0/settings/authservice/externaldb/test`

Test external database connection

Probes connectivity to an external database using the settings supplied in the request, without saving them or affecting the portal's own configuration. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). SQLite is only accepted as a target on a Standalone (self-hosted) installation; requesting it on SaaS is reported as a failed connection rather than an error. This is a read-only call, safe to retry. A failed connection is not an HTTP error: the response always comes back as a normal success with `success=false` and an `error` message describing what went wrong.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ExternalDatabaseSettings** | body | [**ExternalDatabaseSettings**](../api.md#model-externaldatabasesettings) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Connection test result: a success flag and, on failure, an error message | [**ConnectionTestResultWrapper**](../api.md#model-connectiontestresultwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConnectionTestResultWrapper**](../api.md#model-connectiontestresultwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsBannersVisibilityApi
