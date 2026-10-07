# setRoomSecurity

> RoomSecurityWrapper setRoomSecurity(id, RoomInvitationRequest)

`PUT /api/2.0/files/rooms/{id}/share`

Set the room access rights

Adds, changes and removes room members in one batch, and returns the resulting access list of the named subjects. Each entry names either an account or a group of the portal, or the email address of somebody who has no account yet, together with the access level to grant; an access of 0 removes the subject from the room. An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager. Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see is dropped without an error, which is why the answer has to be compared with the request. Removing a member who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation email with the optional `message`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose membership changes, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **RoomInvitationRequest** | body | [**RoomInvitationRequest**](../models/room-invitation-request.md) | The membership changes to apply, together with how the people concerned are notified. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The access entries of the named subjects, plus a warning or an error when something was not applied | [**RoomSecurityWrapper**](../models/room-security-wrapper.md) | - |
| **400** | The request body cannot be read, an `email` in `invitations` is malformed or longer than 255 characters, `invitations` invites more addresses by email than the portal allows at once, `culture` is not a valid culture name while an invitation email is sent, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | Email invitations are sent while the portal forbids inviting guests, the caller may not read the room or change its members, a listed subject cannot be given the requested access in this room, or the room is private and a listed account or invited address has no encryption keys | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **500** | A third-party identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomSecurityWrapper**](../models/room-security-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room whose membership changes, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
