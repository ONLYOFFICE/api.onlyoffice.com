# GetCell

按当前行中的位置返回单元格。

## 语法

```javascript
expression.GetCell(cellIndex);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cellIndex | 必需 | number |  | 表格行中从零开始的单元格索引。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

从 PDF 中的表格行访问特定单元格。

```javascript editor-pdf
// How do I retrieve a single cell from a row in a PDF?

// Get any cell you want from a table row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

page.AddObject(table);
```
