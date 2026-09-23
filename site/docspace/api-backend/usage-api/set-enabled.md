# setEnabled

Referenced types are defined in the [full reference](../api.md).

> AppWrapper setEnabled(id, SetAppEnabledBody)

`PUT /api/2.0/apps/{id}/enabled`

Enable or disable an app

Turns one portal application on or off for the current portal, and notifies the clients connected to the portal so that they can show or hide it without being reloaded. The identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`. The caller must be a portal administrator allowed to edit the portal settings. The call is mutating and idempotent: it stores the flag for this portal, overriding the default that the configuration gives the application, and repeating it with the same value changes nothing. Disabling an application does not delete its settings document, which stays saved and applies again as soon as the application is enabled. The response is the application in its new state, including that settings document. Only the enabled flag is affected here: to change the settings document use `PUT api/2.0/apps/{id}/settings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The application to switch, by the identifier `GET api/2.0/apps` reports. It has to be an application declared in the installation configuration; an unknown identifier answers 404 rather than creating anything. | [required] [example: `ai-room`] |
| **SetAppEnabledBody** | body | [**SetAppEnabledBody**](../api.md#model-setappenabledbody) | The new state of the application. Only the enabled flag travels here; the settings document is changed through `PUT api/2.0/apps/{id}/settings`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The application in its new state, with the saved settings document left untouched | [**AppWrapper**](../api.md#model-appwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to edit the portal settings | - | - |
| **404** | No application with this identifier is configured on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AppWrapper**](../api.md#model-appwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
