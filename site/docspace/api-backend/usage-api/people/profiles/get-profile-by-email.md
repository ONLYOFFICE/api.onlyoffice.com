# getProfileByEmail

> EmployeeFullWrapper getProfileByEmail(email, encemail, culture)

`GET /api/2.0/people/email`

Get a profile by user email

Returns the full profile of the account with an email address. Pass the address in `email`, or encrypted in `encemail` as an invitation link has it. If both are missing, the call returns 400. It also returns 400 for a malformed address or one over 255 characters. Any signed-in user can call it. If the caller cannot see the account, the call returns 403. A guest, for example, sees only the accounts related to it. If no account has the address, the call returns 404. The call is read-only. The `culture` parameter only sets the language of the error message. To check an address without the right to see its owner, use `GET api/2.0/people/exists`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **email** | query | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **encemail** | query | **String** | The user encrypted email address. | [optional] [example: `encrypted_email_string`] |
| **culture** | query | **String** | Culture | [optional] [example: `en-US`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile of the account that owns the address | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Both email and encemail are missing, or the address is malformed or longer than 255 characters | - | - |
| **403** | The caller is not allowed to see that account | - | - |
| **404** | No account owns the specified address | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
