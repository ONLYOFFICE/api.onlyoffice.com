# GetTableCellPr

返回将应用于表格中符合条件格式类型的所有单元格的表格单元格属性集。

## 语法

```javascript
expression.GetTableCellPr();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md)

## 示例

访问文档中与条件表格样式关联的单元格格式。

```javascript editor-docx
// How do I read and change cell appearance settings for a specific area of a table in a document?

// Apply background shading to cells matched by a table style condition in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTableCellPr().SetShd("clear", 0xEE, 0xEE, 0xEE);
table.SetStyle(tableStyle);
doc.Push(table);
```
