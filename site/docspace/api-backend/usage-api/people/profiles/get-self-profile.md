# getSelfProfile

> EmployeeFullWrapper getSelfProfile()

`GET /api/2.0/people/@self`

Get my profile

Returns the profile of the caller, with session details that no other call returns. Any signed-in user can call it, including a guest. The call is read-only and works on an unpaid portal. This call alone fills four fields: `theme`, `loginEventId`, `hasPersonalFolder`, and `authCookieLifetime`. The `authCookieLifetime` field has the seconds left in the session. The call fills it only if less than a day is left or the portal has a custom session lifetime. So an empty value does not mean an endless session. To read another account, use `GET api/2.0/people/{userId}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller, with the theme, the session and the personal folder details | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
