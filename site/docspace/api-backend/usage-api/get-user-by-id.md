# getUserById

Referenced types are defined in the [full reference](../api.md).

> UserInfoWrapper getUserById(userID)

`GET /api/2.0/portal/users/{userID}`

Get a portal user

Returns one user of this portal, addressed by ID, in the shape the portal stores the account: display name, e-mail, contacts, role and status flags, and the dates of the profile. Nothing has to be called first, and the call is read-only and idempotent. Who may be read is decided per pair of accounts: a caller always reads their own profile, a DocSpace administrator reads anyone, a room administrator reads anyone except a guest they have no relation with, and a user or a guest reads nobody but themselves - a pair that is not allowed is refused. An ID that belongs to no account of this portal and an ID of a system account are both answered as not found, so a 404 does not tell the two apart. `userID` in the path has to be a GUID; the calling user's own profile is easier to fetch with `GET api/2.0/people/@self`. This operation hands back the internal user record - use `GET api/2.0/people/{userid}` for the same user in the People format, with the group, quota and access information a client usually needs.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userID** | path | **UUID** (uuid) | The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. An ID belonging to no account of this portal and an ID of an internal system account are both answered as not found. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account of this portal, in the internal user format | [**UserInfoWrapper**](../api.md#model-userinfowrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No account with this ID exists on the portal, or the ID belongs to a system account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UserInfoWrapper**](../api.md#model-userinfowrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
