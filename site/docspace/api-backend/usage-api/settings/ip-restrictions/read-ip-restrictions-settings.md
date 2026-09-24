# readIpRestrictionsSettings

> IPRestrictionsSettingsWrapper readIpRestrictionsSettings()

`GET /api/2.0/settings/iprestrictions/settings`

Get IP restriction settings

Reports whether the IP restrictions of the current portal are enforced, as the `enable` flag together with the `lastModified` stamp of the setting. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The call is read-only and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged setting comes back as an empty not-modified response rather than a body. The flag is `false` on a portal nobody has configured. A `true` flag on its own blocks nothing: enforcement also needs at least one stored address, which this answer does not carry - read the addresses with `GET api/2.0/settings/iprestrictions` - and it is skipped entirely on an installation whose configuration hides the IP security section. Even when enforced, the portal owner and the installation's own networks are let through. Change the flag with `PUT api/2.0/settings/iprestrictions/settings`, which replaces the address list in the same call, so resend the addresses in force when all that changes is the flag.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The enforcement flag of the IP restrictions and the date the setting was last modified | [**IPRestrictionsSettingsWrapper**](../../models/ip-restrictions-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**IPRestrictionsSettingsWrapper**](../../models/ip-restrictions-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
