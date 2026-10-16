# GetClassType

Returns a type of the ApiTableRowPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRowPr"

## Example

Get the class type of a table row properties object in a PDF.

```javascript editor-pdf
// Check that an object is a table row properties object in a PDF.

// Create empty row properties and display their class type in a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const rowPr = Api.CreateTableRowPr();
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
