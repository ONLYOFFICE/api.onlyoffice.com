# group.updated

> GroupDelivery groupUpdated

`POST` to the URL of the subscription

Sent on the `group.updated` event. The body is a GroupDelivery, whose `payload` is a GroupPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`.

Raised by these REST API operations:

- [`PUT api/2.0/group/{fromId}/members/{toId}`](../../usage-api/group/move-members-to.md) (Move group members), for the source group if the two IDs differ and the source has enabled members
- [`PUT api/2.0/group/{fromId}/members/{toId}`](../../usage-api/group/move-members-to.md) (Move group members), for the destination group only when its members change, without `user.*` webhooks
- [`PUT api/2.0/group/{id}`](../../usage-api/group/update-group.md) (Update a group), only when the name, the manager, or the members change, without `user.*` webhooks
- [`PUT api/2.0/group/{id}/manager`](../../usage-api/group/set-group-manager.md) (Set a group manager), only when the manager or the members change, without `user.*` webhooks for them
- [`POST api/2.0/group/{id}/members`](../../usage-api/group/set-members-to.md) (Replace group members), only when the members or the manager change, without `user.*` webhooks for them
- [`PUT api/2.0/group/{id}/members`](../../usage-api/group/add-members-to.md) (Add group members), only when the call adds an account, without `user.*` webhooks for it
- [`DELETE api/2.0/group/{id}/members`](../../usage-api/group/remove-members-from.md) (Remove group members), only when the call removes a member, without `user.*` webhooks for it

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
