# SetTableHeader

指定当前表格行将在显示此表格的每个新页面顶部重复显示。
这使该表格行在每个页面上具有“标题”行的行为。
此元素可应用于表格结构顶部的任意数量的行，
以生成多行表格标题。

继承自 [ApiTableRowPr.SetTableHeader](../../ApiTableRowPr/Methods/SetTableHeader.md)。

## 示例

将文档中的表格行标记为在每页重复作为表头。

```javascript editor-docx
// How do I make a row appear at the top of a table on each new page in a document?

// Designate a table row as a repeating header across page breaks in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetTableHeader(true);
table.SetStyle(tableStyle);
doc.Push(table);
```
