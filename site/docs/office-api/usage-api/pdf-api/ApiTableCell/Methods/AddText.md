# AddText

Appends text to the end of the cell content.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to append. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Append text to the last paragraph in a table cell in a PDF.

```javascript editor-pdf
// How do I add text to a table cell in a PDF?

// Insert a sentence into the last paragraph of a cell to populate a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");

page.AddObject(table);
```
