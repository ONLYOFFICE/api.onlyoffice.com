# setEnabled

> AppWrapper setEnabled(id, SetAppEnabledRequest)

`PUT /api/2.0/apps/{id}/enabled`

Enable or disable an app

Turns one portal application on or off for the current portal. Take the identifier from `GET api/2.0/apps`. It is case-sensitive. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. It saves the flag for this portal instead of the default from the configuration. You can repeat it with the same body. Turning an application off keeps its saved settings. They apply again when you turn it on. The call returns the application in its new state, with its settings. To change the settings, use `PUT api/2.0/apps/{id}/settings`. The call returns 400 if the body is not valid JSON or has no `enabled` field. If the installation has no application with this identifier, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The application to switch, by the identifier `GET api/2.0/apps` reports. It has to be an application declared in the installation configuration; an unknown identifier answers 404 rather than creating anything. | [required] [example: `ai-room`] |
| **SetAppEnabledRequest** | body | [**SetAppEnabledRequest**](../models/set-app-enabled-request.md) | The new state of the application. Only the enabled flag travels here; the settings document is changed through `PUT api/2.0/apps/{id}/settings`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The application in its new state, with the saved settings document left untouched | [**AppWrapper**](../models/app-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body is not a valid JSON document or has no enabled field, so the state is not changed | - | - |
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
