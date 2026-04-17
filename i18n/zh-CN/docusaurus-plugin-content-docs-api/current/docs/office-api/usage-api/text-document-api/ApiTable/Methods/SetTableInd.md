# SetTableInd

指定将在文档中当前表格的前缘之前添加的缩进
（从左到右表格中的左边缘，以及从右到左表格中的右边缘）。

Inherited from [ApiTablePr.SetTableInd](../../ApiTablePr/Methods/SetTableInd.md).

## 示例

此示例指定将在文档中表格前缘之前添加的缩进。

```javascript editor-docx
// How to display the table description in the document.

// Get the table description from the table properties.

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

