# configureDeepLink

Referenced types are defined in the [full reference](../api.md).

> TenantDeepLinkSettingsWrapper configureDeepLink(DeepLinkConfigurationRequestsDto)

`POST /api/2.0/settings/deeplink`

Configure the deep link settings

Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser, always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeepLinkConfigurationRequestsDto** | body | [**DeepLinkConfigurationRequestsDto**](../api.md#model-deeplinkconfigurationrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved deep link handling settings | [**TenantDeepLinkSettingsWrapper**](../api.md#model-tenantdeeplinksettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The handling mode is not one of the supported deep link handling values | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDeepLinkSettingsWrapper**](../api.md#model-tenantdeeplinksettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
