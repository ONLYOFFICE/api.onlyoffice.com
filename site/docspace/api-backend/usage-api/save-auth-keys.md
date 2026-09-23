# saveAuthKeys

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper saveAuthKeys(AuthServiceRequestsDto)

`POST /api/2.0/settings/authservice`

Save the authorization keys

Saves the authorization keys for one third-party storage or authorization provider, identified by name, or clears them when every submitted key is left empty. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); a provider that does not allow its keys to be changed from the API rejects the call outright. A provider that is only available on a paid plan additionally requires the portal's tariff to include third-party storage, or Standalone licensing, before the call is accepted. Keys that fail the provider's own validation are cleared and the call is rejected rather than left partially applied. This is a mutating, idempotent call: resaving identical keys succeeds and reports no change. It returns whether the keys actually changed, not the keys themselves; connecting Telegram or an external database through this call also triggers the matching real-time connection update.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AuthServiceRequestsDto** | body | [**AuthServiceRequestsDto**](../api.md#model-authservicerequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the provider's keys actually changed | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The submitted keys failed the provider's own validation | - | - |
| **402** | The provider is a paid option not covered by the portal's current pricing plan | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
