# setSettings

> AppWrapper setSettings(id, SetAppSettingsRequest)

`PUT /api/2.0/apps/{id}/settings`

Save app settings

Saves the settings of one portal application for the current portal. Take the identifier from `GET api/2.0/apps`. It is case-sensitive. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. It replaces the whole saved value and does not merge into it. So first read the current value with `GET api/2.0/apps/{id}/settings`, change it, and send it complete. The portal accepts any JSON value and never checks its shape. If `settings` is `null` or missing, the call deletes the saved value. Then the application uses its own defaults. The call returns the application in its new state, with the saved settings. It does not change the enabled state. To turn the application on or off, use `PUT api/2.0/apps/{id}/enabled`. The call returns 400 if the body is not valid JSON. If the installation has no application with this identifier, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The application whose configuration is stored, by the identifier `GET api/2.0/apps` reports. An identifier not declared in the installation configuration answers 404. | [required] [example: `ai-room`] |
| **SetAppSettingsRequest** | body | [**SetAppSettingsRequest**](../models/set-app-settings-request.md) | The configuration to store for this portal, replacing whatever was stored before. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The application in its new state, with the stored settings document | [**AppWrapper**](../models/app-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body is not a valid JSON document, so no settings are stored | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **404** | No application with this identifier is configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AppWrapper**](../models/app-wrapper.md)

## Authorization

[Basic](apps.md#basic), [OAuth2](apps.md#oauth2) (scopes: read, write), [ApiKeyBearer](apps.md#apikeybearer), [asc_auth_key](apps.md#asc_auth_key), [Bearer](apps.md#bearer), [OpenId](apps.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
