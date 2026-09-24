# getProfileByEmail

> EmployeeFullWrapper getProfileByEmail(email, encemail, culture)

`GET /api/2.0/people/email`

Get a profile by user email

Returns the full profile of the account that owns an email address. Pass the address either in plain text as `email` or, when it arrived inside an invitation link, encrypted as `encemail`; one of the two is required and a malformed or overlong address answers 400. The caller has to be allowed to see that account - a guest, for instance, only sees the accounts it is related to - and an address that belongs to nobody answers 404. The call is read-only, and `culture` changes nothing about the profile: it only picks the language of the error message when the lookup fails. To find out whether an address is taken without the right to see its owner, use `GET api/2.0/people/exists`, and to look an account up by its ID or user name use `GET api/2.0/people/{userid}`.

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
