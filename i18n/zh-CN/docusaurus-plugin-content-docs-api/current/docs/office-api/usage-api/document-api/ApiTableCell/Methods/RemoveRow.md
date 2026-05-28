# RemoveRow

删除包含当前单元格的行。

## 语法

```javascript
expression.RemoveRow();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

通过定位其中一个单元格来删除文档中的整个行。

```javascript editor-docx
// How do I remove a row from a table using a cell reference in a document?

// Erase a whole table row by selecting any cell within it in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 0).RemoveRow();
table.GetCell(0, 0).GetContent().GetElement(0).AddText("A row with Cell 1 was removed.");
```
