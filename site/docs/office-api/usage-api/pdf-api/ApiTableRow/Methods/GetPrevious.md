# GetPrevious

Returns the previous row if exists.

## Syntax

```javascript
expression.GetPrevious();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## Example

Get the previous row of a table in a PDF.

```javascript editor-pdf
// Access the row that precedes the current one in a table in a PDF.

// Display text in the second and first rows using GetPrevious in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const secondRow = table.GetRow(1);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('Second row');
secondRow.GetCell(0).GetContent().Push(para2);
secondRow.GetPrevious().GetCell(0).GetContent().Push(para);

page.AddObject(table);
```
