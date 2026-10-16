# GetSelectedRows

返回当前表格中包含当前所选单元格的行。

## 语法

```javascript
expression.GetSelectedRows();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)[]

## 示例

从 PDF 中的表格获取所选行。

```javascript editor-pdf
// Retrieve the rows that contain the currently selected cells in a table in a PDF.

// Select a cell and read back the rows that contain the selection in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(4, 3);
table.GetCell(0, 0).Select();
const selectedRows = table.GetSelectedRows();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected rows count: ' + selectedRows.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
