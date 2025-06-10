# GetClassType

Returns a type of the ApiTableCell class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableCell"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Cell #1");
table.SetStyle(tableStyle);
doc.Push(table);
let classType = cell.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
