# GetClassType

Returns the type of the ApiTable object.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"table"

## Example

Retrieve the class type of a table in a PDF document.

```javascript editor-pdf
// How to identify the class type of a table in a PDF document?

// Obtain the class type identifier of a table object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = table.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

page.AddObject(table);
```
