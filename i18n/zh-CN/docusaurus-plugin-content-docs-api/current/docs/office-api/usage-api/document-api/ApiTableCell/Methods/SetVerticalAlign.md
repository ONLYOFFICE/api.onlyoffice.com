# SetVerticalAlign

指定当前表格单元格中文本内容的垂直对齐方式。

继承自 [ApiTableCellPr.SetVerticalAlign](../../ApiTableCellPr/Methods/SetVerticalAlign.md)。

## 语法

```javascript
expression.SetVerticalAlign(sType);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "top" \| "center" \| "bottom" |  | 当前表格单元格文本内容的可用垂直对齐类型。 |

## 返回值

boolean

## 示例

在文档中控制文本在表格单元格内的垂直位置。

```javascript editor-docx
// How do I align text to the top, center, or bottom of a table cell in a document?

// Position cell content at a specific vertical location within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = table.GetRow(0).GetCell(0);
cell.SetVerticalAlign("top");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align top");
cell = table.GetRow(0).GetCell(1);
cell.SetVerticalAlign("center");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align center");
cell = table.GetRow(0).GetCell(2);
cell.SetVerticalAlign("bottom");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
