# SetStyleRowBandSize

Specifies a number of rows which will comprise each table row band for this table style.

Inherited from [ApiTablePr.SetStyleRowBandSize](../../ApiTablePr/Methods/SetStyleRowBandSize.md).

## Syntax

```javascript
expression.SetStyleRowBandSize(nCount);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of rows measured in positive integers. |

## Returns

boolean

## Example

Set how many rows form a repeating band pattern in a table style in a document.

```javascript editor-docx
// How do I control the height of alternating row groups in a table in a document?

// Group multiple rows together so they share the same banded formatting in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.Cells[0][0].AddText("Normal");
table.Cells[0][1].AddText("Normal");
table.Cells[1][0].AddText("Bold");
table.Cells[1][1].AddText("Bold");
table.Cells[2][0].AddText("Bold");
table.Cells[2][1].AddText("Bold");
table.Cells[3][0].AddText("Normal");
table.Cells[3][1].AddText("Normal");
doc.Push(table);
```
