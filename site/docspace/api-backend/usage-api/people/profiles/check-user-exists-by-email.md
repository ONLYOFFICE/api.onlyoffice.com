# checkUserExistsByEmail

> UserExistsResponseWrapper checkUserExistsByEmail(email, encemail, culture)

`GET /api/2.0/people/exists`

Check whether an email is taken

Returns whether an email address belongs to an account, and the status of that account. Pass the address in `email`, or encrypted in `encemail` as an invitation link has it. If both are missing, the call returns 400. It also returns 400 for a malformed address or one over 255 characters. Any signed-in user can call it, including a guest. The token of an invitation link or a guest sharing link also works. The call is read-only and works on an unpaid portal. If no account has the address, the response has no `status`. The call does not say who owns the address. For the profile, use `GET api/2.0/people/email`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **email** | query | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **encemail** | query | **String** | The user encrypted email address. | [optional] [example: `encrypted_email_string`] |
| **culture** | query | **String** | Culture | [optional] [example: `en-US`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the address is taken, and the status of the profile that holds it | [**UserExistsResponseWrapper**](../../models/user-exists-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Both email and encemail are missing, or the address is malformed or longer than 255 characters | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UserExistsResponseWrapper**](../../models/user-exists-response-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
