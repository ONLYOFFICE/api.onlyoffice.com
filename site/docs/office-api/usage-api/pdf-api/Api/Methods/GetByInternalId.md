# GetByInternalId

Returns the object by it's internal ID.

## Syntax

```javascript
expression.GetByInternalId(id);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | the object internal ID. |

## Returns

[FloatObject](../../Enumeration/FloatObject.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| [ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Get an object by its internal ID in a PDF.

```javascript editor-pdf
// Useful for finding a PDF API object by its internal identifier.

// Create a field, get its internal ID, and retrieve the same field by that ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let internalId = textField.GetInternalId();
let fieldById = Api.GetByInternalId(internalId);
fieldById.SetValue("Field was found by internal ID");
```
