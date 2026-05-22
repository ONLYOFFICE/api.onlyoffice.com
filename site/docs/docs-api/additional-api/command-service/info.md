# info

Requests a document status and the list of the identifiers of the users who opened the document for editing. The response will be sent to the [callback handler](../../usage-api/callback-handler.md).

## Request example

```json
{
  "c": "info",
  "key": "Khirz6zTPdfd7",
  "userdata": "sample userdata"
}
```

## Request parameters

| Parameter | Type   | Presence | Description                                                                                                       |
| --------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| c         | string | required | The command type.                                                                                         |
| key       | string | required | The document identifier used to unambiguously identify the document file.                                 |
| userdata  | string | optional | Some custom identifier which will help distinguish the specific request in case there were more than one. |

## Response example

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7",
  "users": ["6d5a81d0", "78e1e841"]
}
```

## Response parameters

| Parameter | Type             | Presence | Description                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error     | integer          | required | An error code.                                                                                                                                                                                                                                                                                                                                                                |
| key       | string           | required | The document identifier used to unambiguously identify the document file.                                                                                                                                                                                                                                                                                                     |
| users     | string[] | required | The list of the identifiers of the users who opened the document for editing. When the document has been changed, the *users* will return the identifier of the user who was the last to edit the document (for [status 2](../../usage-api/callback-handler.md#status-2-3) and [status 6](../../usage-api/callback-handler.md#status-6-7) replies). |
