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

Get the number of columns in the table in a presentation.

```javascript editor-pptx
// Useful for counting the number of columns in a table.

// Create a table, add a column, and display the column count in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const countBefore = table.GetColumnsCount();
table.AddColumn();
const countAfter = table.GetColumnsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Columns before: " + countBefore + ", after adding: " + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
