# GetNext

Returns the next row if exists.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## Example

Get the next row of a table in a PDF.

```javascript editor-pdf
// Access the row that follows the current one in a table in a PDF.

// Display text in the first and second rows using GetNext in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const firstRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('Second row');
firstRow.GetCell(0).GetContent().Push(para);
firstRow.GetNext().GetCell(0).GetContent().Push(para2);

page.AddObject(table);
```
