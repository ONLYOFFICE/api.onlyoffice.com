# GetActiveTable

返回当前文档中的当前表格。

## 语法

```javascript
expression.GetActiveTable();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

获取文档中当前包含光标的表格。

```javascript editor-docx
// GetActiveTable returns an ApiTable object when the cursor is inside a table, or null otherwise.

// Create a table, move the cursor into it, then get the active table to read its row count.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
let activeTable = doc.GetActiveTable();
let paragraph = Api.CreateParagraph();
paragraph.AddText(activeTable ? "Active table rows: " + activeTable.GetRowsCount() : "No active table.");
doc.Push(paragraph);
```
