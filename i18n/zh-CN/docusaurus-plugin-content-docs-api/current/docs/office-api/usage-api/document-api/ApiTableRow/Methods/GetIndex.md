# GetIndex

返回当前行的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

查找文档中行在表格内的位置。

```javascript editor-docx
// How do I determine which row number a specific row occupies in a document?

// Retrieve the numeric position of a table row to reference it by order in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(1);
row.GetCell(0).GetContent().GetElement(0).AddText("Row index: " + row.GetIndex());
doc.Push(table);
```
