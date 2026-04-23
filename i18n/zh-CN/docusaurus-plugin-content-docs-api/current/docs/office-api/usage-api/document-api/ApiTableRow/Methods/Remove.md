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

此示例删除表格行。

```javascript editor-docx
// Delete the row from the table.

// How to remove the first row.

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
