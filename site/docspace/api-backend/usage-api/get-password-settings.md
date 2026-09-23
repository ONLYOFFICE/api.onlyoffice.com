# getPasswordSettings

Referenced types are defined in the [full reference](../api.md).

> PasswordSettingsWrapper getPasswordSettings()

`GET /api/2.0/settings/security/password`

Get password settings

Returns the password policy of the current portal: the minimum length together with the flags that demand an uppercase letter, a digit and a special symbol, plus the regular expressions a client can check a password against before sending it anywhere. Any signed-in member may read it, and it is also reachable with the parameters of a confirmation link, so an invited user or one resetting a password can validate the new password before having a session; a portal whose payment has lapsed still answers. The operation is read-only and honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged policy comes back as an empty not-modified response rather than a body. A portal nobody has configured requires 8 characters with all three flags off. Whatever the policy says, the portal refuses a password longer than 30 characters, a ceiling this answer does not carry. Change the policy with `PUT api/2.0/settings/security/password`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal password policy: the minimum length, the uppercase, digit and special-symbol requirements, and the regular expressions a client can validate against | [**PasswordSettingsWrapper**](../api.md#model-passwordsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PasswordSettingsWrapper**](../api.md#model-passwordsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
