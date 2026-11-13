# getCompanyWhiteLabelSettings

> CompanyWhiteLabelSettingsWrapper getCompanyWhiteLabelSettings()

`GET /api/2.0/settings/rebranding/company`

Get the company white label settings

Returns the company details that the About page and letters show as the vendor. This is the form the settings page edits. Any signed-in user can call it, even when the portal payment has lapsed. The call is read-only. The details apply to the whole installation, so all its portals return the same values. The answer has a `Last-Modified` header. Send that value in `If-Modified-Since` to check for changes. If nothing changed, the call returns 304 with an empty body. To show both a reseller and the original vendor, use `GET api/2.0/settings/companywhitelabel`. To change the details, use `POST api/2.0/settings/rebranding/company`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The company details in effect, with the licensor and default flags | [**CompanyWhiteLabelSettingsWrapper**](../../models/company-white-label-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The company details have not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CompanyWhiteLabelSettingsWrapper**](../../models/company-white-label-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
