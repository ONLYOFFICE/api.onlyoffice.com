# getDefaultSsoSettingsV2

> SsoSettingsV2Wrapper getDefaultSsoSettingsV2()

`GET /api/2.0/settings/ssov2/default`

Get the default SSO settings

Returns the built-in SSO configuration a portal starts from: empty identity provider and service provider sections with the stock SAML settings already filled in (HTTP-POST binding, transient name ID format, RSA-SHA1 signing, AES-128 encryption), the default attribute mapping of `givenName`, `sn` and `mail`, the `Single Sign-on` login label, new accounts typed as user, and SSO switched off. Use it as the template for a new configuration: fill in the identity provider entity ID, sign-in URL and certificates, then send the result to `POST api/2.0/settings/ssov2`. The values are the same for every portal and do not depend on what is currently saved, nothing is written, and the call is safe to repeat. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include Single Sign-On. This operation changes nothing by itself: to actually discard the configuration in use, call `DELETE api/2.0/settings/ssov2`, and to read what is configured now, call `GET api/2.0/settings/ssov2`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in SSO configuration a portal starts from | [**SsoSettingsV2Wrapper**](../../models/sso-settings-v-2-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsV2Wrapper**](../../models/sso-settings-v-2-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
