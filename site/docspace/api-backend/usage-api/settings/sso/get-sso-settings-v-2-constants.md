# getSsoSettingsV2Constants

> SsoSettingsConstantsWrapper getSsoSettingsV2Constants()

`GET /api/2.0/settings/ssov2/constants`

Get the SSO settings constants

Returns every value that the SAML fields of the SSO configuration accept, grouped by field. The groups are name ID formats, bindings, signing and encryption algorithms, and certificate uses. Any signed-in user can call it. The call is read-only. The values are SAML URNs and algorithm URIs, so copy them into the configuration as they are. The save call `POST api/2.0/settings/ssov2` stores these fields without checks. So a misspelled value fails only later, at sign-in. The list is the same for every portal and changes only with a new release, so you can cache it. For a configuration with the usual values, use `GET api/2.0/settings/ssov2/default`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every value the SAML fields accept: name ID formats, bindings, signing and encryption algorithms, and the service provider and identity provider certificate uses | [**SsoSettingsConstantsWrapper**](../../models/sso-settings-constants-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsConstantsWrapper**](../../models/sso-settings-constants-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
