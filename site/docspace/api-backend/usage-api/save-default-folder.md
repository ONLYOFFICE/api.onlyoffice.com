# saveDefaultFolder

Referenced types are defined in the [full reference](../api.md).

> StudioDefaultPageSettingsWrapper saveDefaultFolder(DefaultProductRequestDto)

`PUT /api/2.0/settings/defaultfolder`

Set the default folder

Sets which folder the current user's account opens into by default, such as My Documents, the rooms list, or favorites. Requires an authenticated session; every role may set its own default, and the change never affects any other user. Only folder types the client actually offers as a landing page are accepted; picking My Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating, idempotent call. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultProductRequestDto** | body | [**DefaultProductRequestDto**](../api.md#model-defaultproductrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved default folder setting for the current user | [**StudioDefaultPageSettingsWrapper**](../api.md#model-studiodefaultpagesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StudioDefaultPageSettingsWrapper**](../api.md#model-studiodefaultpagesettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
