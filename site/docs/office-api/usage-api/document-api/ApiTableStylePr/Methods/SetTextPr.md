# SetTextPr

Sets the text properties to the current table style properties.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set. |

## Returns

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## Example

Apply text formatting to a conditional region of a table style in a document.

```javascript editor-docx
// How do I make the text bold in a specific part of a table style in a document?

// Define the text appearance for a targeted section of a styled table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
tableStylePr.SetTextPr(textPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("Bold text");
paragraph = table.GetRow(0).GetCell(1).GetContent().GetElement(0);
paragraph.AddText("Normal text");

table.SetStyle(tableStyle);
doc.Push(table);
```
