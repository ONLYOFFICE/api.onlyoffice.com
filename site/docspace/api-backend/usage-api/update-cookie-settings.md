# updateCookieSettings

Referenced types are defined in the [full reference](../api.md).

> StringWrapper updateCookieSettings(CookieSettingsRequestsDto)

`PUT /api/2.0/settings/cookiesettings`

Update the cookie lifetime settings

Stores how long an authentication session of this portal stays valid: `lifeTime` in minutes together with the `enabled` flag that switches the limit on. The caller needs the portal-settings right of a DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused - and on an installation whose configuration hides the cookie section nothing is stored and the call is answered with 402. A `lifeTime` above 9999 minutes is not rejected but clamped to 9999, while 0 or less clears the number instead, which with `enabled` true leaves sessions that never expire on their own. Any positive `lifeTime` raises the session version of the portal: every session issued before the call stops being accepted, and with `enabled` true the connections behind them are dropped as well. The caller is signed in again inside the same call and gets a fresh session cookie in the response, so a client that keeps sending the token it held before this call is the one locked out. The change is recorded in the audit trail. What comes back is a localized confirmation message; read the stored pair with `GET api/2.0/settings/cookiesettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CookieSettingsRequestsDto** | body | [**CookieSettingsRequestsDto**](../api.md#model-cookiesettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the session lifetime has been saved | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The installation hides the cookie lifetime section, or the portal's payment has lapsed | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsDocsCloudApi
