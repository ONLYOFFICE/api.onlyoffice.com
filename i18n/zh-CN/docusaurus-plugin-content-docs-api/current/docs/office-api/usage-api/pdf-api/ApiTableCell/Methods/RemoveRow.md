# RemoveRow

删除包含当前单元格的行。

## 语法

```javascript
expression.RemoveRow();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中删除包含某个单元格的行。

```javascript editor-pdf
// Delete a table row by referencing one of its cells in a PDF.

// Get the first cell and remove its entire row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('This row will be removed.');
cell.GetContent().Push(para);
cell.RemoveRow();

page.AddObject(table);
```
