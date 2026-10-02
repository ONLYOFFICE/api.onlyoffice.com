# SetWidth

设置当前表格单元格的首选宽度。

继承自 [ApiTableCellPr.SetWidth](../../ApiTableCellPr/Methods/SetWidth.md)。

## 语法

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TableWidth](../../Enumeration/TableWidth.md) |  | 宽度值类型，来自可用的宽度值类型之一。 |
| nValue | 可选 | number |  | 表格单元格宽度值，以正整数表示。 |

## 返回值

boolean

## 示例

在文档中设置表格单元格的宽度。

```javascript editor-docx
// How do I define how wide a specific table cell should be in a document?

// Resize a table cell to an exact measurement to control column layout in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetWidth("twips", 2880);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("2 inches");
cell = table.GetRow(0).GetCell(1);
cell.SetWidth("twips", 1440);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("1 inch");
cell = table.GetRow(0).GetCell(2);
cell.SetWidth("twips", 4320);
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("3 inches");
table.SetStyle(tableStyle);
doc.Push(table);
```
