# SetBackgroundColor

Sets the background color to the current table cell.

## Syntax

```javascript
expression.SetBackgroundColor(r, g, b, bNone);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| bNone | Required | boolean |  | Defines that background color will not be set. |

## Returns

boolean

## Example

This example sets the background color to the table cell.

```javascript editor-docx
// How to color the cell.

// Get the first cell from the table and set its background color.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);
doc.Push(table);
```
