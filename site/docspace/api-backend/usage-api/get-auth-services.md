# getAuthServices

Referenced types are defined in the [full reference](../api.md).

> AuthServiceRequestsArrayWrapper getAuthServices()

`GET /api/2.0/settings/authservice`

Get the authorization services

Returns the catalogue of third-party storage and authorization providers DocSpace can integrate with (for example Amazon S3, Dropbox, Google, or Telegram), including whichever keys were last saved for each one that currently has any configured. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a read-only, idempotent call, and the list is not paginated; entries are ordered by the provider's configured display order. Only providers that expose at least one manageable key are included, so a provider with nothing to configure is omitted entirely. Save or change a provider's keys with `POST api/2.0/settings/authservice`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Third-party providers with a manageable key, and their last-saved key values | [**AuthServiceRequestsArrayWrapper**](../api.md#model-authservicerequestsarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthServiceRequestsArrayWrapper**](../api.md#model-authservicerequestsarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
