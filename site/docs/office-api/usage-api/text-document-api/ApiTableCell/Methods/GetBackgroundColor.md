# GetBackgroundColor

Returns the background color of the current table cell.

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Set and get the background color of the current table cell in a document.

```javascript editor-docx
// How can I get the background color using a table cell in a document?

// Get the background color for a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);

let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#afafff'));
const backgroundColor = cell.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has the same color as the table cell background: ' + backgroundColor.GetHex());
paragraph.SetColor(backgroundColor);
doc.Push(table);
```
