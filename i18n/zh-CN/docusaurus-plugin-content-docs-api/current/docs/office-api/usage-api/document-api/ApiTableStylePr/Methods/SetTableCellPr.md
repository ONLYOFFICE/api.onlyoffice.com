# SetTableCellPr

设置当前表格样式属性的表格单元格属性。

## 语法

```javascript
expression.SetTableCellPr(oTableCellPr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTableCellPr | 必需 | [ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md) |  | 将要设置的表格单元格属性。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

在文档中为表格样式的条件区域应用单元格格式。

```javascript editor-docx
// How do I set the background shading for cells in a specific part of a table style in a document?

// Assign visual cell appearance to a targeted section of a styled table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", 0xEE, 0xEE, 0xEE);
tableStylePr.SetTableCellPr(tableCellPr);

table.SetStyle(tableStyle);
doc.Push(table);
```
