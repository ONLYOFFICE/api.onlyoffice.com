# getAutomaticallyCleanUp

> AutoCleanUpDataWrapper getAutomaticallyCleanUp()

`GET /api/2.0/files/settings/autocleanup`

Get the trash bin auto-clearing setting

Returns the trash auto-clearing setting of the calling account. Any signed-in user can call it. If the account has no setting yet, the call stores the default and returns it. The default turns clearing on with an interval of thirty days. After this, the call is read-only. Each entry in the trash shows in its `autoDelete` field when the portal deletes it. To change the setting, use `PUT api/2.0/files/settings/autocleanup`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The trash auto-clearing setting of the caller: the on/off flag and the interval | [**AutoCleanUpDataWrapper**](../../models/auto-clean-up-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AutoCleanUpDataWrapper**](../../models/auto-clean-up-data-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
