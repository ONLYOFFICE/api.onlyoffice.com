# user.deleted

> UserDelivery userDeleted

`POST` to the URL of the subscription

Sent on the `user.deleted` event. The body is a UserDelivery, whose `payload` is a UserPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/people/delete`](../../usage-api/people/profiles/remove-users.md) (Delete users), for every account it deletes, not for a skipped one
- [`POST api/2.0/people/reassign/start`](../../usage-api/people/user-data/start-reassign.md) (Start the data reassignment), when `deleteProfile` is true and the job succeeds
- [`DELETE api/2.0/people/{userId}`](../../usage-api/people/profiles/delete-member.md) (Delete a user)

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
