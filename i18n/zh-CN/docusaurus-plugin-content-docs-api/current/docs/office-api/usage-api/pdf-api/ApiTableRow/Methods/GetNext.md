# GetNext

返回下一行（如果存在）。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

获取 PDF 中表格的下一行。

```javascript editor-pdf
// Access the row that follows the current one in a table in a PDF.

// Display text in the first and second rows using GetNext in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const firstRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('Second row');
firstRow.GetCell(0).GetContent().Push(para);
firstRow.GetNext().GetCell(0).GetContent().Push(para2);

page.AddObject(table);
```
