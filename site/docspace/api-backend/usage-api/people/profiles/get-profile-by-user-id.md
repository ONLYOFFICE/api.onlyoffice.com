# getProfileByUserId

> EmployeeFullWrapper getProfileByUserId(userid)

`GET /api/2.0/people/{userid}`

Get a profile by user ID

Returns the profile of one account, looked up by its user name first and by its ID if the name matches nothing, so both forms work in the route. The caller has to be allowed to see that account - a guest, for instance, only sees the accounts it is related to - and a value that matches neither a name nor an ID answers 404. A request authenticated with an invitation link is treated differently: it skips that visibility check and gets a reduced profile with the identifying fields only, which is what an invitation page needs. The call is read-only and is available on an unpaid portal. To read the calling account use `GET api/2.0/people/@self`, and to look an account up by address use `GET api/2.0/people/email`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile, or a reduced one for a request authenticated with an invitation link | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to see that account | - | - |
| **404** | No account has the specified ID or user name | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
