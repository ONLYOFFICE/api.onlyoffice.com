# SetSize

Sets the table size.

## Syntax

```javascript
expression.SetSize(width, height);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The table width measured in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The table height measured in English measure units. |

## Returns

boolean

## Example

Set the width and height of a table in a PDF.

```javascript editor-pdf
// Give a table specific dimensions in a PDF.

// Create a table and set custom width and height values in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetSize(220 * 36000, 110 * 36000);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table size: 220 x 110 millimeters.');
content.Push(paragraph);

page.AddObject(table);
```
