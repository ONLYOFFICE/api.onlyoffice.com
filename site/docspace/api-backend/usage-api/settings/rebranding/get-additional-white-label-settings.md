# getAdditionalWhiteLabelSettings

> AdditionalWhiteLabelSettingsWrapper getAdditionalWhiteLabelSettings()

`GET /api/2.0/settings/rebranding/additional`

Get the additional white label settings

Returns which help and community resources the interface may show. An app hides the entries whose flags are `false`. Any signed-in user can call it, even when the portal payment has lapsed. The call is read-only. The flags apply to the whole installation, so all its portals return the same values. They do not depend on the permissions of the caller. The answer does not include the addresses of the entries. To change the flags, use `POST api/2.0/settings/rebranding/additional`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The help and community resources the interface may offer, with the default flag | [**AdditionalWhiteLabelSettingsWrapper**](../../models/additional-white-label-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AdditionalWhiteLabelSettingsWrapper**](../../models/additional-white-label-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
