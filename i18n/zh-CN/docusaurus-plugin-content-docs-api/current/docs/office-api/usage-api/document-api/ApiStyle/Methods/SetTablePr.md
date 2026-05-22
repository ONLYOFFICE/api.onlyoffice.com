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

将整体表格布局设置附加到样式，以便文档中使用它的每个表格看起来一致。

```javascript editor-docx
// How do I define cell margins and table indentation once inside a style instead of per table in a document?

// Standardize spacing and alignment across multiple tables by storing those settings in a shared style in a document.

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
