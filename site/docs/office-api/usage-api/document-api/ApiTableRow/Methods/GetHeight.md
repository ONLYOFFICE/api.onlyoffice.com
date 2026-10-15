# GetHeight

Returns the height of the current table row.

## Syntax

```javascript
expression.GetHeight();
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

Get the computed height of a table row in a document.

```javascript editor-docx
// Read the actual row height value measured in English measure units.

// Create a table, set a row height and read the resulting value back.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
let row = table.GetRow(0);
row.SetHeight("atLeast", 720);
let rowHeight = row.GetHeight();
let paragraph = doc.GetElement(0);
paragraph.AddText("Row height: " + rowHeight);
```
