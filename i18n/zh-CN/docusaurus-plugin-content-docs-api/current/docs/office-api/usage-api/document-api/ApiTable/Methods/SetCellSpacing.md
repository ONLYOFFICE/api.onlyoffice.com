# SetCellSpacing

指定默认表格单元格间距（相邻单元格之间以及单元格与表格边缘之间的间距）。

继承自 [ApiTablePr.SetCellSpacing](../../ApiTablePr/Methods/SetCellSpacing.md)。

## 示例

指定默认的表格单元格间距。

```javascript editor-docx
// How to set the size of the cell spacing.

// Create a table and indicate its cell spacing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
tablePr.SetCellSpacing(720);
doc.Push(table);
```
