# SetTableBorderInsideH

指定将在所有不在父表格最外边缘的水平表格单元格边框上显示的边框
（所有非顶部或底部边框的水平边框）。

继承自 [ApiTablePr.SetTableBorderInsideH](../../ApiTablePr/Methods/SetTableBorderInsideH.md)。

## 示例

在文档中为表格内的行之间添加边框。

```javascript editor-docx
// How do I draw horizontal dividing lines between the inner rows of a table in a document?

// Separate table rows from each other with interior horizontal borders in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside horizontal 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideH("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
