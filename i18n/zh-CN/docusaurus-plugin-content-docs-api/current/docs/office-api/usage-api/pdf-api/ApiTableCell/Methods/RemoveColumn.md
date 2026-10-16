# RemoveColumn

删除包含当前单元格的列。

## 语法

```javascript
expression.RemoveColumn();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中删除包含某个单元格的列。

```javascript editor-pdf
// Delete a table column by referencing one of its cells in a PDF.

// Get the first cell and remove its entire column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('This column will be removed.');
cell.GetContent().Push(para);
cell.RemoveColumn();

page.AddObject(table);
```
