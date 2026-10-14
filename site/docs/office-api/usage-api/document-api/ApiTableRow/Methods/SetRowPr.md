# SetRowPr

Sets the properties to the current table row.

## Syntax

```javascript
expression.SetRowPr(oApiTableRowPr);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableRowPr | Required | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | The table row properties. |

## Returns

boolean

## Example

Set the formatting properties for a table row in a document.

```javascript editor-docx
// SetRowPr applies an ApiTableRowPr object to configure row appearance such as height.

// Create a table, build row properties with a fixed minimum height, and apply them to the first row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let row = table.GetRow(0);
let rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720);
row.SetRowPr(rowPr);
```
