# sendAdminMail

> StringWrapper sendAdminMail(AdminMessageSettingsRequestDto)

`POST /api/2.0/settings/sendadmmail`

Send a message to the administrator

Sends a message from someone who cannot get into the portal to its administrators - the contact form the sign-in page offers unauthenticated visitors. No token is needed. The form has to be published first with `POST api/2.0/settings/messagesettings` unless the portal's payment has lapsed, otherwise nothing is sent; `enableAdmMess` in `GET api/2.0/settings` reports whether the call is worth making. `email` is the address the administrators answer to and has to be a real address, and `message` is reduced to plain text first, so a body carrying nothing but markup counts as empty - either fault is refused with 400. When the caller is not signed in and this installation has a CAPTCHA configured, `recaptchaResponse` has to carry a solved challenge of the `recaptchaType` that `GET api/2.0/settings` publishes together with the site key, and a missing or stale answer refuses the call. `culture` picks the language of the letter. Delivery is queued and reaches the administrators subscribed to administrator notifications, so a confirmed call means accepted rather than read, and the answer is a localized confirmation. Attempts are rate limited per address and per operation, and further ones are refused with 429.

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
| **500** | The contact form is switched off and the portal's payment has not lapsed | - | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
