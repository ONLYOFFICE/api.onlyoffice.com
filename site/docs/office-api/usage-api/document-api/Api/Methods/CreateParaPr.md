# CreateParaPr

Creates the empty paragraph properties.

## Syntax

```javascript
expression.CreateParaPr();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

Apply custom paragraph alignment to a table row style in a document.

```javascript editor-docx
// How do I center-align text in the first row of a table style in a document?

// Set up a reusable table style with centered paragraph formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("firstRow");
table.SetTableLook(true, true, true, true, true, true);
let paraPr = Api.CreateParaPr();
paraPr.SetJc("center");
tableStylePr.SetParaPr(paraPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center.");
table.SetStyle(tableStyle);
doc.Push(table);
```
