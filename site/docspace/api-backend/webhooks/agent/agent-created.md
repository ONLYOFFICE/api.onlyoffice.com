# agent.created

> RoomDelivery agentCreated

`POST` to the URL of the subscription

Sent on the `agent.created` event. The body is a RoomDelivery, whose `payload` is a RoomPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`.

Raised by these REST API operations:

- [`POST api/2.0/files/rooms`](../../usage-api/rooms/create-room.md) (Create a room), instead when `roomType` is `AiRoom`, which creates an AI agent in the Rooms section
- [`POST api/2.0/files/rooms/fromtemplate`](../../usage-api/rooms/create-room-from-template.md) (Create a room from the template), instead for a room built from an AI agent template
- [`POST api/2.0/files/rooms/thirdparty/{id}`](../../usage-api/rooms/create-room-third-party.md) (Create a third-party room), instead when `roomType` is `AiRoom`
- [`POST api/2.0/files/roomtemplate`](../../usage-api/rooms/create-room-template.md) (Create a room template), instead for an AI agent template
- `POST internal/ai/agents` (Create an ai agent)

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
