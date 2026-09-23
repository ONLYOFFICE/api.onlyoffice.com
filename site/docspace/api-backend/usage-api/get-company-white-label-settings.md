# getCompanyWhiteLabelSettings

Referenced types are defined in the [full reference](../api.md).

> CompanyWhiteLabelSettingsDtoWrapper getCompanyWhiteLabelSettings()

`GET /api/2.0/settings/rebranding/company`

Get the company white label settings

Returns the company details that the About page and the notification letters print as the vendor, in the form the settings interface edits them. Any authenticated user may call it; no administrator permission is required, and a portal whose payment has lapsed is served as well. The call is read-only and idempotent. Alongside the stored fields the answer carries `isLicensor`, which tells whether these details belong to the vendor of the product itself, and `isDefault`, which tells whether they are still the built-in ONLYOFFICE ones. The values are installation-wide, so every portal of a server installation reports the same ones. The response is revalidatable: it carries `Last-Modified`, and sending that value back in `If-Modified-Since` yields an empty body while the details have not changed, which makes polling cheap. For the About page, where the built-in vendor has to be shown next to a reseller, use `GET api/2.0/settings/companywhitelabel` instead. Change the details with `POST api/2.0/settings/rebranding/company`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The company details in effect, with the licensor and default flags | [**CompanyWhiteLabelSettingsDtoWrapper**](../api.md#model-companywhitelabelsettingsdtowrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CompanyWhiteLabelSettingsDtoWrapper**](../api.md#model-companywhitelabelsettingsdtowrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
