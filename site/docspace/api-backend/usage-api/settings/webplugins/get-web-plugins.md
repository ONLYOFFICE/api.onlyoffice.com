# getWebPlugins

> WebPluginArrayWrapper getWebPlugins(enabled)

`GET /api/2.0/settings/webplugins`

Get web plugins

Lists the web plugins available in the current portal: the plugins installed for the whole installation first, then the portal's own, with a portal plugin dropped when an installation-wide plugin already uses its name. Any authenticated portal member may call it, no settings permission needed, and the installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. Pass `enabled=true` or `enabled=false` to keep only the plugins in that state, and leave the parameter out to get every plugin. Each entry carries the manifest data together with the state the portal stored for that plugin: `enabled`, the `settings` string, `system` for an installation-wide plugin, and the `url` and `cssUrl` a client loads the plugin from. An empty list means nothing is installed for this portal, not that plugins are switched off, which is refused with 403 instead. The list is capped at the configured maximum, 100 plugins by default, and is not paginated. For one plugin by its manifest name use `GET api/2.0/settings/webplugins/{name}`.

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
