# SetTableCellPr

Sets the table cell properties to the current style.

## Syntax

```javascript
expression.SetTableCellPr(tableCellPr);
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tableCellPr | Required | [ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md) |  | The table cell properties that will be set. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how set get the table cell properties to the style.

```javascript editor-docx
// How to create table cell properties for style and add shading to it.

// Update the table cell properties in the style.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", 255, 111, 61);
tableStyle.SetTableCellPr(tableCellPr);

let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
```
