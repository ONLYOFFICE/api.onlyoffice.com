# SetSize

Sets the table size.

## Syntax

```javascript
expression.SetSize(width, height);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The table width measured in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The table height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

Set the width and height of a table in a presentation.

```javascript editor-pptx
// Specify custom dimensions for the table object.

// Create a table and set its width and height values.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 4);
table.SetSize(220 * 36000, 110 * 36000);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table size: 220 x 110 millimeters.');
content.Push(paragraph);

slide.AddObject(table);
```
