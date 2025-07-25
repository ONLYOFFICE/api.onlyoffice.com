# SetBackgroundColor

Sets the background color to all cells in the current table row.

## Syntax

```javascript
expression.SetBackgroundColor(r, g, b, bNone);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

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

This example sets the background color to all cells in the table row.

```javascript editor-docx
// Color the row background.

// How to set the rose color as a row background.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(255, 111, 61, false);
doc.Push(table);
```
