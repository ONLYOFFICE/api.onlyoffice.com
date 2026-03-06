# SetBackgroundColor

Sets the background color to all cells in the current table row.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

This example sets the background color to all cells in the table row.

```javascript editor-docx playground
// Color the row background.

// How to set the rose color as a row background.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);

```
