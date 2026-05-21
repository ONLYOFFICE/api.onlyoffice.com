# getForgotten

Requests a forgotten file.

## Request example

```json
{
  "c": "getForgotten",
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
  "key": "Khirz6zTPdfd7",
  "url": "https://documentserver/url-to-forgotten-document.docx"
}
```

## Response parameters

| Parameter | Type    | Presence | Description                                                                       |
| --------- | ------- | -------- | --------------------------------------------------------------------------------- |
| error     | integer | required | An error code.                                                            |
| key       | string  | required | The document identifier used to unambiguously identify the document file. |
| url       | string  | required | The URL to a forgotten file.                                              |
