# GetCell

Returns a cell by its position.

## Syntax

```javascript
expression.GetCell(cellIndex);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cellIndex | Required | number |  | The cell index in the current row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Access a specific cell by its position within a table row in a document.

```javascript editor-docx
// How do I select a single cell from a row using its index in a document?

// Pinpoint one cell in a row by its numbered position to work with its content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = tableRow.GetCell(1);
cell.SetVerticalAlign("bottom");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
