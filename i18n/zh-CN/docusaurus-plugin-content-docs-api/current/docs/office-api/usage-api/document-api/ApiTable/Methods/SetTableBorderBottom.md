# SetTableBorderBottom

设置将在当前表格底部显示的边框。

继承自 [ApiTablePr.SetTableBorderBottom](../../ApiTablePr/Methods/SetTableBorderBottom.md)。

## 示例

在文档中为表格应用底部边框。

```javascript editor-docx
// How do I add a border along the bottom edge of a table in a document?

// Style the lower edge of a table with a visible border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the bottom 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyle(tableStyle);
doc.Push(table);
```
