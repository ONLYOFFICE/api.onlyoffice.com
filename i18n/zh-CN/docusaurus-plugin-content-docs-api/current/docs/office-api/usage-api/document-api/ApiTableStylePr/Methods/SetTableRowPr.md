# SetTableRowPr

设置当前表格样式属性的表格行属性。

## 语法

```javascript
expression.SetTableRowPr(oTableRowPr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTableRowPr | 必需 | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | 将要设置的表格行属性。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

此示例展示如何创建和设置将应用于表格中符合条件格式类型的所有行的表格行属性。

```javascript editor-docx
// How to set table row properties to table style and set its height.

// Update the table style table row properties.

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
