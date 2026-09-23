# getInvitationLink

Referenced types are defined in the [full reference](../api.md).

> StringWrapper getInvitationLink(employeeType)

`GET /api/2.0/portal/users/invite/{employeeType}`

Get a legacy invitation link

Deprecated - use `POST api/2.0/portal/users/invitationlink` and the neighbouring operations under that path, which store the link and let it be read, changed and revoked. Builds a shortened URL that lets whoever opens it join this portal with the role given in the path, and returns it as a bare string; nothing is stored, so the link can afterwards be neither listed nor withdrawn. Inviting members has to be enabled for the portal - `GET api/2.0/settings/invitationsettings` reports that - otherwise the call is refused. The caller needs the right to add users of the requested role and only the portal owner may ask for a DocSpace administrator link; a caller without that right gets an empty string instead of an error, so treat an empty answer as a refusal. The call changes nothing on the portal and may be repeated, each time returning an equivalent link. The URL carries a confirmation key bound to the calling account and the portal alias; it has no use limit and stops being accepted once the portal's e-mail key lifetime has passed, seven days by default - neither of the two can be set per link, which is what the replacement operations add.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **employeeType** | path | **EmployeeType** | The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any other role is refused. The portal keeps at most one link per role, so this value alone identifies it. | [required] [example: `1`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation URL to hand to the invited person, or an empty string when the caller may not invite that role | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
