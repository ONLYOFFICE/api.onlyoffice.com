# SetCellMarginBottom

指定表格中特定表格单元格的内容底边与
单元格边框之间的间距。

## 语法

```javascript
expression.SetCellMarginBottom(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格内容底边下方的间距值，以点的二十分之一为单位（1/1440 英寸）。如果此值为 &lt;code&gt;null&lt;/code&gt;，则使用默认的表格单元格下边距，否则将使用当前单元格的指定值覆盖表格单元格下边距。 |

## 返回值

boolean

## 示例

此示例指定表格中特定表格单元格的内容底边与单元格边框之间的间距。

```javascript editor-docx
// How to add margin to the bottom of the cell.

// Create a 3x3 table and add the bottom cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginBottom(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
