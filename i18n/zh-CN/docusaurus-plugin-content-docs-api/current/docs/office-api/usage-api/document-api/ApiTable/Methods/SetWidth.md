# SetWidth

设置当前表格的首选宽度。
💡 表格默认使用 [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) 方法属性创建，它始终覆盖 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法属性。因此尝试应用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 是无效的。我们建议您改用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法。

继承自 [ApiTablePr.SetWidth](../../ApiTablePr/Methods/SetWidth.md)。

## 示例

定义文档中表格相对于页面的宽度。

```javascript editor-docx
// How do I make a table span a specific percentage of the available page width in a document?

// Control the overall horizontal size of a table by specifying its width in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
