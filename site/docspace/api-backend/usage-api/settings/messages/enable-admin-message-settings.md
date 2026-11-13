# enableAdminMessageSettings

> StringWrapper enableAdminMessageSettings(TurnOnAdminMessageSettingsRequestDto)

`POST /api/2.0/settings/messagesettings`

Enable or disable administrator messages

Turns on or off the contact form of the sign-in page for visitors who cannot get into the portal. The form sends their message to the DocSpace admins. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. Send `turnOn` as `true` to show the form, or `false` to hide it. The change covers the whole portal and applies to the next sign-in page. The call changes data, and you can repeat it with the same body. It returns a localized confirmation message, not the stored flag. To read the flag without signing in, use `GET api/2.0/settings` and its `enableAdmMess` field. That field is also `true` while the portal's payment has lapsed, even if the form is turned off here. The form sends messages with `POST api/2.0/settings/sendadmmail`. This setting does not change the notifications that admins get as portal members. To subscribe to those, use `POST api/2.0/settings/notification`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TurnOnAdminMessageSettingsRequestDto** | body | [**TurnOnAdminMessageSettingsRequestDto**](../../models/turn-on-admin-message-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the administrator message setting has been saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
