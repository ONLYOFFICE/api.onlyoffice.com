# SetColumnWidth

Sets the width of the specified column in the current table.

## Syntax

```javascript
expression.SetColumnWidth(columnIndex, width);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | Required | number |  | The zero-based column index. |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The column width measured in English measure units. |

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

Set the width of table columns in a PDF.

```javascript editor-pdf
// Make one table column wider or narrower than the others in a PDF.

// Create a table and set custom widths for specific columns in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const widthCol1 = table.SetColumnWidth(1, Api.MillimetersToEmus(50));
const widthCol2 = table.SetColumnWidth(2, 0);

page.AddObject(table);

const row0 = table.GetRow(0);
const cell0 = row0.GetCell(0);
const content0 = cell0.GetContent();
const paragraph1 = Api.CreateParagraph();
paragraph1.AddText('Middle column width: ' + Api.EmusToMillimeters(widthCol1) + ' mm');
content0.Push(paragraph1);

const row1 = table.GetRow(1);
const cell1 = row1.GetCell(0);
const content1 = cell1.GetContent();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Right column width (set to 0): ' + Api.EmusToMillimeters(widthCol2) + ' mm');
content1.Push(paragraph2);
```
