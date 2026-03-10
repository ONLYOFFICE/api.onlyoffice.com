# CreateParaPr

创建空的段落属性。

## 语法

```javascript
expression.CreateParaPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

此示例展示如何创建和使用段落属性。

```javascript editor-docx
// How to set paragraph properties to the table style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("firstRow");
table.SetTableLook(true, true, true, true, true, true);
let paraPr = Api.CreateParaPr();
paraPr.SetJc("center");
tableStylePr.SetParaPr(paraPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center.");
table.SetStyle(tableStyle);
doc.Push(table);
```
