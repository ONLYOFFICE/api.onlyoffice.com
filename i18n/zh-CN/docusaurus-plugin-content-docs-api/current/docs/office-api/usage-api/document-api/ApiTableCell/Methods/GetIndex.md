# GetIndex

返回当前单元格的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

查找文档中表格单元格的列位置。

```javascript editor-docx
// How do I determine which column a table cell occupies in a document?

// Look up the column number of a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell index: " + table.GetCell(0, 0).GetIndex());
```
