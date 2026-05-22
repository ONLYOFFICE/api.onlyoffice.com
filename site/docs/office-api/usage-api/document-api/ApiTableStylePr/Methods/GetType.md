# GetType

Returns a type of the current table conditional style.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md)

## Example

Read the conditional region identifier assigned to a table style in a document.

```javascript editor-docx
// How do I find out which part of a table a style condition targets in a document?

// Identify the area of the table that a conditional formatting rule applies to in a document.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
tableStyle.SetName("My Custom Style");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetStyle(tableStyle);
doc.Push(table);
let tableStylePrType = tableStylePr.GetType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Style type = " + tableStylePrType);
```
