# SetStyleColBandSize

指定此表格样式中每个表格列带包含的列数。

## 语法

```javascript
expression.SetStyleColBandSize(nCount);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 以正整数表示的列数。 |

## 返回值

boolean

## 示例

此示例指定此表格样式中每个表格列带包含的列数。

```javascript editor-docx
// How to set column band size.

// How to style a column band size.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(3).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(3).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);
```
