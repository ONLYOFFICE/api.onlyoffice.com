# CreateTableCellPr

Creates the empty table cell properties.

## Syntax

```javascript
expression.CreateTableCellPr();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md)

## Example

This example shows how to create and use the table cell properties.

```javascript editor-docx playground
// How to create the table cell properties and set it to table style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", 0xEE, 0xEE, 0xEE);
tableStylePr.SetTableCellPr(tableCellPr);

table.SetStyle(tableStyle);
doc.Push(table);
```
