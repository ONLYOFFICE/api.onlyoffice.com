# SetCellMarginRight

指定表格中特定表格单元格的内容右边与单元格边框之间的间距。

## 语法

```javascript
expression.SetCellMarginRight(nValue);
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格右侧的空间量值，以二十分之一磅（1/1440 英寸）为单位。如果此值为 `null`，则使用默认表格单元格右边距，否则将用指定值覆盖当前单元格的右边距。 |

## 返回值

boolean

## 示例

设置文档中表格单元格内容与右边缘之间的间距。

```javascript editor-docx
// How do I control the gap between text and the right border of a table cell in a document?

// Push cell content away from the right boundary of a table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the right margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginRight(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
