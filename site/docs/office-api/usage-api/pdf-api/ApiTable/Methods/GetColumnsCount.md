# GetColumnsCount

Returns a number of columns in the current table.

## Syntax

```javascript
expression.GetColumnsCount();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the number of columns in a table in a PDF.

```javascript editor-pdf
// Find out how many columns a table has in a PDF.

// Create a table, add a column, and display the column count in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const countBefore = table.GetColumnsCount();
table.AddColumn();
const countAfter = table.GetColumnsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Columns before: ' + countBefore + ', after adding: ' + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
