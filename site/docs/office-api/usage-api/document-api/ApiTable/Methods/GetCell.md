# GetCell

Returns a cell by its position.

## Syntax

```javascript
expression.GetCell(rowIndex, cellIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | Required | number |  | The row index in the current table. |
| cellIndex | Required | number |  | The cell index in the specified row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Access a specific cell by its row and column position in a document.

```javascript editor-docx
// How do I retrieve a particular cell from a table in a document?

// Target an individual cell using its coordinates to write content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.GetContent().GetElement(0).AddText("Cell #1");
```
