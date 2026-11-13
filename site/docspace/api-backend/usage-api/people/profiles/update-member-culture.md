# updateMemberCulture

> EmployeeFullWrapper updateMemberCulture(userId, UpdateMemberCultureRequest)

`PUT /api/2.0/people/{userId}/culture`

Update a user culture

Changes the interface language of the caller. The language applies to the portal and to the emails of the account. The ID in the route must be the ID of the caller. Any signed-in user can call it for their own account. For another account, the call returns 403, even for an admin. The culture must be enabled on the portal. Otherwise the call returns 400. If no account has the ID, the call returns 404. The call changes data. You can repeat it with the same body. It returns the profile with the new `cultureName`. To change other fields, use `PUT api/2.0/people/{userId}`.  Raises the `user.updated` webhook even when the culture does not change.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateMemberCultureRequest** | body | [**UpdateMemberCultureRequest**](../../models/update-member-culture-request.md) | The culture name parameters. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile with its new culture | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The specified culture is not enabled on the portal | - | - |
| **403** | The ID in the route is not the calling account, or the account may not edit its own profile | - | - |
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
