# SelectRange

选择当前表格中的单元格范围。

## 语法

```javascript
expression.SelectRange(startRowIndex, startCellIndex, endRowIndex, endCellIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startRowIndex | 必需 | number |  | 起始行索引。 |
| startCellIndex | 必需 | number |  | 起始行中的起始单元格索引。 |
| endRowIndex | 必需 | number |  | 结束行索引。 |
| endCellIndex | 必需 | number |  | 结束行中的结束单元格索引。 |

## 返回值

boolean

## 示例

在 PDF 中选择表格中的单元格范围。

```javascript editor-pdf
// Select several adjacent cells in a table at once in a PDF.

// Create a table and select a 2x2 block of cells starting from the top-left corner.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);

table.SelectRange(0, 0, 1, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected cells: ' + table.GetSelectedCells().length);
table.GetCell(0, 0).GetContent().Push(paragraph);
```
