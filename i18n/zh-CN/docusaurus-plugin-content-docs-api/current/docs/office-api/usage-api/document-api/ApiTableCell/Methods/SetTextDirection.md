# SetTextDirection

指定此表格单元格的文本流方向。

继承自 [ApiTableCellPr.SetTextDirection](../../ApiTableCellPr/Methods/SetTextDirection.md)。

## 示例

更改文档中表格单元格内文本的流动方向。

```javascript editor-docx
// How do I rotate or reorient the text inside a table cell in a document?

// Display text vertically rather than horizontally within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetTextDirection("btlr");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
table.SetStyle(tableStyle);
doc.Push(table);
```
