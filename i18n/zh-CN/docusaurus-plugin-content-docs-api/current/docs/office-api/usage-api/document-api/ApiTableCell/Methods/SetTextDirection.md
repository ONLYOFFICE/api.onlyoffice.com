# SetTextDirection

指定此表格单元格的文本流方向。

继承自 [ApiTableCellPr.SetTextDirection](../../ApiTableCellPr/Methods/SetTextDirection.md)。

## 语法

```javascript
expression.SetTextDirection(sType);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | 表格单元格中可用的文字方向类型：`"lrtb"` - 从左到右、从上到下的文字方向，`"tbrl"` - 从上到下、从右到左的文字方向，`"btlr"` - 从下到上、从左到右的文字方向。 |

## 返回值

boolean

## 示例

在文档中更改表格单元格内的文字方向。

```javascript editor-docx
// How do I rotate or reorient the text inside a table cell in a document?

// Display text vertically or at a different angle within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = table.GetRow(0).GetCell(0);
cell.SetTextDirection("btlr");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
cell = table.GetRow(0).GetCell(1);
cell.SetTextDirection("tbrl");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("tbrl");
cell = table.GetRow(1).GetCell(0);
cell.SetTextDirection("lrtb");
paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("lrtb");
table.SetStyle(tableStyle);
doc.Push(table);
```
