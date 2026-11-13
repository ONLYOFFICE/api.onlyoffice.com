# group.deleted

> GroupDelivery groupDeleted

`POST` to the URL of the subscription

Sent on the `group.deleted` event. The body is a GroupDelivery, whose `payload` is a GroupPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`.

Raised by these REST API operations:

- [`DELETE api/2.0/group/{id}`](../../usage-api/group/delete-group.md) (Delete a group), once for the deleted group, without `user.*` webhooks for its former members

## Request headers

| Name | Description |
|------------- | -------------|
| **x-docspace-signature-256** | `sha256=` and the uppercase hex HMAC-SHA256 of the raw body under the subscription's secret. The only header that is authenticated; compare it case-insensitively. |
| **x-docspace-event-id** | A copy of `event.id`, for dropping an already-seen delivery without parsing the body. Not covered by the signature. |
| **x-docspace-event-timestamp** | A copy of `event.createOn`, in the same ISO-8601 UTC spelling. Not covered by the signature. |

## Request body

[**GroupDelivery**](../models/group-delivery.md)

## Responses

| Status code | Description |
|------------- | -------------|
| **2XX** | Acknowledges the delivery. The answer's body is kept in the delivery log, not interpreted. |
| **410** | Deletes the subscription at once; nothing is retried or sent to it any more. |
| **default** | Any other status, a redirect, a timeout or a network error fails the attempt, which is retried on the schedule the description of this document gives. |

## HTTP request headers

- **Content-Type**: application/json
