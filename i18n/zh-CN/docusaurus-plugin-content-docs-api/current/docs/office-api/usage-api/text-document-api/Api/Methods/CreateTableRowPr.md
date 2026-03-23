# CreateTableRowPr

创建空的表格行属性。

## 语法

```javascript
expression.CreateTableRowPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## 示例

此示例展示如何创建和使用表格行属性。

```javascript editor-docx
// How to create table row properties and set it to table style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
let tableRowPr = Api.CreateTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
tableStylePr.SetTableRowPr(tableRowPr);

table.SetStyle(tableStyle);
doc.Push(table);
```
