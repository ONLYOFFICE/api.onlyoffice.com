# refreshWebPlugin

> WebPluginWrapper refreshWebPlugin(name)

`PUT /api/2.0/settings/webplugins/{name}/refresh`

Refresh a web plugin

Reloads a web plugin whose files someone replaced in storage without an upload. For example, a deployment can put a new version of an installation-wide plugin in storage. Take the name from the `name` field of `GET api/2.0/settings/webplugins`. The call ignores the case of the name. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation turns off web plugins, the call also returns 403. The call compares the version it serves with the `version` of the manifest in storage. The server reloads the plugin list if they differ or the plugin appeared or disappeared. For an installation-wide plugin, it reloads the list of every portal. The call changes data only then, so you can repeat it. It does not change the stored state, the settings, or the Content Security Policy. The call returns the plugin as the portal serves it after the check. If no plugin has this name after the check, the call returns 404. To install a new version, use `POST api/2.0/settings/webplugins`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`; a name that is not installed answers 404. | [required] [example: `example-plugin`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The web plugin as served after the version check | [**WebPluginWrapper**](../../models/web-plugin-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right, or web plugins are switched off for the installation | - | - |
| **404** | No web plugin with this manifest name is available in the portal after the check | - | - |
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
