# SetTablePr

设置当前表格样式属性的表格属性。

## 语法

```javascript
expression.SetTablePr(oTablePr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTablePr | 必需 | [ApiTablePr](../../ApiTablePr/ApiTablePr.md) |  | 将要设置的表格属性。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

此示例展示如何创建和设置将应用于表格中符合条件格式类型的所有区域的表格属性。

```javascript editor-docx
// How to set table properties to table style and set its bottom border.

// Update the table style table properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
let tablePr = tableStylePr.GetTablePr();
tablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
tableStylePr.SetTablePr(tablePr);

table.SetStyle(tableStyle);
doc.Push(table);
```
