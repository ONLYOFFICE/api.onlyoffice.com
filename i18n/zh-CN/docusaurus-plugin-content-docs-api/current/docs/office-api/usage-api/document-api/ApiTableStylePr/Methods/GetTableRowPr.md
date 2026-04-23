# GetTableRowPr

返回将应用于表格中符合条件格式类型的所有行的表格行属性集。

## 语法

```javascript
expression.GetTableRowPr();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## 示例

此示例展示如何获取将应用于表格中符合条件格式类型的所有行的表格行属性集。

```javascript editor-docx
// How to get table properties and set its height.

// Update the table row properties by setting its style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTableRowPr().SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
