# getInvitationLink

> StringWrapper getInvitationLink(employeeType)

`GET /api/2.0/portal/users/invite/{employeeType}`

Get a legacy invitation link

Returns an invitation URL for the role in `employeeType`, and is deprecated. Use `POST api/2.0/portal/users/invitationlink` and the other operations under that path instead. Anyone who opens the URL can join the portal with that role. The portal does not store the link, so you cannot list or revoke it later. If inviting members is turned off in `GET api/2.0/settings/invitationsettings`, the call returns 403. The caller needs the right to add users of that role. Only the portal owner gets a DocSpace admin link. Other callers get an empty string instead of an error. The call is read-only, and you can repeat it. Each call returns an equivalent link as a bare string. The link is signed for the calling account and has no use limit. It expires with the email key lifetime of the portal, by default after 7 days.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **employeeType** | path | **EmployeeType** | The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any other role is refused. The portal keeps at most one link per role, so this value alone identifies it. | [required] [example: `1`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation URL to hand to the invited person, or an empty string when the caller may not invite that role | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Inviting members is disabled for the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
