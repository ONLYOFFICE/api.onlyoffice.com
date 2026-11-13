# readIpRestrictionsSettings

> IpRestrictionsSettingsWrapper readIpRestrictionsSettings()

`GET /api/2.0/settings/iprestrictions/settings`

Get IP restriction settings

Returns whether the IP restrictions of the current portal are enforced, and when the setting last changed. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only and honours `If-Modified-Since`. If it holds the `Last-Modified` of an earlier answer, an unchanged setting returns 304 with an empty body. On a portal nobody has configured, `enable` is `false`. A `true` flag blocks nothing while the address list is empty. To read the addresses, use `GET api/2.0/settings/iprestrictions`. The installation configuration can also turn enforcement off for all its portals. The portal owner and the installation's own networks are never blocked. To change the flag, use `PUT api/2.0/settings/iprestrictions/settings`. It also replaces the address list, so resend the addresses in force.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The enforcement flag of the IP restrictions and the date the setting was last modified | [**IpRestrictionsSettingsWrapper**](../../models/ip-restrictions-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The enforcement flag has not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IpRestrictionsSettingsWrapper**](../../models/ip-restrictions-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
