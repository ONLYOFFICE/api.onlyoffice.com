# getLicensorData

Referenced types are defined in the [full reference](../api.md).

> CompanyWhiteLabelSettingsArrayWrapper getLicensorData()

`GET /api/2.0/settings/companywhitelabel`

Get the licensor data

Returns the licensor details - company name, site, support email, postal address and phone - that the About page and the notification letters print as the vendor of the installation. Any authenticated user may call it, as these details are shown in the interface to everyone; no administrator permission is required. The call is read-only and idempotent. The list holds the details currently in effect as its first item; when they have been replaced by a reseller and the replacement is not itself marked as the licensor, the built-in ONLYOFFICE details are appended as a second item, so a caller can print both the reseller and the original vendor. A single-item list therefore means that the current details are the only ones to show. The values are installation-wide rather than per-portal, so every portal of a server installation reports the same ones. The same data in the form the settings interface edits is served by `GET api/2.0/settings/rebranding/company`, and it is written by `POST api/2.0/settings/rebranding/company`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The licensor details in effect, followed by the built-in ONLYOFFICE ones when they have been replaced | [**CompanyWhiteLabelSettingsArrayWrapper**](../api.md#model-companywhitelabelsettingsarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CompanyWhiteLabelSettingsArrayWrapper**](../api.md#model-companywhitelabelsettingsarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
