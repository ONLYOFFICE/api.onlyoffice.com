# GetRowsCount

Returns a number of rows in the current table.

## Syntax

```javascript
expression.GetRowsCount();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the number of rows in the table in a presentation.

```javascript editor-pptx
// Useful for counting the number of rows in a table.

// Create a table, add a row, and display the row count in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const countBefore = table.GetRowsCount();
table.AddRow(null, true);
const countAfter = table.GetRowsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Rows before: " + countBefore + ", after adding: " + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
