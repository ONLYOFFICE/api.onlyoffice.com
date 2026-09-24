# updateMember

> EmployeeFullWrapper updateMember(userid, UpdateMemberRequestDto)

`PUT /api/2.0/people/{userid}`

Update a user

Updates a portal profile, and which fields it accepts depends on whose profile it is - the two halves of this operation do not overlap. On the caller's own profile it applies `firstName`, `lastName`, `location`, `comment`, `spam`, `contacts`, `department` and the avatar named in `files`, while `disable` and `isUser` are ignored; on somebody else's profile only `disable` and `isUser` are applied and every descriptive field is ignored, so an administrator cannot rename another account through this operation. The caller needs the permission to edit that profile, cannot touch the portal owner, and has to be the portal owner to touch another DocSpace administrator; on an account imported from LDAP or SSO the name and the location are silently left alone even on one's own profile. Omitted fields keep their current values, an unusable pair of names answers 400, and `disable` set to true gives the account the `Terminated` status and ends every session it has, which is the state `DELETE api/2.0/people/{userid}` then requires. The `isUser` flag turns the account into a guest when true and back into a member when false, both of which can answer 402 because either direction takes a seat; a request to make the portal owner, a DocSpace administrator or a module administrator a guest is ignored without an error. A change raises a `UserUpdated` webhook and the answer holds the profile as it is afterwards, so read it instead of assuming the request was applied. For the language use `PUT api/2.0/people/{userid}/culture`, for the type `PUT api/2.0/people/type/{type}`, and for the status of several accounts at once `PUT api/2.0/people/status/{status}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateMemberRequestDto** | body | [**UpdateMemberRequestDto**](../../models/update-member-request-dto.md) | The request parameters for updating the user information. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it is after the update | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The first and last name pair is not a valid user name | - | - |
| **402** | The tariff or the user quota does not allow the requested guest or member seat | - | - |
| **403** | The account is the portal owner or a system account, the caller may not edit it, or only the portal owner may edit a DocSpace administrator | - | - |
| **404** | No user has the specified ID | - | - |
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
