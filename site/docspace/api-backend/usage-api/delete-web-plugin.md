# deleteWebPlugin

Referenced types are defined in the [full reference](../api.md).

> deleteWebPlugin(name)

`DELETE /api/2.0/settings/webplugins/{name}`

Delete a web plugin

Removes a web plugin from the current portal and deletes the files of its package from storage. The `name` is the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to have web plugins and plugin deletion enabled in its configuration. An installation-wide plugin, the one whose `system` field is true, can be removed on standalone installations only. The call is destructive and cannot be undone: the state and the settings stored for the plugin are dropped along with its files, the domains its manifest declares are taken out of the portal Content Security Policy, and the connected clients are notified. Getting the plugin back means uploading its package again with `POST api/2.0/settings/webplugins`, and the settings it had are gone. Nothing is returned on success, and a repeated call on a name that is no longer installed is rejected as not found instead of answered as success. To keep a plugin installed but inactive, switch it off with `PUT api/2.0/settings/webplugins/{name}` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`; a name that is not installed answers 404. | [required] [example: `example-plugin`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The web plugin and the files of its package are removed from the portal | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Web plugins or plugin deletion are switched off, the caller may not edit the portal settings, or the plugin is installation-wide outside a standalone installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
