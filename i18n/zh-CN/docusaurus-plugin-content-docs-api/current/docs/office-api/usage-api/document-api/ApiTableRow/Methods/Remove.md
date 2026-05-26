# Remove

删除当前表格行。

## 语法

```javascript
expression.Remove();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中的表格删除行。

```javascript editor-docx
// How do I permanently remove an unwanted row from a table in a document?

// Eliminate a specific row to shorten or clean up a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.Remove();
doc.Push(table);
```
