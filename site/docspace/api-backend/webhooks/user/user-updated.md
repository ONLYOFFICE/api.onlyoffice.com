# user.updated

> UserDelivery userUpdated

`POST` to the URL of the subscription

Sent on the `user.updated` event. The body is a UserDelivery, whose `payload` is a UserPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`DELETE api/2.0/people/@self`](../../usage-api/people/profiles/delete-profile.md) (Close my own profile), and not `user.deleted`
- [`PUT api/2.0/people/activationstatus/{activationStatus}`](../../usage-api/people/user-status/update-user-activation-status.md) (Set my activation status), for the caller's account, even when the status does not change
- [`PUT api/2.0/people/status/{status}`](../../usage-api/people/user-status/update-user-status.md) (Change a user status), for every listed account, changed or not, and for none after a 402
- [`POST api/2.0/people/type`](../../usage-api/people/user-type/start-user-type-update.md) (Start updating user type), once the queued type change succeeds, not when it is cancelled or fails
- [`PUT api/2.0/people/type/{type}`](../../usage-api/people/user-type/update-user-type.md) (Change a user type), for every changed account, one by one
- [`PUT api/2.0/people/{userId}`](../../usage-api/people/profiles/update-member.md) (Update a user), on every call for the caller's own account, even one that changes nothing
- [`PUT api/2.0/people/{userId}`](../../usage-api/people/profiles/update-member.md) (Update a user), for another account when `disable` is sent or `isUser` changes the type
- [`PUT api/2.0/people/{userId}/culture`](../../usage-api/people/profiles/update-member-culture.md) (Update a user culture), even when the culture does not change
- [`POST api/2.0/people/{userId}/photo`](../../usage-api/people/photos/upload-member-photo.md) (Upload a user photo), only when `autosave` is true and the image is saved to the profile
- [`PUT api/2.0/people/{userId}/photo`](../../usage-api/people/photos/update-member-photo.md) (Update a user photo), on every call, even when `files` is the current avatar
- [`DELETE api/2.0/people/{userId}/photo`](../../usage-api/people/photos/delete-member-photo.md) (Delete a user photo), even when the profile had no avatar

Not raised when the groups of a user are changed through the group API - [`PUT api/2.0/group/{id}`](../../usage-api/group/update-group.md), `POST`, `PUT` and [`DELETE api/2.0/group/{id}/members`](../../usage-api/group/remove-members-from.md), [`PUT api/2.0/group/{fromId}/members/{toId}`](../../usage-api/group/move-members-to.md) and [`PUT api/2.0/group/{id}/manager`](../../usage-api/group/set-group-manager.md): those raise `group.updated` of each group concerned instead, and the `groups` of the user's payload are read again from the next `user.*` event. A change of the `department` list through [`PUT api/2.0/people/{userId}`](../../usage-api/people/profiles/update-member.md) is the other way round: it arrives as `user.updated` of that user, and the groups it adds the user to or removes them from raise no `group.updated`; `department` given on creating a profile arrives within its `user.created` only.

## Request headers

| Name | Description |
|------------- | -------------|
| **x-docspace-signature-256** | `sha256=` and the uppercase hex HMAC-SHA256 of the raw body under the subscription's secret. The only header that is authenticated; compare it case-insensitively. |
| **x-docspace-event-id** | A copy of `event.id`, for dropping an already-seen delivery without parsing the body. Not covered by the signature. |
| **x-docspace-event-timestamp** | A copy of `event.createOn`, in the same ISO-8601 UTC spelling. Not covered by the signature. |

## Request body

[**UserDelivery**](../models/user-delivery.md)

## Responses

| Status code | Description |
|------------- | -------------|
| **2XX** | Acknowledges the delivery. The answer's body is kept in the delivery log, not interpreted. |
| **410** | Deletes the subscription at once; nothing is retried or sent to it any more. |
| **default** | Any other status, a redirect, a timeout or a network error fails the attempt, which is retried on the schedule the description of this document gives. |

## HTTP request headers

- **Content-Type**: application/json
