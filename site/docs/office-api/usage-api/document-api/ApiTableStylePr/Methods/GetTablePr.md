# GetTablePr

Returns a set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.

## Syntax

```javascript
expression.GetTablePr();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## Example

Access the table formatting tied to a conditional table style in a document.

```javascript editor-docx
// How do I read and update the overall table settings for a conditional style region in a document?

// Set a border on a table region by modifying its conditional style properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTablePr().SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
```
