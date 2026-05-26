# meta

Updates the meta information of the document for all collaborative editors.

## Request example

```json
{
  "c": "meta",
  "key": "Khirz6zTPdfd7",
  "meta": {
    "title": "Example Document Title.docx"
  }
}
```

## Request parameters

| Parameter  | Type   | Presence | Description                                                                       |
|------------|--------|----------|-----------------------------------------------------------------------------------|
| c          | string | required | The command type.                                                         |
| key        | string | required | The document identifier used to unambiguously identify the document file. |
| meta       | object | required | The new meta information of the document.                                 |
| meta.title | string | required | The new document name.                                                    |

## Response example

```json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## Response parameters

| Parameter | Type    | Presence | Description                                                                       |
|-----------|---------|----------|-----------------------------------------------------------------------------------|
| error     | integer | required | An error code.                                                            |
| key       | string  | required | The document identifier used to unambiguously identify the document file. |
