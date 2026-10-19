# GetIndex

返回当前单元格的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

获取 PDF 中表格单元格的列索引。

```javascript editor-pdf
// Find out the position of a cell within its row in a PDF.

// Retrieve the cell index and display it in the cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Cell index: ' + cell.GetIndex());
content.Push(paragraph);

page.AddObject(table);
```
