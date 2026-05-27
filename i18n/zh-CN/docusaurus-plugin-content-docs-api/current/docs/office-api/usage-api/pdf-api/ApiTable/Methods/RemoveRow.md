# RemoveRow

删除包含指定单元格的表格行。

## 语法

```javascript
expression.RemoveRow(rowCell);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowCell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 要删除的行中的单元格。 |

## 返回值

boolean

## 示例

从 PDF 中的表格删除行。

```javascript editor-pdf
// How do I remove an unwanted row from a table in a PDF?

// Take out a horizontal row of cells from your table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
let row = table.GetRow(0);
let cell = row.GetCell(0);
table.RemoveRow(cell);
row = table.GetRow(0);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The first row was removed.");
content.Push(paragraph);

page.AddObject(table);
```
