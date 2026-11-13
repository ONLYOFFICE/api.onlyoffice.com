# getWebPlugin

> WebPluginWrapper getWebPlugin(name)

`GET /api/2.0/settings/webplugins/{name}`

Get a web plugin by name

Returns one web plugin of the portal by its manifest name. The call searches the same plugins as `GET api/2.0/settings/webplugins`, including the installation-wide ones. Take the name from the `name` field of that list. The call ignores the case of the name. Any signed-in user can call it. If the installation turns off web plugins, the call returns 403. The call is read-only. The response includes the `enabled` state and the `settings` that the portal stored for the plugin. If no plugin has this name, the call returns 404. To change the state of the plugin, use `PUT api/2.0/settings/webplugins/{name}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`; a name that is not installed answers 404. | [required] [example: `example-plugin`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The requested web plugin with the state the portal stored for it | [**WebPluginWrapper**](../../models/web-plugin-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Web plugins are switched off for the installation | - | - |
| **404** | No web plugin with this manifest name is available in the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebPluginWrapper**](../../models/web-plugin-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
