# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(oCell, nCount, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 在其后添加新行的单元格。如果未指定，新行将添加到表格末尾。 |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（true）或之后（false）添加新行。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

在 PDF 中向表格添加新行。

```javascript editor-pdf
// Insert several rows into a table at once in a PDF.

// Create a table and add two rows after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddRows(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two rows were added. Total rows: ' + table.GetRowsCount());
cell.GetContent().Push(paragraph);

page.AddObject(table);
```
