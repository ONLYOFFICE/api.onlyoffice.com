# GetCell

按当前行中的位置返回单元格。

## 语法

```javascript
expression.GetCell(nPos);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 表格行中的单元格位置。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

如何使用行索引返回单元格。

```javascript editor-pdf
// Create a table, get its row and get a cell from this row.

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
