# getPortalCapabilities

> CapabilitiesWrapper getPortalCapabilities()

`GET /api/2.0/capabilities`

Get portal capabilities

Returns the portal sign-in methods: LDAP, external identity providers, SAML single sign-on, and the built-in identity server. A login app calls it before the user signs in. Anyone can call it without signing in. It also works while the portal is not paid. The call is read-only. Only the `providers` list depends on the caller. Its order follows the country of the caller's IP address. On a server installation, mobile apps do not get Facebook and Apple ID in it. If the portal cannot read the settings of a method, it reports the method as off. The call still succeeds. The answer holds no settings of these methods. To read them, use `GET api/2.0/settings/ssov2` and `GET api/2.0/settings/authservice`. Both need the EditPortalSettings permission, which the portal owner and DocSpace admins have.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The sign-in methods the portal offers: LDAP, the external identity providers, single sign-on and the identity server, each with the state it has for this portal | [**CapabilitiesWrapper**](../models/capabilities-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CapabilitiesWrapper**](../models/capabilities-wrapper.md)

## Authorization

[Basic](capabilities.md#basic), [OAuth2](capabilities.md#oauth2) (scopes: read, write), [ApiKeyBearer](capabilities.md#apikeybearer), [asc_auth_key](capabilities.md#asc_auth_key), [Bearer](capabilities.md#bearer), [OpenId](capabilities.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
