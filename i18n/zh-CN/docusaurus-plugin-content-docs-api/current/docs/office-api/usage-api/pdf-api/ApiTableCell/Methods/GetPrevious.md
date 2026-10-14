# GetPrevious

返回上一个单元格（如果存在）。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

获取 PDF 中表格行的上一个单元格。

```javascript editor-pdf
// Access the cell that precedes the current one in a row in a PDF.

// Add text to the second cell and to the previous one in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const para = Api.CreateParagraph();
para.AddText('Cell 2');
cell.GetContent().Push(para);
const prevCell = cell.GetPrevious();
const para2 = Api.CreateParagraph();
para2.AddText('Cell 1');
prevCell.GetContent().Push(para2);

page.AddObject(table);
```
