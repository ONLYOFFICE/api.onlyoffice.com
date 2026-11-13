# folder.trashed

> FolderDelivery folderTrashed

`POST` to the URL of the subscription

Sent on the `folder.trashed` event. The body is a FolderDelivery, whose `payload` is a FolderPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`PUT api/2.0/files/fileops/delete`](../../usage-api/files/operations/delete-batch-items.md) (Delete files and folders), for every listed folder moved to the trash, not for the folders inside it
- [`DELETE api/2.0/files/folder/{folderId}`](../../usage-api/files/folders/delete-folder.md) (Delete a folder), for the folder only, when the queued job moves it to the trash

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
