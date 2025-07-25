# SetTableCellMarginLeft

Specifies an amount of space which will be left between the left extent of the cell contents and the left\
border of all table cells within the parent table (or table row).

## Syntax

```javascript
expression.SetTableCellMarginLeft(nValue);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space to the left extent of the cell measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

This example specifies an amount of space which will be left between the left extent of the cell contents and the left border of all table cells within the parent table.

```javascript editor-docx
// How to add margin to the left of the cell.

// Create a 3x3 table and add the left cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginLeft(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
doc.Push(table);
```
