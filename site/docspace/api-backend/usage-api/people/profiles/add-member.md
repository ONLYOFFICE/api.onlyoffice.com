# addMember

> EmployeeFullWrapper addMember(MemberRequestDto)

`POST /api/2.0/people`

Add a user

Creates an account in the portal. An admin can add a person directly, or a person can accept an invitation link. To accept a link, set `fromInviteLink` to true and pass the `key` of the link. The link then sets the account type, and the call ignores `type`. If the link is invalid or expired, the call returns 403. Without a link, a room admin can create a user, and a DocSpace admin can also create a room admin. Only the portal owner can create a DocSpace admin. Other callers get 403. Without a link, the `Guest` type also returns 403. The call also returns 403 if the portal does not allow inviting members, or guests for a guest link. The call changes data. A repeated call with the same email returns 400. With an invitation link that `POST api/2.0/people/invite` emailed, a repeat returns 403. If `password` breaks the portal password policy, the call returns 400. It also returns 400 if the first and last names are not valid. Without `password` and `passwordHash`, the portal sets a random password that nobody knows. Without a free paid seat, the call creates a user instead. If the user limit is also reached, it returns 402. So check the type flags of the returned profile, such as `isRoomAdmin`. The call also downloads the avatar from `files`. If the portal refuses that URL, the call returns 403 and creates no account. If its server returns an error, the call also returns 403. Any failed download keeps the created account. To invite several people by email, use `POST api/2.0/people/invite`.  Raises the `user.created` webhook after the portal saves the avatar from `files`, if any, but not if the download fails.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MemberRequestDto** | body | [**MemberRequestDto**](../../models/member-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new profile with its detailed information | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The password does not meet the portal password policy | - | - |
| **403** | The invitation link is invalid or has expired, the portal does not allow inviting this kind of account, the caller may not create an account of the requested type, the `files` URL was refused, or the server behind it answered with an error status after the account had been created | - | - |
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
