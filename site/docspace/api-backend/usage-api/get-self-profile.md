# getSelfProfile

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullWrapper getSelfProfile()

`GET /api/2.0/people/@self`

Get my profile

Returns the profile of the account the request is authenticated as, together with the session details only this operation reports. It takes no parameters, needs no permission and always describes the caller, so it is the operation to call right after signing in to find out who the token belongs to and what that account may do. The call is read-only and available on an unpaid portal. Beyond the ordinary profile fields it fills in four that stay empty everywhere else: `theme` with the interface theme the account chose, `loginEventId` with the identifier of the current session, `hasPersonalFolder` with whether the account has a personal folder, and `authCookieLifetime` with the seconds the session has left - the last one only when less than a day remains or the portal is configured to expose it, so an absent value means neither, not an endless session. To read somebody else use `GET api/2.0/people/{userid}`, which reports none of these four.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller, with the theme, the session and the personal folder details | [**EmployeeFullWrapper**](../people.md#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../people.md#model-employeefullwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
