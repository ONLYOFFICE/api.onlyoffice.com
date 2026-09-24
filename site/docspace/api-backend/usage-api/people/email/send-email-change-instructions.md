# sendEmailChangeInstructions

> StringWrapper sendEmailChangeInstructions(UpdateMemberRequestDto)

`POST /api/2.0/people/email`

Send instructions to change email

Starts changing the email address of an account, and what it actually does depends on who calls it. A caller acting on their own account only gets a confirmation letter sent to the new address, and the address stays unchanged until that link is followed, which lands on `PUT api/2.0/people/{userid}/email`. A DocSpace administrator acting on somebody else changes the address immediately instead: the account is marked as not activated, every session of it is ended, and activation instructions are sent to the new address - and passing the address the account already has is then rejected with 400. A caller who is not an administrator may only address their own account, nobody but the owner may change the owner's address, and only the owner may change the address of another DocSpace administrator. The target has to be an account that is neither disabled nor a pending invitation, otherwise the operation answers 404, and an address that already belongs to somebody answers 400. The answer is a ready-to-display message naming the address the letter was sent to.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMemberRequestDto** | body | [**UpdateMemberRequestDto**](../../models/update-member-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating which address the letter was sent to | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, the address is missing, malformed, already taken, or equal to the current one | - | - |
| **403** | The caller may not change the address of that account | - | - |
| **404** | The account does not exist, is disabled, or is a pending invitation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
