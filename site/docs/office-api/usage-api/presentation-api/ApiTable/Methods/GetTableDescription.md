# GetTableDescription

Returns the table description.

## Syntax

```javascript
expression.GetTableDescription();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the description of the table in a presentation.

```javascript editor-pptx
// Needed when retrieving a table description.

// Create a table, set its description, and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableDescription("Sales data for Q1 2025");
const description = table.GetTableDescription();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table description: " + description);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
