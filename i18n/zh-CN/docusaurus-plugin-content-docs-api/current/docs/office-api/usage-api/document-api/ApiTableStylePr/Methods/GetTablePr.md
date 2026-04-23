# GetTablePr

返回将应用于表格中符合条件格式类型的所有区域的表格属性集。

## 语法

```javascript
expression.GetTablePr();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## 示例

此示例展示如何获取将应用于表格中符合条件格式类型的所有区域的表格属性集。

```javascript editor-docx
// How to get table properties and set its bottom border.

// Update the table style by setting its border.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTablePr().SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
```
