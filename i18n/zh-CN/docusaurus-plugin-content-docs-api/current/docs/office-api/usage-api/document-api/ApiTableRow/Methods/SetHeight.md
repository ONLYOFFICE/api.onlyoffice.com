# SetHeight

设置当前表格中当前表格行的高度。

继承自 [ApiTableRowPr.SetHeight](../../ApiTableRowPr/Methods/SetHeight.md)。

## 示例

定义文档中表格行的高度。

```javascript editor-docx
// How do I control how tall a row appears inside a table in a document?

// Adjust the vertical size of a table row to a fixed minimum in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
