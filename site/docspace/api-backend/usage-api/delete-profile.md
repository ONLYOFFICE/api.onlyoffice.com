# deleteProfile

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullWrapper deleteProfile()

`DELETE /api/2.0/people/@self`

Close my own profile

Closes the calling account at its owner's request: it does not erase the profile, it disables it, ends every session it has and tells the portal administrators that the account asked to be removed. It is the second step of the self-service removal - the first is `PUT api/2.0/people/self/delete`, which mails the confirmation link - so the request has to carry the confirmation token from that link rather than an ordinary session. It always acts on the calling account and takes no parameters; the portal owner and an account imported from LDAP cannot close themselves and get 403. After the call the account has the `Terminated` status and can no longer sign in, but its rooms, files and group memberships are untouched, which is why an administrator still has to erase it through `DELETE api/2.0/people/{userid}` - that operation requires exactly this disabled state. The step is reversible until then: re-enabling the account through `PUT api/2.0/people/status/{status}` restores it. The call raises a `UserUpdated` webhook, not a delete one, and answers with the profile in its new state.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller with the Terminated status | [**EmployeeFullWrapper**](../people.md#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner, an LDAP account or a system account | - | - |
| **404** | The calling account no longer exists | - | - |
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
