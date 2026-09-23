# setRoomSecurity

Referenced types are defined in the [full reference](../files.md).

> RoomSecurityWrapper setRoomSecurity(id, RoomInvitationRequest)

`PUT /api/2.0/files/rooms/{id}/share`

Set the room access rights

Adds, changes and removes room members in one batch, and returns the resulting access list of the named subjects. Each entry names either an account or a group of the portal, or the email address of somebody who has no account yet, together with the access level to grant; an access of 0 removes the subject from the room. An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager. Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see is dropped without an error, which is why the answer has to be compared with the request. Removing a member who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation email with the optional `message`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose membership changes, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **RoomInvitationRequest** | body | [**RoomInvitationRequest**](../files.md#model-roominvitationrequest) | The membership changes to apply, together with how the people concerned are notified. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The access entries of the named subjects, plus a warning or an error when something was not applied | [**RoomSecurityWrapper**](../files.md#model-roomsecuritywrapper) | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomSecurityWrapper**](../files.md#model-roomsecuritywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
