# getSsoSettingsV2

Referenced types are defined in the [full reference](../api.md).

> SsoSettingsV2Wrapper getSsoSettingsV2()

`GET /api/2.0/settings/ssov2`

Get the SSO settings

Returns the SAML Single Sign-On configuration of the current portal: the identity provider endpoints and certificates, the service provider certificates, the attribute mapping, the login button label and the user type new SSO accounts get. Anonymous callers are accepted, but an unauthenticated one receives only `hideAuthPage`, which tells the sign-in page whether the built-in login form has to be hidden; every other field stays empty, so read the full configuration with an authenticated request. An authenticated caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include Single Sign-On, otherwise the call is refused. The operation only reads and is safe to repeat. When the login label was never set, the response carries the built-in `Single Sign-on` instead of an empty string, and `enableSso` is null until the settings are saved for the first time. Use `GET api/2.0/settings/ssov2/default` for a blank configuration to start from, and `GET api/2.0/settings/ssov2/constants` for the values the SAML fields accept.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The current portal SSO settings; an anonymous caller gets only the hidden-login-form flag | [**SsoSettingsV2Wrapper**](../api.md#model-ssosettingsv2wrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsV2Wrapper**](../api.md#model-ssosettingsv2wrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
