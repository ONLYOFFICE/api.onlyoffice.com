# sendUserPassword

> StringWrapper sendUserPassword(EmailMemberRequestDto)

`POST /api/2.0/people/password`

Remind a user password

Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the operation that changes anything. It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA configured, an unauthenticated request has to pass it and answers 403 if it does not. An unauthenticated caller always gets the same success message, whether or not the address belongs to an account, so the answer cannot be used to find out which addresses are registered. An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires DocSpace administrator rights, while the owner's password can be asked for by the owner alone and another administrator's only by the owner. The link that is sent leads to `PUT api/2.0/people/{userId}/password`, which is where the new password is set; no password is ever sent by email despite the wording of the message. Repeated calls are throttled.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](../../models/email-member-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating that the recovery link was sent to the address | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `email`, or the email is not a valid address or is longer than 255 characters | - | - |
| **403** | The CAPTCHA was not passed, an authenticated caller may not ask for that account, or, for an authenticated caller, the account does not exist, is disabled, comes from LDAP or SSO, or has an auto-generated email | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
