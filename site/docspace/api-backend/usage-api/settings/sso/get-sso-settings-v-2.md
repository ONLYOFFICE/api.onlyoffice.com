# getSsoSettingsV2

> SsoSettingsWrapper getSsoSettingsV2()

`GET /api/2.0/settings/ssov2`

Get the SSO settings

Returns the SAML single sign-on (SSO) configuration of the portal. Anyone can call it without signing in. An anonymous caller gets only `hideAuthPage`, and every other field is empty. This flag says if the sign-in page hides the built-in login form. It is false if a cloud plan lacks SSO or SSO settings are hidden. A signed-in caller gets the full configuration and needs the EditPortalSettings permission. The portal owner and DocSpace admins have it. Other signed-in callers get 403. If a cloud plan lacks SSO or SSO settings are hidden, the call returns 402 to a signed-in caller. The call is read-only. An empty login label comes back as `Single Sign-on`. A null `enableSso` means that SSO is off. For a blank configuration, use `GET api/2.0/settings/ssov2/default`. For the values that the SAML fields accept, use `GET api/2.0/settings/ssov2/constants`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The current portal SSO settings; an anonymous caller gets only the hidden-login-form flag | [**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The caller is signed in, the portal is a cloud one, and its pricing plan has no single sign-on option or the SSO section is not enabled for it | - | - |
| **403** | The caller is signed in and has no portal-settings right | - | - |
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
