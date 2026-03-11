# SetTableRowPr

Sets the table row properties to the current table style properties.

## Syntax

```javascript
expression.SetTableRowPr(oTableRowPr);
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTableRowPr | Required | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | The table row properties that will be set. |

## Returns

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## Example

This example shows how to create and set the table row properties which will be applied to all the rows within a table which match the conditional formatting type.

```javascript editor-docx
// How to set table row properties to table style and set its height.

// Update the table style table row properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
let tableRowPr = Api.CreateTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
tableStylePr.SetTableRowPr(tableRowPr);

table.SetStyle(tableStyle);
doc.Push(table);
```
