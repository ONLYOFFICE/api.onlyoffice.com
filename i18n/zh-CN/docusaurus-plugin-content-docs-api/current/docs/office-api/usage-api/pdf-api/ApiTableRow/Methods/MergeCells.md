# MergeCells

合并当前行中的单元格。

## 语法

```javascript
expression.MergeCells();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

合并 PDF 中表格行的所有单元格。

```javascript editor-pdf
// Combine all the cells of one row into a single cell in a PDF.

// Merge all cells of the first row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('Merged row');
row.MergeCells();
row.GetCell(0).GetContent().Push(para);

page.AddObject(table);
```
