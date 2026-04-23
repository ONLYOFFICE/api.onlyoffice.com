# MergeCells

合并单元格数组。如果合并成功，将返回合并后的单元格，否则返回 "null"。
-**警告**：任何行中的单元格数量和当前表格中的行数可能会更改。

## 语法

```javascript
expression.MergeCells(aCells);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | 单元格数组。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

如何通过位置索引获取两个单元格并将它们合并为一个。

```javascript editor-pdf
// Create a table, create cells and merge them into one.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell1 = row.GetCell(0);
const cell2 = row.GetCell(1);
table.MergeCells([cell1, cell2]);

const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This cell was formed by merging two cells.");
content.Push(paragraph);

page.AddObject(table);
```
