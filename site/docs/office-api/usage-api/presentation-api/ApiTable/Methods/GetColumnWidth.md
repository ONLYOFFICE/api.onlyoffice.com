# GetColumnWidth

Returns the width of the specified column (by index) of the current table.

## Syntax

```javascript
expression.GetColumnWidth(columnIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | Required | number |  | The zero-based column index. |

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

Measure the width of a table column in a presentation.

```javascript editor-pptx
// How do I find out how wide a table column is in a presentation?

// Read the column width value and display it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
table.SetColumnWidth(0, Api.MillimetersToEmus(100));
const width = table.GetColumnWidth(0);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Column 0 width: ' + width + ' EMU');
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
