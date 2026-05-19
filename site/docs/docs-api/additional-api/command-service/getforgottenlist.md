# getForgottenList

Requests a list of the forgotten files.

## Request example

``` json
{
  "c": "getForgottenList"
}
```

## Parameters

| Parameter | Type   | Presence | Description               |
| --------- | ------ | -------- | ------------------------- |
| c         | string | required | The command type. |

## Response example

``` json
{
  "error": 0,
  "keys": ["Khirz6zTPdfd7"]
}
```

## Parameters

| Parameter | Type    | Presence | Description                                                                                   |
| --------- | ------- | -------- | --------------------------------------------------------------------------------------------- |
| error     | integer | required | An error code.                                                                        |
| keys      | string  | required | A list of the document identifiers used to unambiguously identify the document files. |
