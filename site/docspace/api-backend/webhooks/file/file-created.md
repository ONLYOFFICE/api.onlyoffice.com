# file.created

> FileDelivery fileCreated

`POST` to the URL of the subscription

Sent on the `file.created` event. The body is a FileDelivery, whose `payload` is a FilePayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`POST api/2.0/docs/builder`](../../usage-api/docs/run-builder-script.md) (Run a document builder script), for each new file the queued script saves
- [`POST api/2.0/docs/converter`](../../usage-api/docs/convert-file.md) (Convert a file)
- [`POST api/2.0/files/@my/file`](../../usage-api/files/files/create-file-in-my-documents.md) (Create a file in My documents)
- [`POST api/2.0/files/@my/html`](../../usage-api/files/files/create-html-file-in-my-documents.md) (Create an HTML file in My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/@my/insert`](../../usage-api/files/folders/insert-file-to-my-from-body.md) (Insert a file into My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/@my/text`](../../usage-api/files/files/create-text-file-in-my-documents.md) (Create a text file in My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/@my/upload`](../../usage-api/files/folders/upload-file-to-my.md) (Upload a file to My documents), for a new file and for a new version of an existing file
- [`POST api/2.0/files/file/{fileId}/copyas`](../../usage-api/files/files/copy-file-as.md) (Copy a file)
- [`POST api/2.0/files/file/{id}/saveaspdf`](../../usage-api/files/files/save-file-as-pdf.md) (Save a file as PDF)
- [`POST api/2.0/files/{folderId}/file`](../../usage-api/files/files/create-file.md) (Create a file)
- [`POST api/2.0/files/{folderId}/html`](../../usage-api/files/files/create-html-file.md) (Create an HTML file), for a new file and for a new version of an existing file
- [`POST api/2.0/files/{folderId}/insert`](../../usage-api/files/folders/insert-file.md) (Insert a file), for a new file and for a new version of an existing file
- [`POST api/2.0/files/{folderId}/text`](../../usage-api/files/files/create-text-file.md) (Create a text file), for a new file and for a new version of an existing file
- [`POST api/2.0/files/{folderId}/upload`](../../usage-api/files/folders/upload-file.md) (Upload a file), for a new file and for a new version of an existing file
- `POST apisystem/portal/licensequota/report` (Generate the Document Server license quota report), for the report file it saves into the caller's personal section, unless there is no license quota data to report

Also raised by an AI agent during a chat, for every document, presentation or form it creates with its editor tools.

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
