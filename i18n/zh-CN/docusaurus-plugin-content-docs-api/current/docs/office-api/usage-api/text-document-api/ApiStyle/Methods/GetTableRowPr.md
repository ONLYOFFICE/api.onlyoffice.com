# GetTableRowPr

返回当前样式的表格行属性。

## 语法

```javascript
expression.GetTableRowPr();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## 示例

此示例展示如何获取当前样式的表格行属性。

```javascript editor-docx
// How to get table row and set its height.

// Resize the row of the table.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, false, false);
tableStyle.GetTableRowPr().SetHeight("atLeast", 1440);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
```
