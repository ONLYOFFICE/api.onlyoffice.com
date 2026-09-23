# addWebPluginFromFile

Referenced types are defined in the [full reference](../api.md).

> WebPluginWrapper addWebPluginFromFile(system)

`POST /api/2.0/settings/webplugins`

Add a web plugin

Installs a web plugin into the current portal from an uploaded package, and switches the plugin on straight away. The package is sent as `multipart/form-data` with exactly one file: a `.zip` archive holding a `config.json` manifest and a `plugin.js` entry point, under the configured size cap of 5 MB by default. Editing the portal settings is required, so a portal owner or administrator, and the installation has to have web plugins and plugin uploading enabled in its configuration. Pass `system=true` to install the plugin for every portal of the installation, which is accepted on standalone installations only. The call is mutating and not idempotent: a package whose manifest name is already installed replaces the stored files and keeps the settings saved for that name, and the domains the manifest declares are added to the portal Content Security Policy. It returns the freshly installed plugin, enabled, with the `url` its script is served from. A portal holds up to 100 plugins by default, the manifest name has to be lower-case letters, digits, `_`, `.` or `-`, and the package is rejected when another installed plugin registers the same JavaScript object under a different name. List what is installed with `GET api/2.0/settings/webplugins`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **system** | query | **Boolean** | Whether the plugin is installed for every portal of the installation rather than only this one. It is accepted on a self-hosted installation alone and refused with 403 elsewhere; an installation-wide plugin also hides a portal plugin that carries the same name. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The installed web plugin, enabled, with the `url` its script is served from | [**WebPluginWrapper**](../api.md#model-webpluginwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The uploaded package is missing, of the wrong type, too large, or its manifest is rejected | - | - |
| **403** | Web plugins or plugin uploads are switched off for the installation, or `system` was requested outside a standalone installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebPluginWrapper**](../api.md#model-webpluginwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
