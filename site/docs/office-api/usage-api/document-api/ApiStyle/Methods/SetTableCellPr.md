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

Store cell-level formatting inside a table style so every cell inherits those settings in a document.

```javascript editor-docx
// How do I add background shading to all table cells by defining it once in a shared style in a document?

// Centralize cell appearance settings in a reusable style rather than formatting each cell individually in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", Api.HexColor('#FF6F3D'));
tableStyle.SetTableCellPr(tableCellPr);

let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
```
