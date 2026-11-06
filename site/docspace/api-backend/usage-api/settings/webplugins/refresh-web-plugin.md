# refreshWebPlugin

> WebPluginWrapper refreshWebPlugin(name)

`PUT /api/2.0/settings/webplugins/{name}/refresh`

Refresh a web plugin

Picks up a web plugin whose files were replaced in storage without an upload, for example a new version of an installation-wide plugin put in place during a deployment. The `name` is the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to have web plugins enabled in its configuration. The server compares the version of the plugin it serves with the `version` of the manifest in storage and, only when they differ or the plugin appeared in or vanished from storage, re-reads the plugin list on every server: for all portals when the plugin is installation-wide, for this portal alone otherwise, and notifies the connected clients of this portal. The call is idempotent: with matching versions nothing changes, so a repeat is safe. The response is the plugin as served after the check. The stored state, the settings and the Content Security Policy of the portal are left as they are. To install a new version use `POST api/2.0/settings/webplugins` instead.

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
