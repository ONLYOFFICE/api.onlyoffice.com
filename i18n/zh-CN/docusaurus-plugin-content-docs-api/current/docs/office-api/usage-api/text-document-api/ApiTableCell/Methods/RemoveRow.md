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

此示例删除包含该单元格的行。

```javascript editor-docx
// How to delete the row with Cell 1.

// Get the first cell and remove its rowd. 

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
