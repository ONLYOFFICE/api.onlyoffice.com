# getIsDefaultGreetingSettings

> BooleanWrapper getIsDefaultGreetingSettings()

`GET /api/2.0/settings/greetingsettings/isdefault`

Check the default greeting settings

Returns whether the current portal shows the built-in greeting caption instead of a title of its own. Any signed-in user can call it, including a guest. The call is read-only. It returns `true` while the portal stores no title, and `false` after a non-empty title is saved. The portal stores no title after an empty `title` is saved. It also stores none after `POST api/2.0/settings/greetingsettings/restore` if the installation configures no portal name. For a missing title, `GET api/2.0/settings/greetingsettings` returns the default caption. So only this call tells the default greeting from a custom title with the same words. The answer covers only the greeting title. To check the white-label logos and logo text, use `GET api/2.0/settings/whitelabel/logos/isdefault` and `GET api/2.0/settings/whitelabel/logotext/isdefault`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Boolean value: true if the portal has no greeting title of its own and the built-in default caption is shown | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
