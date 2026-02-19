# SetColumnBackgroundColor

Sets the background color to all cells in the column containing the current cell.

## Syntax

```javascript
expression.SetColumnBackgroundColor(color);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

This example sets the background color to all cells in the column containing the cell.

```javascript editor-docx
// How to color the cell column background.

// Set the rose color as a background color of the cell column.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(255, 111, 61, false);
doc.Push(table);
```
