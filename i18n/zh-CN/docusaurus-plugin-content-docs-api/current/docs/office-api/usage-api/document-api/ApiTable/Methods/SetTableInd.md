# SetTableInd

指定将在文档中当前表格的前缘之前添加的缩进
（从左到右表格中的左边缘，以及从右到左表格中的右边缘）。

继承自 [ApiTablePr.SetTableInd](../../ApiTablePr/Methods/SetTableInd.md)。

## 示例

设置文档中表格的左缩进。

```javascript editor-docx
// How do I control how far a table is pushed in from the left margin in a document?

// Shift a table away from the left edge by applying an indentation value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableInd(1440);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
