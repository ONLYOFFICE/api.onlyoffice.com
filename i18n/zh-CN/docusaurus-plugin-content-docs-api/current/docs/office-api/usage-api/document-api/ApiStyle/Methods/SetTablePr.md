# SetTablePr

设置当前样式的表格属性。

## 语法

```javascript
expression.SetTablePr(tablePr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tablePr | 必需 | [ApiTablePr](../../ApiTablePr/ApiTablePr.md) |  | 将要设置的表格属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

此示例展示如何设置样式的表格属性。

```javascript editor-docx
// How to create table properties for style and set its cells margins.

// Update table properties in the style.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tablePr = Api.CreateTablePr();
tablePr.SetTableInd(0);
tablePr.SetTableCellMarginTop(720);
tablePr.SetTableCellMarginLeft(120);
tablePr.SetTableCellMarginRight(120);
tablePr.SetTableCellMarginBottom(0);
tableStyle.SetTablePr(tablePr);

doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
```
