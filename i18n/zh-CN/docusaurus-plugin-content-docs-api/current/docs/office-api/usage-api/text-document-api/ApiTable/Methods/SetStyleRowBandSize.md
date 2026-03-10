# SetStyleRowBandSize

指定此表格样式中每个表格行带包含的行数。

## 语法

```javascript
expression.SetStyleRowBandSize(nCount);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 以正整数表示的行数。 |

## 返回值

boolean

## 示例

此示例指定此表格样式中每个表格行带包含的行数。

```javascript editor-docx
// How to set row band size.

// How to style a row band size.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(3).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(3).GetCell(1).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);
```
