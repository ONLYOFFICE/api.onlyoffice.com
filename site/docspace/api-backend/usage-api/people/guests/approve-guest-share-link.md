# approveGuestShareLink

> EmployeeFullWrapper approveGuestShareLink(EmailMemberRequestDto)

`POST /api/2.0/people/guests/share/approve`

Approve a guest sharing link

Adds a shared guest to the guest list of the caller. Sign the request with the confirmation token from the link of `GET api/2.0/people/guests/{userId}/share`. An expired or used token returns 401. The call takes all data from the token and ignores the body. Requires a room admin or a DocSpace admin. Other callers get 403. If the account of the token no longer exists, the call returns 404. If it is no longer a guest, the call returns 400. The call changes data. You can repeat it, and the call returns the guest again. It returns the full profile of the guest.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](../../models/email-member-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile of the guest now linked to the caller | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account named by the token is not a guest | - | - |
| **403** | The caller is a member or a guest | - | - |
| **404** | The account named by the token no longer exists | - | - |
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
