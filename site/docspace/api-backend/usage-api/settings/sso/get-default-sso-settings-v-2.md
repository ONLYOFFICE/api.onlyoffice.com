# getDefaultSsoSettingsV2

> SsoSettingsWrapper getDefaultSsoSettingsV2()

`GET /api/2.0/settings/ssov2/default`

Get the default SSO settings

Returns the built-in SSO configuration that a portal starts from. It has empty identity provider fields, the usual SAML values, and SSO turned off. The values are the same for every portal and do not depend on the saved configuration. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the plan of a cloud portal does not include SSO or SSO settings are hidden, the call returns 402. The call is read-only. To create a configuration, fill in the identity provider entity ID, sign-in URL, and certificates of the result. Then send it to `POST api/2.0/settings/ssov2`. To reset the saved configuration to these values, use `DELETE api/2.0/settings/ssov2`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in SSO configuration a portal starts from | [**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal is a cloud one, and its pricing plan has no single sign-on option or the SSO section is not enabled for it | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
