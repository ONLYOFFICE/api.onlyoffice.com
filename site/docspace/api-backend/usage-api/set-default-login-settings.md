# setDefaultLoginSettings

Referenced types are defined in the [full reference](../api.md).

> LoginSettingsWrapper setDefaultLoginSettings()

`DELETE /api/2.0/settings/security/loginsettings`

Reset login settings

Puts the brute-force protection of the sign-in form back to what the portal shipped with: 5 tolerated failed attempts, a counting window of 60 seconds and a block of 60 seconds. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The operation takes no parameters and overwrites whatever was configured before without asking, so read the current numbers with `GET api/2.0/settings/security/loginsettings` first if they are worth keeping. Only the setting is reset: sign-ins already blocked stay blocked until the block they were given runs out, and the attempt counters running for other users are left alone. The reset is portal-wide, applies to attempts made from now on, is recorded in the audit trail, and calling it twice changes nothing further. The restored numbers also decide when the sign-in form starts asking for a captcha, which it does one attempt before the block. The answer is the restored settings, with `isDefault` true. Store numbers of your own with `PUT api/2.0/settings/security/loginsettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The brute-force protection settings restored to the shipped defaults | [**LoginSettingsWrapper**](../api.md#model-loginsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LoginSettingsWrapper**](../api.md#model-loginsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
