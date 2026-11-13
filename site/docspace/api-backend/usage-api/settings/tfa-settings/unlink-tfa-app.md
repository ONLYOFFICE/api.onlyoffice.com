# unlinkTfaApp

> StringWrapper unlinkTfaApp(TfaRequestDto)

`PUT /api/2.0/settings/tfaappnewapp`

Unlink the TFA application

Unlinks the authenticator app from an account. While the portal requires TFA, the account must link a new app at its next sign-in. To reset your own app, pass your own ID in `id`. Only the portal owner can reset the app of another account. Other callers get 403, including DocSpace admins. The call also returns 403 for a missing or unknown `id`, the empty GUID, or a terminated account. If the authenticator method is unavailable on the portal or the account has no app linked, the call returns 405. The call changes data and cannot be undone. It deletes the app and the backup codes of the account. It also signs out all sessions of the account. For your own account, it then sets a new session cookie. A repeated call returns 405. For your own account, the call returns the activation link to follow next and sets its confirmation cookie. For another account, the call returns an empty string and emails its user about the reset. The portal policy does not change. The account links a new app through `GET api/2.0/settings/tfaapp/confirm`. To turn TFA off for everyone, use `PUT api/2.0/settings/tfaapp`. The call returns 400 if a body field is unreadable, such as an `id` that is not a GUID.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaRequestDto** | body | [**TfaRequestDto**](../../models/tfa-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The activation link when the caller reset their own application, or an empty string when another member's was reset | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `type` is `null`, an empty string or a string that is neither a number nor built from the names `None`, `Sms` and `App`, or a `trustedIps` entry is not a single address, an inclusive range or a CIDR block, although this call reads only `id` | - | - |
| **403** | The caller is not the portal owner, the account cannot be resolved from `id`, or the account is terminated | - | - |
| **405** | The authenticator method is not enabled on this portal, or the account has no application linked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
