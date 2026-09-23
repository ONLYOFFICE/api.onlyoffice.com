# getSpaceUsageStatistics

Referenced types are defined in the [full reference](../api.md).

> UsageSpaceStatItemArrayWrapper getSpaceUsageStatistics(id)

`GET /api/2.0/settings/statistics/spaceusage/{id}`

Get the space usage statistics

Returns the storage space used by one portal module, broken down per data category the module tracks (for example per room type), together with a human-readable size and whether the category is disabled. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). `id` identifies the module by the same GUID the portal's module catalog uses; a module that does not exist, or one that does not report space usage at all, returns an empty list rather than an error. This is a read-only, idempotent call, and the list is not paginated. Sizes are already formatted as display strings (for example `1.5 GB`), not raw byte counts.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The identifier of the object the operation acts on, as the listing operation of that kind of object reports it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of another shape does not match the route at all and is answered as not found. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Per-category space usage statistics for the requested module | [**UsageSpaceStatItemArrayWrapper**](../api.md#model-usagespacestatitemarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UsageSpaceStatItemArrayWrapper**](../api.md#model-usagespacestatitemarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## SettingsStorageApi
