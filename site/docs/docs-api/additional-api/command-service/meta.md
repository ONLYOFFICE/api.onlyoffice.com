# meta

Updates the meta information of the document for all collaborative editors.

## Request example

``` json
{
  "c": "meta",
  "key": "Khirz6zTPdfd7",
  "meta": {
    "title": "Example Document Title.docx"
  }
}
```

## Parameters

| Parameter  | Type   | Presence | Description                                                                       |
|------------|--------|----------|-----------------------------------------------------------------------------------|
| c          | string | required | Defines the command type.                                                         |
| key        | string | required | Defines the document identifier used to unambiguously identify the document file. |
| meta       | object | required | Defines the new meta information of the document.                                 |
| meta.title | string | required | Defines the new document name.                                                    |

## Response example

``` json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## Parameters

| Parameter | Type    | Presence | Description                                                                       |
|-----------|---------|----------|-----------------------------------------------------------------------------------|
| error     | integer | required | Defines an error code.                                                            |
| key       | string  | required | Defines the document identifier used to unambiguously identify the document file. |
