# GetParentRow

返回当前单元格的父行。

## 语法

```javascript
expression.GetParentRow();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

获取 PDF 中表格单元格的父行。

```javascript editor-pdf
// Access the row that contains a given cell in a PDF.

// Get the parent row and set its height in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('Cell 1');
cell.GetContent().Push(para);
const parentRow = cell.GetParentRow();
parentRow.SetHeight(50 * 36000);

page.AddObject(table);
```
