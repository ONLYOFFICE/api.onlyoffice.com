# resetSsoSettingsV2

> SsoSettingsV2Wrapper resetSsoSettingsV2()

`DELETE /api/2.0/settings/ssov2`

Reset the SSO settings

Discards the SAML Single Sign-On configuration of the current portal, stores the built-in default one in its place and returns what was stored, which is the same content as `GET api/2.0/settings/ssov2/default`. This is destructive and cannot be undone through the API: the identity provider addresses, both certificate sets, the attribute mapping and the login label are gone and SSO is left switched off, so keep a copy of `GET api/2.0/settings/ssov2` first if the configuration may be needed again. Every account that signed in through SSO is unlinked and becomes an ordinary account that keeps its data but authenticates with portal credentials from then on, and its external contacts are converted the same way. Repeating the call is harmless, as the second one stores the same defaults again. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include Single Sign-On, otherwise the call is refused. To switch SSO off while keeping the configuration, send it back to `POST api/2.0/settings/ssov2` with SSO disabled instead. The reset is recorded in the audit trail.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The default SSO configuration that is now in effect | [**SsoSettingsV2Wrapper**](../../models/sso-settings-v-2-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
