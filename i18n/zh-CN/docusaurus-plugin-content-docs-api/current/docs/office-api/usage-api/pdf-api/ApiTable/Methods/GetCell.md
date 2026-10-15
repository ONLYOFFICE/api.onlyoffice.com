# GetCell

通过位置返回单元格。

## 语法

```javascript
expression.GetCell(rowIndex, cellIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | 必需 | number |  | 当前表格中的行索引。 |
| cellIndex | 必需 | number |  | 指定行中的单元格索引。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null \| undefined

## 示例

在 PDF 中按行和列索引获取表格单元格。

```javascript editor-pdf
// Access a specific cell in a table in a PDF.

// Create a table and add text to the cell at row 0, column 1 in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetCell(0, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row 0, Col 1');
cell.GetContent().Push(paragraph);

page.AddObject(table);
```
