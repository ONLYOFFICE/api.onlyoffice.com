# file.deleted

> FileDelivery fileDeleted

`POST` to the URL of the subscription

Sent on the `file.deleted` event. The body is a FileDelivery, whose `payload` is a FilePayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`DELETE api/2.0/files/file/{fileId}`](../../usage-api/files/files/delete-file.md) (Delete a file), instead when the file is deleted for good, not moved to the trash
- [`PUT api/2.0/files/fileops/delete`](../../usage-api/files/operations/delete-batch-items.md) (Delete files and folders), instead for a listed file deleted for good, not moved to the trash
- [`PUT api/2.0/files/fileops/deleteversion`](../../usage-api/files/operations/delete-file-versions.md) (Delete file versions), instead when `versions` is empty, which deletes the whole file for good
- [`PUT api/2.0/files/fileops/emptytrash`](../../usage-api/files/operations/empty-trash.md) (Empty the "Trash" folder), for each file directly in the trash, not for the files inside trashed folders

Also raised by the automatic clean-up of the trash, and the clean-up of a room with a file lifetime set to delete permanently, for every file they delete.

## Request headers

| Name | Description |
|------------- | -------------|
| **x-docspace-signature-256** | `sha256=` and the uppercase hex HMAC-SHA256 of the raw body under the subscription's secret. The only header that is authenticated; compare it case-insensitively. |
| **x-docspace-event-id** | A copy of `event.id`, for dropping an already-seen delivery without parsing the body. Not covered by the signature. |
| **x-docspace-event-timestamp** | A copy of `event.createOn`, in the same ISO-8601 UTC spelling. Not covered by the signature. |

## Request body

[**FileDelivery**](../models/file-delivery.md)

## Responses

| Status code | Description |
|------------- | -------------|
| **2XX** | Acknowledges the delivery. The answer's body is kept in the delivery log, not interpreted. |
| **410** | Deletes the subscription at once; nothing is retried or sent to it any more. |
| **default** | Any other status, a redirect, a timeout or a network error fails the attempt, which is retried on the schedule the description of this document gives. |

## HTTP request headers

- **Content-Type**: application/json
