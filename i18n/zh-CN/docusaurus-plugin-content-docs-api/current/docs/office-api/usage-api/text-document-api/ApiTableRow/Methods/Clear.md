# Clear

清除当前行的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除行的内容。

```javascript editor-docx
// How to delete the content of the first row.

// Remove the text from the table row.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.Clear();
row = table.GetRow(1);
row.GetCell(0).GetContent().GetElement(0).AddText("The first row content was cleared.");
doc.Push(table);
```
