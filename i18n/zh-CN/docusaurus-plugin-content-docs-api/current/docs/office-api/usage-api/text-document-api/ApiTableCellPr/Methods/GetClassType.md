# GetClassType

返回 ApiTableCellPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableCellPr"

## 示例

获取文档中表格单元格属性的类类型。

```javascript editor-docx
// How to identify the class type of a table cell properties?

// Obtain the class type identifier of a table cell properties object.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableCellPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
