# GetInternalId

返回当前表格行的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表格行的内部标识符。

```javascript editor-pdf
// Get a unique identifier for a table row in a PDF.

// Retrieve the internal id and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Internal id: ' + row.GetInternalId());
content.Push(paragraph);

page.AddObject(table);
```
