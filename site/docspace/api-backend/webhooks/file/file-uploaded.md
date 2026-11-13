# file.uploaded

> FileDelivery fileUploaded

`POST` to the URL of the subscription

Sent on the `file.uploaded` event. The body is a FileDelivery, whose `payload` is a FilePayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`POST api/2.0/files/@my/insert`](../../usage-api/files/folders/insert-file-to-my-from-body.md) (Insert a file into My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/@my/upload`](../../usage-api/files/folders/upload-file-to-my.md) (Upload a file to My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/file/{fileId}/copyas`](../../usage-api/files/files/copy-file-as.md) (Copy a file), as well when the copy is converted to another format
- [`POST api/2.0/files/{folderId}/insert`](../../usage-api/files/folders/insert-file.md) (Insert a file), for a new file and for a new version of an existing file
- [`POST api/2.0/files/{folderId}/session/{sessionId}`](../../usage-api/files/operations/upload-session.md) (Upload the next chunk), on the request that completes the upload, without `file.created`
- [`PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`](../../usage-api/files/operations/finalize-session.md) (Finalize an upload session), without `file.created`
- [`POST api/2.0/files/{folderId}/upload`](../../usage-api/files/folders/upload-file.md) (Upload a file), for a new file and for a new version of an existing file

Also raised by an upload of the parts to the `location` link that creating an upload session returns, once the last part arrives or that link finalizes the session.

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
