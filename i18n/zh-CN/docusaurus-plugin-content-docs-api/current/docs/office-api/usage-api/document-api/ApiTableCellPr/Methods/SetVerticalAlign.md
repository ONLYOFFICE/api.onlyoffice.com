# SetVerticalAlign

指定当前表格单元格中文本内容的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalAlign(sType);
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "top" \| "center" \| "bottom" |  | 当前表格单元格文本内容的可用垂直对齐类型。 |

## 返回值

boolean

## 示例

控制文档中表格单元格内文本的垂直位置。

```javascript editor-docx
// How do I align text to the top, middle, or bottom of a table cell in a document?

// Anchor cell content to a specific vertical position within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetVerticalAlign("bottom");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
