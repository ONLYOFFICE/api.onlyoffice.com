# saveCompanyWhiteLabelSettings

> BooleanWrapper saveCompanyWhiteLabelSettings(CompanyWhiteLabelSettingsRequestDto)

`POST /api/2.0/settings/rebranding/company`

Save the company white label settings

Changes the company details that the About page and letters show as the vendor. The `settings` object replaces the whole set, so send every field. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Only a self-hosted installation without limited space access allows the call. Elsewhere, including a SaaS portal, it returns 403. If the plan has no customization or the installation hides branding, the call returns 402. The details apply to the whole installation and reach all its portals. The call always stores `isLicensor` as `false`. It stores `hideAbout` only if the plan includes branding. The call changes data and returns `true`. You can repeat it with the same body. To undo the call, use `DELETE api/2.0/settings/rebranding/company`. The call returns 400 if `settings`, `email`, or `site` is missing or not valid.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CompanyWhiteLabelSettingsRequestDto** | body | [**CompanyWhiteLabelSettingsRequestDto**](../../models/company-white-label-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the company details have been stored for the installation | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request carries no settings object, or the email or the site is not a valid value | - | - |
| **402** | The portal's pricing plan has no customization option, or the branding section is switched off in the installation | - | - |
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
