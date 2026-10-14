# GetInternalId

Returns an internal ID of the current table.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal identifier of the table in a presentation.

```javascript editor-pptx
// Useful for getting a unique identifier of a table.

// Create a table and display its internal id in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const id = table.GetInternalId();
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table id: " + id);
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
