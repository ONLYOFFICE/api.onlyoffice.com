# folder.updated

> FolderDelivery folderUpdated

`POST` to the URL of the subscription

Sent on the `folder.updated` event. The body is a FolderDelivery, whose `payload` is a FolderPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/files/folder/{folderId}`](../../usage-api/files/folders/rename-folder.md) (Rename a folder), when the title changes
- [`PUT api/2.0/files/folder/{folderId}/order`](../../usage-api/files/folders/set-folder-order.md) (Set folder order), when the order changes
- [`PUT api/2.0/files/order`](../../usage-api/files/files/set-files-order.md) (Set order of files), for every folder in the list whose order changes
- [`PUT api/2.0/files/rooms/resetquota`](../../usage-api/files/quota/reset-room-quota.md) (Reset the room quota limit), instead for a listed ID that is a folder, not a room
- [`PUT api/2.0/files/rooms/roomquota`](../../usage-api/files/quota/update-rooms-quota.md) (Change the room quota limit), instead for a listed ID that is a folder, not a room
- [`PUT api/2.0/files/rooms/{id}`](../../usage-api/rooms/update-room.md) (Update a room), instead when the ID is a folder inside the room, not the room itself
- `PUT internal/ai/agents/agentquota` (Change the AI agent quota limit), instead for a listed ID that is a folder rather than a room, which the operation does not refuse
- `PUT internal/ai/agents/resetquota` (Reset the AI agents quota limit), instead for a listed ID that is a folder rather than a room, which the operation does not refuse

## Request headers

| Name | Description |
|------------- | -------------|
| **x-docspace-signature-256** | `sha256=` and the uppercase hex HMAC-SHA256 of the raw body under the subscription's secret. The only header that is authenticated; compare it case-insensitively. |
| **x-docspace-event-id** | A copy of `event.id`, for dropping an already-seen delivery without parsing the body. Not covered by the signature. |
| **x-docspace-event-timestamp** | A copy of `event.createOn`, in the same ISO-8601 UTC spelling. Not covered by the signature. |

## Request body

[**FolderDelivery**](../models/folder-delivery.md)

## Responses

| Status code | Description |
|------------- | -------------|
| **2XX** | Acknowledges the delivery. The answer's body is kept in the delivery log, not interpreted. |
| **410** | Deletes the subscription at once; nothing is retried or sent to it any more. |
| **default** | Any other status, a redirect, a timeout or a network error fails the attempt, which is retried on the schedule the description of this document gives. |

## HTTP request headers

- **Content-Type**: application/json
