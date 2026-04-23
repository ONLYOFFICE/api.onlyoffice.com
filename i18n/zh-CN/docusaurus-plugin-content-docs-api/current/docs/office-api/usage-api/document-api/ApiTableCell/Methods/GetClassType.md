# GetClassType

返回 ApiTableCell 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableCell"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-docx
// How to get a class type of ApiTableCell.

// Retrieve class type of ApiTableCell object and insert it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Cell #1");
table.SetStyle(tableStyle);
doc.Push(table);
let classType = cell.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
