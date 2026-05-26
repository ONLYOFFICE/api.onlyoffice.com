# GetHeight

Returns the height of the current table row.

## Syntax

```javascript
expression.GetHeight();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

Get the height of a table row after setting it.

```javascript editor-pptx
// Create a table, set the row height, and retrieve the value.

// Display the row height in EMU units in the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(Api.MillimetersToEmus(20));

slide.RemoveAllObjects();
slide.AddObject(table);

const height = row.GetHeight();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row height: ' + height + ' EMU');
content.Push(paragraph);
```
