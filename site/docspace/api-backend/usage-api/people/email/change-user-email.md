# changeUserEmail

> EmployeeFullWrapper changeUserEmail(userId, ChangeEmailRequest)

`PUT /api/2.0/people/{userId}/email`

Change a user email

Sets a new email address for an account. This is the last step of an email change. Sign the request with the confirmation token from the emailed link. An expired token, or the token of an earlier link, returns 401. The account must be `Active`. Otherwise the call returns 403. Only the portal owner can change the address of the portal owner. If no account has the ID, the call returns 404. Pass the address in `email`, or encrypted in `encEmail` as the link has it. The call returns 400 if the address is empty or malformed. The call changes data. You can repeat it with the same body and token. It saves a new address in lowercase and marks the account `Activated`. An address equal to the current one changes nothing. To send the link, use `POST api/2.0/people/email`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The ID of the account whose address is set, taken from the route. It has to match the account the confirmation token was issued for, and the account has to be active. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ChangeEmailRequest** | body | [**ChangeEmailRequest**](../../models/change-email-request.md) | The new address, in plain text or in the encrypted form the confirmation link carries. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile with its new address | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, or the address is missing or malformed | - | - |
| **403** | The account is not active, or only its owner may change this address | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
