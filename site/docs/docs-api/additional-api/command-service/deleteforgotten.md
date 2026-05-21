# deleteForgotten

Deletes a forgotten file.

## Request example

```json
{
  "c": "deleteForgotten",
  "key": "Khirz6zTPdfd7"
}
```

## Request parameters

| Parameter | Type   | Presence | Description                                                                       |
| --------- | ------ | -------- | --------------------------------------------------------------------------------- |
| c         | string | required | The command type.                                                         |
| key       | string | required | The document identifier used to unambiguously identify the document file. |

## Response example

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## Response parameters

| Parameter | Type    | Presence | Description                                                                       |
| --------- | ------- | -------- | --------------------------------------------------------------------------------- |
| error     | integer | required | An error code.                                                            |
| key       | string  | required | The document identifier used to unambiguously identify the document file. |
