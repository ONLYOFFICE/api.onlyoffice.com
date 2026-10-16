# GetHeight

Gets the height from the current table row.

## Syntax

```javascript
expression.GetHeight();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Read the height of a table row in a PDF.

```javascript editor-pdf
// Useful for checking row dimensions before resizing a table in a PDF.

// Retrieve the current row height measurement in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
page.AddObject(table);

const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const rowHeight = row.GetHeight();
row.GetCell(0).AddText("Row height: " + rowHeight);
```
