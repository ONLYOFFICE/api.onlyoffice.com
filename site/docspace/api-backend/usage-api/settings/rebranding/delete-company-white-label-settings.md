# deleteCompanyWhiteLabelSettings

> CompanyWhiteLabelSettingsResponseWrapper deleteCompanyWhiteLabelSettings()

`DELETE /api/2.0/settings/rebranding/company`

Delete the company white label settings

Discards the company details stored for the installation and brings back the built-in ONLYOFFICE name, site, email, address and phone, so the About page and the notification letters print the original vendor again. Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal the call is refused. Unlike `POST api/2.0/settings/rebranding/company` it does not need a plan that includes branding, so an installation whose subscription no longer covers it can still be reset. The call is destructive: the previous details are not kept anywhere and have to be entered again to come back. It is idempotent, and instead of a flag it answers the details that are now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every portal. The help and support links are reset separately by `DELETE api/2.0/settings/rebranding/additional`, and the logos and the wordmark of a single portal by the restore operations under `api/2.0/settings/whitelabel`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in company details that are now in effect | [**CompanyWhiteLabelSettingsResponseWrapper**](../../models/company-white-label-settings-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CompanyWhiteLabelSettingsResponseWrapper**](../../models/company-white-label-settings-response-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
