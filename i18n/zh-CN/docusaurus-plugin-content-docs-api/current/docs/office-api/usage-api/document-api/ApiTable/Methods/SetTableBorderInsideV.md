# SetTableBorderInsideV

指定将在所有不在父表格最外边缘的垂直表格单元格边框上显示的边框
（所有非最左或最右边框的垂直边框）。

继承自 [ApiTablePr.SetTableBorderInsideV](../../ApiTablePr/Methods/SetTableBorderInsideV.md)。

## 示例

在文档中为表格内的列之间添加边框。

```javascript editor-docx
// How do I draw vertical dividing lines between the inner columns of a table in a document?

// Separate table columns from each other with interior vertical borders in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside vertical 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideV("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
