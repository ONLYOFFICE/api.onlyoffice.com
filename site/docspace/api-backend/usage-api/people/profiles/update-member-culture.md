# updateMemberCulture

> EmployeeFullWrapper updateMemberCulture(userid, Culture)

`PUT /api/2.0/people/{userid}/culture`

Update a user culture

Changes the interface language of a profile, which decides the language of the portal for that account and of the emails it receives. The culture has to be one the portal has enabled, otherwise the operation answers 400; read the enabled list from the portal settings rather than guessing a code. A caller may only change their own language - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The change takes effect immediately, raises a `UserUpdated` webhook, and answers with the profile carrying the new `cultureName`. Other profile fields are not touched here; use `PUT api/2.0/people/{userid}` for those.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **Culture** | body | [**Culture**](../../models/culture.md) | The culture name parameters. | [optional] |

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
