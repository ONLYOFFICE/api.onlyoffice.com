# getWebPlugin

Referenced types are defined in the [full reference](../api.md).

> WebPluginWrapper getWebPlugin(name)

`GET /api/2.0/settings/webplugins/{name}`

Get a web plugin by name

Returns one web plugin of the current portal by its manifest name, looked up over the same set as `GET api/2.0/settings/webplugins`: the installation-wide plugins plus the portal's own. The `name` is the manifest name published in the `name` field of that list, matched without regard to case; it is neither the localized display name nor the JavaScript object name in `pluginName`, so it cannot be taken from the title shown in the interface. Any authenticated portal member may call it, no settings permission needed, and the installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. The response carries the manifest data along with the state the portal stored for that plugin: `enabled`, the `settings` string, `system`, and the `url` and `cssUrl` a client loads it from. A name that is not installed is rejected as not found, and 403 means web plugins are switched off for the installation. Change the state of the plugin with `PUT api/2.0/settings/webplugins/{name}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`; a name that is not installed answers 404. | [required] [example: `example-plugin`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The requested web plugin with the state the portal stored for it | [**WebPluginWrapper**](../api.md#model-webpluginwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Web plugins are switched off for the installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebPluginWrapper**](../api.md#model-webpluginwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
