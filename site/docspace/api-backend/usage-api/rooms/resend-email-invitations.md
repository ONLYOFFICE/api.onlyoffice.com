# resendEmailInvitations

> resendEmailInvitations(id, UserInvitation)

`POST /api/2.0/files/rooms/{id}/resend`

Resend the room invitations

Sends the room invitation email again to invited members. If `resendAll` is true, the call sends it to every pending invitation of the room and ignores `usersIds`. Otherwise, it sends it only to the accounts in `usersIds`. The call skips accounts that are not room members or that the caller cannot see. If `resendAll` is false and `usersIds` is empty, the call does nothing. So a 200 does not prove that an email was sent. Requires the room manager role in the room. Other callers get 403. An archived room also returns 403. The call changes no data. Do not repeat it. By default, a member who got this invitation in the last 10 minutes gets no new email. After that, each call sends the email again. The link in the earlier email stays valid. The response has no body. A body that cannot be read returns 400. If the room does not exist or is a room template, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose invitations are resent, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **UserInvitation** | body | [**UserInvitation**](../models/user-invitation.md) | Which pending invitations to send again. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The request is accepted; the pending members it covers are mailed again, except those who already got this invitation within the repeat period | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller is not a manager of the room, or the room is archived | - | - |
| **404** | The room does not exist or is a room template, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room whose invitations are resent, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
