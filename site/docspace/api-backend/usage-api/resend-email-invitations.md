# resendEmailInvitations

Referenced types are defined in the [full reference](../files.md).

> resendEmailInvitations(id, UserInvitation)

`POST /api/2.0/files/rooms/{id}/resend`

Resend the room invitations

Sends the room invitation email again to members who were invited but have not joined yet. `resendAll` covers every pending invitation of the room and makes `usersIds` irrelevant, while an explicit list without that flag is limited to the named accounts. An account that has already accepted the invitation, is not a member of the room, or is invisible to the caller is skipped without an error, and a request that names nobody and does not set the flag does nothing, so a successful answer never proves that a message went out. Nothing about the room or its membership changes, and the operation can be repeated. The caller must be a manager of the room, an archived room is refused, a room template is answered as missing, and a malformed account id is rejected as an invalid request. The call is rate limited, so a client that loops over members should send one batch instead. The response carries no body.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose invitations are resent, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **UserInvitation** | body | [**UserInvitation**](../files.md#model-userinvitation) | Which pending invitations to send again. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitations that were still pending have been sent again | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
