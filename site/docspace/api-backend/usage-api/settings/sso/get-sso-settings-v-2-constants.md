# getSsoSettingsV2Constants

> SsoSettingsV2ConstantsWrapper getSsoSettingsV2Constants()

`GET /api/2.0/settings/ssov2/constants`

Get the SSO settings constants

Returns every literal value the SAML fields of the SSO configuration accept, grouped by the field it belongs to: name ID formats, request bindings, signing and encryption algorithms, and what a service provider or identity provider certificate can be used for. The values are the SAML URNs and algorithm URIs themselves, so they can be written into the configuration exactly as they come back; picking one from the matching group is the point, because `POST api/2.0/settings/ssov2` stores these fields as they are given and a misspelled value therefore surfaces only later, as a failing sign-in. The list is a fixed part of the product: it is the same for every portal, does not depend on the saved settings and does not change between calls within a release, so it can be cached. The operation only reads, is safe to repeat and needs nothing beyond an authenticated caller. Use it together with `GET api/2.0/settings/ssov2/default`, which already has the usual values set.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every value the SAML fields accept: name ID formats, bindings, signing and encryption algorithms, and the service provider and identity provider certificate uses | [**SsoSettingsV2ConstantsWrapper**](../../models/sso-settings-v-2-constants-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SsoSettingsV2ConstantsWrapper**](../../models/sso-settings-v-2-constants-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
