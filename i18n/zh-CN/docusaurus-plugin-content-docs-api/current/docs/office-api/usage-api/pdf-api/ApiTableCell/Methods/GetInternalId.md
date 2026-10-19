# GetInternalId

返回当前表格单元格的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表格单元格的内部标识符。

```javascript editor-pdf
// Get a unique identifier for a table cell in a PDF.

// Retrieve the internal id and display it in the cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Internal id: ' + cell.GetInternalId());
content.Push(paragraph);

page.AddObject(table);
```
