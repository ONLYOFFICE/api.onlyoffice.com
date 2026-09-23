# updateLoginSettings

Referenced types are defined in the [full reference](../api.md).

> LoginSettingsWrapper updateLoginSettings(LoginSettingsRequestDto)

`PUT /api/2.0/settings/security/loginsettings`

Update login settings

Replaces the brute-force protection of the sign-in form for the whole portal: `attemptCount` failed attempts inside a rolling window of `checkPeriod` seconds, after which the offender is blocked for `blockTime` seconds. All three values are replaced together and each has to be between 1 and 9999, so read the current ones with `GET api/2.0/settings/security/loginsettings` before changing only one of them; a value outside the range is rejected as an invalid request. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. Failed attempts are counted per user name and client address, so one member's lockout leaves the rest of the portal signing in normally, and a blocked pair is refused even once the password is finally correct. The new numbers apply to attempts made from now on and leave counters and blocks already running as they are. The change is recorded in the audit trail, and the answer is the stored settings with the flag that says whether they still match the shipped defaults.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **LoginSettingsRequestDto** | body | [**LoginSettingsRequestDto**](../api.md#model-loginsettingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The brute-force protection settings as they were stored, with the flag that says whether they match the shipped defaults | [**LoginSettingsWrapper**](../api.md#model-loginsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LoginSettingsWrapper**](../api.md#model-loginsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsMessagesApi
