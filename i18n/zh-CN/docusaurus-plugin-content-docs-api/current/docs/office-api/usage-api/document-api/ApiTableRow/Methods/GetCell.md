# GetCell

通过位置返回单元格。

## 语法

```javascript
expression.GetCell(cellIndex);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cellIndex | 必需 | number |  | 当前行中的单元格索引。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

通过位置访问文档中表格行内的特定单元格。

```javascript editor-docx
// How do I select a single cell from a row using its index in a document?

// Pinpoint one cell in a row by its numbered position to work with its content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = tableRow.GetCell(1);
cell.SetVerticalAlign("bottom");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
