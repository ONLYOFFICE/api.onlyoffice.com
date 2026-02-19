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

How to get a class type of ApiTable.

```javascript editor-pdf
// Retrieve class type of ApiTable object and insert it to the page.

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
