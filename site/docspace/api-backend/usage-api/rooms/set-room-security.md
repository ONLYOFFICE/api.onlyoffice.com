# setRoomSecurity

> RoomSecurityWrapper setRoomSecurity(id, RoomInvitationRequest)

`PUT /api/2.0/files/rooms/{id}/share`

Set the room access rights

Changes the members of a room in one call, and returns the access of the listed subjects. The call can add, change, and remove members. Each entry names an account, a group, or the email of a person without an account. An `access` of `None` removes the subject from the room. Requires the room manager role in the room. Other callers get 403. The call changes data, and you can repeat it with the same body. It skips a subject that already has the listed access, so a repeat sends no email. If `notify` is true, the portal emails the invitation with `message`. A person who got the same invitation or access email for this room recently gets no new one. A new `message` does not change this. The call ignores an entry without an access level. If a subject is listed twice, the last level wins. An empty list changes nothing. The call skips subjects that the caller cannot see, except current members that the room owner changes. So compare the answer with the request. Without `force`, the call does not remove a member who has a form role. It reports this in `error` instead. The answer can also carry a `warning`. The call returns 400 for an invalid or too long `email`, too many email invitations, or an invalid `culture`. It returns 403 if an entry has an email and the portal forbids guest invitations. It also returns 403 if a subject cannot get the access, such as a user or guest as room manager. In a private room, a subject without encryption keys also returns 403. If the room does not exist, the call returns 404.

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
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
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
