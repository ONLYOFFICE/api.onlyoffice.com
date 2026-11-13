# file.updated

> FileDelivery fileUpdated

`POST` to the URL of the subscription

Sent on the `file.updated` event. The body is a FileDelivery, whose `payload` is a FilePayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`POST api/2.0/docs/builder`](../../usage-api/docs/run-builder-script.md) (Run a document builder script), for each existing file the queued script replaces
- [`PUT api/2.0/files/file/{fileId}`](../../usage-api/files/files/update-file.md) (Update a file), for a rename that takes effect, and again for a switch to `lastVersion`
- [`PUT api/2.0/files/file/{fileId}/comment`](../../usage-api/files/operations/update-file-comment.md) (Update a comment)
- [`PUT api/2.0/files/file/{fileId}/lock`](../../usage-api/files/files/lock-file.md) (Lock a file), on every call, even one that changes nothing, and twice for an unlock in portal storage
- [`POST api/2.0/files/file/{fileId}/restoreversion`](../../usage-api/files/files/restore-file-version.md) (Restore a file version)
- [`PUT api/2.0/files/file/{fileId}/saveediting`](../../usage-api/files/files/save-editing-file-from-form.md) (Save edited file content), for the saved file, also for a renamed copy in third-party storage, never `file.created`
- [`PUT api/2.0/files/fileops/deleteversion`](../../usage-api/files/operations/delete-file-versions.md) (Delete file versions), once for every removed version
- [`PUT api/2.0/files/order`](../../usage-api/files/files/set-files-order.md) (Set order of files), for every file in the list whose order changes
- [`POST api/2.0/files/owner`](../../usage-api/files/sharing/change-file-owner.md) (Change the room or file owner), for every file whose owner changes
- [`PUT api/2.0/files/{fileId}/order`](../../usage-api/files/files/set-file-order.md) (Set file order), when the order changes

Also raised by the editor, every time it saves a document, a force-save included; submitting a filled form raises `form.submit` instead.

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
