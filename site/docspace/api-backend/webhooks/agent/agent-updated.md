# agent.updated

> RoomDelivery agentUpdated

`POST` to the URL of the subscription

Sent on the `agent.updated` event. The body is a RoomDelivery, whose `payload` is a RoomPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/files/folder/{folderId}`](../../usage-api/files/folders/rename-folder.md) (Rename a folder), instead when it is an AI agent
- [`POST api/2.0/files/owner`](../../usage-api/files/sharing/change-file-owner.md) (Change the room or file owner), instead for a listed AI agent whose owner changes
- [`POST api/2.0/files/rooms/fromtemplate`](../../usage-api/rooms/create-room-from-template.md) (Create a room from the template), instead for such a room with `quota`
- [`PUT api/2.0/files/rooms/resetquota`](../../usage-api/files/quota/reset-room-quota.md) (Reset the room quota limit), instead for a listed AI agent
- [`PUT api/2.0/files/rooms/roomquota`](../../usage-api/files/quota/update-rooms-quota.md) (Change the room quota limit), instead for a listed AI agent
- [`PUT api/2.0/files/rooms/{id}`](../../usage-api/rooms/update-room.md) (Update a room), instead when the room is an AI agent
- [`POST api/2.0/files/rooms/{id}/cover`](../../usage-api/rooms/change-room-cover.md) (Change the room cover), instead when the room is an AI agent
- [`POST api/2.0/files/rooms/{id}/logo`](../../usage-api/rooms/create-room-logo.md) (Set the room logo), instead when the room is an AI agent
- [`DELETE api/2.0/files/rooms/{id}/logo`](../../usage-api/rooms/delete-room-logo.md) (Remove a room logo), instead when the room is an AI agent
- [`POST api/2.0/files/roomtemplate`](../../usage-api/rooms/create-room-template.md) (Create a room template), instead for an AI agent template with `quota`
- [`POST api/2.0/people/type`](../../usage-api/people/user-type/start-user-type-update.md) (Start updating user type), instead for an AI agent the account owns
- `PUT internal/ai/agents/agentquota` (Change the AI agent quota limit), for every listed agent, even when its quota does not change
- `PUT internal/ai/agents/resetquota` (Reset the AI agents quota limit), for every listed agent
- `PUT internal/ai/agents/{id}` (Update an ai agent), on every successful call, even one that changes nothing

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
