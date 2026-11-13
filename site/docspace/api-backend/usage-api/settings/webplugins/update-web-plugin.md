# updateWebPlugin

> updateWebPlugin(name, WebPluginRequest)

`PUT /api/2.0/settings/webplugins/{name}`

Update a web plugin

Switches an installed web plugin of the portal on or off and saves its settings string. To install a plugin, use `POST api/2.0/settings/webplugins`. Take the name from the `name` field of `GET api/2.0/settings/webplugins`. The call ignores the case of the name. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation turns off web plugins, the call also returns 403. The call changes data. The body replaces the stored state and settings, so you can repeat the call with the same body. Switching the plugin on adds the domains of its manifest to the portal Content Security Policy. Switching it off removes them. If the domains make the policy header too large, the call returns 403, but saves the new state. The call returns 400 if the body has no `settings` or `settings` is too long. If no plugin has this name, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to change, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`, so it cannot be read off the interface; a name that is not installed answers 404. | [required] [example: `example-plugin`] |
| **WebPluginRequest** | body | [**WebPluginRequest**](../../models/web-plugin-request.md) | The whole state the plugin is to have afterwards. It replaces what was stored instead of merging into it, so both the enabled flag and the settings have to be sent every time. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state and the settings of the web plugin are saved for the portal | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `settings`, or `settings` is longer than 255 characters | - | - |
| **403** | The caller has no portal-settings right, web plugins are switched off for the installation, or switching the plugin on would push the Content Security Policy header over its size limit | - | - |
| **404** | No web plugin with this manifest name is available in the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
