# sendAdminMail

> StringWrapper sendAdminMail(AdminMessageSettingsRequestDto)

`POST /api/2.0/settings/sendadmmail`

Send a message to the administrator

Sends a message to the DocSpace admins from someone who cannot get into the portal. This is the contact form of the sign-in page. First, turn the form on with `POST api/2.0/settings/messagesettings`. While the portal's payment has lapsed, the form works without that. The `enableAdmMess` field of `GET api/2.0/settings` shows whether the form works. Anyone can call it without signing in. The call returns 400 if `email` is not a valid address or `message` is empty without its markup. If the caller is not signed in and the installation has a CAPTCHA, `recaptchaResponse` must carry a solved challenge. If it is missing or not accepted, the call returns 403. The call queues the letter to the admins subscribed to admin notifications. So a success means that the portal accepted the message, not that anyone read it. It returns a localized confirmation message. Do not repeat it, since each call sends another letter. The portal limits attempts per network address. More attempts return 429.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AdminMessageSettingsRequestDto** | body | [**AdminMessageSettingsRequestDto**](../../models/admin-message-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the message has been queued for the portal administrators | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `email` or `message`, the email address is malformed or longer than 255 characters, or the message is longer than 255 characters or empty once its markup is stripped | - | - |
| **403** | The caller is not signed in, the installation has a CAPTCHA configured, and `recaptchaResponse` is missing or not accepted | - | - |
| **429** | Too many contact attempts came from the same address within the rate-limit window | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
