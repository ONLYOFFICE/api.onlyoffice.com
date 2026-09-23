# getAutomaticallyCleanUp

Referenced types are defined in the [full reference](../files.md).

> AutoCleanUpDataWrapper getAutomaticallyCleanUp()

`GET /api/2.0/files/settings/autocleanup`

Get the trash bin auto-clearing setting

Returns the trash auto-clearing setting of the calling account: whether it is on, and after which interval an item that sits in the trash is removed for good. The setting belongs to that account alone, so every authenticated role down to a guest reads its own value and an unauthenticated caller is refused. The first call for an account is not read-only: when nothing has been stored yet the portal writes the default - clearing on, thirty days - and returns it, so the answer never comes back empty and a following call reports the same pair. The interval is the age of an entry in the trash, not a schedule; each trashed entry also reports the moment it is due to disappear in its own `autoDelete` field. Use `PUT api/2.0/files/settings/autocleanup` to change the pair, or read it together with the rest of the configuration from `GET api/2.0/files/settings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The trash auto-clearing setting of the caller: the on/off flag and the interval | [**AutoCleanUpDataWrapper**](../files.md#model-autocleanupdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AutoCleanUpDataWrapper**](../files.md#model-autocleanupdatawrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
