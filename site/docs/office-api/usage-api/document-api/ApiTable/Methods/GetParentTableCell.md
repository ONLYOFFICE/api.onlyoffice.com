# GetParentTableCell

Returns a table cell that contains the current table.

## Syntax

```javascript
expression.GetParentTableCell();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

Access the cell that directly contains a nested table in a document.

```javascript editor-docx
// How do I find the cell that holds a nested table in a document?

// Locate the surrounding cell so its appearance can be adjusted in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
doc.Push(table1);
let table2 = Api.CreateTable(2, 2);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
let cell = table1.GetCell(0, 0);
table1.AddElement(cell, 0, table2);
let parentTableCell = table2.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));
```
