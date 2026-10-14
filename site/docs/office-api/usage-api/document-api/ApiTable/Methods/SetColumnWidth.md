# SetColumnWidth

Sets the width of the specified column (by index) of the current table.

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

Set the width of a specific table column in a document.

```javascript editor-docx
// Apply a width value measured in English measure units to a single column.

// Create a 3x3 table and widen its first column to 40 millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetColumnWidth(0, Api.MillimetersToEmus(40));
```
