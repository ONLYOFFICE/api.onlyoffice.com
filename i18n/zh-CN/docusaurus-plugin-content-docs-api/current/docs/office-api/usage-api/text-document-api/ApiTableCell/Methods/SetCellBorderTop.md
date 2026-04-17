# SetCellBorderTop

设置将显示在当前表格单元格顶部的边框。

Inherited from [ApiTableCellPr.SetCellBorderTop](../../ApiTableCellPr/Methods/SetCellBorderTop.md).

## 示例

此示例设置将显示在表格单元格顶部的边框。

```javascript editor-docx
// How to add border to the top of the cell.

// Create a 3x3 table and add the top 4 point black border to cell #1.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the top 4 point black border to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderTop("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
```

