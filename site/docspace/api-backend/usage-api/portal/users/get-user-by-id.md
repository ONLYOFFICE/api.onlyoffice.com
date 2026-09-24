# getUserById

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
| **200** | The account of this portal, in the internal user format | [**UserInfoWrapper**](../../models/user-info-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No account with this ID exists on the portal, or the ID belongs to a system account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UserInfoWrapper**](../../models/user-info-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
