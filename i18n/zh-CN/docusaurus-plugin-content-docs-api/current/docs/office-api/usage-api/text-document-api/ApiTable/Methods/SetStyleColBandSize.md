# SetStyleColBandSize

指定此表格样式中每个表格列带包含的列数。

Inherited from [ApiTablePr.SetStyleColBandSize](../../ApiTablePr/Methods/SetStyleColBandSize.md).

## 示例

此示例指定此表格样式中每个表格列带包含的列数。

```javascript editor-docx
// How to set column band size.

// How to style a column band size.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(3).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(3).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);
```

