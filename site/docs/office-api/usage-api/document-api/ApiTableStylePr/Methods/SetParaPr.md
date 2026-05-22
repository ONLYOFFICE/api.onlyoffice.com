# SetParaPr

Sets the paragraph properties to the current table style properties.

## Syntax

```javascript
expression.SetParaPr(oParaPr);
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oParaPr | Required | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | The paragraph properties that will be set. |

## Returns

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## Example

Apply paragraph formatting to a conditional region of a table style in a document.

```javascript editor-docx
// How do I control paragraph alignment for a specific part of a table style in a document?

// Assign paragraph layout settings to a targeted section of a styled table in a document.

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
