# Clear

清除当前单元格的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除 PDF 中表格单元格的内容。

```javascript editor-pdf
// Remove all content from a single table cell in a PDF.

// Add text to a cell and then clear it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('This text will be cleared.');
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First cell was cleared.');
cell.GetContent().Push(paragraph);
cell.Clear();
table.GetRow(1).GetCell(0).GetContent().Push(paragraph2);

page.AddObject(table);
```
