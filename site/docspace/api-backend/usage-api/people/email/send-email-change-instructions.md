# sendEmailChangeInstructions

> StringWrapper sendEmailChangeInstructions(UpdateMemberRequestDto)

`POST /api/2.0/people/email`

Send instructions to change email

Changes the email address of an account, or sends a link that confirms the change. If the caller is not a DocSpace admin, the call emails a link to the new address. The address changes only when they follow the link to `PUT api/2.0/people/{userId}/email`. A DocSpace admin changes the address of any account immediately. The call then marks the account not activated, ends its sessions, and emails it activation instructions. If a DocSpace admin changes the address back to one that recently got activation instructions, the call sends nothing. The link of that email still works. Any signed-in user can call it for their own account. Another account requires a DocSpace admin, and other callers get 403. Only the portal owner can change the address of the portal owner. The same applies to another DocSpace admin. If the account does not exist, is disabled, or is a pending invitation, the call returns 404. The call returns 400 if the address is empty or malformed. It also returns 400 if any account has the address, even this one. The call changes data. A repeated call by a DocSpace admin returns 400. For other callers, each call emails a new link, and the earlier link stops working. The portal limits the rate of these calls. It returns a message for the user with the address.

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
