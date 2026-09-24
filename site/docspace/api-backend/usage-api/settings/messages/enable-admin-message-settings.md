# enableAdminMessageSettings

> StringWrapper enableAdminMessageSettings(TurnOnAdminMessageSettingsRequestDto)

`POST /api/2.0/settings/messagesettings`

Enable or disable administrator messages

Switches on or off the contact form the sign-in page offers a visitor who cannot get into the portal, and which delivers their message to the portal administrators. The caller needs the portal-settings right of a DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused. Send the new state as `turnOn`: `true` publishes the form, `false` hides it. The change covers the whole portal, applies to the next sign-in page without a restart, is recorded in the audit trail, and repeating the call with the same value leaves the portal as it is. What comes back is a localized confirmation message rather than the stored flag - read the flag as `enableAdmMess` from `GET api/2.0/settings`, which needs no token. That flag is also forced on while the portal's payment has lapsed, so it can report `true` on a portal where the form was switched off here. The form itself posts to `POST api/2.0/settings/sendadmmail` and this setting gates nothing else: the notifications administrators receive as portal members are subscribed separately with `POST api/2.0/settings/notification`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TurnOnAdminMessageSettingsRequestDto** | body | [**TurnOnAdminMessageSettingsRequestDto**](../../models/turn-on-admin-message-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the administrator message setting has been saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
