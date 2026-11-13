# folder.created

> FolderDelivery folderCreated

`POST` to the URL of the subscription

Sent on the `folder.created` event. The body is a FolderDelivery, whose `payload` is a FolderPayload. Roles that may subscribe to it: `DocSpaceAdmin`, `RoomAdmin`, `User`.

Raised by these REST API operations:

- [`POST api/2.0/files/folder/{folderId}`](../../usage-api/files/folders/create-folder.md) (Create a folder)
- [`POST api/2.0/migration/migrate`](../../usage-api/migration/start-migration.md) (Start migration), for every folder the queued import creates, including one per imported user for their files
- [`PUT api/2.0/people/delete`](../../usage-api/people/profiles/remove-users.md) (Delete users), for every deleted account that shared files, once the job creates a folder for them
- [`POST api/2.0/people/delete/personal/start`](../../usage-api/people/user-data/start-delete-personal-folder.md) (Delete the personal folder), when the job moves shared files of the caller to a new folder of another member
- [`POST api/2.0/people/reassign/start`](../../usage-api/people/user-data/start-reassign.md) (Start the data reassignment), when the job creates a folder for shared files, but not `room.updated` for moved rooms
- [`POST api/2.0/people/remove/start`](../../usage-api/people/user-data/start-remove.md) (Start the data deletion), when the job moves shared files to a new folder of the caller, but no `user.deleted`
- [`DELETE api/2.0/people/{userId}`](../../usage-api/people/profiles/delete-member.md) (Delete a user), once the data deletion job creates a folder for the files that the account shared

Also raised by the automatic clean-up of a guest's personal folder left unchanged for 30 days, once for the folder it creates in the personal section of the member who takes over the files and folders the guest shared from it.

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
