# deleteWebPlugin

> deleteWebPlugin(name)

`DELETE /api/2.0/settings/webplugins/{name}`

Delete a web plugin

Deletes a web plugin from the portal together with the files of its package. Take the name from the `name` field of `GET api/2.0/settings/webplugins`. The call ignores the case of the name. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation turns off web plugins or their deletion, the call also returns 403. A plugin with `system` set to true is installation-wide. Only a standalone installation can delete it. Other installations get 403. Its deletion removes the plugin from every portal. The call cannot be undone. It deletes the stored state and settings of the plugin and removes its domains from the portal Content Security Policy. To restore the plugin, upload its package again with `POST api/2.0/settings/webplugins`. Its old settings do not come back. If no plugin has this name or its files are missing in storage, the call returns 404. A repeated call returns 404. To keep the plugin but stop it, switch it off with `PUT api/2.0/settings/webplugins/{name}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **name** | path | **String** | The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched without regard to case. It is neither the localized display name nor the JavaScript object name in `pluginName`; a name that is not installed answers 404. | [required] [example: `example-plugin`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The web plugin and the files of its package are removed from the portal | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Web plugins or plugin deletion are switched off, the caller has no portal-settings right, or the plugin is installation-wide outside a standalone installation | - | - |
| **404** | No web plugin with this manifest name is available in the portal, or the files of its package are missing from storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
