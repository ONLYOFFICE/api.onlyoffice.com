# room.archived

> RoomDelivery roomArchived

`POST` to the URL of the subscription

Sent on the `room.archived` event. The body is a RoomDelivery, whose `payload` is a RoomPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/files/fileops/move`](../../usage-api/files/operations/move-batch-items.md) (Move files and folders), for every listed room moved to the archive
- [`PUT api/2.0/files/rooms/{id}/archive`](../../usage-api/rooms/archive-room.md) (Archive a room), once the queued operation moves the room to the archive, for an AI agent as well

## Request headers

| Name | Description |
|------------- | -------------|
| **x-docspace-signature-256** | `sha256=` and the uppercase hex HMAC-SHA256 of the raw body under the subscription's secret. The only header that is authenticated; compare it case-insensitively. |
| **x-docspace-event-id** | A copy of `event.id`, for dropping an already-seen delivery without parsing the body. Not covered by the signature. |
| **x-docspace-event-timestamp** | A copy of `event.createOn`, in the same ISO-8601 UTC spelling. Not covered by the signature. |

## Request body

[**RoomDelivery**](../models/room-delivery.md)

## Responses

| Status code | Description |
|------------- | -------------|
| **2XX** | Acknowledges the delivery. The answer's body is kept in the delivery log, not interpreted. |
| **410** | Deletes the subscription at once; nothing is retried or sent to it any more. |
| **default** | Any other status, a redirect, a timeout or a network error fails the attempt, which is retried on the schedule the description of this document gives. |

## HTTP request headers

- **Content-Type**: application/json
