# sendUserPassword

> StringWrapper sendUserPassword(EmailMemberRequestDto)

`POST /api/2.0/people/password`

Remind a user password

Emails a password recovery link for an account. Anyone can call it without signing in. If the portal has a CAPTCHA, a request without sign-in must pass it. Otherwise the call returns 403. Without sign-in, the call returns the same message whether or not the address has an account. A signed-in caller can ask for their own account. A DocSpace admin can also ask for other accounts, except the portal owner. Only the portal owner can ask for another DocSpace admin. Other signed-in callers get 403. A signed-in caller also gets 403 if the account is missing or disabled. The same applies to an LDAP or SSO account, or one with a generated email. If `email` is missing, malformed, or too long, the call returns 400. The call changes data, but not the password. Do not repeat it. Each call sends the email again, and the earlier recovery link stops working. The portal limits the rate of these calls. The link leads to `PUT api/2.0/people/{userId}/password`, which sets the new password. The email never contains a password.

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
