# GetParaPr

返回将应用于表格中符合条件格式类型的所有段落的段落属性集。

## 语法

```javascript
expression.GetParaPr();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

此示例展示如何获取将应用于表格中符合条件格式类型的所有段落的段落属性集。

```javascript editor-docx
// How to get the paragraph properties.

// Get the table properties of the first row and obtain its paragraph properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("firstRow");
table.SetTableLook(true, true, true, true, true, true);
let paraPr = tableStylePr.GetParaPr();
paraPr.SetJc("center");
paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center.");
table.SetStyle(tableStyle);
doc.Push(table);
```
