# SetTextPr

Sets the text properties to the current row.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current row. |

## Returns

boolean

## Example

Apply text formatting to all cells in a table row in a document.

```javascript editor-docx
// How do I change the text style for an entire row of a table in a document?

// Style the text across a full table row uniformly in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.SetTextPr(textPr);
doc.Push(table);
```
