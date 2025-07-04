# Split

Splits the cell into a given number of rows and columns.

## Syntax

```javascript
expression.Split(oCell, nRow, nCol);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell which will be split. |
| nRow | Optional | Number | 1 | Count of rows into which the cell will be split. |
| nCol | Optional | Number | 1 | Count of columns into which the cell will be split. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

This example splits the cell into a given number of rows and columns.

```javascript editor-docx
// How to divide the table cell.

// Split the table cell into specific number of rows and columns.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
table.Split(cell, 2, 2);
```
