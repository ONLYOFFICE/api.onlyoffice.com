# getStorageProgress

> DoubleWrapper getStorageProgress()

`GET /api/2.0/settings/storage/progress`

Get the storage migration progress

Returns the progress of moving the portal data to another storage, as a percentage from 0 to 100. To start the move, use `PUT api/2.0/settings/storage` or `DELETE api/2.0/settings/storage`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call works even if the portal is not paid. The call is read-only. This is the call to poll. Repeat it until the value reaches 100. Then the portal works from the new storage. If the server has no migration for the portal, the call fails with a server error. On an installation that is not self-hosted, the call returns -1. The value does not show migration errors. If it stops growing, check the portal state with `GET api/2.0/portal`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Migration progress as a percentage, or -1 where storage migration is not offered | [**DoubleWrapper**](../../models/double-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DoubleWrapper**](../../models/double-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
