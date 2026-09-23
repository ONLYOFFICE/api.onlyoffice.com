# changeUserPassword

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullWrapper changeUserPassword(userid, ChangePasswordRequest)

`PUT /api/2.0/people/{userid}/password`

Change a user password

Sets a new password on an account, which is the step that completes a password change or a password recovery. The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an expired or already used token is answered with 401. The account has to exist and be `Active`, so the password of a disabled account or of an open invitation cannot be set, and only the portal owner may set the owner's own password. Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the portal password policy; sending neither, or a password the policy rejects, answers 400. The change ends every other session of that account and emails it a notice that the password was changed. The answer is the profile, which does not carry the password in any form. To have the recovery link sent in the first place, use `POST api/2.0/people/password`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the account whose password is set, taken from the route. It has to match the account the confirmation token was issued for, and the account has to be active. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ChangePasswordRequest** | body | [**ChangePasswordRequest**](../people.md#model-changepasswordrequest) | The new password, sent either in plain text or already hashed. Exactly one of the two fields is needed. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile whose password was changed | [**EmployeeFullWrapper**](../people.md#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, no password was sent, or the password does not meet the portal policy | - | - |
| **403** | The account is not active, or only its owner may change this password | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../people.md#model-employeefullwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
