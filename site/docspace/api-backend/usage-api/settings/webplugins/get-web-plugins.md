# getWebPlugins

> WebPluginArrayWrapper getWebPlugins(enabled)

`GET /api/2.0/settings/webplugins`

Get web plugins

Returns the web plugins of the portal, including the plugins installed for the whole installation. The installation-wide plugins come first, then the portal plugins. The list does not show a portal plugin with the name of an installation-wide plugin. Any signed-in user can call it. If the installation turns off web plugins, the call returns 403. The call is read-only. Each entry includes the `enabled` state and the `settings` that the portal stored for the plugin. With `enabled` set, the call returns only the plugins in that state. An empty list means that the portal has no plugins of this kind. The list has no paging and at most 100 plugins by default. To get one plugin, use `GET api/2.0/settings/webplugins/{name}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **enabled** | query | **Boolean** | Which plugins are kept: `true` the ones switched on, `false` the ones switched off. Omitting it lists every installed plugin whatever its state. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The web plugins available in the portal, the installation-wide ones first | [**WebPluginArrayWrapper**](../../models/web-plugin-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Web plugins are switched off for the installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebPluginArrayWrapper**](../../models/web-plugin-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
