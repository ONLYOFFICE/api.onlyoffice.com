# saveCompanyWhiteLabelSettings

> BooleanWrapper saveCompanyWhiteLabelSettings(CompanyWhiteLabelSettingsWrapper)

`POST /api/2.0/settings/rebranding/company`

Save the company white label settings

Stores the company details - name, site, support email, postal address and phone - that the About page and the notification letters print as the vendor. The whole set is replaced by the `settings` object of the request, so send every field, not only the changed ones; a request without that object, or with an email or a site that is not a valid value, is rejected as an invalid request. Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The values are installation-wide, so the change reaches every portal of that installation. Two fields are not taken from the request: the licensor flag is always stored as `false`, and hiding the About page is silently kept off unless the plan allows it. The call is mutating and idempotent, and answers `true`. Read the result back with `GET api/2.0/settings/rebranding/company` and undo it with `DELETE api/2.0/settings/rebranding/company`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CompanyWhiteLabelSettingsWrapper** | body | [**CompanyWhiteLabelSettingsWrapper**](../../models/company-white-label-settings-wrapper.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the company details have been stored for the installation | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carries no settings object, or the email or the site is not a valid value | - | - |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
