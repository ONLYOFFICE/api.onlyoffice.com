# SetStyleRowBandSize

指定此表格样式中每个表格行带包含的行数。

## 语法

```javascript
expression.SetStyleRowBandSize(nCount);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 以正整数表示的行数。 |

## 返回值

boolean

## 示例

在文档中将多个相邻行组合为单个交替带。

```javascript editor-docx
// How do I make the striped row pattern span more than one row in a document?

// Widen the repeating row highlight bands applied by a table style in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.Cells[0][0].GetContent().AddText("Normal");
table.Cells[0][1].GetContent().AddText("Normal");
table.Cells[1][0].GetContent().AddText("Bold");
table.Cells[1][1].GetContent().AddText("Bold");
table.Cells[2][0].GetContent().AddText("Bold");
table.Cells[2][1].GetContent().AddText("Bold");
table.Cells[3][0].GetContent().AddText("Normal");
table.Cells[3][1].GetContent().AddText("Normal");
doc.Push(table);
```
