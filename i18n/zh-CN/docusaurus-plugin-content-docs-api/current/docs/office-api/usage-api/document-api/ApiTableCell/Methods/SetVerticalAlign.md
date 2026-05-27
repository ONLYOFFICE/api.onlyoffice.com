# SetVerticalAlign

指定当前表格单元格中文本内容的垂直对齐方式。

继承自 [ApiTableCellPr.SetVerticalAlign](../../ApiTableCellPr/Methods/SetVerticalAlign.md)。

## 示例

控制文档中表格单元格内文本的垂直位置。

```javascript editor-docx
// How do I align text to the top, middle, or bottom of a table cell in a document?

// Anchor cell content to a specific vertical position within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetVerticalAlign("bottom");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
