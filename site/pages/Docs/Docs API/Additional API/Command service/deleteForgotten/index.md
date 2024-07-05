Description

Deletes a forgotten file.

Request example

```
{
    "c": "deleteForgotten",
    "key": "Khirz6zTPdfd7"
}
```

Parameters

| Parameter | Description                                                                       | Type   | Presence |
| --------- | --------------------------------------------------------------------------------- | ------ | -------- |
| c         | Defines the command type.                                                         | string | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string | required |

Response example

```
{
    "error": 0,
    "key": "Khirz6zTPdfd7"
}
```

Parameters

| Parameter | Description                                                                       | Type    | Presence |
| --------- | --------------------------------------------------------------------------------- | ------- | -------- |
| error     | Defines an error code.                                                            | integer | required |
| key       | Defines the document identifier used to unambiguously identify the document file. | string  | required |