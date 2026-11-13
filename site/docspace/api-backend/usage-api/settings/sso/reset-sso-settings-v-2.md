# resetSsoSettingsV2

> SsoSettingsWrapper resetSsoSettingsV2()

`DELETE /api/2.0/settings/ssov2`

Reset the SSO settings

Deletes the SAML SSO configuration of the portal and saves the built-in default one instead. It returns the saved configuration, which matches `GET api/2.0/settings/ssov2/default`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the plan of a cloud portal does not include SSO or SSO settings are hidden, the call returns 402. The call cannot be undone, and you can repeat it. It turns SSO off and deletes the identity provider addresses, certificates, attribute mapping, and login label. It also unlinks every SSO account from the identity provider. These accounts become ordinary portal accounts and keep their data and contacts. To keep a copy, first save the result of `GET api/2.0/settings/ssov2`. To turn SSO off and keep the configuration, set `enableSso` to false in `POST api/2.0/settings/ssov2`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The default SSO configuration that is now in effect | [**SsoSettingsWrapper**](../../models/sso-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
