# folder.deleted

> FolderDelivery folderDeleted

`POST` to the URL of the subscription

Sent on the `folder.deleted` event. The body is a FolderDelivery, whose `payload` is a FolderPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/files/fileops/delete`](../../usage-api/files/operations/delete-batch-items.md) (Delete files and folders), instead for a listed folder deleted for good, not moved to the trash
- [`PUT api/2.0/files/fileops/emptytrash`](../../usage-api/files/operations/empty-trash.md) (Empty the "Trash" folder), for every folder lying directly in the trash
- [`DELETE api/2.0/files/folder/{folderId}`](../../usage-api/files/folders/delete-folder.md) (Delete a folder), instead when the job deletes the folder for good

Also raised by the automatic clean-up of the trash, for every expired folder lying directly in the trash that it deletes.

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
