# getPortalCapabilities

Referenced types are defined in the [full reference](../api.md).

> CapabilitiesWrapper getPortalCapabilities()

`GET /api/2.0/capabilities`

Get portal capabilities

Returns the sign-in methods this portal offers, which a login client needs before anyone has signed in: LDAP authentication and its domain, the external identity providers to show, the SAML single sign-on URL and its label, and whether the built-in identity server is available. No token is needed and nothing has to be called first - the operation is open to unauthenticated callers, answers even while the portal's payment has lapsed, and is read-only and idempotent. `providers` holds provider keys such as `google` or `facebook`, ordered for the country detected from the caller's IP address and reduced to the ones this installation has configured; pass one of them as `provider` to `POST api/2.0/authentication`. An empty `providers` means external sign-in is off and an empty `ssoUrl` means single sign-on is off; a capability whose settings cannot be read is reported as disabled rather than failing the call, so a false flag means the method is not offered, not that it is unknown. The answer describes the portal and never a user, and carries none of the configuration behind these methods: an administrator reads that from `GET api/2.0/settings/ssov2` and `GET api/2.0/settings/authservice`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The sign-in methods the portal offers: LDAP, the external identity providers, single sign-on and the identity server, each with the state it has for this portal | [**CapabilitiesWrapper**](../api.md#model-capabilitieswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CapabilitiesWrapper**](../api.md#model-capabilitieswrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## MigrationApi
