# GetTableCellPr

返回当前样式的表格单元格属性。

## 语法

```javascript
expression.GetTableCellPr();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md)

## 示例

此示例展示如何获取样式的表格单元格属性。

```javascript editor-docx
// How to get table cell properties and add shading to it.

// Update the table cell background.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
```
