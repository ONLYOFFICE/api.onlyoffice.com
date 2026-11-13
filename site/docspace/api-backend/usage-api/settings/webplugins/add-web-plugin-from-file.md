# addWebPluginFromFile

> WebPluginWrapper addWebPluginFromFile(system)

`POST /api/2.0/settings/webplugins`

Add a web plugin

Installs a web plugin in the portal from an uploaded package and switches it on. Send the package as `multipart/form-data`. The archive holds a `config.json` manifest and a `plugin.js` script. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation turns off web plugins or their upload, the call also returns 403. Set `system` to true to install the plugin for every portal. If the installation is not standalone, `system` set to true returns 403. The call changes data. You can repeat it with the same package. A package with an installed name replaces its files, keeps its settings, and switches the plugin on again. The call adds the manifest domains to the portal Content Security Policy. If this makes the policy header too large, the call returns 403, but the plugin stays installed. The call returns 400 if the request has no file, several files, or a file that is not a `.zip`. It also returns 400 for an empty or too large file, or a bad archive or manifest. A manifest name has only lowercase letters, digits, `_`, `.`, and `-`. It also returns 400 if another plugin uses the same JavaScript object name, `pluginName`. A new plugin also returns 400 if the portal already has the maximum, 100 plugins by default. To list plugins, use `GET api/2.0/settings/webplugins`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **system** | query | **Boolean** | Whether the plugin is installed for every portal of the installation rather than only this one. It is accepted on a self-hosted installation alone and refused with 403 elsewhere; an installation-wide plugin also hides a portal plugin that carries the same name. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The installed web plugin, enabled, with the `url` its script is served from | [**WebPluginWrapper**](../../models/web-plugin-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The uploaded package is missing, more than one file was sent, the package is of the wrong type, empty or too large, the archive or its manifest is rejected, or the portal already holds the maximum number of plugins | - | - |
| **403** | The caller has no portal-settings right, the request is not a form, web plugins or plugin uploads are switched off for the installation, `system` was requested outside a standalone installation, or the domains the plugin declares would push the Content Security Policy header over its size limit | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebPluginWrapper**](../../models/web-plugin-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
