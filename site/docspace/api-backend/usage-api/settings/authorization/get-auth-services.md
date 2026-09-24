# getAuthServices

> AuthServiceRequestsArrayWrapper getAuthServices()

`GET /api/2.0/settings/authservice`

Get the authorization services

Returns the catalogue of third-party storage and authorization providers DocSpace can integrate with (for example Amazon S3, Dropbox, Google, or Telegram), including whichever keys were last saved for each one that currently has any configured. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a read-only, idempotent call, and the list is not paginated; entries are ordered by the provider's configured display order. Only providers that expose at least one manageable key are included, so a provider with nothing to configure is omitted entirely. Save or change a provider's keys with `POST api/2.0/settings/authservice`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Third-party providers with a manageable key, and their last-saved key values | [**AuthServiceRequestsArrayWrapper**](../../models/auth-service-requests-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthServiceRequestsArrayWrapper**](../../models/auth-service-requests-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
