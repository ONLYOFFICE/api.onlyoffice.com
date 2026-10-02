# SetTextDirection

Specifies the direction of the text flow for this table cell.

Inherited from [ApiTableCellPr.SetTextDirection](../../ApiTableCellPr/Methods/SetTextDirection.md).

## Syntax

```javascript
expression.SetTextDirection(sType);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | The available types of the text direction in the table cell: `"lrtb"` - text direction left-to-right moving from top to bottom, `"tbrl"` - text direction top-to-bottom moving from right to left, `"btlr"` - text direction bottom-to-top moving from left to right. |

## Returns

boolean

## Example

Change the direction text flows inside a table cell in a document.

```javascript editor-docx
// How do I rotate or reorient the text inside a table cell in a document?

// Display text vertically or at a different angle within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = table.GetRow(0).GetCell(0);
cell.SetTextDirection("btlr");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
cell = table.GetRow(0).GetCell(1);
cell.SetTextDirection("tbrl");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("tbrl");
cell = table.GetRow(1).GetCell(0);
cell.SetTextDirection("lrtb");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("lrtb");
table.SetStyle(tableStyle);
doc.Push(table);
```
