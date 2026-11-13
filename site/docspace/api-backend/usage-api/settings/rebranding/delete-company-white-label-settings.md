# deleteCompanyWhiteLabelSettings

> LicensorDetailsWrapper deleteCompanyWhiteLabelSettings()

`DELETE /api/2.0/settings/rebranding/company`

Delete the company white label settings

Deletes the stored company details of the installation and brings back the built-in ONLYOFFICE ones. The About page and letters then show the original vendor. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Only a self-hosted installation without limited space access allows the call. Elsewhere, including a SaaS portal, it returns 403. Unlike the save call, it works without a plan that includes customization. The call cannot be undone. To get the old details back, save them again. You can repeat it. The call returns the built-in details that are now in effect. The reset reaches every portal of the installation. To reset the help links, use `DELETE api/2.0/settings/rebranding/additional`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in company details that are now in effect | [**LicensorDetailsWrapper**](../../models/licensor-details-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the installation does not allow branding to be edited | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LicensorDetailsWrapper**](../../models/licensor-details-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
